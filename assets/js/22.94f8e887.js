(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{332:function(t,s,a){"use strict";a.r(s);var n=a(40),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",[t._v("今天晚上本来想做完Canvas画板的，但是其中因为一些事情耽误了一些时间，而且之前学的怎么做的方法以及一些细节都忘得差不多了。感觉有点惭愧，但是只能明天再做了。但是今天晚上总不能什么也没干，所以今天就继续写一篇关于JS实现算法的博客。现在也天色晚了，就写一篇短的，划划水。")])]),t._v(" "),a("p",[t._v("这次就讲一下选择排序，和冒泡排序相似，它也是给数字排序的一种算法。")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181007A/timg.jpg",alt:"划水"}})]),a("p"),t._v(" "),a("p",[t._v("先来看看百度百科上的定义：")]),t._v(" "),a("blockquote",[a("p",[t._v("选择排序（Selection sort）是一种简单直观的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，直到全部待排序的数据元素排完。 选择排序是不稳定的排序方法。")])]),t._v(" "),a("p",[t._v("现有一串待排序的数字，需要用选择排序完成排序，如果使用自然语言描述，大概需要以下步骤：")]),t._v(" "),a("ol",[a("li",[t._v("将数组中第一个数字标记为“最小数”，与第二个数字比较。")]),t._v(" "),a("li",[t._v("若第一个数字大于第二个数字，则将第二个数字标记为“最小数”"),a("br"),t._v("若第二个数字大于第一个数字，则第一个数字仍为“最小数”。")]),t._v(" "),a("li",[t._v("将“最小数”与第三个数字比较，得出的较小的数标记为最小数。")]),t._v(" "),a("li",[t._v("继续向后比较，重复步骤3，经过n-1次比较后得到数组中的最小数（n为数组长度）。")]),t._v(" "),a("li",[t._v("将最小数与第一个数字交换位置，第一轮排序完成。")]),t._v(" "),a("li",[t._v("第二轮排序从第二个数字开始，排序完成后数组第二小的数字与第二个数字交换位置。")]),t._v(" "),a("li",[t._v("经过n-1轮排序，所有小数字都被大数字前方，排序完成。")])]),t._v(" "),a("p",[t._v("下面是一张选择排序的动图演示，可以看出，其中的排序过程和我在上文使用自然语言描述的方法基本一致：")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181007A/timg1.gif",alt:"选择排序"}})]),a("p"),t._v(" "),a("p",[t._v("以下则是通过JS实现选择排序的代码：")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sectionSort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        min "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" j"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                min"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("j\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("min"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("其中：")]),t._v(" "),a("ol",[a("li",[t._v("“for(let min=i=0;i < arr.length-1;i++)”其中i代表排序的轮数，排序需要经过length-1轮的排序。")]),t._v(" "),a("li",[t._v("同时i也代表第一个排序的数字在数组中的下标值，第一个数此时被标记为最小数，即“min=i=0”。")]),t._v(" "),a("li",[t._v("其中length为数组长度。每经过一次排序i（排序轮数）加1，i=length-1时退出循环，完成排序。")]),t._v(" "),a("li",[t._v("每轮排序开始时min=i，即将下标为i的数字标记为最小数。")]),t._v(" "),a("li",[t._v("“for(let j = 0; j < arr.length-1-i; j++)”这一段代表当前被选中比较的数组的下标，每次比较将会在到下标为length-1-i时完成该轮比较，即j=length-i-1时退出循环。")]),t._v(" "),a("li",[t._v("arr[min] > arr[j]时，将min赋值为j，即将j标记为最小数。")]),t._v(" "),a("li",[t._v("得出该轮排序的最小数后，将最小数与下标为i的数交换位置。")])]),t._v(" "),a("p",[t._v("下面是在浏览器中代码的实现效果，可见可以正常运行：")]),a("div",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"20181007A/%E6%8D%95%E8%8E%B71.png",alt:"选择排序的实现"}})]),a("p"),t._v(" "),a("p",[t._v("选择排序的时间复杂度为 O(n^2)，数组长度每增加10倍，排序长度增加100倍。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("由此可见，虽然在JS的实现上，选择排序的代码看起来比冒泡排序要长一点点，但是起到的效果是相同的。通过冒泡排序，可以渐渐地将较大的数字往右边移动。而通过选择排序，每次都是将最小的数字取出，并放在最前方。这大概就是两种排序在思路上的区别。")]),t._v(" "),a("p",[t._v("此次博客对选择排序的分析就先告一段落了，因为水平有限的原因，分析地很粗浅。写这些博客主要还是为了起到一个复习原理，捋清楚之前学的代码的作用。以后会继续以同样地方式分析其他的算法。")])])},[],!1,null,null,null);s.default=r.exports}}]);