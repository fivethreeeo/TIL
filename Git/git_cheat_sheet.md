##### 최초작성일 : 2021. 8. 16.<br><br>
# Git Cheat Sheet
- Set up  
[config 전체보기](#--config-전체보기)  
[Open config to edit](#--open-config-to-edit)  
[User settings(name, email)](#--user-settingsname-email)  
[vscode를 기본 에디터로 설정](#--vscode를-기본-에디터로-설정)  
[Set Auto CRLF](#--set-auto-crlf)  
[Git Aliases](#--git-aliases)  
[help 보기](#--help)  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  
[]()  
[Reference](#reference)  

## **Set up**

<br>

#### - config 전체보기
```bash
git config --list
```
<br>

#### - Open config to edit
```bash
git config --global -e
```
<br>

#### - User settings(name, email)
```bash
git config --global user.name "name" #set user.name
git config --global user.email "email" #set user.email
git config user.name #check user.name
git config user.email #check user.email
```
<br>

#### - vscode를 기본 에디터로 설정
```bash
git config --list
```
<br>


#### - Set Auto CRLF
```bash
git config --global core.autocrlf input #for Mac
git config --global core.autocrlf true #for Windows
```
<br>

#### - Git Aliases
```bash
git config --global alias.co checkout
# git checkout = git co
```
<br>

#### - help
```bash
git config --help
git config -h #short
```
<br>



<br>
<br>

### **Reference**
- [Git - Reference](https://git-scm.com/docs)
