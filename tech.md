### 技术扩展

1. [requestAnimationFrame](https://juejin.cn/post/7431004279819288613)：window.requestAnimationFrame(),在浏览器下次重绘之前调用其回调函数。

- 调用的频率通常是与当前显示器的刷新率相匹配，**不会产生卡顿**。
- **页面不激活时会暂停渲染**。

2. transform：使用gpu创建图层，元素依然占据空间，从而减少重排

3. [IntersectionObserver](https://juejin.cn/post/7562359784278360106)：是浏览器原生提供的「异步交叉观察器」。

- 用来高效监听「目标元素与其祖先或视口是否相交」以及「相交比例变化」。
- **不阻塞主线程、无需手动节流、精度高、代码少**

4. **（重点）**[双token](https://juejin.cn/post/7538357382452871194)：

- RBAC的一种实现方法。
- access token：访问令牌，cookie/pinia，用于访问受保护的API资源；生命周期短（通常15-30分钟）；**包含用户身份和权限信息**；频繁使用，安全风险相对较高。
- refresh token：刷新令牌，localStorage/HttpOnly Cookie，用于获取新的Access Token；生命周期长（通常7-30天）；使用频率低，安全风险相对较小；可以被撤销，强制登出，提供更好的安全控制。
- 运行流程（**无感刷新**）：登录成功返回两个 -> 请求拦截挂载access -> 401 -> 响应拦截器refresh
- 安全性平衡：短期Access Token降低泄露风险，长期Refresh Token减少用户重新登录
- 用户体验：无感知的Token续期，避免频繁登录
- 精细控制：可以撤销Refresh Token实现强制登出
- 性能优化：Access Token验证无需数据库查询，Refresh Token验证频率低

5. 什么是JWT？

- JSON

6. RBAC 权限体系
