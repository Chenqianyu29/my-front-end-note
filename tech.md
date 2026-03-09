# 技术扩展

#### 什么是requestAnimationFrame？

- [requestAnimationFrame](https://juejin.cn/post/7431004279819288613)：window.requestAnimationFrame(),在浏览器下次重绘之前调用其回调函数。

- 调用的频率通常是与当前显示器的刷新率相匹配，**不会产生卡顿**。
- **页面不激活时会暂停渲染**。

#### 为什么使用transform而不是absolute

- transform：使用gpu创建图层，元素依然占据空间，从而减少重排

#### 什么是IntersectionObserver

- [IntersectionObserver](https://juejin.cn/post/7562359784278360106)：是浏览器原生提供的「异步交叉观察器」。

- 用来高效监听「目标元素与其祖先或视口是否相交」以及「相交比例变化」。
- **不阻塞主线程、无需手动节流、精度高、代码少**

#### 什么是双token？

- [双token](https://juejin.cn/post/7538357382452871194)是RBAC的一种实现方法。

- access token：访问令牌，cookie/pinia，用于访问受保护的API资源；生命周期短（通常15-30分钟）；**包含用户身份和权限信息**；频繁使用，安全风险相对较高。
- refresh token：刷新令牌，localStorage/HttpOnly Cookie，用于获取新的Access Token；生命周期长（通常7-30天）；使用频率低，安全风险相对较小；可以被撤销，强制登出，提供更好的安全控制。
- 运行流程（**无感刷新**）：登录成功返回两个 -> 请求拦截挂载access -> 401 -> 响应拦截器refresh
- 安全性平衡：短期Access Token降低泄露风险，长期Refresh Token减少用户重新登录
- 用户体验：无感知的Token续期，避免频繁登录
- 精细控制：可以撤销Refresh Token实现强制登出
- 性能优化：Access Token验证无需数据库查询，Refresh Token验证频率低

#### 什么是JWT

- JSON Web Token：是一种 Token 的实现标准和实现方式，用于用户身份认证和信息传递。
- 由Header头部、Payload荷载和Signature签名组成：JWT = Base64Url(Header) + "." + Base64Url(Payload) + "." + Base64Url(Signature)

#### 什么是RABC权限体系

- RBAC作为当前使用范围最广的一种权限设计模型，有3个基础组成部分，分别是：用户、角色和权限。RBAC通过定义角色的权限，并对用户授予某个角色从而来控制用户的权限，实现了用户和权限的逻辑分离（区别于ACL模型）。不同角色对应不同权限，用户可充当多个角色。

#### 了解setInterval和setTimeOut时间不准确的问题

1. 原因：500ms不准确

- JavaScript 是单线程的，如果事件循环中有其他任务阻塞了执行，定时器的回调可能会延迟执行。
- 定时器的回调函数过长，累积误差通常会导致下一个回调函数的执行比预期的要晚。

2. 解决办法：使用raf代替定时器，它会在浏览器下一次重绘之前执行。

#### 如何用状态基驱动UI

1. JQ react/vue 对比
2. 状态驱动UI的意思是不直接操作UI，而是根据状态进行渲染页面，数据发生变化时，页面进行更新。
3. 如果不使用这样做，会出现if-else if的层层嵌套，不利于维护。
4. 方法一：状态变量驱动
5. 方法二：定义状态字典驱动
