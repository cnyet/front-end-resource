### 异步解决方案
1. jQuery.Deferred()
2. Promise
3. Generator-yield
4. Async/Await

Primse对象来源于jQuery.Deferred()的灵感。

### 异步注意的问题
1. 异步不能用 try-catch 捕获错误
2. 异步回调嵌套可能会很深
3. 多个异步回调同时执行，不能同步回调的结果