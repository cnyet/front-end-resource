## 常见的网络安全风险
### XSS 攻击
> XSS 是通过利用网页开发时留下的漏洞，通过巧妙的方法注入恶意指令代码到网页，使用户加载并执行攻击者恶意制造的网页程序。这些恶意网页程序通常是JavaScript，但实际上也可以包括Java、 VBScript、ActiveX、 Flash 或者甚至是普通的HTML。攻击成功后，攻击者可能得到包括但不限于更高的权限（如执行一些操作）、私密网页内容、会话和cookie等各种内容。

### XSS 防御策略 Content-Security-Policy（CSP）
内容安全策略 (CSP)是一个额外的安全层，需要配置你的网络服务器返回 Content-Security-Policy HTTP头部。

### CSRF 攻击
> CSRF(Cross Site Request Forgery)或者XSRF，是跨站请求伪造，是指一个域网站向另一个域网站发起请求功能，攻击者通过一些技术手段欺骗用户使用浏览器去访问一个自己曾经认证过的网站并执行一些敏感操作（如转账）。

### CSRF 防御策略
