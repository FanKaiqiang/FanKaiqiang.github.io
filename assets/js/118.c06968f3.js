(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{428:function(v,_,t){"use strict";t.r(_);var e=t(40),a=Object(e.a)({},function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",[v._v("有一段时间没有写博客了，不算上五月底摸鱼的那两篇翻译的话，已经整整四个月没有写博客了。实际上，我在七月初就已经租好了房子，八月份就买好了新电脑，比原来的环境已经舒适得多了。至于为什么太监了这么久，主要原因还是因为不想写了（毫无隐瞒）。但是这几个月我的作息生活也不是很规律，除了学习没什么进展之外，其他方面我也没有什么提高（包括体重），课程也没有怎么看，心里总是想着没有什么题材可写。这个星期终于决定重操旧业了，打开博客地址一看，发现域名都过期了，除了有些对时光易逝的感慨，对自己也有些感到有些失望吧。")])]),v._v(" "),t("p",[v._v("废话就不再多说了，再说下去这篇博客就成随笔了。回想之前写的随笔，不少都是因为自己一段时间摸鱼过度，自己感觉有所担忧，然后就给自己订定计划什么的，从初中到现在我原来就没有变过。毫无例外地都是过一两天时间什么计划就抛在脑后了，什么计划也都成了黑历史，所以这回我也不计划什么了，不立 flag 了，真是拿自己没办法。本文是围绕代码优化技巧展开的，也是之前课程的内容，上了也有一段时间了，总结为博客的同时也复习复习。")]),v._v(" "),t("h2",{attrs:{id:"代码优化的基本原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码优化的基本原则","aria-hidden":"true"}},[v._v("#")]),v._v(" 代码优化的基本原则")]),v._v(" "),t("p",[v._v("代码优化是在工作中经常需要做的事情，自己之前写的代码、同事的代码，总有看不顺眼的时候，就会去想改一改。虽然代码改完之后自己看起来是感觉更顺眼了，但是还是有许多需要讲究的地方，否则可能就会弄巧成拙，给自己和同事带来更多的困扰。")]),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"https://s1.ax1x.com/2020/09/19/wILyh8.jpg",alt:"代码"}})]),t("p"),v._v(" "),t("p",[v._v("首先，"),t("strong",[v._v("代码的优化以易读性为优先")]),v._v("，代码好读比代码运行得快更加重要。因为对前端而言，代码是运行在浏览器上的，代码性能并不是瓶颈，前端的性能瓶颈一般出现在网络上。尽量要写出其他同事能够更容易看懂的代码，也就是易读性更强的代码。")]),v._v(" "),t("p",[t("strong",[v._v("如果代码并没有造成性能瓶颈，就不要为了性能改写代码")]),v._v("。比如一些代码的性能比不算好，需要运行 10 ms，重构之后需要运行 8 ms，但是在用户的设备上并没有明显变化，也没有什么意义。也就是说，如果这处优化并不能使页面性能明显提升就不要改了。")]),v._v(" "),t("p",[t("strong",[v._v("无论代码怎样重构，复杂性是不变的")]),v._v("，这也可以称之为复杂性守恒原则。假设一件事需要几个步骤做完，并不会因为代码的优化减少步骤，只能使得代码变得更加可读，并不能凭空降低复杂度。既然复杂度是守恒的，那么代码看起来也应该是复杂的；如果逻辑简单，那么代码看起来就应该简单。如果逻辑复杂，但是代码却实现起来简单，那么就可能是逻辑有问题，或者代码并没有完全实现整个功能。如果逻辑简单，代码写得复杂，那么代码就肯定有问题。")]),v._v(" "),t("h2",{attrs:{id:"如何改代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何改代码","aria-hidden":"true"}},[v._v("#")]),v._v(" 如何改代码")]),v._v(" "),t("h3",{attrs:{id:"命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命名","aria-hidden":"true"}},[v._v("#")]),v._v(" 命名")]),v._v(" "),t("p",[v._v("命名是非常重要的。程序员有三大难题：变量命名、缓存失效、循环边界。在平时的工作中，为一个变量取一个适合的名字是非常重要的，如果取了一个不好的名字则会贻害后人。许多大公司都有自己的命名规范，这里总结一些基本的原则。")]),v._v(" "),t("h4",{attrs:{id:"注意词性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意词性","aria-hidden":"true"}},[v._v("#")]),v._v(" 注意词性")]),v._v(" "),t("p",[v._v("选择适当的词性命名变量或者属性命名你的变量或者属性。从下面几点可以看出，是否能取一个好名字，和英语基础还是有不少关系的：")]),v._v(" "),t("ul",[t("li",[v._v("普通的变量或属性用名词，类似"),t("code",[v._v("person")]),v._v("、"),t("code",[v._v("student")]),v._v("等；")]),v._v(" "),t("li",[v._v("布尔类型的变量用「形容词」、「be 动词」、「情态动词」、「has X」等表示:\n"),t("ul",[t("li",[v._v("如果是形容词，就没必要在前面加 is，"),t("code",[v._v("dead")]),v._v("比"),t("code",[v._v("isDead")]),v._v("更好;")]),v._v(" "),t("li",[v._v("情态动词有 can、should、will、need 等，情态动词后面接动词；")]),v._v(" "),t("li",[v._v("be 动词有 is、was 等，后面接名词；")]),v._v(" "),t("li",[v._v("has（有没有）加名词。")])])]),v._v(" "),t("li",[v._v("普通函数/方法用「动词」开头，如及物动词"),t("code",[v._v("run")]),v._v("、不及物动词"),t("code",[v._v("drinkWater")]),v._v(";")]),v._v(" "),t("li",[v._v("如果函数是用作回调或钩子，就应该用「介词」开头，或用「动词的现在完成时态」，因为这些函数是在某些状态才会触发的。如"),t("code",[v._v("componentDidMount")]),v._v("、"),t("code",[v._v("componentWillUnmount")]),v._v("、"),t("code",[v._v("beforeCreate")]),v._v("、"),t("code",[v._v("created")]),v._v("、"),t("code",[v._v("onButtonClick")]),v._v("等；")]),v._v(" "),t("li",[v._v("容易混淆应该加前缀，如"),t("code",[v._v("div")]),v._v("（DOM 对象）、"),t("code",[v._v("$div")]),v._v("（jQuery 对象）；")]),v._v(" "),t("li",[v._v("属性访问器可以用名词，如"),t("code",[v._v("$div.text()")]),v._v("其实就是"),t("code",[v._v("$div.getText()")]),v._v("。")])]),v._v(" "),t("h4",{attrs:{id:"烂命名是怎样的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#烂命名是怎样的","aria-hidden":"true"}},[v._v("#")]),v._v(" 烂命名是怎样的")]),v._v(" "),t("p",[v._v("如何写出无法维护的命名？避开这些错误命名的例子，也可以让自己可以的变量命名更加规范：")]),v._v(" "),t("ul",[t("li",[v._v("使用容易输入的名字。如"),t("code",[v._v("asdf")]),v._v("、"),t("code",[v._v("aaa")]),v._v("等；")]),v._v(" "),t("li",[v._v("单字母变量名，如"),t("code",[v._v("a")]),v._v("、"),t("code",[v._v("b")]),v._v("、"),t("code",[v._v("c")]),v._v("、"),t("code",[v._v("d")]),v._v("；")]),v._v(" "),t("li",[v._v("有创意地拼写错误，单词拼写错误却非常相似，这样会让人不好搜索代码，使得代码难以维护；")]),v._v(" "),t("li",[v._v("命名过于抽象，以至于像是没有命名。如布尔变量命名为"),t("code",[v._v("flag")]),v._v("，实际上理论上所有布尔变量都是 flag，函数命名为"),t("code",[v._v("doIt")]),v._v("、"),t("code",[v._v("getData")]),v._v("等；")]),v._v(" "),t("li",[v._v("缩写。比如"),t("code",[v._v("WTF")]),v._v("、"),t("code",[v._v("TMD")]),v._v("等。除非这个缩写大家都知道具体的含义，如"),t("code",[v._v("html")]),v._v("、"),t("code",[v._v("css")]),v._v("、"),t("code",[v._v("js")]),v._v("，不应全部大写；")]),v._v(" "),t("li",[v._v("使用下划线，如"),t("code",[v._v("___")]),v._v("；")]),v._v(" "),t("li",[v._v("使用不同的语言，如中文拼音；")]),v._v(" "),t("li",[v._v("使用无关的单词，如"),t("code",[v._v("iLoveYou")]),v._v("；")]),v._v(" "),t("li",[v._v("混淆"),t("code",[v._v("l")]),v._v("he"),t("code",[v._v("1")]),v._v("，字母 l 和数字 1 有时候是看不出来的。")])]),v._v(" "),t("h3",{attrs:{id:"代码的一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码的一致性","aria-hidden":"true"}},[v._v("#")]),v._v(" 代码的一致性")]),v._v(" "),t("p",[v._v("命名时除了需要注意词性，还需要注意代码的一致性。关于一致性有这些需要注意的规范：")]),v._v(" "),t("ul",[t("li",[v._v("介词一致性：如果使用了 before + after，就坚持在其他地方使用；如果使用了 before + 完成时，那么就坚持使用。如果不保持一致，就会使得其他人在阅读代码时感到捉摸不定，也难以确定自己接下来应该怎样应该命名其他变量；")]),v._v(" "),t("li",[v._v("顺序一致性：比如"),t("code",[v._v("updateContainerWidth")]),v._v("和"),t("code",[v._v("updateHeightOfContainer")]),v._v("，也会使得代码变得「不可预测」；")]),v._v(" "),t("li",[v._v("表里一致性：函数名必须完整提现代码的功能，函数中不应有在函数名未体现的其他的副作用，名字和实际做的事情不一致。如果有副作用，则需修改函数名，或者把副作用的部分从函数拆出为新的函数；")]),v._v(" "),t("li",[v._v("时间一致性：变量名可能是以前取的，但是由于需求有所改变，就会造成随着时间的变迁，变量的含义不同于其最初的含义。变量的名字需要体现现在的功能，这个时候就需要即时修改这个变量的名字。")])]),v._v(" "),t("p",[v._v("实际上，时间一致的问题这一条最为常见，也是最难改善的，因为添加代码容易，改代码更加难。有些代码的改动会导致牵一发而动全身。因此需要在命名的时候具备良好的命名规范，才能保证自己的代码只之后更少地出现问题。")]),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"https://s1.ax1x.com/2020/09/19/wIOg56.jpg",alt:"抓狂"}})]),t("p"),v._v(" "),t("h3",{attrs:{id:"组织代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组织代码","aria-hidden":"true"}},[v._v("#")]),v._v(" 组织代码")]),v._v(" "),t("p",[v._v("代码没有组织就会显得很乱。如果代码有单元测试，改起来就很放心。如果没有单元测试的话，则需要使用「小步快跑」的策略，每次只改一点点，就进行测试，保证自己的所有改动都是正确无误的。下面一些组织代码的方法：")]),v._v(" "),t("h4",{attrs:{id:"使用函数修改代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用函数修改代码","aria-hidden":"true"}},[v._v("#")]),v._v(" 使用函数修改代码")]),v._v(" "),t("ul",[t("li",[v._v("将代码放到函数里；")]),v._v(" "),t("li",[v._v("将代码的外部依赖作为参数；")]),v._v(" "),t("li",[v._v("将代码的输出作为函数的返回值；")]),v._v(" "),t("li",[v._v("给函数取一个合适的名字；")]),v._v(" "),t("li",[v._v("调用这个函数并传入参数；")]),v._v(" "),t("li",[v._v("如果这个函数还是比较长，依然有优化的空间，就可以回到第一步继续优化；")])]),v._v(" "),t("h4",{attrs:{id:"用对象组织代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用对象组织代码","aria-hidden":"true"}},[v._v("#")]),v._v(" 用对象组织代码")]),v._v(" "),t("p",[v._v("如果使用函数改造后发现小函数过多，则可以使用一个对象把这些函数串起来，使用 this 把这个对象和所有函数串联起来，实际上就相当于咱们平时用的类了。")]),v._v(" "),t("h4",{attrs:{id:"表驱动编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#表驱动编程","aria-hidden":"true"}},[v._v("#")]),v._v(" 表驱动编程")]),v._v(" "),t("p",[v._v("这里的表指的是哈希表。把一一对应的关系使用表结构来做，减少冗长的 if - else 的使用。")]),v._v(" "),t("h4",{attrs:{id:"自说明代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自说明代码","aria-hidden":"true"}},[v._v("#")]),v._v(" 自说明代码")]),v._v(" "),t("p",[v._v("把变量命名好就是自说明代码，把别人关心的点放在显眼的位置。如果一个东西需要在文档中说明，那么不如在代码里就直接表达清楚。")]),v._v(" "),t("h2",{attrs:{id:"坏味道的代码与破窗效应"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#坏味道的代码与破窗效应","aria-hidden":"true"}},[v._v("#")]),v._v(" 坏味道的代码与破窗效应")]),v._v(" "),t("p",[v._v("有一些代码可以用，但是并不好（散发着坏味道），这些代码不能放过，需要及时重构：")]),v._v(" "),t("ul",[t("li",[v._v("表里不一的代码。引起误导，比如具有副作用的函数，引发 bug；")]),v._v(" "),t("li",[v._v("过时的注释。同样引发误导，改代码也要同时改注释；")]),v._v(" "),t("li",[v._v("逻辑很简单，但是看起来很复杂。可能代码是错误的，或者做了其他额外的事情；")]),v._v(" "),t("li",[v._v("重复的代码。如果出问题的话容易漏改；")]),v._v(" "),t("li",[v._v("相似的代码。导致难以发现问题，和重复的代码一样需要重新封装成函数，将不同的部分作为参数传入；")]),v._v(" "),t("li",[v._v("总是一起出现的代码。出问题容易漏改，应该将其进行合并成一个函数或者变量。")])]),v._v(" "),t("p",[v._v("环境中的不良现象如果被放任存在，就会诱使人们效仿，甚至变本加厉,这就是"),t("strong",[v._v("破窗效应")]),v._v("。写代码也是一样，如果一开始自己写代码的时候不注重代码可读性，不好好组织代码，后续接收的其他人也没法好好继续维护，导致坏代码越来越多。")]),v._v(" "),t("p",[v._v("为了避免这种状况，需要做到经过自己手的代码，都要比之前好一点。如果有不好的变量名，就要及时修改而且不造成 bug，长此以往才能是自己的写代码技术更好，写出来的代码更容易读懂、更加简洁。上面列出的原则并不多，并不是自己记住了就可以马上把代码写好，代码洁癖是需要追求的，是不断积累的过程，必须有极致的追求才能写出更好的代码。")]),v._v(" "),t("hr"),v._v(" "),t("p",[v._v("以上部分就是本篇博客关于代码可读性的所有内容。代码的可读性是非常重要的，记得之前我就给一个变量取名叫「isXxx」却不是布尔值，在领导 review 的时候造成了误导，被吐槽了。希望自己在之后写的代码越来越好吧。这篇博客不涉及到什么技术，更多的是之前课程的总结，因为课程看了有一段时间了，所以这次我基本是照着笔记重新听了一遍课程边写的，所以自己写完之后感觉还是不错的，有点前年写的博客的感觉了，虽然不立 flag 了，但还是希望自己能够再接再厉吧。")]),t("div",{staticStyle:{"text-align":"center"}},[t("img",{attrs:{src:"https://s1.ax1x.com/2020/09/19/wIOxMQ.jpg",alt:"封底"}})]),t("p")])},[],!1,null,null,null);_.default=a.exports}}]);