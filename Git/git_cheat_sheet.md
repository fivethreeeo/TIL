##### 최초작성일 : 2021. 8. 16.<br><br>
# Git Cheat Sheet
- Set up  
  - [config 전체보기](#--config-전체보기)  
  - [Open config to edit](#--open-config-to-edit)  
  - [User settings(name, email)](#--user-settingsname-email)  
  - [vscode를 기본 에디터로 설정](#--vscode를-기본-에디터로-설정)  
  - [Set Auto CRLF](#--set-auto-crlf)  
  - [Git Aliases](#--git-aliases)  
  - [help 보기](#--help)  
- Basic  
  - []()  
  - []()  
  - []()  
  - []()  
  - []()  
  - []()  
  - []()  
- [Reference](#reference)  

## **Set Up**

  <br>

  #### - config 전체보기
  ```bash
  git config --list
  ```

  #### - Open config to edit
  ```bash
  git config --global -e
  ```

  #### - User settings(name, email)
  ```bash
  git config --global user.name "name"  #set user.name
  git config --global user.email "email"  #set user.email
  git config user.name  #check user.name
  git config user.email  #check user.email
  ```

  #### - vscode를 기본 에디터로 설정
  ```bash
  git config --list
  ```

  #### - Set Auto CRLF
  ```bash
  git config --global core.autocrlf input  #for Mac
  git config --global core.autocrlf true  #for Windows
  ```

  #### - Git Aliases
  ```bash
  git config --global alias.co checkout #git checkout = git co
  ```

  #### - help
  ```bash
  git config --help
  git config -h  #short
  ```

<br>

## **Basic**

  <br>

  #### - Git init
  ```bash
  git init #initialize git
  git rm -rf .git #delete .git
  ```

  #### - Ignoring files
  ```bash
  # 모든 .txt 파일. 디렉토리 상관 없음
  *.txt

  # 현재 디렉토리에 있는 abc.txt 만 ignore
  /abc.txt

  # Do not ignore abc.txt
  !abc.txt

  # asset 폴더 안의 모든 파일
  asset/

  # asset 폴더 안의 모든 .txt 파일
  asset/*.txt

  # asset 폴더 안의 모든 abc.txt 파일. 디렉토리 상관 없음
  asset/**/abc.txt
  ```

  #### - Staging files
  ```bash
  git add abc.txt #stage abc.txt
  git add abc.txt 123.txt #stage abc.txt, 123.txt
  git add *.txt #all files .txt
  git add * #all files
  git add . #stage everything without /.gitignore
  ```

  #### - Modifying files
  - **Removing files**
  ```bash
  rm file.txt #delete file
  git rm file.txt #removes file from working directory and staging area
  git rm --cached file.txt #removes from staging area only
  git clean -f #removes all untracked files
  git clean -fd #files and dirs
  ```
  <br>

  - **Moving files (rename)**
  ```bash
  # git mv [원본 이름] [변경할 이름]
  git mv from.txt to.txt
  git mv from.text /logs/from.text
  ```

  #### - Viewing the Staged/Unstaged changes
  ```bash
  git status
  git status -s #short status

  # changes in working directory
  git diff
  git diff --staged #changes in staging area
  git diff --cached #same as --staged
  ```

  #### - Commit
  ```bash
  git commit #commit stagged files
  git commit -m "Commit message" #commit stagged files with commit message
  git commit -am "Commit message" #commit all files with commit message
  ```

  #### - Log
  - **See history**
  ```bash
  git log #list of commits
  git log --patch #shows the difference introduced in each commit
  git log -p
  git log --oneline #oneline, short for --patch
  git log --oneline --reverse
  ```
  <br>

  - **Filtering**
  ```bash
  git log -3 #shows only the last n commits
  git log --author="author name"
  git log --grep="message" #finds in commit messages
  git log -S="code" #finds in the code
  git log --before="2021-08-17"
  git log --after="one week ago"
  git log file.txt #logs only for file.txt
  ```
  <br>

  - **History of a file**
  ```bash
  git log file.txt #history of file.txt
  git log --patch file.txt #show the changes
  ```
  <br>

  - **HEAD · Hash code**
  ```bash
  git log HEAD # same as got log
  git log HEAD~1 #HEAD에서 n 전 시점
  git log <hashcode>
  ```
  <br>

  - **Viewing a commit**
  ```bash
  git show HEAD #shows the last commit
  git show <hashcode> #shows <hashcode> commit
  git show <hashcode>:file.txt
  ```
  <br>

  - **Comparing**
  ```bash
  git diff hash1 hash2 #all changes between two commits
  git diff hash1 hash2 file.txt #changes to file.txt only
  ```
  <br>

  #### - Log
  - **See history**
  ```bash
  git log #list of commits
  git log --patch #shows the difference introduced in each commit
  git log -p
  git log --oneline #oneline, short for --patch
  git log --oneline --reverse
  ```
  <br>





### **Reference**
- [Git - Reference](https://git-scm.com/docs)
