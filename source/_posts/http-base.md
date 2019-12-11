---
title: 本地服务器
date: 2018-12-4 18:09:26
tags: 数据交互
---

# 本地服务器

## 一、HTTP知识点

### 1. 三次握手

- 第一次，客户端发送一些数据到 server 端，`要求建立连接`
- 第二次，server 端收到，然后发送一些数据回去，表明`可以建立连接`
- 第三次，客户端收到并检查返回的信息，若信息正确，再发送数据到 server 端，告知建立`连接成功`

<!-- more -->

### 2. HTTP报文

1. request报文
   - Method
   - URI
   - 协议版本
   - Head 头部字段
   - 内容实体
2. response报文
   - 协议版本
   - 状态码
   - 状态码的原因短语
   - Head 头部字段
   - 主体内容

### 3. Method

1. 常用：GET、POST
2. 其他：PUT（传输文件，存在安全问题不推荐）、HEAD（获取 Head 信息）、DELETE（删除文件，存在安全问题不推荐）

### 4. HTTP 状态码

- `1xx` 请求正在处理
- `2xx` 成功
- `3xx` 重定向
- `4xx` 客户端错误
- `5xx` 服务端错误

以上是状态码的分类。书中提到，全部的状态码总共有 60 多种，但实际常用的就 14 种（其实常用的不到 14 种）。下面分类别简述：

#### `2xx`

- `200` 成功
- `204` 成功，但没有返回实体。一般用于只往客户端发送信息，而不需要客户端返回内容的情况（不常见）。
- `206` 范围请求，不是全部。用 Head 中的`Content-Range`来指定范围。

#### `3xx`

- `301` 永久重定向。如`http://xxx.com`这个 Get 请求（最后没有`/`），就会被`301`到`http://xxx.com/`（最后是`/`）
- `302` 临时从定向。临时的，不是永久的。
- `304` 资源找到但是不符合请求条件，不会返回任何主体。如发送 GET 请求时，head 中有`If-Modified-Since: xxx`（要求返回更新时间是`xxx`时间之后的资源），如果此时 server 端资源未更新，则会返回`304`，即不符合要求。

#### `4xx`

- `401` 请求需认证，登录
- `403` 被拒绝，例如外域图片盗链
- `404` 请求资源未找到

#### `5xx`

- `500` 服务器执行请求期间发生错误，如程序出现 bug
- `503` 超负载或者维护停机

### 5.https

**HTTP + 加密 + 认证 + 完整性保护 = HTTPS**

## 二、前端本地服务器

下载node安装

### 1. http-server静态HTML开启服务

[官方文档]: https://github.com/indexzero/http-server

1. 全局安装

   `npm install http-server -g`

2. 找到对应文件根目录，在命令行执行

   `http-server`

   默认从8080端口开始

3. 除了第二步方法还可使用package.json文件进行运行

   ```
   > npm init 创建package.json
   > package.json中设置http-server
   "scripts": {
       "start": "http-server"
    },
   > npm start
   ```

   此方法的好处在于可以一次设置多个参数，不用每次在命令行里敲

4. 参数

   ```
   -p 端口号 (默认 8080)
   
   -a IP 地址 (默认 0.0.0.0)
   
   -d 显示目录列表 (默认 'True')，默认查找index.html文件，无法找寻时是否显示目录列表
   
   -e or --ext 如果没有提供默认的文件扩展名(默认 'html')
   
   -o 在开始服务后打开浏览器
   
   -S or --ssl 启用 https
   ```

### 2. NodeJS数据交互

注意：HTML开启的服务器和node开启的服务器不能占同一个端口

下例为JSON格式的交互server.js，响应状态只设置了200

```
let http = require('http')
let url = require('url')

// 初始化服务器
function severInit (req, res) {
  let method = req.method.toLowerCase()
  let router = url.parse(req.url).pathname
  res.writeHead(200, { // 响应状态
    'Content-Type': 'application/json', // 响应数据类型
    'Access-Control-Allow-Headers': 'Content-Type', // application/x-www-form-urlencoded, multipart/form-data, or text/plain这三种格式外，跨域请求需要填加
    'Access-Control-Allow-Origin': '*' // 允许任何一个域名访问
  })
  switch (method) {
    case 'get':
      console.log(method, router)
      break
    case 'post':
      if (router === '/api/login') postLogin(res, req)
      break
  }
}

// 登录接口
function postLogin (res, req) {
  let data = ''
  req.on('data', function (chunk) {
    data += chunk.toString()
    console.log(data)
  })
  let jsonInfo = {
    message: 'get333',
    code: 0
  }
  req.on('end', function () {
    res.write(JSON.stringify(jsonInfo)) // res 只能输出字符串或者 Buffer 类型，因此这里只能 JSON.stringify 之后再输出
    res.end()
  })
}

// 监听端口8080
http.createServer(severInit).listen(8080)
console.log('127.0.0.1:8080')

```

启动node服务器`node server.js`