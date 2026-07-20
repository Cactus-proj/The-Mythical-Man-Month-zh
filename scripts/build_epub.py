#!/usr/bin/env python3
"""Create an EPUB 3 edition from the repository's Markdown chapters."""

from __future__ import annotations

import argparse
import html
import os
import re
import shutil
import tempfile
import uuid
import zipfile
from datetime import datetime, timezone
from pathlib import Path
from xml.sax.saxutils import escape as xml_escape

import mistune


REPOSITORY = Path(__file__).resolve().parents[1]
DOCS = REPOSITORY / "docs"
SOURCE_URL = "https://github.com/Cactus-proj/The-Mythical-Man-Month-zh"
BOOK_TITLE = "《人月神话》中文版"
BOOK_SUBTITLE = "人月神话：软件项目管理之道"


def xml(text: str) -> str:
    return xml_escape(text, {'"': '&quot;'})


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content, encoding="utf-8", newline="\n")


def chapter_files() -> list[Path]:
    def chapter_number(path: Path) -> int:
        match = re.fullmatch(r"ch(\d+)\.md", path.name)
        if not match:
            raise ValueError(f"Unexpected chapter filename: {path.name}")
        return int(match.group(1))

    return sorted(DOCS.glob("ch*.md"), key=chapter_number)


def title_from_markdown(markdown: str) -> str:
    match = re.search(r"^#\s+(.+?)\s*$", markdown, re.MULTILINE)
    if not match:
        raise ValueError("A chapter has no level-one heading")
    return match.group(1)


def rewrite_asset_links(fragment: str) -> str:
    return re.sub(
        r'(\bsrc=")figures/([^"]+)(")',
        r'\1../images/\2\3',
        fragment,
    )


def xhtml_page(title: str, body: str, page_class: str = "") -> str:
    class_attr = f' class="{page_class}"' if page_class else ""
    return f'''<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>{xml(title)}</title>
    <link rel="stylesheet" type="text/css" href="../styles/book.css" />
  </head>
  <body{class_attr}>
{body}
  </body>
</html>
'''


def cover_svg() -> str:
    return '''<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="2560" viewBox="0 0 1600 2560" role="img" aria-labelledby="title description">
  <title id="title">《人月神话》中文版</title>
  <desc id="description">《人月神话》中文翻译 EPUB 封面</desc>
  <rect width="1600" height="2560" fill="#143642"/>
  <rect x="108" y="108" width="1384" height="2344" fill="none" stroke="#e9d8a6" stroke-width="8"/>
  <path d="M250 530 H1350" stroke="#e9d8a6" stroke-width="4"/>
  <path d="M250 2020 H1350" stroke="#e9d8a6" stroke-width="4"/>
  <text x="800" y="900" text-anchor="middle" fill="#fdf6e3" font-family="serif" font-size="184">人月神话</text>
  <text x="800" y="1040" text-anchor="middle" fill="#e9d8a6" font-family="serif" font-size="66">软件项目管理之道</text>
  <text x="800" y="1210" text-anchor="middle" fill="#fdf6e3" font-family="serif" font-size="48">THE MYTHICAL MAN-MONTH</text>
  <text x="800" y="1310" text-anchor="middle" fill="#fdf6e3" font-family="sans-serif" font-size="40">CHINESE TRANSLATION</text>
  <text x="800" y="1880" text-anchor="middle" fill="#e9d8a6" font-family="serif" font-size="52">Frederick P. Brooks, Jr.</text>
  <text x="800" y="2125" text-anchor="middle" fill="#fdf6e3" font-family="sans-serif" font-size="28">SOURCE: CACTUS-PROJ / THE-MYTHICAL-MAN-MONTH-ZH</text>
</svg>
'''


