[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# 工作中遇到问题

### node 版本兼容问题

### 依赖包问题

###### ssh2 ssh2-sftp-client(sftp 上传下载文件)

```
let config = {
  host: 'ftp.*****.com',
  port: '2222',
  username: '*****',
  password: '******',
};
```

    报错：Error: Handshake failed: no matching client->server cipher
    google 一下，发现是配置字段问题: algorithms，正确用法


```
let config = {
  host: 'ftp01.*****.com',
  port: '2222',
  username: '*****',
  algorithms: {
    cipher: [
      "aes256-cbc"
    ]
  },
  password: '******',
};
```

##### 总结：想长生，用 google，半死不活就用 bing, 想殉职强烈推荐用百度




