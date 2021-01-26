# 块格式化上下文 BFC

创建块格式化上下文的情况：
- 根元素（< html >）
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- display 为 inline-block、table-cell、table、flex、grid
- overflow 不为 visible 的块元素