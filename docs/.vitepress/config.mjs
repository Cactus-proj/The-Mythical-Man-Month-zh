import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "《人月神话》中文版",
  description: "《The Mythical Man-Month》的中文翻译",

  sitemap: {
    hostname: 'https://cactus-proj.github.io/The-Mythical-Man-Month-zh/'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '章节', link: '/README' }
    ],

    sidebar: [
      {
        text: '目录',
        link: '/README',
        items: [
          { text: '第 1 章 焦油坑', link: '/ch1' },
          { text: '第 2 章 人月神话', link: '/ch2' },
          { text: '第 3 章 外科手术队伍', link: '/ch3' },
          { text: '第 4 章 贵族专制、民主政治和系统设计', link: '/ch4' },
          { text: '第 5 章 画蛇添足', link: '/ch5' },
          { text: '第 6 章 贯彻执行', link: '/ch6' },
          { text: '第 7 章 为什么巴比伦塔会失败？', link: '/ch7' },
          { text: '第 8 章 胸有成竹', link: '/ch8' },
          { text: '第 9 章 削足适履', link: '/ch9' },
          { text: '第 10 章 提纲挈领', link: '/ch10' },
          { text: '第 11 章 未雨绸缪', link: '/ch11' },
          { text: '第 12 章 干将莫邪', link: '/ch12' },
          { text: '第 13 章 整体部分', link: '/ch13' },
          { text: '第 14 章 祸起萧墙', link: '/ch14' },
          { text: '第 15 章 另外一面', link: '/ch15' },
          { text: '第 16 章 没有银弹－软件工程中的根本和次要问题', link: '/ch16' },
          { text: '第 17 章 再论《没有银弹》', link: '/ch17' },
          { text: '第 18 章 《人月神话》的观点：是或非？', link: '/ch18' },
          { text: '第 19 章 20 年后的人月神话', link: '/ch19' },
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/Cactus-proj/The-Mythical-Man-Month-zh/edit/main/docs/:path'
    },
    lastUpdated: true,
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cactus-proj/The-Mythical-Man-Month-zh' }
    ]
  }
})