CSS = '''@charset "utf-8";
@namespace epub "http://www.idpf.org/2007/ops";

body {
  margin: 5%;
  font-family: "Noto Serif CJK SC", "Songti SC", STSong, serif;
  line-height: 1.7;
  text-align: justify;
  text-justify: inter-ideograph;
  color: #1a1a1a;
}
h1, h2, h3, h4, h5, h6 {
  font-family: "Noto Sans CJK SC", "PingFang SC", "Helvetica Neue", sans-serif;
  text-align: left;
  line-height: 1.35;
  page-break-after: avoid;
  break-after: avoid;
}
h1 { font-size: 1.55em; margin: 1.8em 0 1.1em; }
h2 { font-size: 1.25em; margin: 1.6em 0 0.8em; }
h3 { font-size: 1.1em; margin: 1.35em 0 0.65em; }
p { margin: 0 0 0.95em; text-indent: 2em; }
h1 + p, h2 + p, h3 + p, blockquote p, li p { text-indent: 0; }
ul, ol { margin: 0.35em 0 1em; padding-left: 2em; }
li { margin: 0.25em 0; }
blockquote {
  margin: 1em 1.5em;
  padding-left: 0.9em;
  border-left: 0.2em solid #9aa9a9;
  color: #404a4a;
}
blockquote p { margin-bottom: 0; }
img { display: block; max-width: 100%; max-height: 90vh; margin: 1.25em auto 0.4em; object-fit: contain; }
table { border-collapse: collapse; margin: 1em auto; max-width: 100%; }
th, td { border: 1px solid #777; padding: 0.35em 0.55em; vertical-align: top; }
code, pre { font-family: ui-monospace, Menlo, monospace; font-size: 0.9em; }
pre { white-space: pre-wrap; }
a { color: inherit; }
.cover { margin: 0; padding: 0; text-align: center; }
.cover img { width: 100%; height: 100vh; max-height: none; margin: 0; }
.title-page { text-align: center; padding-top: 25vh; }
.title-page h1 { font-size: 2em; text-align: center; }
.title-page p { text-indent: 0; }
.title-page .subtitle { font-size: 1.2em; }
.title-page .credit { margin-top: 5em; font-size: 0.9em; }
.legal h1, .legal h2 { text-align: left; }
.legal p { text-indent: 0; }
.legal pre { white-space: pre-wrap; font-size: 0.75em; line-height: 1.45; }
nav ol { padding-left: 1.4em; }
nav li { margin: 0.55em 0; }
aside.footnotes { font-size: 0.85em; }
'''


