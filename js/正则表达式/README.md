### 正则表达式
> 正则表达式也是对象，用于匹配字符串中字符组合的模式。这些模式用于RegExp的exec()和test()方法，String的match、matchALl、replace、search、split方法

#### 创建正则表达式
1. 使用一个正则表达式字面量，其由包含在斜杠之间的模式组成
```
var reg = /abc/;
```
2. 调用RegExp对象的构造函数
```
var reg = new RegExp('abc');
```
