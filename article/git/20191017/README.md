# Git

### Git 配置信息

    git remote add "xxx"
    
    git config --local -l
    
    git config --local user.name "xxx"
    
    git config --local user.email "xxx"

### Git 重置提交用户信息

    git rebase -i HEAD~xxx
    
    git commit --amend --author="user <email>"

    git rebase --continue

### Git 配置 config (多用户管理）

    生成一个公司用的SSH-Key
    ```
    ssh-keygen -t rsa -C "test@company.com” -f ~/.ssh/id_rsa
    ```
    
    生成一个自己的SSH-Key
    ```
    ssh-keygen -t rsa -C "test@own.com” -f ~/.ssh/github_rsa
    ```

    config 文件配置
    
    ```
    # 配置文件参数
    # Host : Host可以看作是一个你要识别的模式，对识别的模式，进行配置对应的的主机名和ssh文件（可以直接填写ip地址）
    # HostName : 要登录主机的主机名（建议与Host一致）
    # User : 登录名（如gitlab的username）
    # IdentityFile : 指明上面User对应的identityFile路径
    # Port: 端口号（如果不是默认22号端口则需要指定）
    ```

    测试：ssh -T git@github.com