def create_epub(output: Path, revision: str) -> None:
    book_identifier = uuid.uuid5(uuid.NAMESPACE_URL, f"{SOURCE_URL}@{revision}")
    renderer = mistune.create_markdown(
        escape=False,
        plugins=["strikethrough", "table", "footnotes"],
    )

    with tempfile.TemporaryDirectory(prefix="epub-build-") as temporary_directory:
        staging = Path(temporary_directory)
        (staging / "META-INF").mkdir()
        (staging / "OEBPS" / "text").mkdir(parents=True)
        (staging / "OEBPS" / "images").mkdir()
        (staging / "OEBPS" / "styles").mkdir()

        write_text(staging / "mimetype", "application/epub+zip")
        write_text(
            staging / "META-INF" / "container.xml",
            '''<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml" />
  </rootfiles>
</container>
''',
        )
        write_text(staging / "OEBPS" / "styles" / "book.css", CSS)
        write_text(staging / "OEBPS" / "images" / "cover.svg", cover_svg())

        figures = sorted((DOCS / "figures").glob("*"))
        for figure in figures:
            if figure.is_file():
                shutil.copy2(figure, staging / "OEBPS" / "images" / figure.name)

        chapters: list[tuple[int, str, str]] = []
        for chapter_path in chapter_files():
            number = int(re.search(r"\d+", chapter_path.stem).group())
            source_markdown = chapter_path.read_text(encoding="utf-8")
            title = title_from_markdown(source_markdown)
            rendered = rewrite_asset_links(renderer(source_markdown))
            filename = f"ch{number:02d}.xhtml"
            write_text(
                staging / "OEBPS" / "text" / filename,
                xhtml_page(title, f'''    <main epub:type="bodymatter chapter">
{rendered.rstrip()}
    </main>
'''),
            )
            chapters.append((number, title, filename))

        write_text(
            staging / "OEBPS" / "text" / "cover.xhtml",
            xhtml_page(
                "封面",
                '''    <section epub:type="cover" class="cover">
      <img src="../images/cover.svg" alt="《人月神话》中文版" />
    </section>
''',
                "cover",
            ),
        )
        write_text(
            staging / "OEBPS" / "text" / "title.xhtml",
            xhtml_page(
                BOOK_TITLE,
                f'''    <section epub:type="titlepage" class="title-page">
      <h1>{xml(BOOK_TITLE)}</h1>
      <p class="subtitle">{xml(BOOK_SUBTITLE)}</p>
      <p>The Mythical Man-Month: Essays on Software Engineering</p>
      <p class="credit">原作者：Frederick P. Brooks, Jr.</p>
      <p class="credit">中文翻译来源：Cactus-proj / The-Mythical-Man-Month-zh</p>
    </section>
''',
                "title-page",
            ),
        )
        license_text = (REPOSITORY / "LICENSE").read_text(encoding="utf-8")
        write_text(
            staging / "OEBPS" / "text" / "copyright.xhtml",
            xhtml_page(
                "版权与来源说明",
                f'''    <section epub:type="copyright-page" class="legal">
      <h1>版权与来源说明</h1>
      <p>本 EPUB 由 <a href="{SOURCE_URL}">Cactus-proj/The-Mythical-Man-Month-zh</a> 的 Markdown 内容转换而成，源版本：{xml(revision)}。</p>
      <p>源仓库声明：本项目为未授权翻译；书籍内容的权利由原作者保留。中文翻译及其他项目文件按 MIT 许可证授权。请仅在适用法律与原作权利许可的范围内使用。</p>
      <h2>源项目 MIT 许可证</h2>
      <pre>{html.escape(license_text)}</pre>
    </section>
''',
                "legal",
            ),
        )

        toc_items = "\n".join(
            f'        <li><a href="text/{filename}">{xml(title)}</a></li>'
            for _, title, filename in chapters
        )
        write_text(
            staging / "OEBPS" / "nav.xhtml",
            f'''<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="zh-CN" lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>目录</title>
    <link rel="stylesheet" type="text/css" href="styles/book.css" />
  </head>
  <body>
    <nav epub:type="toc" id="toc" role="doc-toc">
      <h1>目录</h1>
      <ol>
{toc_items}
      </ol>
    </nav>
    <nav epub:type="landmarks" hidden="hidden">
      <h2>导航</h2>
      <ol>
        <li><a epub:type="cover" href="text/cover.xhtml">封面</a></li>
        <li><a epub:type="titlepage" href="text/title.xhtml">扉页</a></li>
        <li><a epub:type="bodymatter" href="text/ch01.xhtml">正文</a></li>
      </ol>
    </nav>
  </body>
</html>
''',
        )

        modified = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        image_manifest = "\n".join(
            f'    <item id="image-{xml(figure.stem)}" href="images/{xml(figure.name)}" media-type="image/jpeg" />'
            for figure in figures
            if figure.suffix.lower() in {".jpg", ".jpeg"}
        )
        chapter_manifest = "\n".join(
            f'    <item id="ch{number:02d}" href="text/{filename}" media-type="application/xhtml+xml" />'
            for number, _, filename in chapters
        )
        chapter_spine = "\n".join(
            f'    <itemref idref="ch{number:02d}" />' for number, _, _ in chapters
        )
        write_text(
            staging / "OEBPS" / "content.opf",
            f'''<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" xmlns:dc="http://purl.org/dc/elements/1.1/" version="3.0" unique-identifier="book-id" xml:lang="zh-CN">
  <metadata>
    <dc:identifier id="book-id">urn:uuid:{book_identifier}</dc:identifier>
    <dc:title id="title">{xml(BOOK_TITLE)}</dc:title>
    <dc:language>zh-CN</dc:language>
    <dc:creator id="author">Frederick P. Brooks, Jr.</dc:creator>
    <meta refines="#author" property="role" scheme="marc:relators">aut</meta>
    <dc:contributor>Cactus-proj / The-Mythical-Man-Month-zh Contributors</dc:contributor>
    <dc:source>{SOURCE_URL}</dc:source>
    <dc:rights>Source repository states that this is an unauthorized translation; book rights reserved by the original author. Chinese translation and project files are MIT licensed.</dc:rights>
    <meta property="dcterms:modified">{modified}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav" />
    <item id="css" href="styles/book.css" media-type="text/css" />
    <item id="cover-image" href="images/cover.svg" media-type="image/svg+xml" properties="cover-image" />
    <item id="cover" href="text/cover.xhtml" media-type="application/xhtml+xml" />
    <item id="title-page" href="text/title.xhtml" media-type="application/xhtml+xml" />
    <item id="copyright" href="text/copyright.xhtml" media-type="application/xhtml+xml" />
{chapter_manifest}
{image_manifest}
  </manifest>
  <spine>
    <itemref idref="cover" linear="no" />
    <itemref idref="title-page" />
    <itemref idref="copyright" />
{chapter_spine}
  </spine>
</package>
''',
        )

        output.parent.mkdir(parents=True, exist_ok=True)
        with zipfile.ZipFile(output, "w", compression=zipfile.ZIP_DEFLATED) as archive:
            archive.write(staging / "mimetype", "mimetype", compress_type=zipfile.ZIP_STORED)
            for path in sorted(staging.rglob("*")):
                if path.is_file() and path.name != "mimetype":
                    archive.write(path, path.relative_to(staging).as_posix())


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--output",
        type=Path,
        default=REPOSITORY / "dist" / "The-Mythical-Man-Month-zh.epub",
        help="Path for the generated EPUB.",
    )
    parser.add_argument(
        "--revision",
        default=os.environ.get("GITHUB_SHA", "local"),
        help="Source revision recorded in EPUB metadata.",
    )
    arguments = parser.parse_args()
    create_epub(arguments.output.resolve(), arguments.revision)
    print(arguments.output)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

