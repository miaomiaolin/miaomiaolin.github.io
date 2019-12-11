---
title: 常用git命令
date: 2018-5-4 12:09:11
tags: git
---

## 一、公钥和私钥

### 1. 直接找寻公钥

​	`cat ~/.ssh/id_rsa.pub`

### 2. 存放公钥、私钥的地址

<!-- more -->

#### 地址

​		`cd ~/.ssh/`

#### 内容

​		`id_rsa`   我的私钥，不可给

​		`id_rsa.pub`   我的公钥，如我给GitHub

​		`known_hosts`   我信任的人的公钥，如GitHub给我的

#### 生成公钥

​		`ssh-keygen -t rsa -C "xxxxx@xxxxx.com" `    添加一次即可，以后就直接找寻



## 二、clone

### 1. 克隆仓库默认分支

​	`git clone xxx.git`

### 2. 克隆仓库指定分支

​	`git clone -b 分支名 xxx.git`

## 三、checkout

### 1. 切换分支

​	`git checkout 分支名`

​	`git checkout -b 分支名` 生成新分支并切换

### 2. 删除修改

#### add前

​		`git checkout --file`     删除单个文件的修改

​		`git checkout .`     删除所有文件的修改

#### add后

​		`git reset HEAD --file `     删除单个文件的修改

​		`git reset HEAD .`     删除所有文件的修改

#### commit后

​		`git reset --hard HEAD^/~个数 `     回退到上一次commit的状态

​		`git reset --hard commitID `     回退到指定commit

## 四、pull

### 同步本地分支

`git pull`

`git pull --rebase`     同步本地分支在自己的修改之前

## 五、status

### 查看文件状态

`git status`

## 六、diff

### 比较文件修改地方

`git diff 文件名`

## 七、add

### 添加修改

`git add ./-A`     添加全部修改

`git add file`     添加单个文件修改

## 八、commit

### 提交修改到本地远程仓库

`git commit -m "change"`

## 九、push

#### 提交修改到远程分支

`git push`     远端存在分支

`git push --set-upstream origin 远程分支`   远端不存在分支

## 十、branch

### 1. 查看分支

​	`git branch`     查看当前分支

​	`git branch -a`     查看所有分支

### 2. 创建分支

​	`git branch file`

### 3. 删除分支

​	`git branch -d/-D`     删除本地分支

​	`git branch -r -d origin/分支名`     删除本地远程分支

​	`git branch -r -d origin/分支名`   `git push origin :分支名`     两步执行删除远程分支

### 4. 修改分支名

​	`git branch -m 旧分支名 新分支名`

## 十一、stash

### 1. 保存修改（不添加，不提交）

​	`git stash`

### 2. 查看保存

​	`git stash list`

### 3. 恢复保存

​	`git stash pop`

​	`git stash apply stash@{0}`     恢复指定stash

### 4. 移除保存

​	`git stash clear`     移除所有stash

​	`git stash drop stash@{0}`     移除指定stash

## 十二、合并分支

### 1. 按时间节点合并

​	`git merge B`

### 2. 按提交顺序合并

​	`git rebase B`     将B的commit放在本分支前

## 十三、remote

### 1. 远程端有删除分支（同步分支）

​	`git remote prune origin`

​	拓展：`git fetch`     远程端有添加新分支（同步分支）

### 2. 查看已删除分支

​	`git remote show origin`

### 3. 查看现有远程仓库地址

​	`git remote -v`

### 4. 更换远程仓库地址

​	`git remote set-url origin 新地址（url）`

## 十四、查看和摘取提交

### 1. 查看提交

​	`git log`

### 2. 摘取分支

​	`git cherry-pick <commit代码>`     将制定commit摘取到当前分支

## 十五、冲突

### 1. 查看冲突

​	`git diff`

### 2. CHERRY-PICKING

​	手动解决冲突   =>   `git add`   =>   `git commit`

### 3. REBASE

​	取消合并:   `git rebase --abort`

​	解决冲突的命令:   手动解决冲突   =>   `git add`   =>   `git rebase --continue`   =>  `git push -f` 

​	如果没有冲突:    `git push -f` 

### 4. MERGE

​	取消合并:   `git merge --abort`

​	解决冲突的命令:   手动解决冲突   =>   `git add`   =>   `git commit`

https://hexo.io/docs/deployment.html)