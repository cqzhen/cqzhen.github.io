[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Commonly used css 

### 上下左右剧中

```
// transform
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

```

### 文字省略符号

```
// 显示 3 行
.text_overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

```
