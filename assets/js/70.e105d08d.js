(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{380:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[t._v("好久没有写关于押题的相关博客了，本来之前想先把 JavaScript 的相关押题先整理清楚，但是现在发现有点多，干脆把 ES6 深入浅出学个大概再来整理吧。")])]),t._v(" "),a("p",[t._v("今天把 DOM 相关的押题看了一遍，内容不多，整理起来应该也不会花太多时间，今天就干脆整理一下，好久没有看过 DOM 相关的知识了，也算是顺便复习一下了。")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181228B/timg.jpg",alt:"复习"}})]),a("p"),t._v(" "),a("h2",{attrs:{id:"_1、dom-事件模型是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、dom-事件模型是什么","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、DOM 事件模型是什么")]),t._v(" "),a("p",[t._v("DOM 事件模型此前我写过博客对此知识点进行归纳："),a("a",{attrs:{href:"http://franko.top/1811/20181109A/#DOM-%E4%BA%8B%E4%BB%B6%E6%A8%A1%E5%9E%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("【归纳】DOM 事件模型"),a("OutboundLink")],1),t._v("。面试碰到这道题可以通过三个要点进行回答，分别是事件在 DOM 树中传播的三个阶段，捕获阶段、目标阶段与冒泡阶段。")]),t._v(" "),a("p",[t._v("至于冒泡、捕获这些名词的概念，在网络上并没有搜索出很好的答案。所以直接查看 W3C 提供的的关于 DOM 的文档，没有找到中文的，但是翻译一下还是可以看出个大概的，可以回答的问题：")]),t._v(" "),a("p",[t._v("DOM事件流在DOM树中传播途径如图所示：")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181228B/001.svg",alt:"DOM"}})]),a("p"),t._v(" "),a("p",[t._v("事件对象将会通过上图的路径被分派到事件目标。该传播路径反映了文档的分层树结构。路径中的最后一项是事件触发目标，路径中的起始项被称为目标的祖先，目标项前面的项目则是目标的父项。")]),t._v(" "),a("p",[t._v("一旦确定了传播路径，事件对象就会经过几个事件阶段，其中包括捕获阶段、目标阶段和冒泡阶段。事件对象完成这些阶段，如下所述。事件不支持某个阶段，或者事件对象的传播已停止，则将跳过该阶段。例如，如果事件对象的 bubbles 属性设置为false，则将跳过冒泡阶段；如果在分派之前此事件对象调用了 "),a("code",[t._v("stopPropagation()")]),t._v(" 方法，则将阻止捕获和冒泡阶段中当前事件的进一步传播。")]),t._v(" "),a("p",[t._v("三个阶段的简单概括：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("捕获阶段：事件对象通过目标的祖先从根元素传播到目标的父级。该阶段也称为捕获阶段。浏览器检查元素的最外层祖先，是否在捕获阶段中注册了一个事件处理程序，如果是，则运行它。然后它移动到下一个元素，并执行相同的操作依此类推，直到到达目标元素。")])]),t._v(" "),a("li",[a("p",[t._v("目标阶段：事件对象到达事件对象的事件目标。该阶段也称为目标阶段。如果事件类型指示事件未冒泡，则事件对象将在此阶段完成后暂停。")])]),t._v(" "),a("li",[a("p",[t._v("冒泡阶段：事件对象以相反的顺序传播到目标的祖先，从目标的父级开始到根元素结束。该阶段也称为冒泡阶段。浏览器检查实际点击的元素是否在冒泡阶段中注册了一个事件处理程序，如果是，则运行它。然后它移动到下一个直接的祖先元素，并做同样的事情，直到它到达根元素。")])])]),t._v(" "),a("p",[t._v("需要注意的是，如果监听的元素是被点击的元素，那么捕获监听器不一定在冒泡监听器之前触发，执行顺序是由监听在代码中的顺序决定的，写在前面的先触发。这是因为此时是处于目标阶段，是在捕获与冒泡阶段之外的。")]),t._v(" "),a("h2",{attrs:{id:"_2、移动端的触摸（touch）事件了解吗？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、移动端的触摸（touch）事件了解吗？","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、移动端的触摸（touch）事件了解吗？")]),t._v(" "),a("p",[t._v("这个问题就是要看过文档才能回答的了，事实上我对触摸事件也了解甚少，平时做的页面一般点击事件用的比较多，也很少去做关于移动端的页面测试。接下来简要地对触摸事件进行讲解，我也是要现在来临时恶补这个知识点了。下面是 MDN 关于触摸事件的一些概括：")]),t._v(" "),a("p",[t._v("触摸事件（touch event）可响应用户手指（或触控笔）对屏幕或者触控板操作，给基于触控的用户界面提供了可靠支持。")]),t._v(" "),a("p",[t._v("触摸事件接口是较为底层的 API，可为特定程序提供多点触控交互（比如双指手势）的支持。多点触控交互开始于一个手指（或触控笔）开始接触设备平面的时刻。随后其他手指也可触摸设备表面，并随意进行划动。当所有手指离开设备平面时，交互结束。整个交互期间，程序接收开始、移动、结束三个阶段的触摸事件。")]),t._v(" "),a("p",[t._v("触摸事件与鼠标事件类似，不同的是触摸事件还提供同一表面不同位置的同步触摸。TouchEvent 接口将当前所有活动的触摸点封装起来。Touch 接口表示单独一个触摸点，其中包含参考浏览器视角的相对坐标。")]),t._v(" "),a("p",[t._v("触摸事件有三个接口 (Touch, TouchEvent 和 TouchList) 和以下事件类型:")]),t._v(" "),a("ul",[a("li",[t._v("touchstart - 当触摸点放置在触摸面上时触发。")]),t._v(" "),a("li",[t._v("touchmove - 当触摸点沿触摸表面移动时触发。")]),t._v(" "),a("li",[t._v("touchend - 当触摸点从触摸表面移除时触发。")]),t._v(" "),a("li",[t._v("touchcancel - 当触摸点以实现特定的方式中断（例如，创建的触摸点太多）时触发。")])]),t._v(" "),a("p",[t._v("Touch对象表示在触控设备上的触摸点，TouchEvent 是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件，TouchList 对象代表多个触点的一个列表。关于触摸事件的了解的回答主要要回答到上面的几种事件类型。")]),t._v(" "),a("p",[t._v("如何使用触摸事件模拟 swipe事件？移动H5开发中经常用到滑动效果（页面上移、下移、向左滑动、向右滑动等），浏览器并没有内置swipe事件，可以通过touch事件（touchstart、touchmove和touchend）模拟swipe效果。主要实现思路就是记录两次 touchmove 的位置差，如果后一次在前一次的右边，说明向右滑了。")]),t._v(" "),a("h2",{attrs:{id:"_3、事件委托是什么，有什么好处？"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、事件委托是什么，有什么好处？","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、事件委托是什么，有什么好处？")]),t._v(" "),a("p",[t._v("假设父元素有 4 个子元素，不监听这 4 个子元素，而是直接监听父元素，然后看触发事件的元素是哪个子元素，这就是事件委托。")]),t._v(" "),a("p",[t._v("具体地说，就是如果你想要在大量子元素中单击任何一个都可以运行一段代码，你可以将事件监听器设置在其父节点上，并将事件监听器设置在冒泡阶段触发，这样就不用每个子节点单独设置事件监听器。")]),t._v(" "),a("p",[t._v("事件委托不止是有节省监听器的好处。借助事件委托，还能监听到动态生成的子元素。即便监听器在子元素生成之前就设置了，在子元素生成之后触发事件仍然能够监听到。")]),t._v(" "),a("p",[t._v("下面是一个简单的事件委托的实现代码：")]),t._v(" "),a("div",{staticClass:"language-JavaScript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" eventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n element"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("eventType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("target\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matches")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("element "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n             el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n             "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n         el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentNode\n     "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n     el "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" element\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 工资 12k+ 的前端写的事件委托")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ul"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'li'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br")])]),a("p",[t._v("函数接受四个参数：委托元素、事件类型、监听元素的选择器、回调函数。上面的函数就是监听 element 事件中符合 selector 选择器的元素的 eventType 事件的触发，如果监听到了就触发 fn。")]),t._v(" "),a("p",[t._v("当 element 中有元素触发了eventType 事件，就会对这个元素的选择器进行检查，如果符合就触发 selector 回调 fn，如果不符合就检查此元素的父元素。依次类推，如果直到检查到 element 元素都没有检查到符合的元素就不触发回调。这就是这个事件委托的大致实现原理。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("以上面就是关于 DOM 的面试题的押题内容，大概地把面试中可能会问到的一些问题做了简单的回答，如果是面试碰到这些问题，希望到时候还能记起来吧。其中关于移动端的触摸事件，我还是谈不上有多少了解，本篇博客也只是粗浅地谈了谈，毕竟我还没有自己用过几次触摸事件，实在是惭愧。以后有机会自己试试用 touch 实现 swipe ，把触摸事件搞清楚再回来整理触摸事件的博客好了。")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181228B/001.jpg",alt:"触控"}})]),a("p")])},[],!1,null,null,null);s.default=e.exports}}]);