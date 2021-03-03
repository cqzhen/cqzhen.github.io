[返回导航页](https://cqzhen.github.io/blog.html "导航页面")

# Constructor

constructor 是一种用于创建和初始化 class 创建的对象的特殊方法。

### 注意

一个类中只有一个名为"constructor"的特殊方法。一个类中多次出现构造函数（constructor）方法将会抛出一个 SyntaxError 错误。

在一个构造方法中可以使用 super 关键字来调用一个父类的构造方法。

如果没有显式指定构造函数，则会添加默认的 constructor 方法。


``` 基类默认构造函数
constructor(){}
```


``` 对于派生类默认构造函数
constructor(...args){
  super(...args);
}
```
