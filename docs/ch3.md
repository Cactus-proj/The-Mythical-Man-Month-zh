# 第 3 章 外科手术队伍（The Surgical Team）

这些研究表明，效率高和效率低的实施者之间具体差别非常大，经常达到了数量级的水平。

——SACKMAN, ERIKSON 和 GRANT

These studies revealed large individual differences between high and low performers, often by an order of magnitude.

——SACKMAN, ERIKSON, AND GRANT

在计算机领域的会议中，常常听到年轻的软件经理声称他们喜欢由头等人才组成的小型、精干的队伍，而不是那些几百人的大型团队，这里的"人"当然暗指平庸的程序员。其实我们也经常有相同的看法。

但这种幼稚的观点回避了一个很困难的问题——如何在有意义的时间进度内创建大型的系统？那么就让我们现在来仔细讨论一下这个问题的每一个方面。

## 问题

软件经理很早就认识到优秀程序员和较差的程序员之间生产率的差异，但实际测量出的差异还是令我们所有的人吃惊。在他们的一个研究中，Sackman、Erikson 和 Grand 曾对一组具有经验的程序人员进行测量。在该小组中，最好的和最差的表现在生产率上平均为 10:1；在运行速度和空间上具有 5:1 的惊人差异！简言之，$20,000/年的程序员的生产率可能是$10,000/年程序员的 10 倍。数据显示经验和实际的表现没有相互联系（我怀疑这种现象是否普遍成立。）

我常常重复这样的一个观点，需要协作沟通的人员的数量影响着开发成本，因为成本的主要组成部分是相互的沟通和交流，以及更正沟通不当所引起的不良结果（系统调试）。这一点，也暗示系统应该由尽可能少的人员来开发。实际上，绝大多数大型编程系统的经验显示出，一拥而上的开发方法是高成本的、速度缓慢的、不充分的，开发出的是无法在概念

上进行集成的产品。OS/360、Exec 8、Scope 6600、Multics、TSS、SAFE 等等——这个列表可以不断地继续下去。

得出的结论很简单：如果一个 200 人的项目中，有 25 个最能干和最有开发经验的项目经理，那么开除剩下的 175 名程序员，让项目经理来编程开发。

现在我们来验证一下这个解决方案。一方面，原有的开发队伍不是理想的小型强有力的团队，因为通常的共识是不超过 10 个人，而该团队规模如此之大，以至于至少需要两层的管理，或者说大约 5 名管理人员。另外，它需要额外的财务、人员、空间、文秘和机器操作方面的支持。

另一方面，如果采用一拥而上的开发方法，那么原有 200 人的队伍仍然不足以开发真正的大型系统。例如，考虑 OS/360 项目。在顶峰时，有超过 1000 人在为它工作——程序员、文档编制人员、操作人员、职员、秘书、管理人员、支持小组等等。从 1963 年到 1966 年，设计、编码和文档工作花费了大约 5000 人年。如果人月可以等量置换的话，我们所假设的 200 人队伍需要 25 年的时间，才能使产品达到现有的水平。

这就是小型、精干队伍概念上的问题：对于真正意义上的大型系统，它太慢了。设想 OS/360 的工作由一个小型、精干的团队来解决。譬如 10 人队伍。作为一个尺度，假设他们都非常厉害，比一般的编程人员在编程和文档方面的生产率高 7 倍。假定 OS/360 原有开发人员是一些平庸的编程人员（这与实际的情况相差很远）。同样，假设另一个生产率的改进因子提高了 7 倍，因为较小的队伍所需较少的沟通和交流。那么，5000/（10×7×7）= 10，他们需要 10 年来完成 5000 人年的工作。一个产品在最初设计的 10 年后才出现，还有人会对它感兴趣吗？或者它是否会随着软件开发技术的快速进步，而显得过时呢？

这种进退两难的境地是非常残酷的。对于效率和概念的完整性来说，最好由少数干练的人员来设计和开发，而对于大型系统，则需要大量的人手，以使产品能在时间上满足要求。如何调和这两方面的矛盾呢？

