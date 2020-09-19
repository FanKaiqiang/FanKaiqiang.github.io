(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{326:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[t._v("这篇博客是对我前一段时间关于icon学习的一次归纳。之前学完之后没有写博客，只做了笔记。最近决定坚持写些博客，因此我要把之前没写成博客的知识补回来，顺便复习一下。这次归纳的知识点是icon的各种做法。icon在网站设计中是不可或缺的，如何多快好省地把icon做出来也是非常重要的一个知识点。接下来我就将我上次学习的一些做法逐条列出。")])]),t._v(" "),a("h2",{attrs:{id:"用img显示icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用img显示icon","aria-hidden":"true"}},[t._v("#")]),t._v(" 用img显示icon")]),t._v(" "),a("p",[t._v("通过 img 元素，可以向网页中嵌入一幅图像，由此就可以达到显示icon的目的。下面先介绍一下如何将需要的icon从图像文件中提取出来的方法。")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20180926A/timg.jpg",alt:"icon"}})]),a("p"),t._v(" "),a("h4",{attrs:{id:"psd文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#psd文件","aria-hidden":"true"}},[t._v("#")]),t._v(" PSD文件")]),t._v(" "),a("p",[t._v("PSD文件用photoshop打开，是PS专有的位图文件格式。在图像制作完成后，通常需要转化为一些比较通用的图像格式（如：jpg、png、tiff、gif格式等），以便于输出到其它软件中继续编辑。使用PS从PSD中导出icon的方法主要有以下几步：")]),t._v(" "),a("ol",[a("li",[t._v("选中图层：Duplicate Layer（复制图像） → 导出")]),t._v(" "),a("li",[t._v("裁剪图层：Image → Trim（裁剪） → 裁剪完成")]),t._v(" "),a("li",[t._v("修正宽高：Image → Canvas Size → 修改宽高")]),t._v(" "),a("li",[t._v("导出为PNG：File → Export → Quick Export as PNG 或 Save for Web（Legacy）")])]),t._v(" "),a("h4",{attrs:{id:"png文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#png文件","aria-hidden":"true"}},[t._v("#")]),t._v(" PNG文件")]),t._v(" "),a("p",[t._v("PNG大家想必都很熟悉，但是要将需要的icon从PNG中取出恐怕就没有PSD那么方便了。这时还要用到PS，将需要的部分裁剪出来，再进行处理。主要有以下几个步骤：")]),t._v(" "),a("ol",[a("li",[t._v("选中PNG图片需要导出区域")]),t._v(" "),a("li",[t._v("剪切图片：Image → Crop")]),t._v(" "),a("li",[t._v("魔法棒：选中需要的区域 → 右键 → Select inverse")]),t._v(" "),a("li",[t._v("删除选中区域")]),t._v(" "),a("li",[t._v("裁剪图层：Image → Trim（裁剪） → 裁剪完成")]),t._v(" "),a("li",[t._v("修正宽高：Image → Canvas Size → 修改宽高")]),t._v(" "),a("li",[t._v("导出为PNG：File → Export → Quick Export as PNG 或 Save for Web（Legacy）")])]),t._v(" "),a("p",[t._v("使用img元素显示的icon，可以自适应宽高，图片默认会保持比例，在修改宽高时不需要同学修改 width 和 height 。")]),t._v(" "),a("h2",{attrs:{id:"用background显示icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用background显示icon","aria-hidden":"true"}},[t._v("#")]),t._v(" 用background显示icon")]),t._v(" "),a("p",[t._v("与使用"),a("code",[t._v("img")]),t._v("元素不同，用"),a("code",[t._v("background")]),t._v("就是通过显示背景图片的方法将icon的效果显示出来。如何将icon图像文件提取出来的方法前文也都提到了。下面就来看一下一个使用"),a("code",[t._v("background")]),t._v("显示icon的示例：")]),t._v(" "),a("center",[a("div",{staticClass:"icon",staticStyle:{margin:"5px 25px",border:"1px solid red",display:"inline-block",width:"100px",height:"100px",background:"transparent url(icon.jpg) no-repeat"}})]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("5px 25px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("inline-block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("transparent "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("icon.jpg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" no-repeat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 背景颜色透明，图像不平铺 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("使用"),a("code",[t._v("background")]),t._v("显示的icon不为因为"),a("code",[t._v("div")]),t._v("的改变而产出改变。使用该特性可以做雪碧图。")]),t._v(" "),a("h3",{attrs:{id:"雪碧图-css-sprite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#雪碧图-css-sprite","aria-hidden":"true"}},[t._v("#")]),t._v(" 雪碧图 CSS Sprite")]),t._v(" "),a("p",[t._v("CSS雪碧图 即CSS Sprite，也有人叫它CSS精灵，是一种CSS图像合并技术，该方法是将小图标和背景图像合并到一张图片上，然后利用css的背景定位来显示需要显示的图片部分。")]),t._v(" "),a("p",[t._v("要想获取CSS Sprite，可以借助"),a("a",{attrs:{href:"https://spritegen.website-performance.org/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[t._v("CSS Sprite generater")]),a("OutboundLink")],1),t._v("。将需要的icon上传，经过CSS Sprite generater的处理，可以得到需要的雪碧图及css、html的代码。将他们加入到网页上就可以完成icon的显示。")]),t._v(" "),a("p",[t._v("使用CSS Sprite的所有div都拥有整张图片作为背景，但只露出部分作为icon。")]),t._v(" "),a("h2",{attrs:{id:"font法（字体法）显示icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font法（字体法）显示icon","aria-hidden":"true"}},[t._v("#")]),t._v(" font法（字体法）显示icon")]),t._v(" "),a("p",[t._v("在html中，可以用一些以&开头的字符串来表示其他的字符，这些字被称为html实体，如 &nbsp;、&#160; (都是空格)等。")]),t._v(" "),a("p",[t._v("font法即是将不表示任何字符的html实体在自定义的字体中用来表示icon字体。接下来将要使用"),a("a",{attrs:{href:"http://www.iconfont.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Iconfont-阿里巴巴矢量图标库"),a("OutboundLink")],1),t._v("，借助这个网站来介绍使用font法显示icon的两种方法。")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20180926A/timg1.jpg",alt:"iconfont"}})]),a("p"),t._v(" "),a("h4",{attrs:{id:"unicode法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unicode法","aria-hidden":"true"}},[t._v("#")]),t._v(" Unicode法")]),t._v(" "),a("p",[t._v("此方法通过将字体代码copy至CSS，再将该CSS应用至html中即可。字体代码示例如下：")]),t._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iconfont'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* project id 838980 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'//at.alicdn.com/t/font_838980_xn8qp8g11lk.eot'"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("还可以使用"),a("code",[t._v("div")]),t._v("中的伪元素来放在icon字体，比如显示(&#xe614;)这一字符：")]),t._v(" "),a("div",{staticClass:"language-CSS line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".xxx::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\e614'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("在CSS中不用写“&#X”的前缀。")]),t._v(" "),a("h4",{attrs:{id:"font-class-法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#font-class-法","aria-hidden":"true"}},[t._v("#")]),t._v(" font class 法")]),t._v(" "),a("p",[t._v("该法则是直接引用http上的CSS。这两种font显示icon的方法在"),a("a",{attrs:{href:"iconfont.cn"}},[t._v("iconfont.cn")]),t._v("中都直接提供了：")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20180926A/%E6%8D%95%E8%8E%B71.png",alt:"iconfont"}})]),a("p"),t._v(" "),a("p",[t._v("font字体法可以简单地更改icon的大小与颜色。")]),t._v(" "),a("h2",{attrs:{id:"svg-icon（symbol引用法）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#svg-icon（symbol引用法）","aria-hidden":"true"}},[t._v("#")]),t._v(" SVG icon（symbol引用法）")]),t._v(" "),a("p",[t._v("SVG 是一种可缩放矢量图形（英语：Scalable Vector Graphics，SVG）是基于可扩展标记语言（XML），用于描述二维矢量图形的图形格式。可以在"),a("a",{attrs:{href:"iconfont.cn"}},[t._v("iconfont.cn")]),t._v("中获得使用SVG显示icon的帮助文档，在这个网站可以很方便地用此方法来显示icon。根据帮助文档得知，全程主要有以下几个步骤：")]),t._v(" "),a("h3",{attrs:{id:"第一步：拷贝项目下面生成的symbol代码："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一步：拷贝项目下面生成的symbol代码：","aria-hidden":"true"}},[t._v("#")]),t._v(" 第一步：拷贝项目下面生成的symbol代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"第二步：加入通用css代码（引入一次就行）："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二步：加入通用css代码（引入一次就行）：","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二步：加入通用css代码（引入一次就行）：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token style"}},[a("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".icon")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("vertical-align")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" -0.15em"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" currentColor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("h3",{attrs:{id:"第三步：挑选相应图标并获取类名，应用于页面："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第三步：挑选相应图标并获取类名，应用于页面：","aria-hidden":"true"}},[t._v("#")]),t._v(" 第三步：挑选相应图标并获取类名，应用于页面：")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("svg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("icon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("aria-hidden")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("true"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("use")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("xlink:")]),t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("#icon-xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("svg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("SVG可支持CSS，可自适应宽高，是无锯齿的矢量图。并且SVG默认居中，可以使用“fill”属性修改颜色，除此之外SVG还有许多其他属性。在性能和维护性方面也比 icon font 要出色许多，是比较推荐使用的。")]),t._v(" "),a("h2",{attrs:{id:"css-icon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-icon","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS icon")]),t._v(" "),a("p",[t._v("使用纯CSS制作icon，虽然很麻烦，但是这种方法可以锻炼CSS的能力。在这个网页："),a("a",{attrs:{href:"https://cssicon.space/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://cssicon.space/"),a("OutboundLink")],1),t._v("，可以看到很多由纯CSS制作的icon，从中可以学到许多CSS的技巧。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("这次博客大概就将现在制作icon的所有通常方法做了一个概括。可以看出，在前端工作中，合理使用工具是及其重要的，在某些方面有人工完成可能会很麻烦，但是只要能够掌握这方面的辅助工具，完成起来便事半功倍了。")])],1)},[],!1,null,null,null);s.default=e.exports}}]);