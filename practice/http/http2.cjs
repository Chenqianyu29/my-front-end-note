// 加载 Node.js 内置的 http2 模块，用于创建 HTTP/2 服务器。
const http2 = require("http2");
// 加载 fs 模块，用来读取本地证书与私钥文件
const fs = require("fs");

// 创建基于 TLS 的 HTTP/2 服务器实例
const server = http2.createSecureServer({
  key: fs.readFileSync("server.key"), // 读取私钥文件
  cert: fs.readFileSync("server.crt"), // 读取证书文件
  // 如果需要兼容Http1.1，需要设置 allowHTTP11: true
  // allowHTTP11: true,
});

// 监听 "stream" 事件，当客户端发来 HEADERS 帧（一个新的请求）时触发该事件
// stream 是单次请求的通道（可双向读写）；headers 是请求头信息
server.on("stream", (stream, headers) => {
  stream.respond({
    "content-type": "text/plain", // 响应头信息，纯文本
    ":status": 200, // 伪首部，用于指定响应状态码
  });
  stream.end("Hello HTTP/2"); // 响应结束并发送正文
});

// 启动服务器监听 3001 端口；回调中打印日志确认服务器启动成功
server.listen(3001, () => {
  console.log("HTTP/2 server running at https://localhost:3001");
});