## Mills 的建议

Harlan Mills 的提议提供了一个崭新的、创造性的解决方案。Mills 建议大型项目的每一个部分由一个团队解决，但是该队伍以类似外科手术的方式组建，而并非一拥而上。

也就是说，同每个成员截取问题某个部分的做法相反，由一个人来进行问题的分解，其他人给予他所需要的支持，以提高效率和生产力。

简单考虑一下，如果上述概念能够实施，似乎它可以满足迫切性的需要。很少的人员被包含在设计和开发中，其他许多人来进行工作的支持。它是否可行呢？谁是编程队伍中的麻醉医生和护士，工作如何划分？让我们继续使用医生的比喻：如果考虑所有可能想到的工作，这样的队伍应该如何运作。

外科医生。Mills 称之为首席程序员。他亲自定义功能和性能技术说明书，设计程序，编制源代码，测试以及书写技术文档。他使用例如 PL/I 的结构化编程语言，拥有对计算机系统的访问能力；该计算机系统不仅仅能进行测试，还存储程序的各种版本，以允许简单的文件更新，并对他的文档提供文本编辑能力。首席程序员需要极高的天分、十年的经验和应用数学、业务数据处理或其他方面的大量系统和应用知识。

副手。他是外科医生的后备，能完成任何一部分工作，但是相对具有较少的经验。他的主要作用是作为设计的思考者、讨论者和评估人员。外科医生试图和他沟通设计，但不受到他建议的限制。副手经常在与其他团队的功能和接口讨论中代表自己的小组。他需要详细了解所有的代码，研究设计策略的备选方案。显然，他充当外科医生的保险机制。他甚至可能编制代码，但针对代码的任何部分，不承担具体的开发职责。

管理员。外科医生是老板，他必须在人员、加薪等方面具有决定权，但他决不能在这些事务上浪费任何时间。因而，他需要一个控制财务、人员、工作地点安排和机器的专业管理人员，该管理员充当与组织中其他管理机构的接口。Baker 建议仅在项目具有法律、合同、报表和财务方面的需求时，管理员才具有全职责任。否则，一个管理员可以为两个团队服务。

编辑。外科医生负责产生文档——出于最大清晰度的考虑，他必须书写文档。对内部描述和外部描述都是如此。而编辑根据外科医生的草稿或者口述的手稿，进行分析和重新组织，提供各种参考信息和书目，对多个版本进行维护以及监督文档生成的机制。

两个秘书。管理员和编辑每个人需要一个秘书。管理员的秘书负责项目的协作一致和非产品文件。

程序职员。他负责维护编程产品库中所有团队的技术记录。该职员接受秘书性质的培训，承担机器码文件和可读文件的相关管理责任。

所有的计算机输入汇集到这个职员处。如果需要，他会对它们进行记录或者标识。输出列表会提交给程序职员，由他进行归档和编制索引。另外，他负责将任何模型的最新运行情况记录在状态日志中，而所有以前的结果则按时间顺序进行归档保存。

Mills 概念的真正关键是"从个人艺术到公共实践"的编程观念转换。它向所有的团队成员展现了所有计算机的运作和产物，并将所有的程序和数据看作是团队的所有物，而非私人财产。

程序职员的专业化分工，使程序员从书记的杂事中解放出来，同时还可以对那些杂事进行系统整理，确保了它们的质量，并强化了团队最有价值的财富——工作产品。上述概念显然考虑的是批处理程序。当使用交互式终端，特别是在没有纸张输出的情况下，程序职员的职责并未消失，只是有所更改。他会记录小组程序和私有工作拷贝之间的更新，依然控制所有程序的运行，并使用自己的交互式工具来控制产品逐步增长的完整性和有效性。

