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

### 不能捕获异步的异常
JavaScript的异步任务会加入异步队列中，当执行栈中没有可执行任务时，主线程才取出队列里的异步任务入栈执行，当异步任务执行的时候，捕获异常的函数已经在执行栈内退出了，所以异常无法捕获。
