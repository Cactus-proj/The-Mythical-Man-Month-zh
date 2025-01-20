import{_ as a,c as e,a2 as i,o as t}from"./chunks/framework.DXWL81F4.js";const l="/The-Mythical-Man-Month-zh/assets/fg16-1.X7Vx8F9r.jpg",q=JSON.parse('{"title":"第 16 章 没有银弹－软件工程中的根本和次要问题","description":"","frontmatter":{},"headers":[],"relativePath":"ch16.md","filePath":"ch16.md","lastUpdated":1737360355000}'),o={name:"ch16.md"};function n(r,p,u,d,s,h){return t(),e("div",null,p[0]||(p[0]=[i('<h1 id="第-16-章-没有银弹-软件工程中的根本和次要问题" tabindex="-1">第 16 章 没有银弹－软件工程中的根本和次要问题 <a class="header-anchor" href="#第-16-章-没有银弹-软件工程中的根本和次要问题" aria-label="Permalink to &quot;第 16 章 没有银弹－软件工程中的根本和次要问题&quot;">​</a></h1><p>（No Silver Bullet - Essence and Accident in Software Engineering）</p><p>没有任何技术或管理上的进展，能够独立地许诺十年内使生产率、可靠性或简洁性获得数量级上的进步。</p><p>There is no single development, in either technology or management technique, which by itself promises even one order-of-magnitude improvement within a decade in productivity, in reliability, in simplicity.</p><h2 id="摘要" tabindex="-1">摘要 <a class="header-anchor" href="#摘要" aria-label="Permalink to &quot;摘要&quot;">​</a></h2><p>所有软件活动包括根本任务——打造由抽象软件实体构成的复杂概念结构，次要任务——使用编程语言表达这些抽象实体，在空间和时间限制内将它们映射成机器语言。软件生产率在近年内取得的巨大进步来自对后天障碍的突破，例如硬件的限制、笨拙的编程语言、机器时间的缺乏等等。这些障碍使次要任务实施起来异常艰难，相对必要任务而言，软件工程师在次要任务上花费了多少时间和精力？除非它占了所有工作的 9/10，否则即使全部次要任务的时间缩减到零，也不会给生产率带来数量级上的提高。</p><p>因此，现在是关注软件任务中的必要活动的时候了，也就是那些和构造异常复杂的抽象概念结构有关的部分。我建议：</p><ul><li>仔细地进行市场调研，避免开发已上市的产品。</li><li>在获取和制订软件需求时，将快速原型开发作为迭代计划的一部分。</li><li>有机地更新软件，随着系统的运行、使用和测试，逐渐添加越来越多的功能。</li><li>不断挑选和培养杰出的概念设计人员。</li></ul><h2 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h2><p>在所有恐怖民间传说的妖怪中，最可怕的是人狼，因为它们可以完全出乎意料地从熟悉的面孔变成可怕的怪物。为了对付人狼，我们在寻找可以消灭它们的银弹。</p><p>大家熟悉的软件项目具有一些人狼的特性（至少在非技术经理看来），常常看似简单明了的东西，却有可能变成一个落后进度、超出预算、存在大量缺陷的怪物。因此，我们听到了近乎绝望的寻求银弹的呼唤，寻求一种可以使软件成本像计算机硬件成本一样降低的尚方宝剑。</p><p>但是，我们看看近十年来的情况，没有银弹的踪迹。没有任何技术或管理上的进展能够独立地许诺在生产率、可靠性或简洁性上取得数量级的提高。本章中，我们试图通过分析软件问题的本质和很多候选银弹的特征，来探索其原因。</p><p>不过，怀疑论者并不是悲观主义者。尽管我们没有看见令人惊异的突破，并认为这种银弹实际上是与软件的内在特性相悖，不过还是出现了一些令人振奋的革新。这些方法的规范化、持续地开拓、发展和传播确实是可以在将来使生产率产生数量级上的提高。虽然没有通天大道，但是路就在脚下。</p><p>解决管理灾难的第一步是将大块的&quot;巨无霸理论&quot;替换成&quot;微生物理论&quot;，它的每一步——希望的诞生，本身就是对一蹴而就型解决方案的冲击。它告诉工作者进步是逐步取得的，伴随着辛勤的劳动，对规范化过程应进行持续不懈的努力。由此，诞生了现在的软件工程。</p><h2 id="是否一定那么困难呢-——根本困难" tabindex="-1">是否一定那么困难呢？——根本困难 <a class="header-anchor" href="#是否一定那么困难呢-——根本困难" aria-label="Permalink to &quot;是否一定那么困难呢？——根本困难&quot;">​</a></h2><p>不仅仅是在目力所及的范围内，没有发现银弹，而且软件的特性本身也导致了不大可能有任何的发明创新——能够像计算机硬件工业中的微电子器件、晶体管、大规模集成一样——提高软件的生产率、可靠性和简洁程度。我们甚至不能期望每两年有一倍的增长。</p><p>首先，我们必须看到这样的畸形并不是由于软件发展得太慢，而是因为计算机硬件发展得太快。从人类文明开始，没有任何其他产业技术的性价比，能在 30 年之内取得 6 个数量级的提高，也没有任何一个产业可以在性能提高或者降低成本方面取得如此的进步。这些进步来自计算机制造产业的转变，从装配工业转变成流水线工业。</p><p>其次，让我们通过观察预期的软件技术产业发展速度，来了解中间的困难。效仿亚里士多德，我将它们分成根本的——软件特性中固有的困难，次要的——出现在目前生产上的，但并非那些与生俱来的困难。</p><p>我们在下一章中讨论次要问题。首先，来关注内在、必要的问题。</p><p>一个相互牵制关联的概念结构，是软件实体必不可少的部分，它包括：数据集合、数据条目之间的关系、算法、功能调用等等。这些要素本身是抽象的，体现在相同的概念构架中，可以存在不同的表现形式。尽管如此，它仍然是内容丰富和高度精确的。</p><p>我认为软件开发中困难的部分是规格化、设计和测试这些概念上的结构，而不是对概念进行表达和对实现逼真程度进行验证。当然，我们还是会犯一些语法错误，但是和绝大多数系统中的概念错误相比，它们是微不足道的。</p><p>如果这是事实，那么软件开发总是非常困难的。天生就没有银弹。</p><p>让我们来考虑现代软件系统中这些无法规避的内在特性：复杂度、一致性、可变性和不可见性。</p><p>复杂度。规模上，软件实体可能比任何由人类创造的其他实体要复杂，因为没有任何两个软件部分是相同的（至少是在语句的级别）。如果有相同的情况，我们会把它们合并成供调用的子函数。在这个方面，软件系统与计算机、建筑或者汽车大不相同，后者往往存在着大量重复的部分。</p><p>数字计算机本身就比人类建造的大多数东西复杂。计算机拥有大量的状态，这使得构思、描述和测试都非常困难。软件系统的状态又比计算机系统状态多若干个数量级。</p><p>同样，软件实体的扩展也不仅仅是相同元素重复添加，而必须是不同元素实体的添加。大多数情况下，这些元素以非线性递增的方式交互，因此整个软件的复杂度以更大的非线性级数增长。</p><p>软件的复杂度是必要属性，不是次要因素。因此，抽掉复杂度的软件实体描述常常也去掉了一些本质属性。数学和物理学在过去三个世纪取得了巨大的进步，数学家和物理学家们建立模型以简化复杂的现象，从模型中抽取出各种特性，并通过试验来验证这些特性。这些方法之所以可行——是因为模型中忽略的复杂度不是被研究现象的必要属性。当复杂度是本质特性时，这些方法就行不通了。</p><p>上述软件特有的复杂度问题造成了很多经典的软件产品开发问题。由于复杂度，团队成员之间的沟通非常困难，导致了产品瑕疵、成本超支和进度延迟；由于复杂度，列举和理解所有可能的状态十分困难，影响了产品的可靠性；由于函数的复杂度，函数调用变得困难，导致程序难以使用；由于结构性复杂度，程序难以在不产生副作用的情况下用新函数扩充；由于结构性复杂度，造成很多安全机制状态上的不可见性。</p><p>复杂度不仅仅导致技术上的困难，还引发了很多管理上的问题。它使全面理解问题变得困难，从而妨碍了概念上的完整性；它使所有离散出口难以寻找和控制；它引起了大量学习和理解上的负担，使开发慢慢演变成了一场灾难。</p><p>一致性。并不是只有软件工程师才面对复杂问题。物理学家甚至在非常&quot;基础&quot;的级别上，面对异常复杂的事物。不过，物理学家坚信必定存在着某种通用原理，或者在夸克中，或者在统一场论中。爱因斯坦曾不断地重申自然界一定存在着简化的解释，因为上帝不是专横武断或反复无常的。</p><p>软件工程师却无法从类似的信念中获得安慰，他必须控制的很多复杂度是随心所欲、毫无规则可言的，来自若干必须遵循的人为惯例和系统。它们随接口的不同而改变，随时间的推移而变化，而且，这些变化不是必需的，仅仅由于它们是不同的人——而非上帝——设计的结果。</p><p>某些情况下，因为是开发最新的软件，所以它必须遵循各种接口。另一些情况下，软件的开发目标就是兼容性。在上述的所有情况中，很多复杂性来自保持与其他接口的一致，对软件的任何再设计，都无法简化这些复杂特性。</p><p>可变性。软件实体经常会遭受到持续的变更压力。当然，建筑、汽车、计算机也是如此。不过，工业制造的产品在出厂之后不会经常地发生修改，它们会被后续模型所取代，或者必要更改会被整合到具有相同基本设计的后续产品系列。汽车的更改十分罕见，计算机的现场调整时有发生。然而，它们和软件的现场修改比起来，都要少很多。</p><p>其中部分的原因是因为系统中的软件包含了很多功能，而功能是最容易感受变更压力的部分。另外的原因是因为软件可以很容易地进行修改——它是纯粹思维活动的产物，可以</p><p>无限扩展。日常生活中，建筑有可能发生变化，但众所周知，建筑修改的成本很高，从而打消了那些想提出修改的人的念头。</p><p>所有成功的软件都会发生变更。现实工作中，经常发生两种情况。当人们发现软件很有用时，会在原有应用范围的边界，或者在超越边界的情况下使用软件。功能扩展的压力主要来自那些喜欢基本功能，又对软件提出了很多新用法的用户们。</p><p>其次，软件一定是在某种计算机硬件平台上开发，成功软件的生命期通常比当初的计算机硬件平台要长。即使不是更换计算机，则有可能是换新型号的磁盘、显示器或者打印机。软件必须与各种新生事物保持一致。</p><p>简言之，软件产品扎根于文化的母体中，如各种应用、用户、自然及社会规律、计算机硬件等等。后者持续不断地变化着，这些变化无情地强迫着软件随之变化。</p><p>不可见性。软件是不可见的和无法可视化的。例如，几何抽象是强大的工具。建筑平面图能帮助建筑师和客户一起评估空间布局、进出的运输流量和各个角度的视觉效果。这样，矛盾变得突出，忽略的地方变得明显。同样，机械制图、化学分子模型尽管是抽象模型，但都起了相同的作用。总之，都可以通过几何抽象来捕获物理存在的几何特性。</p><p>软件的客观存在不具有空间的形体特征。因此，没有已有的表达方式，就像陆地海洋有地图、硅片有膜片图、计算机有电路图一样。当我们试图用图形来描述软件结构时，我们发现它不仅仅包含一个，而是很多相互关联、重叠在一起的图形。这些图形可能描绘控制流程、数据流、依赖关系、时间序列、名字空间的相互关系等等。它们通常不是有较少层次的扁平结构。实际上，在上述结构上建立概念控制的一种方法是强制将关联分割，直到可以层次化一个或多个图形。</p><p>除去软件结构上的限制和简化方面的进展，软件仍然保持着无法可视化的固有特性，从而剥夺了一些具有强大功能的概念工具的构造思路。这种缺憾不仅限制了个人的设计过程，也严重地阻碍了相互之间的交流。</p><h2 id="以往解决次要困难的一些突破" tabindex="-1">以往解决次要困难的一些突破 <a class="header-anchor" href="#以往解决次要困难的一些突破" aria-label="Permalink to &quot;以往解决次要困难的一些突破&quot;">​</a></h2><p>如果回顾一下软件领域中取得的最富有成效的三次进步，我们会发现每一次都是解决了软件构建上的巨大困难，但是这些困难不是本质属性，也不是主要困难。同样，我们可以对每一次进步进行外推，来了解它们的固有限制。</p><p>高级语言。勿庸置疑，软件生产率、可靠性和简洁性上最有力的突破是使用高级语言编程。大多数观察者相信开发生产率至少提高了五倍，同时可靠性、简洁性和理解程度也大为提高。</p><p>那么，高级语言取得了哪些进展呢？首先，它减轻了一些次要的软件复杂度。抽象程序包含了很多概念上的要素：操作、数据类型、流程和相互通讯，而具体的机器语言程序则关心位、寄存器、条件、分支、通道、磁盘等等。高级语言所达到的抽象程度包含了（抽象）程序所需要的要素，避免了更低级的元素，它消除了并不是程序所固有的整个级别的复杂度。</p><p>高级语言最可能实现的是提供所有编程人员在抽象程序中能想到的要素。可以肯定的是，我们思考数据结构、数据类型和操作的速度稳固提高，不过是以非常缓慢的速度。另外，程序开发方法越来越接近用户的复杂度。</p><p>然而，对于较少使用那些复杂深奥语言要素的用户，高级语言在某种程度上增加而不是减少了脑力劳动上的负担。</p><p>分时。大多数观察者相信分时提高了程序员的生产率和产品的质量，尽管它带来的进步不如高级语言。</p><p>分时解决了完全不同的困难。分时保证了及时性，从而使我们能维持对复杂程度的一个总体把握。批处理编程的较长周转时间意味着不可避免会遗忘一些细枝末节，如果我们停下编程，调用编译程序或者执行程序，思维上的中断使我们不得不重新进行思考，它在时间上的代价非常高昂。最严重的结果可能是失去对复杂系统的掌握。</p><p>较长的周转时间和机器语言的复杂度一样，是软件开发过程的次要困难，而不是本质困难。分时所起作用也非常有限。主要效果是缩短了系统的响应时间。随着它接近于零，到达人类可以辨识的基本能力——大概 100 毫秒时，所获得的好处就接近于无了。</p><p>统一编程环境。第一个集成开发环境——Unix 和 Interlisp 现在已经得到了广泛应用，并且使生产率提高了 5 倍。为什么？</p><p>它们主要通过提供集成库、统一文件格式、管道和过滤器，解决了共同使用程序的次要困难。这样，概念性结构理论上的相互调用、提供输入和互相使用，在现实中可以非常容易地实现。</p><p>因为每个新工具可以通过标准格式在任何一个程序中应用，这种突破接着又激发整个工具库的开发。</p><p>由于这些成功，环境开发是当今软件工程研究的主要题目。我们将在下章中讨论期望达到的目标和限制。</p><h2 id="银弹的希望" tabindex="-1">银弹的希望 <a class="header-anchor" href="#银弹的希望" aria-label="Permalink to &quot;银弹的希望&quot;">​</a></h2><p>现在，让我们来讨论一下当今可能作为潜在银弹的最先进的技术进步。它们各自针对什么样的问题？它们是属于必要问题，或者依然是解决我们剩下的次要困难？它们是提供了创新，还是仅仅是增量改进？</p><p>Ada 和其他高级编程语言。近来，最被吹捧的开发进展之一是编程语言 Ada，一种 80 年代的高级语言。Ada 实际上不仅仅反映了语言概念上的突破性进展，而且蕴涵了鼓励现代设计和模块化概念运用的重要特性。由于 Ada 采用的是抽象数据类型、层次结构的模块化理念，所有 Ada 理念可能比语言本身更加先进。Ada 使用设计来承载需求，作为这一过程的自然产物，它可能过于丰富了。不过，这并不是致命的，因为它的词汇子集可以解决学习问题，硬件的进展能提供更高的 MIPS（每秒百万指令集），减少编译的成本。软件系统结构化的先进理念实际上非常好地利用了 MIPS 上的进展。60 年代，曾在内存和速度成本上广受谴责的操作系统，如今已被证明是一种能使用某些 MIPS 和廉价内存的非常优秀的系统。</p><p>然而，Ada 仍然不是消灭软件生产率怪兽的银弹。毕竟，它只是另一种高级语言，这类语言出现最大的回报来自出现时的冲击，它通过使用更加抽象的语句来开发，降低了机器的次要复杂度。一旦这些难题被解决，就只剩下非常少的问题，解决剩余部分的获益必然也要少一些。</p><p>我预言在以后的十年中，当 Ada 的效率被大家评估认可时，它会带来相当大的变化，这并不是因为任何特别的语言特性，不是由于这些语言特性被合并在一起，也不是因为 Ada 开发环境会不断发展进步。Ada 的最大贡献在于编程人员培训方式的转变，即对开发人员需要进行现代软件设计技术培训。</p><p>面向对象编程。软件专业的一些学生坚持面向对象编程是当今若干新潮技术中最富有希望的。我也是其中之一。达特茅斯的 Mark Sherman 提出，必须仔细地区别两个不同的概</p><p>念：抽象数据类型和层次化类型，后者也被称为类（class）。抽象数据类型的概念是指对象类型应该通过一个名称、一系列合适的值和操作来定义，而不是理应被隐藏的存储结构。抽象数据类型的例子是 Ada 包（以及私有类型）和 Modula 的模块。</p><p>层次化类型，如 Simula-67 的类，是允许定义可以被后续子类型精化的通用接口。这两个概念是互不相干的——可以只有层次化，没有数据隐藏；也可能是只有数据隐藏，而没有层次化。两种概念都体现了软件开发领域的进步。</p><p>它们的出现都消除了开发过程中的非本质困难，允许设计人员表达自己设计的内在特性，而不需要表达大量句法上的内容，这些内容并没有添加什么新的信息。对于抽象数据类型和层次化类型，它们都是解决了高级别的次要困难和允许采用较高层次的表现形式来表达设计。</p><p>不过，这些提高仅仅能消除所有设计表达上的次要困难。软件的内在问题是设计的复杂度，上述方法并没有对它有任何的促进。除非我们现在的编程语言中，不必要的低层次类型说明占据了软件产品设计 90％，面向对象编程才能带来数量级上的提高。对面向对象编程这颗&quot;银弹&quot;，我深表怀疑。</p><p>人工智能。很多人期望人工智能上的进展可以给软件生产率和质量带来数量级上的增长，但我不这样认为。追究其原因，我们必须剖析&quot;人工智能&quot;意味着什么，以及它如何应用。</p><p>Parnas 澄清了术语上的混乱：</p><p>现在有两种差异非常大的 AI 定义被广泛使用。AI-1：使用计算机来解决以前只能通过人类智慧解决的问题。AI-2：使用启发式和基于规则的特定编程技术。在这种方法中，对人类专家进行研究，判断他们解决方法的启发性思维或者经验法则..。程序被设计成以人类解决问题的方式来运作。</p><p>第一种定义的意义容易发生变化..今天可能适合 AI-1 定义的程序，一旦我们了解了它的运行方式，理解了问题，就不再认为它是人工智能..不幸的是，我无法识别这个领域的特定知识体系..绝大多数工作是针对问题域的，我们需要一些抽象或者创造性来解决上述问题。</p><p>我完全同意这种批评意见。语音识别技术与图象识别技术的共同点非常少，它们与专家系统中应用的技术不同。例如，我觉得很难去发现图象识别技术能给编程开发实践带来什么样的差异。同样，语音识别也差不多——软件开发上的困难是决定说什么，而不是如何说。表达的简化仅仅能提供少量的促进作用。</p><p>至于 AI-2 专家系统技术，应该用专门的章节来讨论。</p><p>专家系统。人工智能领域最先进的、被最大范围使用的部分，是开发专家系统的技术。很多软件科学家正非常努力地工作着，想把这种技术应用在软件的开发环境中 5。那么它的概念是什么，前景如何？</p><p>专家系统是包含归纳推论引擎和规则基础的程序，它接收输入数据和假设条件，通过从基础规则推导逻辑结果，提出结论和建议，向用户展示前因后果，并解释最终的结果。推论引擎除了处理推理逻辑以外，通常还包括复杂逻辑或者概率数据和规则。</p><p>对于解决相同的问题，这种系统明显比传统的程序算法要先进很多。</p><ul><li>推导引擎技术的开发独立于应用程序，因此可以用于多个用户。在该引擎上花费较大的工作是很合理的。实际上，这种引擎技术非常先进。</li><li>基于应用的、可变更的部分，在基础规则中以一种统一的风格编码，并且为规则基础的开发、更改、测试和文档化提供了若干工具。这实际上对一些应用程序本身的复杂度进行了系统化。</li></ul><p>Edward Feigenbaum 指出这种系统的能力不是来自某种前所未有的推导机制，而是来自非常丰富的知识积累基础，所以更加精确地反映了现实世界。我认为这种技术提供的最重要进步是具体应用的复杂性与程序本身相分离。</p><p>如何把它应用在软件开发工作中？可以通过很多途径：建议接口规则、制订测试策略、记录各种 bug 产生的频率、提供优化建议等等。</p><p>例如，考虑一个虚构的测试顾问系统。在最根本的级别，诊断专家系统和飞行员的检查列表很相似，对可能难以寻找的原因提供基本的建议。建立基础规则时，可以依据更多的复杂问题征兆报告，从而使这些建议更加精确。可以想象，该调试辅助程序起初提供的是一般化建议，随着基础规则包括越来越多的系统结构信息时，它产生的推测和推荐的测试也越来越准确。该类型的专家系统可能与传统系统彻底分离，系统中的规则基础可能与相应的软件产品具有相同的层次模块化结构，因此当产品模块化修改时，诊断规则也能相应地进行模块化修改。</p><p>产生诊断规则也是在为模块和系统编制测试用例集时必须完成的任务。如果它以一种适当通用的方式来完成，对规则采用一致的结构，拥有一个良好可用的推测引擎，那么事实上它就可以减少测试用例设计的总体工作量，以及帮助整个软件生命周期的维护、修改和测试。同样，我们可以推测其他的顾问专家系统——可能是它们中的某一些，或者是较简单的系统——能够用在软件开发的其他部分。</p><p>在较早实现的用于软件开发的专家顾问系统中，存在着很多困难。在我们假设的例子中，一个关键的问题是寻找一种方法，能从软件结构的技术说明中，自动或者半自动地产生诊断规则。另外，更加重要也是更加困难的任务是：寻觅能够清晰表达、深刻理解为什么的分析专家；开发有效的技术——抽取专家们所了解的知识，把它们精炼成基础规则。这项工作的工作量是知识获取工作量的两倍。构建专家系统的必要前提条件是拥有专家。</p><p>专家系统最强有力的贡献是给缺乏经验的开发人员提供服务，用最优秀开发者的经验和知识积累为他们提供了指导。这是非常大的贡献。最优秀和一般的软件工程实践之间的差距是非常大的，可能比其他工程领域中的差距都要大，一种传播优秀实践的工具特别重要。</p><p>&quot;自动&quot;编程。近四十年中，人们一直在预言和编写有关&quot;自动编程&quot;的文字，从问题的一段陈述说明自动产生解决问题的程序。现在，仍有一些人期望这样的技术能够成为下一个突破点。</p><p>Parnas 暗示这是一个用于魔咒的术语，声称它本身是语义不完整的。</p><p>一句话，自动编程总是成为一种热情，使用现在并不可用的更高级语言编程的热情。</p><p>他指出，大多数情况下所给出的技术说明本质上是问题的解决方法，而不是问题自身。</p><p>可以找到一些例外情况。例如，数据发生器的开发技术就非常实用，并经常地用于排序程序中。系统评估若干参数，从问题解决方案库中进行选择，生成合适的程序。</p><p>这样的应用具有非常良好的特性：</p><ul><li>问题通过相对较少的参数迅速地描述出特征。</li><li>存在很多已知的解决方案，提供了可供选择的库。</li><li>在给定问题参数的前提下，大量广泛的分析为选择具体的解决技术提供了清晰的规则。</li></ul><p>具有上述简洁属性的系统是一个例外，很难看到该方法能普及到更广泛的寻常软件系统，甚至难以想象这种突破如何能够进行推广。</p><p>图形化编程。在软件工程的博士论文中，一个很受欢迎的主题是图形化和可视化编程，计算机图形在软件设计上的应用。这种方法的推测部分来自 VLSI 芯片设计的类比，计算机图形化在设计中扮演了高生产力的角色。部分源于——人们将流程图作为一种理想的设计介质，并为绘制它们提供了很多功能强大的实用程序——这证实了图形化的可行性。</p><p>不过，上述方法中至今还没有出现任何令人信服和激动的进步。我确信将来也不会出现。</p><p>首先，如同我先前所提出的，流程图是一种非常差劲软件结构表达方法。实际上，它最好被视为是冯．诺依曼、戈尔德斯廷和勃克斯试图为他们所设计的计算机提供的一种当时迫切需要的高级控制语言。如今的流程图已经变得复杂，一张图有若干页，有很多连接结点。这种表现形式实在令人同情。流程图已经成为完全不必要的设计工具——程序员在开发之后，而不是之前绘制描述程序的流程图。</p><p>其次，现在的屏幕非常小，像素级别，无法同时表现软件图形的所有正式、详细的范围和细节。现在所谓 &quot;类似桌面&quot;的工作站实际上像是&quot;飞机坐舱座椅&quot;。飞机上，任何坐在两个肥胖乘客之间，反复挪动一大兜文件的人会意识到这中间的差别——每次只能看到很少的内容。真正的桌面提供了很多文件的总览，让大家可以随意地使用它们。此外，当人们的创造力一阵阵地涌现时，开发人员大多数都会舍弃工作台，使用空间更为广阔的地板。要使我们面对的工作空间满足软件开发工作的需要，硬件技术必须进一步发展。</p><p>更加基本的是，如同我们上面所争论的，软件非常难以可视化。即使用图形表达出了流程图、变量范围嵌套情况、变量交叉引用、数据流、层次化数据结构等等，也只是表达了某个方面，就像盲人摸象一样。如果我们把很多相关的视图叠加在所产生的图形上，那么很难再抽取出全局的总体视图。对 VLSI 芯片设计方法的类推是一种误导——芯片设计是对两维对象的层次设计，它的几何特性反映了它的本质特性，而软件系统不是这样。</p><p>程序验证。现代编程的许多工作是测试和修复 bug。是否有可能出现银弹，能够在系统设计级别、源代码级别消除 bug 呢？是否可以在大量工作被投入到实现和测试之前，通过采用证实设计正确性的&quot;深奥&quot;策略，彻底提高软件的生产率和产品的可靠性？</p><p>我并不认为在这里能找到魔法。程序验证的确是很先进的概念，它对安全操作系统内核等这类应用是非常重要的。不过，这项技术并不能保证节约劳动力。验证要求如此多的工作量，以致于只有少量的程序能够得到验证。</p><p>程序验证不意味着零缺陷的程序。这里并没有什么魔术，数学验证仍然可能是有错误的。因此，尽管验证可能减少程序测试的工作量，但却不能省略程序测试。</p><p>更严肃地说，完美的程序验证只能建立满足技术说明的程序。这时，软件工作中最困难的部分已经接近完成，形成了完整和一致的说明。开发程序的一些必要工作实际上已经变成对技术规格说明进行测试。</p><p>环境和工具。向更好的编程开发环境开发中投入，我们可以期待得到多少回报呢？人们的本能反应是首先着手解决高回报的问题：层次化文件系统，统一文件格式以获得一致的编程接口和通用工具等。特定语言的智能化编辑器在现实中还没有得到广泛应用，不过它们最有希望实现的是消除语法错误和简单的语义错误。</p><p>开发环境上，现在已经实现的最大成果可能是集成数据库的使用，用来跟踪大量的开发细节，供每个程序员精确地查阅信息，以及在整个团队协作开发中保持最新的状态。</p><p>显然，这样的工作是非常有价值的，它能带来软件生产率和可靠性上的一些提高。但是，由于它自身的特性，目前它的回报很有限。</p><p>工作站。随着工作站的处理能力和内存容量的稳固和快速提高，我们能期望在软件领域取得多大的收获呢？现在的运算速度已经可以完全满足程序编制和文档书写的需要。编译还需要一些提高，不过一旦机器运算速度提高十倍，那么程序开发人员的思考活动将成为日常工作的主要活动。实际上，这已经是现在的情况。</p><p>我们当然欢迎更加强大的工作站，但是不能期望有魔术般的提高。</p><h2 id="针对概念上根本问题的颇具前途的方法" tabindex="-1">针对概念上根本问题的颇具前途的方法 <a class="header-anchor" href="#针对概念上根本问题的颇具前途的方法" aria-label="Permalink to &quot;针对概念上根本问题的颇具前途的方法&quot;">​</a></h2><p>虽然现在软件上没有技术上的突破能够预示我们可以取得像在硬件领域上一样的进展，但在现实的软件领域中，既有大量优秀的工作，也有不引人注意的平稳进步。</p><p>所有针对软件开发过程中次要困难的技术工作基本上能表达成以下的生产率公式：</p><p>任务时间 = Σ（频率）i×（时间）i</p><p>如果和我所认为的一样，工作的创造性部分占据了大部分时间，那么那些仅仅是表达概念的活动并不能在很大程度上影响生产率。</p><p>因此，我们必须考虑那些解决软件上必要困难的活动——即，准确地表达复杂概念结构。幸运的是，其中的一些非常有希望。</p><p>购买和自行开发。构建软件最可能的彻底解决方案是不开发任何软件。</p><p>情况每一天都有些好转，越来越多的软件提供商，为各种眼花缭乱的应用程序提供了质量更好、数量更多的软件产品。当我们的软件工程师正忙于生产方法学时，个人计算机的惊天动地的变化为软件创造了广阔的市场。每个报摊上都有大量的月刊，根据机器的类型，刊登着从几美元到几百美元的各种产品的广告和评论。更多专业厂商为工作站和 UNIX 市场提供了很多非常有竞争力的产品，甚至很多工具软件和开发环境软件都可以随时购买使用。对于独立的软件模块市场，我已在其他的地方提出一些建议。</p><p>以上提到的任何软件，购买都要比重新开发要低廉一些。即使支付 100,000 美元，购买的软件也仅仅是一个人年的成本。而且软件是立即可用的！至少对于现有的产品、对于那些专注于该领域开发者的成果而言，它们是可以立刻投入使用的。并且，它们往往配备了书写良好的文档，在某种程度上比自行开发的软件维护得更加完备。</p><p>我相信，这个大众市场将是软件工程领域意义最深远的开发方向。软件成本一直是开发的成本，而不是复制的成本。所以，即使只在少数使用者之间实现共享，也能在很大程度上减少成本。另一种看法是使用软件系统的 n 个拷贝，将会使开发人员的生产率有效地提高 n 倍。这是一个领域和行业范围的提高。</p><p>当然，关键的问题还是可用性。是否可以在自己的开发工作中使用商用的软件包？这里，有一个令人吃惊的问题。在 1950 ～ 1960 年期间，一个接一个的研究显示，用户不会在工资系统、物流控制、帐务处理等系统中使用商用软件包。需求往往过于专业，不同情况之间的差别太大。在 80 年代，我们发现这些软件包的需求大为增加，并得到了大规模的使用。什么导致了这样的变化？</p><p>并不是软件包发生了变化。它们可能比以前更加通用和更加客户化一些，但并不太多。</p><p>同样，也不是应用发生了变化。即使有，今天的商业和学术上的需要也比 20 年以前更加不同和复杂。</p><p>重大的变化在于计算机硬件/软件成本比率。在 1960 年，2 百万美元机器的购买者觉得他可以为定制的薪资系统支付 250,000 美元。现在，对 50,000 美元的办公室机器购买者而言，很难想象能为定制薪资系统再支付费用。因此，他们把上述系统的模块进行调整，添加到可用的软件包中。计算机现在如此的普遍，上述的改编和调整是发展的必然结果。</p><p>我的上述观点也存在一些戏剧性的例外——软件包的通用化方面并没有发生什么变化，除了电子表格和简单的数据库系统。这些强大的工具，出现得如此之晚和如此醒目，导致无数应用中的一些并不十分规范。大量的文章、甚至书籍讲述了如何使用电子表格应付很多意想不到的问题。原先作为客户程序，使用 Cobol 或者报表生成程序编写的大量应用，如今已经被这些工具所取代。</p><p>现在很多用户天天操作计算机，使用着各种各样的应用程序，但并不编写代码。事实上，他们中间很多人无法为自己的计算机编写任何程序，不过他们非常熟练地使用计算机来解决新问题。</p><p>我认为，对于现在的很多组织机构来说，最有效的软件生产率策略是在生产一线配备很多个人计算机，安装好通用的书写、作图、文件管理和电子表格程序，以及配备能熟练使用它们的人员，并且把这些人员散布到各个岗位。类似的策略——通用的数学和统计软件包，以及一些简单的编程能力，同样地适用于很多实验室的科学工作者。</p><p>需求精炼和快速原型。开发软件系统的过程中，最困难的部分是确切地决定搭建什么样的系统。概念性工作中，没有其他任何一个部分比确定详细的技术需求更加困难，详细的需求包括了所有的人机界面、与机器和其他软件系统的接口。需求工作对系统的影响比其他任何一个部分的失误都大，当然纠正需求的困难也比其他任何一个部分要大。</p><p>因此，软件开发人员为客户所承担的最重要的职能是不断重复地抽取和细化产品的需求。事实上，客户不知道他们自己需要什么。他们通常不知道哪些问题是必须回答的。并且，连必须确定的问题细节常常根本不予考虑，甚至只是简单地回答——&quot;开发一个类似于我们已有的手工处理过程的新软件系统&quot;——实际上都过于简单。客户决不会仅仅要求这些。复杂的软件系统往往是活动的、变化的系统。活动的动态部分是很难想象的。所以，在计划任何软件活动时，要让客户和设计人员之间进行多次广泛的交流沟通，并将其作为系统定义的一部分。这是非常必要的。</p><p>这里，我将向前多走一步，下一个定论。在尝试和开发一些客户定制的系统之前，即使他们和软件工程师一起工作，想要完整、精确、正确地抽取现代软件产品的需求——这，实际上也是不可能的。</p><p>因此，现在的技术中最有希望的，并且解决了软件的根本而非次要问题的技术，是开发作为迭代需求过程的一部分——快速原型化系统的方法和工具。</p><p>软件系统的快速原型对重要的系统界面进行模拟，并演示待开发系统的主要功能。原型不必受到相同硬件速度、规模或者成本约束的限制。原型通常展示了应用程序的功能主线，但不处理任何如无效输入、退出清除等异常情况。原型的目的是明确实际的概念结构，从而客户可以测试一致性和可用性。</p><p>现在的软件开发流程基于如下的假设——事先明确地阐述系统，为系统开发竞标，实际进行开发，最后安装。我认为这种假设根本上就是不正确的，很多软件问题就来自这种谬误。因此，如果不进行彻底地调整，就无法消除那些软件问题。其中，一种改进是对产品和原型不断往复地开发和规格化。</p><p>增量开发——增长，而非搭建系统。我现在还记得在 1958 年，当听到一个朋友提及搭建（building），而不是编写（writing）系统时，我所感受到的震动。一瞬间，我的整个软件开发流程的视野开阔了。这种暗喻是非常有力和精确的。现在，我们已经理解软件开发是如何类似于其他的建造过程，并开始随意地使用其他的暗喻，如规格说明、构件装备、脚手架（测试平台）（specifications, assembly of components, and scaffolding）。</p><p>暗喻&quot;搭建系统&quot;的使用已经有些超出了它的有效期限，是重新换一种表达方式的时候了。如果现在的开发情况和我考虑的一样，那些概念性的结构非常复杂，以致于难以事先精确地说明和零缺陷地开发，那么我们必须采用彻底不同的方法。</p><p>让我们转向自然界，研究一下生物的复杂性，而不是人们的僵硬工作。我们会发现它们的复杂程度令我们敬畏。光是大脑本身，就比任何对它的描述都要复杂，比任何的模拟仿真都要强大，它的多样性、自我保护和自我更新能力异常丰富和有力。其中的秘密就是逐步发育成长，而不是一次性搭建。</p><p>所以，我们的软件系统也必须如此。很多年前，Harlan Mill 建议所有软件系统都应该以增量的方式开发。即，首先系统应该能够运行，即使未完成任何有用功能，只能正确调用一系列伪子系统。接着，系统一点一点被充实，子系统轮流被开发，或者是在更低的层次调用程序、模块、子系统的占位符（伪程序）等。</p><p>从我在软件工程试验班上开始推动这种方法起，其效果不可思议。在过去几十年中，没有任何方法和技术能如此彻底地改变我自己的实践。这种方法迫切地要求自顶向下设计，因为它本身是一种自顶向下增长的软件。增量化开发使逆向跟踪很方便，并非常容易进行原型开发。每一项新增功能，以及针对更加复杂数据或情况的新模块，从已经规划的系统中有机地增长。</p><p>这种开发模式对士气的推动是令人震惊的。当一个可运行系统——即使是非常简单的系统出现时，开发人员的热情就迸发了出来。当一个新图形软件系统的第一副图案出现在屏幕上时，即使是一个简单的长方形，工作的动力也会成倍地增长。在开发过程中的每个阶段，总有可运行的系统。我发现开发团队可以在四个月内，培育（grow）出比搭建（building）复杂得多的系统。</p><p>大型项目同样可以得到与我所参与的小型项目相同的好处。</p><p>卓越的设计人员。关键的问题是如何提高软件行业的核心，一如既往的是——人员。</p><p>我们可以通过遵循优秀而不是拙劣的实践，来得到良好的设计。优秀的设计是可以传授的。程序员的周围往往是最出色的人员，因此他们可以学习到良好的实践。因此，美国的重大策略是颁布各种优秀的现代实践。新课程、新文献。象软件工程研究所 SEI 等新机构的出现都是为了把我们的实践从不足提升到更高的水平。其正确性是勿庸置疑的。</p><p>不过，我不认为我们可以用相同的方式取得下一次进步。低劣设计和良好设计之间的区别可能在于设计方法中的完善性，而良好设计和卓越设计之间的区别肯定不是如此。卓越设计来自卓越的设计人员。软件开发是一个创造性的过程。完备的方法学可以培养和释放创造性的思维，但它无法孕育或激发创造性的过程。</p><p>其中的差异并不小——就象萨列里和莫扎特。一个接一个的研究显示，非常卓越的设计者产生的成果更快、更小、更简单、更优雅，实现的代价更少。卓越和一般之间的差异接近于一个数量级。</p><p>简单地回顾一下，尽管很多杰出、实用的软件系统是由很多人共同设计开发，但是那些激动人心、拥有广大热情爱好者的产品往往是一个或者少数伟大设计师们的思想。考虑一</p><p>下 Unix、APL、Pascal、Modula、Smalltalk 的界面、甚至 Fortran；与之对应的产品是 Cobol、PL/I、Algol、MVS/370 和 MS/DOS（图 6.1）。</p><p><img src="'+l+'" alt="激动人心的产品"></p><blockquote><p>图 16.1：激动人心的产品</p></blockquote><p>因此，尽管我强烈地支持现在的技术转移和开发技能的传授，但我认为我们可以着手的最重要工作是寻求培养卓越设计人员的途径。</p><p>没有任何软件机构可以忽视这项挑战。尽管公司可能缺少良好的管理人员，但决不会比良好设计人员的需求更加迫切，而卓越的管理人员和设计人员都是非常缺乏的。大多数机构花费了大量的时间和精力来寻找和培养管理人员，但据我所知，它们中间没有任何的一家在寻求和培育杰出的设计人员上投入相同的资源，而产品的技术特色最终依赖于这些设计人员。</p><p>我的第一项建议是每个软件机构必须决定和表明，杰出的设计人员和卓越的管理人员一样重要，他们应该得到相同的培养和回报。不仅仅是薪资，还包括各个方面的认可——办公室规模、安排、个人的设备、差旅费用、人员支持等——必须完全一致。</p><p>如何培养杰出的设计人员？限于篇幅，不允许进行较长的介绍，但有些步骤是显而易见的。</p><ul><li>尽可能早地、有系统地识别顶级的设计人员。最好的通常不是那些最有经验的人员。</li><li>为设计人员指派一位职业导师，负责他们技术方面的成长，仔细地为他们规划职业生涯。</li><li>为每个方面制订和维护一份职业计划，包括与设计大师的、经过仔细挑选的学习过程、正式的高级教育和以及短期的课程——所有这些都穿插在设计和技术领导能力的培养安排中。</li><li>为成长中的设计人员提供相互交流和学习的机会。</li></ul>',145)]))}const m=a(o,[["render",n]]);export{q as __pageData,m as default};
