(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{584:function(s,e,t){"use strict";t.r(e);var a=t(13),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("blockquote",[t("p",[s._v("参考文章：")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://blog.csdn.net/yezhenxu1992/article/details/51731237",target:"_blank",rel:"noopener noreferrer"}},[s._v("深入剖析NodeJS的异步IO（CSDN）"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnblogs.com/linuxtop/p/12422383.html#:~:text=Node.js%20is%20a%20platform%20built%20on%20Chrome%E2%80%99s%20JavaScript,data-intensive%20real-time%20applications%20that%20run%20across%20distributed%20devices.",target:"_blank",rel:"noopener noreferrer"}},[s._v("NodeJs详解（博客园）"),t("OutboundLink")],1)]),s._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/93289115",target:"_blank",rel:"noopener noreferrer"}},[s._v("NodeJS异步IO详解（知乎）"),t("OutboundLink")],1)])])]),s._v(" "),t("h1",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("Node最自豪的优势就是“单线程实现异步IO”。实现这个异步又需要事件循环机制的支持。")]),s._v(" "),t("ul",[t("li",[s._v("node所谓的单线程，只是主线程是单线程，所有的网络请求或者异步请求都交给了内部的线程池去实现，本身只负责不断的往返调度，由事件循环不断驱动事件执行。")]),s._v(" "),t("li",[s._v("node之所以单线程可以处理高并发的原因，得益于libuv层的事件循环机制，和底层线程池实现。")])]),s._v(" "),t("h1",{attrs:{id:"一、事件驱动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、事件驱动"}},[s._v("#")]),s._v(" 一、事件驱动")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("事件驱动")]),s._v("，是指在持续事务管理过程中，进行决策的一种策略，即跟随当前时间点上出现的事件，调动可用资源，执行相关任务，使不断出现的问题得以解决，防止事务堆积。")])]),s._v(" "),t("p",[t("strong",[s._v("事件驱动机制")]),s._v("是通过内部单线程高效率地维护"),t("strong",[s._v("事件循环")]),s._v("队列来实现的，没有多线程的资源占用和上下文的切换。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Node.js 使用事件驱动模型，当web server接收到请求，就把它关闭然后进行处理，然后去服务下一个web请求。\n\n当这个请求完成，它被放回处理队列，当到达队列开头，这个结果被返回给用户。\n\n这个模型非常高效可扩展性非常强，因为webserver一直接受请求而不等待任何读写操作。（这也被称之为非阻塞式IO或者事件驱动IO）\n\n在事件驱动模型中，会生成一个主循环来监听事件，当检测到事件时触发回调函数。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"事件循环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[s._v("#")]),s._v(" 事件循环")]),s._v(" "),t("p",[t("u",[s._v("Node中的事件循环和 浏览器中的完全是不同的东西。")])]),s._v(" "),t("p",[s._v("Node采用V8作为js的解析引擎，而IO处理方面使用了自己设计的libuv，libvu是一个基于事件驱动的跨平台抽象层，封装看不同操作系统一些底层特性，对外提供统一的API，事件循环机制也是它里面实现的。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://s2.loli.net/2022/03/26/qBUnLmHdYRbJe18.jpg",alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"_1-事件循环总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-事件循环总结"}},[s._v("#")]),s._v(" "),t("strong",[s._v("（1）事件循环总结")])]),s._v(" "),t("p",[s._v("事件循环就是主线程从主线程的事件队列里面不停循环的读取事件，驱动了所有的异步回调函数的执行，事件循环总共7个阶段，每个阶段都有一个异步任务，当所有阶段被顺序执行一次后，事件循环完成了一个tick。")]),s._v(" "),t("h3",{attrs:{id:"_2-事件循环分析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-事件循环分析"}},[s._v("#")]),s._v(" "),t("strong",[s._v("（2）事件循环分析")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("   ┌───────────────────────────┐\n┌─>│           timers          │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │     pending callbacks     │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n│  │       idle, prepare       │\n│  └─────────────┬─────────────┘      ┌───────────────┐\n│  ┌─────────────┴─────────────┐      │   incoming:   │\n│  │           poll            │<─────┤  connections, │\n│  └─────────────┬─────────────┘      │   data, etc.  │\n│  ┌─────────────┴─────────────┐      └───────────────┘\n│  │           check           │\n│  └─────────────┬─────────────┘\n│  ┌─────────────┴─────────────┐\n└──┤      close callbacks      │\n   └───────────────────────────┘\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br")])]),t("p",[s._v("每个阶段都有一个执行的回调FIFO队列。尽管每个阶段都有其自己的特殊方式，但是通常，当事件循环进入给定阶段时，它将执行该阶段特定的任何操作，然后在该阶段的队列中执行回调，直到队列耗尽或执行回调的最大数量为止。当队列已为空或到达回调限制时，事件循环将移至下一个阶段，依次类推。")]),s._v(" "),t("ol",[t("li",[t("code",[s._v("timers")]),s._v("：此阶段执行由setTimeOut 和 setInterval 设置的回调")]),s._v(" "),t("li",[t("code",[s._v("pending callbacks")]),s._v("：执行推迟到下一个循环迭代的I/O回调。")]),s._v(" "),t("li",[t("code",[s._v("idle，prepare")]),s._v("：仅在内部使用。")]),s._v(" "),t("li",[t("code",[s._v("poll")]),s._v("：取出新完成的I/O事件；执行与I/O相关的回调（除了关闭回调，计时器调度的回调和setImmediate之外，几乎所有这些回调）适当时，node将在此处阻塞。")]),s._v(" "),t("li",[t("code",[s._v("check")]),s._v("：在这里调用setImmediate 回调")]),s._v(" "),t("li",[t("code",[s._v("close callbacks")]),s._v("：一些关闭回调，例如 socket.on('close',...)")])]),s._v(" "),t("p",[t("strong",[s._v("详细分析")]),s._v("：")]),s._v(" "),t("ul",[t("li",[s._v("主线程执行代码（V8上），能够触发各种异步任务：\n"),t("ul",[t("li",[s._v("宏任务：I/O，setTimeOut，setInterval，setImmediate（script本身是宏任务）")]),s._v(" "),t("li",[s._v("微任务：progress.nextTick，promise（process.nextTick在 promise之前执行，即先执行完所有的 process.nextTick 的任务，再执行完所有的 promise 任务）")])])]),s._v(" "),t("li",[s._v("主线程执行完成，"),t("strong",[s._v("进入第一阶段：timers")]),s._v("（setTimeOut、setInterval），主要检查是否有定时器计时超时对应的阀值，注意，在这个阶段，定时器的数据结构是最小堆，根据设置的阀值就知道谁的执行顺序先。直到执行所有的定时器回调，才执行微任务，进入下一个阶段。")]),s._v(" "),t("li",[t("strong",[s._v("pending callbacks | I/O callbacks")]),s._v("，检查I/O队列（上一轮poll留下来），比如文件读取、写入，执行I/O任务，执行微任务，进入下一阶段。")]),s._v(" "),t("li",[t("strong",[s._v("idle，prepare")]),s._v(" 是内部实现，就不说了。")]),s._v(" "),t("li",[t("strong",[s._v("poll轮询阶段")]),s._v("，为啥需要它？？？\n"),t("ul",[t("li",[s._v("timer阶段和 pending callbacks 阶段有各种回调（包括微任务），这些回调也是能够触发异步任务，因此，即使当pending callbacks 完成所有微任务后，I/O队列和定时器队列还是存在大量的任务等待执行。")]),s._v(" "),t("li",[t("code",[s._v("poll")]),s._v(" 首先查看 是否存在已经超时的定时器，存在，回到timer阶段重新走（这个只会在进入poll的时候，做一次判断）")]),s._v(" "),t("li",[t("code",[s._v("poll")]),s._v("发现没有超时的定时器，查看I/O队列是否存在任务，执行任务队列的任务，但是，每执行完成一个任务就执行所有的微任务")]),s._v(" "),t("li",[t("code",[s._v("poll")]),s._v("执行完任务发现为空，那么检查是否存在setImmediate任务注册，如果存在那么结束poll，进入下一阶段。")])])]),s._v(" "),t("li",[t("code",[s._v("check")]),s._v("执行 setImmediate")]),s._v(" "),t("li",[s._v("close callbacks 执行关闭回调")])]),s._v(" "),t("blockquote",[t("p",[s._v("注意：pending callbacks 和 poll 阶段是核心，他们都处理I/O回调 => 本质上是共用一个I/O任务队列，但是pending callbacks 不负责收集 I/O回调 到 I/O任务队列，而poll能够收集，因此pending callbacks 只能在每次执行完成 poll 后的下一轮事件循环（poll是有最长执行时间和最大执行回调个数，到了限制之后，即使I/O队列还存在任务也得退出，进行到下一阶段）")])]),s._v(" "),t("h1",{attrs:{id:"二、异步、非阻塞i-o"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、异步、非阻塞i-o"}},[s._v("#")]),s._v(" 二、异步、非阻塞I/O")]),s._v(" "),t("blockquote",[t("p",[s._v("NodeJs提供的很多模块都是异步执行的。比如，文件操作的函数。")])]),s._v(" "),t("h3",{attrs:{id:"一个异步i-o的大致流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个异步i-o的大致流程"}},[s._v("#")]),s._v(" "),t("strong",[s._v("一个异步I/O的大致流程")])]),s._v(" "),t("p",[s._v("① 发起I/O调用")]),s._v(" "),t("ol",[t("li",[s._v("用户通过js代码调用nodejs的核心模块，将回调函数和参数传入核心模块")]),s._v(" "),t("li",[s._v("将回调函数和参数封装")])]),s._v(" "),t("p",[s._v("② 执行回调")]),s._v(" "),t("ol",[t("li",[s._v("操作完成将结果存储到请求对象的result属性上，并发出完成通知。")]),s._v(" "),t("li",[s._v("循环事件，如果有未完成的，就进入对象请求I/O观察者队列，之后当做事件处理。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("关于阻塞I/O和 非阻塞IO的通俗理解，可以看上面相关链接的博客园部分。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);