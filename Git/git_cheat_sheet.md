## Git
- VCS 중의 하나 (Version Control System)
- CVC의 단점을 보완하기 위해 (Centralized Version Control)
  - 서버에 업데이트해서 관리
  - 서버에 문제가 생기면 일을 못함
  - 오프라인에서 일을 못함
- DVC(Distributed Version Control)
  - 히스토리가 서버에만 있지 않음
  - 개발자들이 동일한 히스토리를 보유
  - 서버에 문제가 생겨도 보완 가능
- 프로젝트의 전체내용을 스냅샷해서 보유
  - 버전 사이 , 브랜치 사이 이동이 쉽고 빠름
  - 버전 관리 용이
  - 브랜치 관리로 효율적인 협업 가능

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
[]()  

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