工具维护人员。现在已经有很多文件编辑、文本编辑和交互式调试等工具，因此团队很少再需要自己的机器和机器操作人员。但是这些工具使用起来必须毫无疑问地令人满意，而且需要具备较高的可靠性。外科医生则是这些工具、服务可用性的唯一评判人员。他需要一个工具维护人员，保证所有基本服务的可靠性，以及承担团队成员所需要的特殊工具（特别是交互式计算机服务）的构建、维护和升级责任。即使已经拥有非常卓越的、可靠的集中式服务，每个团队仍然要有自己的工具人员。因为他的工作是检查他的外科医生所需要的工具。工具维护人员常常要开发一些实用程序、编制具有目录的过程库以及宏库。

测试人员。外科医生需要大量合适的测试用例，用来对他所编写的工作片段，以及对整个工作进行测试。因此，测试人员既是为他的各个功能设计系统测试用例的对头，同时也是为他的日常调试设计测试数据的助手。他还负责计划测试的步骤和为测试搭建测试平台。

语言专家。随着 Algol 语言的出现，人们开始认识到大多数计算机项目中，总有一两个乐于掌握复杂编程语言的人。这些专家非常有帮助，很快大家会向他咨询。这些天才不同于外科医生，外科医生主要是系统设计者以及考虑系统的整体表现。而语言专家则寻找一种简洁、有效的使用语言的方法来解决复杂、晦涩或者棘手的问题。他通常需要对技术进行一些研究（两到三天）。通常一个语言专家可以为两个到三个外科医生服务。

以上就是如何参照外科手术队伍，以及如何对 10 人的编程队伍进行专业化的角色分工。

## 如何运作

文中定义的开发团队在很多方面满足了迫切性的需要。十个人，其中七个专业人士在解决问题，而系统是一个人或者最多两个人思考的产物，因此客观上达到了概念的一致性。

要特别注意传统的两人队伍与外科医生——副手队伍架构之间的区别。首先，传统的团队将工作进行划分，每人负责一部分工作的设计和实现。在外科手术团队中，外科医生和副手都了解所有的设计和全部的代码。这节省了空间分配、磁盘访问等的劳动量，同时也确保了工作概念上的完整性。

第二，在传统的队伍中大家是平等的，出现观点的差异时，不可避免地需要讨论和进行相互的妥协和让步。由于工作和资源的分解，不同的意见会造成策略和接口上的不一致，例如谁的空间会被用作缓冲区，然而最终它们必须整合在一起。而在外科手术团队中，不存在利益的差别，观点的不一致由外科医生单方面来统一。这两种团队组建上的差异——对问题不进行分解和上下级的关系——使外科手术队伍可以达到客观的一致性。

另外，团队中剩余人员职能的专业化分工是高效的关键，它使成员之间采用非常简单的交流模式成为可能。

![10 人程序开发队伍的沟通模式](figures/fg3-1.jpg)
> 图 3.1：10 人程序开发队伍的沟通模式

Baker 的文章提出了专一的、小规模的测试队伍。在那种情况下，它能按照所预期的进行运作，并具有良好的效果。

## 团队的扩建

就目前情况而言，还不错。然而，现在所面临的问题是如何完成 5000 人年的项目，而不是 20 或 30 人年规模的系统。如果整个工作能控制在范围之内，10 人的团队无论如何组织，总是比较高效的。但是，当我们需要面对几百人参与的大型任务时，如何应用外科手术团队的概念呢？

扩建过程的成功依赖于这样一个事实，即每个部分的概念完整性得到了彻底的提高——决定设计的人员是原来的七分之一或更少。所以，可以让 200 人去解决问题，而仅仅需要协调 20 个人，即那些"外科医生"的思路。

对于协调的问题，还是需要使用分解的技术，这在后续的章节中会继续进行讨论。在这里，可以认为整个系统必须具备概念上的完整性，要有一个系统结构师从上至下地进行所有的设计。要使工作易于管理，必须清晰地划分体系结构设计和实现之间的界线，系统结构师必须一丝不苟地专注于体系结构。总的说来，上述的角色分工和技术是可行的，在实际工作中，具有非常高的效率。
