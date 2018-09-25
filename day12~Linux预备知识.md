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
- systemctl 查看所有服务( status:查看服务间的依赖 ;status+进程名 查看该进程的状态 )
- systemctl start/stop 服务 : 开启/关闭服务
- systemctl disable/enable 服务：让该服务开机 不启动/启动


#### 网络管理，ip，route命令
- ifconfig ：查看网卡配置
- ip addr : 查看网卡配置
- route ： 查看路由信息

#### 命令行浏览器（支持http）
- curl ： 访问http地址
- wget ： 下载http地址

#### man + 主命令，查看改命令的帮助手册


- 防火墙服务：centeros 7.0以后 firewalld, 以前 iptables; 服务连不上时，关掉。
- centos中 apache 的服务名为 httpd, ubuntu中为 apache2
- 如果本机能连上服务，其他机器无法访问，可以修改回环地址为 0.0.0.0 ，默认为 127.0.0.1

### 进程、线程与协程
- 进程的目的就是分配系统资源的实体（cpu时间，内存）。
- 线程是操作系统能够调度运算的最小单位。
- 协程是一种用户态的轻量级线程，无法利用多核资源。
- io密集型应用的发展：多进程->多线程->事件驱动->协程
- cpu密集型应用的发展：多进程->多线程
- 调度和切换的时间：进程 > 线程 > 协程

#### top命令（进程管理器） ，ps命令
- top ： 查看当前机器的所有进程
- ps aux 查看所有进程，没权限使用 sudo。
- ps aux | grep nginx ： 在所有进程中筛选出名称包含 nginx的进程。

#### kill,pkill
- kill + pid : 强制终止该pid的进程，一般终止主进程时，其拉起的所有子进程如工作进程等，都会被终止。