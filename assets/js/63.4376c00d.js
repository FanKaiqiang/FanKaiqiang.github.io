(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{373:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[t._v("这几天一直被停电整得作息有些混乱，最近可能出现会白天完全停电，晚上局部停电的情况。心情也因此不是很好，现在只能趁着掉闹有点而且电脑不是蓝屏的时候稍微写写博客了。")])]),t._v(" "),a("p",[t._v("而且这几天的毕设课程也只能停一停了，如果明天还停电的话，这几天就把之前落下的一些拓展课程在这段时间看掉好了。")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181211A/timg.jpg",alt:"蜡烛"}})]),a("p"),t._v(" "),a("p",[a("em",[t._v("完成于 2018-12-17 10:09:06")])]),t._v(" "),a("p",[t._v("本来这篇博客是11号就创建的，但是前几天又停电，电脑又不给力。学习安排得很混乱，博客也几天没写。现在电脑也修好了，电也不停了，所以现在才能够把博客的欠账完成。这篇博客本来是想写写正则表达式的，但是也想把正则对象的知识写一下，所以正则的其他知识我就另起一篇来归纳了。因为我在此之前对正则对象一无所知，所以这回我基本上是边看 MDN 边学边写的状态。本篇博客的主要参考内容在"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegExp|MDN"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"一、示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、示例","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、示例")]),t._v(" "),a("p",[t._v("正则表达式是用于匹配字符串中字符组合的模式。在编写处理字符串的程序或网页时，经常会有查找符合某些复杂规则的字符串的需要。正则表达式就是用于描述这些规则的工具。换句话说，正则表达式就是记录文本规则的代码。在以前，会借助一些API对字符串进行处理，比如search（搜寻）、substring（截取）、replace（替换）、chatAt（定位）、split（切分）等等。在学习正则表达式之前，直接来看看借助正则表达式处理字符串与使用刚才提到的API相比有什么优势，以找出字符串中的所有数字为例：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12fff87 er334 233-==80fa'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("      \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//存放数字的临时字符串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("charAt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    temp"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("char")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//如果遍历到非数字")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//将temp内容推入数组并清空temp")]),t._v("\n      temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//遍历结束后将最后一个temp推入数组")]),t._v("\n      arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      temp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[12,87,334,233,80]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br")])]),a("p",[t._v("上面的方法是最传统的方法，将字符串的每个字符进行遍历，然后将筛选出来的连续的数字推入数组中。看似简单地操作，写成代码却这么麻烦。既然正则表达式是匹配字符串的规则，那可不可以写出一种筛选字符串中数字的规则呢？直接来看例子：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12fff87 er334 233-==80fa'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[12,87,334,233,80]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("简单地两句代码，就完成了上面一大堆代码的所有操作。但是似乎简单得过头了，看都看不懂，一下子适应不了正则表达式的表达风格。今天就从这的例子入手，把一些关于正则表达式的基础知识大致地过一遍。")]),t._v(" "),a("h2",{attrs:{id:"二、正则对象的实例属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、正则对象的实例属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、正则对象的实例属性")]),t._v(" "),a("p",[t._v("就上面的例子就可以看出来，正则表达式是一种强大的字符串匹配工具。和不使用正则的其他任何方法相比，就相当于使用电锯砍树与斧子砍树的区别。不过正则虽然好用，但是它诡异的表达风格足以让所有不了解正则的正常人类摸不着头脑。正如上个例子里用到的"),a("code",[t._v("/\\d+/g")]),t._v("，如果没学过，谁也不知道这条正则可以用来筛选字符串中的数字。")]),t._v(" "),a("p",[t._v("这是因为JavaScript 的正则语法就是基于 Perl 的，Perl 的风格就是如此，所以这些正则表达式放在JavaScript代码中才会违和感十足。不过这个正则表达式在JavaScript中到底是什么样的存在呢？实际上在 JavaScript 中，正则表达式被看作 RegExp 对象。有两种方法来创建一个 RegExp 对象：一是字面量、二是使用"),a("code",[t._v("RegExp")]),t._v('构造函数来创建正则对象。来看一个例子，两种方法都创建了一条相同内容的正则对象，其中只有一个"a"，意义即为 a 本身：')]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/a/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" regex1   \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"object"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("RegExp 对象的几个属性既有完整的长属性名，也有对应的类 Perl 的短属性名。在定义正则对象时可以借助修饰符设定对象的一些属性。下面就是含有修饰符的正则对象的定义：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/\\d+/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("正则表达式的修饰符具有以下几种，事实上这些修饰符是在设定正则对象的一些相关的属性值，比如设定了 g 修饰符即是设置该正则对象的 global 属性为 true。而这些属性决定了正则对象的工作模式：")]),t._v(" "),a("ul",[a("li",[t._v("g（global）：全局匹配;找到所有匹配，而不是在第一个匹配后停止")]),t._v(" "),a("li",[t._v("i（ignoreCase）：忽略大小写")]),t._v(" "),a("li",[t._v("m（multiline）：多行; 将开始和结束字符（^和$）视为在多行上工作（也就是，分别匹配每一行的开始和结束（由 \\n 或 \\r 分割），而不只是只匹配整个输入字符串的最开始和最末尾处。")]),t._v(" "),a("li",[t._v("u（unicode）：将模式视为Unicode序列点的序列，此修饰符标识能够正确处理大于\\uFFFF的Unicode字符。")]),t._v(" "),a("li",[t._v("y（sticky）：粘性匹配; 仅匹配目标字符串中此正则表达式的lastIndex属性指示的索引(并且不尝试从任何后续的索引匹配)。")])]),t._v(" "),a("p",[t._v("上面这些属性都是正则对象的只读属性。当然正则对象的实例属性也不止上面这几个，比如lastIndex属性用来存放下次匹配开始的字符串索引位置、source属性会返回正则对象的源模式文本，这些属性都是可读写的。除此之外正则对象还有一些实例方法，下面就结合正则对象适用的一些 String 的方法一起讲解了。")]),t._v(" "),a("h2",{attrs:{id:"三、正则对象的相关方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、正则对象的相关方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、正则对象的相关方法")]),t._v(" "),a("p",[t._v("正则对象可以被用于 RegExp 的 exec 和 test 方法, 以及 String 的 match、replace、search 和 split 方法。下面都这些适用于正则对象的 API 分别讲解。")]),t._v(" "),a("h3",{attrs:{id:"_1、regexp-prototype-exec"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、regexp-prototype-exec","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、RegExp.prototype.exec()")]),t._v(" "),a("p",[t._v("exec() 方法在一个指定字符串中执行一个搜索匹配。返回一个结果数组或 null。如果匹配成功，exec() 方法返回一个数组，并更新正则表达式对象的属性。使用 exec() 方法只会将字符串中匹配到的第一条内容放入数组，比如：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12fff87 er334 233-==80fa'")]),t._v("\nregex1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//["12", index: 0, input: "12fff87 er334 233-==80fa", groups: undefined] ')]),t._v("\nregex1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v('上面 exec() 方法的返回的这个数组的第 0 项即是此次搜索匹配到的内容。每次执行 exec() 方法，正则对象的 lastIndex 属性会变为此次搜寻字符串结束的位置。当正则表达式使用 "g" 修饰符时，可以多次执行 exec 方法来查找同一个字符串中的成功匹配。当你这样做时，查找将从正则表达式的 lastIndex 属性指定的位置开始。如果多次执行 exec() 方法，就可以依次查找所有匹配，下面是一个例子：')]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("regex1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//["87", index: 5, input: "12fff87 er334 233-==80fa", groups: undefined]')]),t._v("\nregex1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//7")]),t._v("\nregex1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//["334", index: 10, input: "12fff87 er334 233-==80fa", groups: undefined]')]),t._v("\nregex1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//13")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2、regexp-prototype-test"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、regexp-prototype-test","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、RegExp.prototype.test()")]),t._v(" "),a("p",[t._v("test() 方法执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true 或 false。只要这条字符串有一处内容符合正则表达式的匹配条件，使用 test() 方法的都会得到 true 值：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/^hello/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("当你想要知道一个模式是否存在于一个字符串中时，就可以使用 test()（类似于 String.prototype.search() 方法），差别在于test返回一个布尔值，而 search 返回索引（如果找到）或者-1（如果没找到）；若想知道更多信息（然而执行比较慢），可使用 exec() 方法（类似于 String.prototype.match() 方法）。")]),t._v(" "),a("p",[t._v("和 exec() (或者组合使用),一样，在相同的全局正则表达式实例上多次调用test将会越过之前的匹配。如果正则表达式设置了全局修饰符，test() 的执行会改变正则表达式 lastIndex 属性。连续的执行test()方法，后续的执行将会从 lastIndex 处开始匹配字符串，(与exec() 一样会改变正则本身的 lastIndex属性值)。下面的实例表现了这种行为：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" regex "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/foo/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regex.lastIndex is at 0")]),t._v("\nregex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// regex.lastIndex is now at 3")]),t._v("\nregex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// false")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3、string-prototype-match"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、string-prototype-match","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、String.prototype.match()")]),t._v(" "),a("p",[t._v('当一个字符串与一个正则表达式匹配时， match()方法检索匹配项。这个方法接受一个一个正则表达式对象作为参数，如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。如果你未提供任何参数，直接使用 match() ，那么你会得到一个包含空字符串的 Array ：[""] 。如果字符串匹配到了表达式，会返回一个数组，数组的第一项是进行匹配完整的字符串，之后的项是用圆括号捕获的结果。如果没有匹配到，返回null。')]),t._v(" "),a("p",[t._v("下面是一个使用 match() 方法的例子：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12fff87 er334 233-==80fa'")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//(5) ["12", "87", "334", "233", "80"]')]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//["12", index: 0, input: "12fff87 er334 233-==80fa", groups: undefined]')]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//["12", index: 0, input: "12fff87 er334 233-==80fa", groups: undefined]')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("如果正则表达式不包含 g 修饰符，则 str.match() 会返回和 RegExp.exec() 相同的结果。而且返回的 Array 拥有一个额外的 input 属性，该属性包含被解析的原始字符串。另外，还拥有一个 index 属性，该属性表示匹配结果在原字符串中的索引（以0开始）。与 exec() 方法不同的是，多次执行并不会改变正则对象的 lastIndex 属性。")]),t._v(" "),a("p",[t._v("如果正则表达式包含 g 修饰符，则该方法返回一个 Array ，它包含所有匹配的子字符串而不是匹配对象。捕获组不会被返回(即不返回index属性和input属性)。如果没有匹配到，则返回 null 。")]),t._v(" "),a("h3",{attrs:{id:"_4、string-prototype-replace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、string-prototype-replace","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、String.prototype.replace()")]),t._v(" "),a("p",[t._v("replace() 方法返回一个由替换值替换一些或所有匹配的模式后的新字符串。这个方法接受两个参数，第一个参数可以是一个字符串或者一个正则表达式，第二个可以是一个字符串或者一个每次匹配都要调用的函数，函数的返回值作为替换字符串。如果第一个参数是 RegExp对象，该正则所匹配的内容会被第二个参数的值替换掉。下面是一个例子：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcaaaerw'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样只会替换第一个a")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//这样会替换字符串中所有a")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/a/g")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'o'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("借助这个方法，可以实现经常见到的敏感词屏蔽功能，比如"),a("code",[t._v("/北京|百度|淘宝/g")]),t._v("这条规则就可以将字符串中所有的「北京」、「百度」、「淘宝」几个词语筛选出来。注意这里要加上 g 修饰符，筛选到第一个匹配的值就会停止搜寻。")]),t._v(" "),a("h3",{attrs:{id:"_5、string-prototype-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、string-prototype-search","aria-hidden":"true"}},[t._v("#")]),t._v(" 5、String.prototype.search()")]),t._v(" "),a("p",[t._v("search() 方法执行正则表达式和 String对象之间的一个搜索匹配。该方法接受一个正则表达式（regular expression）对象作为参数。如果传入一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象。如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引。否则，返回 -1。比如：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12fff87 er334 233-==80fa'")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/8/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//5")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("search")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/9/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//-1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_6、string-prototype-split"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、string-prototype-split","aria-hidden":"true"}},[t._v("#")]),t._v(" 6、String.prototype.split()")]),t._v(" "),a("p",[t._v("split() 方法使用指定的分隔符字符串将一个 String 对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。找到分隔符后，将其从字符串中删除，并将子字符串的数组返回。如果分隔符出现在字符串的开始或结尾，得到的数组的也会分别以空字符串作为开头项或结尾项。因此，如果字符串仅由一个分隔符实例组成，则该数组由两个空字符串组成。")]),t._v(" "),a("p",[t._v("这个方法可以指定一或两个参数，第一个参数指定表示每个拆分应发生的点的字符串，也可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。")]),t._v(" "),a("p",[t._v("第二个参数是一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。")]),t._v(" "),a("p",[t._v("当字符串为空时，split() 返回一个包含一个空字符串的数组，而不是一个空数组，如果字符串和分隔符都是空字符串，则返回一个空数组。")]),t._v(" "),a("p",[t._v("下面是一个一正则对象作为 split() 方法的第一个参数的例子，匹配正则表达式的结果将会被作为分隔符。需要注意的是，如果分隔符是包含捕获括号的正则表达式，则每次分隔符匹配时，捕获括号的结果（包括任何未定义的结果）将被拼接到输出数组中。但是，并不是所有浏览器都支持此功能：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'12fff87 er334 233-==80fa'")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\d+/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//(6) ["", "fff", " er", " ", "-==", "fa"]')]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(\\d+)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//(11) ["", "12", "fff", "87", " er", "334", " ", "233", "-==", "80", "fa"]')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h3",{attrs:{id:"_7、regexp-prototype-tostring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、regexp-prototype-tostring","aria-hidden":"true"}},[t._v("#")]),t._v(" 7、RegExp.prototype.toString()")]),t._v(" "),a("p",[t._v("返回一个字符串，其值为该正则对象的字面量形式。RegExp 对象覆盖了 Object 对象的 toString() 方法，并没有继承 "),a("code",[t._v("Object.prototype.toString()")]),t._v("。对于 RegExp 对象，toString 方法返回一个该正则表达式的字符串形式。下例输出 RegExp 对象的字符串值：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("myExp "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a+b+c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("myExp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 显示 "/a+b+c/"')]),t._v("\n\nfoo "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bar"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"g"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 显示 "/bar/g"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("hr"),t._v(" "),a("p",[t._v("上面只是大致地讲了讲正则对象在 JavaScript 中的应用，但是并没有讲解这些正则表达式到底是什么意思，感觉有点本末倒置。因为篇幅的限制还有自己并没有完全掌握的原因，所以这里也只是大致地讲一些关于正则对象的知识，学习这些知识并不需要对正则表达式有多到理解，但是如果止步于此的话，也就只能了解到正则对象在JavaScript中的一些情况而已。所以下一篇博客就把正则表达式的一些知识整理一下，本来打算写成一篇，但是这样篇幅太过紧凑，感觉不如写成两篇，整理得也更清楚。")]),t._v(" "),a("p",[t._v("几天没写博客了，又是停电又是修电脑的，节奏都被打乱了，而且偷懒偷得有点过头了。希望这几天能够重新找回状态，不然课程和毕设都做不完了，需要警惕。")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181211A/001.jpg",alt:"警惕"}})]),a("p")])},[],!1,null,null,null);s.default=e.exports}}]);