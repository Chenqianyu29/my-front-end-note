// 加载 Node.js 内置的 http1.1 模块，用于创建 HTTP 服务器。
const http = require("http");
// 创建服务器实例
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" }); // 响应状态码和响应头信息
  res.end("Hello HTTP/1.1"); // 响应结束并发送正文
});

// 监听端口，将服务器绑定到3000端口
server.listen(3000, () => {
  // 执行成功后的回调函数
  console.log("HTTP/1.1 server running at http://localhost:3000");
});
