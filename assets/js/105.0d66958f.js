(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{415:function(t,a,_){"use strict";_.r(a);var v=_(40),r=Object(v.a)({},function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("div",{staticClass:"tip custom-block"},[_("p",[t._v("本来今天早上是想把这章剩下的部分看完的，结果没想到耳机没电了，就干脆先把这篇博客开起来。这几天早上都来得比较早，感觉有点适应早睡早起了（早起了就很难不早睡啊），希望这个月可以保持下去吧。")])]),t._v(" "),_("p",[t._v("到目前位置，博客都是围绕着 HTTP 协议进行介绍，HTTP 协议作为客户端与服务器之间交流的协议，其优点与重要性不言而喻。但 HTTP 也并非尽善尽美，也有许多不足之处。为了对这些缺点进行优化，才有了 HTTPS，本篇博客就对 HTTP 的不足和 HTTPS 的原理做一些介绍。")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/1.jpg",alt:"HTTPS"}})]),_("p"),t._v(" "),_("h2",{attrs:{id:"一、http-面临的安全威胁"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、http-面临的安全威胁","aria-hidden":"true"}},[t._v("#")]),t._v(" 一、HTTP 面临的安全威胁")]),t._v(" "),_("p",[t._v("早先在没有接触这方面的内容的时候（也可能是学过但是忘掉了），大概就知道 HTTPS 是比 HTTP 要更为安全的。但是至于安全在哪里，却又说不上来，面试的时候可以大致的背一下相关的内容，可是对于这方面的原理还是完全没有了解。这一节就来讲讲 HTTP 在信息安全上的缺点，大致说来，主要是这几方面：")]),t._v(" "),_("ul",[_("li",[t._v("通信使用明文（不加密），内容可能会被窃听")]),t._v(" "),_("li",[t._v("不验证通信方的身份，因此可能遭遇伪装")]),t._v(" "),_("li",[t._v("无法证明报文的完整性，所以有可能已遭篡改")]),t._v(" "),_("li",[t._v("通信方事后可以否认通信行为，缺少不可否认性")])]),t._v(" "),_("h3",{attrs:{id:"_1、通信使用明文可能被窃听"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、通信使用明文可能被窃听","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、通信使用明文可能被窃听")]),t._v(" "),_("p",[t._v("HTTP 本身不具备加密的功能，使用明文方式发送报文中的信息。互联网是由全世界的网络组成的，客户端与服务器之间进行通信时，并不能排除在通信线路上的某个环节会有窃听的行为。例如在平时工作中，使用抓包工具就可以获取到这个网络上所有的请求与相应的数据包。")]),t._v(" "),_("h3",{attrs:{id:"_2、通信方的身份被伪装"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、通信方的身份被伪装","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、通信方的身份被伪装")]),t._v(" "),_("p",[t._v("HTTP 协议中的请求与相应不会对通信方进行确认，也就是说，如果在没有对 IP 地址与端口号进行限制的情况下，任何人都可以发起请求，服务器接收到请求后都会返回一个响应。在这种情况下，服务器都无法判定请求来自何方，这些客户端有可能是伪装的，也可能并不具备访问权限。服务器对无意义的请求也照单全收，无法阻止 DoS 攻击。")]),t._v(" "),_("h3",{attrs:{id:"_3、报文的完整性可能被篡改"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、报文的完整性可能被篡改","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、报文的完整性可能被篡改")]),t._v(" "),_("p",[t._v("这里的完整性指的是，报文是否原原本本地在客户端与服务器之间传递，没有内容没有发生改变。因为 HTTP 协议无法对信息的完整性进行证明，因此即使请求或相应的内容找到了篡改，也没办法获悉。这样在请求与相应的途中，遭攻击者拦截并篡改内容的攻击被称为中间人攻击。")]),t._v(" "),_("h3",{attrs:{id:"_4、通信缺少不可否认性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、通信缺少不可否认性","aria-hidden":"true"}},[t._v("#")]),t._v(" 4、通信缺少不可否认性")]),t._v(" "),_("p",[t._v("HTTP 协议缺少对通信方身份认证的手段，也就是说，在通信结束后，通信方事后可以否认自己发送信息的行为和信息的内容，通信缺少不可否认性。")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/1.png",alt:"安全威胁"}})]),_("p"),t._v(" "),_("h2",{attrs:{id:"二、针对上述缺点的优化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、针对上述缺点的优化","aria-hidden":"true"}},[t._v("#")]),t._v(" 二、针对上述缺点的优化")]),t._v(" "),_("p",[t._v("对于上述提到的这些缺点，目前主要有这些优化方式：")]),t._v(" "),_("h3",{attrs:{id:"_1、加密信息防止被窃听"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、加密信息防止被窃听","aria-hidden":"true"}},[t._v("#")]),t._v(" 1、加密信息防止被窃听")]),t._v(" "),_("p",[t._v("目前对于防止窃听、保护信息的手段中，最为普及的就是加密技术。加密可以从通信层面或内容层面进行：")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("通信加密")]),t._v("：HTTP 协议中没有加密机制，通过 SSL/TLS 的组合使用，加密 HTTP 的通信内容。")]),t._v(" "),_("li",[_("strong",[t._v("内容加密")]),t._v("：将传输的内容本身加密。如果信息进行了加密，虽然信息内容也会被窥视，但是这样其他人可能就无法破解报文信息的含义，从而防止内容被窃听。")])]),t._v(" "),_("p",[t._v("为了实现内容加密，就需要客户端与服务器有一套相应的加密解密机制。数据的加密需要使用密钥，与此相关的加密算法主要有两种，对称加密算法与非对称加密算法。")]),t._v(" "),_("p",[t._v("对称加密使用同一个密钥进行加密解密，优点是算法公开、计算量小、加密速度快、加密效率高。对称加密算法的缺点是在数据传送前，发送方和接收方必须商定好秘钥，然后使双方都能保存好秘钥。其次如果一方的秘钥被泄露，那么加密信息也就不安全了。另外，每对用户每次使用对称加密算法时，都需要使用其他人不知道的独一秘钥，这会使得收、发双方所拥有的钥匙数量巨大，密钥管理成为双方的负担。")]),t._v(" "),_("p",[t._v("非对称加密则使用一个密钥进行加密，称为私钥；另一个密钥进行解密，称为公钥。公钥与私钥是一对，如果用公钥对数据进行加密，只有用对应的私钥才能解密。发送方生成一对密钥之后，需要将公钥提供给接受方，发送方发送经私钥加密的数据后，接受方再通过公钥解密。非对称加密算法的保密性比较好，双方无需交换密钥。但由于算法强度复杂、安全性依赖于算法与密钥但是由于其算法复杂，而使得加密解密速度没有对称加密解密的速度快。")]),t._v(" "),_("p",[t._v("为了弥补两者的缺点，取长补短，一般会将两种加密算法结合使用。即发送方先使用「非对称加密算法」加密「对称加密算法」的密钥，接受方解密获得密钥后，双方再使用「对称加密算法」加密解密数据。这样即保证了密钥的保密性，又提高了加密解密的速度，因为密钥数据的大小远比报文数据要小。")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/2.png",alt:"组合使用"}})]),_("p"),t._v(" "),_("h3",{attrs:{id:"_2、查明对方的证书"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、查明对方的证书","aria-hidden":"true"}},[t._v("#")]),t._v(" 2、查明对方的证书")]),t._v(" "),_("p",[t._v("虽然使用 HTTP 协议无法确定通信方，但是使用 SSL 则可以。SSL 不仅能够提供加密处理，还提供了一种被称为证书的手段，用于确定对方的身份。一般来说，证书由值得信任的第三方机构颁发，用于证明此客户端或服务器是真是存在的。因为伪造证书相当困难，所以双方再通信时通过确认证书，就可以完成对方身份的确认，从而减少身份被伪装的风险。")]),t._v(" "),_("p",[t._v("与此相关的，数字签名也是一种鉴别身份的方法。数字签名（又称公钥数字签名）是只有信息的发送者才能产生的别人无法伪造的一段数字串，它是一种类似写在纸上的普通的物理签名，但是使用了公钥加密领域的技术来实现的。密钥必须向接受者信任的人（身份认证机构）来注册。注册后身份认证机构给你发一个证书。对文件签名后，你把此数字证书连同文件及签名一起发给接受者，接受者向身份认证机构求证是否真地是用你的密钥签发的文件。")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/3.png",alt:"数字签名"}})]),_("p"),t._v(" "),_("p",[t._v("使用这种方法成功解决了发送方与接受方之间交换密钥的问题。此前虽然说到，双方需要一方使用私钥加密，一方使用公钥解密，但是并没有说明双方如何获取密钥。通过使用证书，可以证明对方的身份，并完成密钥的交换。专门负责颁发数字证书的系统称为 CA 系统，负责管理并运营 CA 系统的机构称为 CA 中心。所有与数字证书相关的各种概念和技术，统称为 PKI（Public Key Infrastructure）。下图即为 PKI 体系：")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/4.png",alt:"PKI 体系"}})]),_("p"),t._v(" "),_("h3",{attrs:{id:"_3、单向散列算法防止篡改"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、单向散列算法防止篡改","aria-hidden":"true"}},[t._v("#")]),t._v(" 3、单向散列算法防止篡改")]),t._v(" "),_("p",[t._v("HTTP 协议在确认报文完整性方面并不可靠，单向散列算法是目前鉴别信息是否被篡改的常用方法。单向散列算法，又称 hash 函数，Hash 函数（也称杂凑函数或杂凑算法）就是把任意长的输入消息串变化成固定长的输出串的一种函数。这个输出串称为该消息的杂凑值。一般用于产生消息摘要，密钥加密等。")]),t._v(" "),_("p",[t._v("单向散列函数的安全性是由于它的单向性，其输出不依赖于输入。平均而言，预映射值单个位的改变，将引起散列值中一半位的改变。已知一个散列值，要找到预映射的值，使它的散列值等于已知的散列值在计算上是不可行的。单向散列函数的安全性使它能用于完整性校验和提高数字签名的有效性。")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/5.png",alt:"单向散列算法"}})]),_("p"),t._v(" "),_("p",[t._v("就算是这样，使用这种方法也不能百分百验证信息是否被篡改，因为如果散列值本身被篡改的话，对方也是没有办法意识到的。为了防止这个弊端，就有必要使用 HTTPS。仅靠 HTTP 确保完整性是非常困难的。")]),t._v(" "),_("h2",{attrs:{id:"三、https-原理概述"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、https-原理概述","aria-hidden":"true"}},[t._v("#")]),t._v(" 三、HTTPS 原理概述")]),t._v(" "),_("p",[t._v("为了解决上述的这些问题，需要对 HTTP 再加上加密处理的认证等机制，添加了加密与认证机制的 HTTP 即称为 HTTPS（HTTP Secure）。HTTPS 并非一种新协议，而是 HTTP 通信接口部分用 SSL 和 TLS 协议代替了。通常，HTTP 直接和 TCP 通信，使用 SSL 时，则变为先和 SSL 通信，再由 SSL 和 TCP 通信。采用 SSL 之后，HTTP 就有了 HTTPS 的加密、证书、防篡改等功能。")]),t._v(" "),_("p",[t._v("HTTPS 采用前文提到过的两种加密算法结合使用的方法，充分利用了两者各自的优势，在交换密钥环节使用「非对称加密算法」，之后的建立通信交换报文阶段则使用「对称加密算法」。通信双方为了安全地交换公钥与私钥，会使用数字认证机构 CA 和其颁发的密钥证书，这一步骤在前文也提到了。服务器将自己的公钥在 CA 进行认证，客户端拿到服务器发来的数字证书，验证公钥的真实性，详细过程如图所示：")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/6.png",alt:"交换密钥"}})]),_("p"),t._v(" "),_("p",[t._v("接下来就来讲讲使用 HTTPS 的客户端与服务器的具体交互流程，也就是 SSL/TLS 协议的通信步骤：")]),t._v(" "),_("ol",[_("li",[t._v("浏览器将自己支持的一套加密算法发给服务器，同时发一个浏览器随机数。")]),t._v(" "),_("li",[t._v("服务器向浏览器发送选择的加密算法、服务器生成的随机数、服务器数字证书。")]),t._v(" "),_("li",[t._v("浏览器收到证书后对证书的CA签名进行验证，如果验证通过，会从证书中拿到服务器的公钥。")]),t._v(" "),_("li",[t._v("浏览器对浏览器随机数+服务器随机数进行处理，生成预备主密码。")]),t._v(" "),_("li",[t._v("浏览器用服务器的公钥对预备主密码进行加密，发给服务器。")]),t._v(" "),_("li",[t._v("服务器收到后使用自己的私钥解密出预备主密钥。")]),t._v(" "),_("li",[t._v("浏览器和服务器分别使用预备主密钥和两个随机数，生成共享主密钥")]),t._v(" "),_("li",[t._v("二者使用共享主密钥，使用对称加密算法加密数据。")])]),t._v(" "),_("p",[t._v("下面是对整个流程的图解。图中说明了使用服务器端提供的证书交换密钥，再由此生成共享密钥，建立 HTTPS 通信的整个过程。并不是每次每次 HTTPS 请求都要重复上面的流程，第一次协商主密钥后，后面的请求就使用主密钥进行对称加密通信，不需要再协商，而是通过会话 id 来识别。")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/7.png",alt:"会话流程"}})]),_("p"),t._v(" "),_("p",[t._v("当然，HTTPS 也存在问题。虽然 HTTPS 安全可靠，但也并非所有的 Web 网站都在用 HTTPS，主要有如下原因：")]),t._v(" "),_("ul",[_("li",[t._v("与纯文本通信相比，加密通信会消耗更多的 CPU 及内存资源，导致处理速度变慢。")]),t._v(" "),_("li",[t._v("SSL 必须在客户端与服务器进行加密处理，消耗更多的硬件资源，造成负载增多，而传输非敏感信息时无需加密通信。")]),t._v(" "),_("li",[t._v("购买证书的开销。所有证书都需要向认证机构（CA）购买。")])]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("以上就是本篇博客中关于 HTTPS 的内容。实际上 HTTPS 之前博客也是提过的，不过都是蜻蜓点水，只知道 HTTPS 是加密，但没有那么深入的了解相关的内容。博客的内容许多是《图解 HTTPS》中的，当然也不是全文照抄就是了，而且我这篇博客本来就是「笔记」嘛。这篇博客写的比较久，主要是因为这段时间都没有熬夜了，但是早上有没有精神，所以搞得早上和晚上都没有时间写博客。今天也是占用上班时间才写完的，不然真就写了 10 天了，那效率也太低了。这下应该立不了 flag 了，周六之前写出一篇博客来，照这几天的速度来看不太现实啊。")]),_("div",{staticStyle:{"text-align":"center"}},[_("img",{attrs:{src:"20191015A/2.jpg",alt:"不立 flag 了"}})]),_("p")])},[],!1,null,null,null);a.default=r.exports}}]);