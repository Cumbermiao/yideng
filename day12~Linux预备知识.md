### 远程登录
- Windows常用工具：putty,Xshell,Cmder。

- ssh root@193.168.0.1 登录到该ip的服务器。
- ssh 服务默认的端口号为22， 防止外人恶意攻击可以自定义修改。
- exit 退出登录。
- 登录指定的端口号加参数 p:ssh root@193.168.0.1 -p 3001;

#### vim 命令
- vim 1.txt : 如果1.txt存在则修改内容，否则会新增该文件。
- i ： 进入到编辑模式
- esc + :wq ：退出编辑模式，w：write，q：quit ，顺序不能错。
- 查找内容（要退出编辑模式）： /+要查找的内容 ， enter之后可以通过 n(next)，向下查找符合的内容。

 
#### 常用终端快捷键
- ctrl+c: 结束正在运行的程序。
- ctrl+d: 结束输入或退出shell
- ctrl+s: 暂停屏幕输出
- ctrl+q: 恢复屏幕输出
- ctrl+l: 清屏，等同于clear
- ctrl+a/e: 快速移动光标到行首/行尾
#### systemctl 服务器管理命令

