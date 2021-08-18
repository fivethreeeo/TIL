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
  - [Git init](#--git-init)  
  - [Ignoring files](#--ignoring-files)  
  - [Staging files](#--staging-files)  
  - [Modifying files](#--modifying-files)  
  - [Viewing the Staged/Unstaged changes](#--viewing-the-stagedunstaged-changes)  
  - [Commit](#--commit)  
  - [Log](#--log)  
  - [Tagging](#--tagging)  
- Branch  
  - [Branch 생성](#--branch-생성)  
  - [Branch 관리](#--branch-관리)  
  - [Merge](#--merge)  
  - [Rebase](#--rebase)  
  - [Cherry Pick](#--cherry-pick)  
- Stash  
  - [Stash 생성](#--stash-생성)  
  - [Stash 목록](#--stash-목록)  
  - [Stash apply](#--stash-apply)  
  - [Stash 삭제](#--stash-삭제)  
- Undo  
  - [Local Changes](#local-changes)  
  - [Commit](#--commit)  
  - [Reset - 커밋 초기화](#--reset-커밋-초기화)  
  - [Revert - 커밋 되돌리기](#--revert-커밋-되돌리기)  
  - [Interactive Rebasing](#--interactive-rebasing)  
- [Remote](#--remote)
- Debuggung
  - [Blame](#--blame)
  - [Bisect](#--bisect)
- [Reference](#reference)  

## **Set Up**

  ### - config 전체보기
  ```bash
  git config --list
  ```

  ### - Open config to edit
  ```bash
  git config --global -e
  ```

  ### - User settings(name, email)
  ```bash
  git config --global user.name "name"  #set user.name
  git config --global user.email "email"  #set user.email
  git config user.name  #check user.name
  git config user.email  #check user.email
  ```

  ### - vscode를 기본 에디터로 설정
  ```bash
  git config --list
  ```

  ### - Set Auto CRLF
  ```bash
  git config --global core.autocrlf input  #for Mac
  git config --global core.autocrlf true  #for Windows
  ```

  ### - Git Aliases
  ```bash
  git config --global alias.co checkout #git checkout = git co
  ```

  ### - help
  ```bash
  git config --help
  git config -h  #short
  ```

<br>

## **Basic**

  ### - Git init
  ```bash
  git init #initialize git
  git rm -rf .git #delete .git
  ```

  ### - Ignoring files
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

  ### - Staging files
  ```bash
  git add abc.txt #stage abc.txt
  git add abc.txt 123.txt #stage abc.txt, 123.txt
  git add *.txt #all files .txt
  git add * #all files
  git add . #stage everything without /.gitignore
  ```

  ### - Modifying files
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

  ### - Viewing the Staged/Unstaged changes
  ```bash
  git status
  git status -s #short status

  # changes in working directory
  git diff
  git diff --staged #changes in staging area
  git diff --cached #same as --staged
  ```

  ### - Commit
  ```bash
  git commit #commit stagged files
  git commit -m "Commit message" #commit stagged files with commit message
  git commit -am "Commit message" #commit all files with commit message
  ```

  ### - Log
  - **Log history 보기**
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
  git log hash
  ```
  <br>

  - **Viewing a commit**
  ```bash
  git show HEAD #shows the last commit
  git show hash #shows the given commit
  git show hash:file.txt
  ```
  <br>

  - **Comparing**
  ```bash
  git diff hash1 hash2 #all changes between two commits
  git diff hash1 hash2 file.txt #changes to file.txt only
  ```
  <br>

  ### - Tagging
  - **Tag 생성**
  ```bash
  git tag v1.0.0 #lightweight tag on latest commit
  git tag v1.0.0 hash #lightweight tag on the given commit
  git show v.0.0 #shows the tag
  git tag -a v.1.0.0 -m "message" #annotated tag
  ```
  <br>

  - **Tag 목록**
  ```bash
  git tag #all the tags
  git tag -l "v1.0.*" #search certain tags
  ```
  <br>

  - **Tag 삭제**
  ```bash
  git tag -d v1.0.0 #delete the given tag
  ```
  <br>

  - **Syncing with Remote**
  ```bash
  git push origin v1.0.0 #sharing the given tag with remote
  git push origin --tags #sharing all the tags
  git push origin --delete v1.0.0 #delete a remote tag
  ```
  <br>

  - **Checking out Tags**
  ```bash
  git checkout v1.0.0 #checkout certain tag
  git checkout -b branchName v1.0.0 #create a new bracnh with the given tag
  ```
  <br>

## **Branch**
  ### - Branch 생성
  ```bash
  git branch testing #create a new branch 'testing'
  git switch testing #switches to 'testing' branch
  git checkout testing
  git switch -C testing #create and switch to 'testing'
  git checkout -b testing
  ```
  <br>

  ### - Branch 관리
  ```bash
  git branch #simple listing of all branches
  git branch -r #sees the remote branches
  git branch --all #list including remote branches
  git branch -v #sees the last commit on each branch
  git branch --merged #sees merged branches
  git branch --no-merged #sees not merged branches
  git branch -d testing #deletes the branch 'testing'
  git push origin --delete testing
  git branch --move wrong correct #rename 'wrong' to 'correct'
  git push --set-upstream origin correct #push new name
  ```
  <br>

  ### - Merge
  ```bash
  git merge featureA #merges featureA branch into the current one
  git merge --squash featureA #suqash merge, only one commit
  git merge --no-ff featureA #creates a merge commit, ff=fast forward
  git merge --continue
  git merge --abort
  git mergetool #opens merge tool
  ```
  <br>

  ### - Rebase
  ```bash
  git rebase master #rebase current branch onto the master
  git rebase --onto master service ui #take commits of the ui branch forked from the service branch and move them to master
  ```
  <br>

  ### - Cherry Pick
  ```bash
  git cherry-pick hash #해당 커밋만 현재 브랜치로 가져옴
  ```
  <br>


## **Stash**
  ### - Stash 생성
  ```bash
  git stash #make a new stash
  git stash push -m "message" #with message
  git stash --keep-index #stash but keep them in the staging area
  git stash -u #--include-untracked
  ```
  <br>

  ### - Stash 목록
  ```bash
  git stash list #see all the stashes
  git stash show hash #see the given stash
  git stash show hash -p #see the given stash with details
  ```
  <br>

  ### - Stash apply
  ```bash
  git stash apply #applies the latest stash
  git stash apply hash #applies the given stash
  git stash pop #apply and drop
  git stash branch branchName #apply stash in a new branch
  ```
  <br>

  ### - Stash 삭제
  ```bash
  git stash drop hash #deletes the given stash
  git stash clear #deletes all the stashes
  ```
  <br>

## **Undo**
  ### - Local Changes
  ```bash
  git restore file.txt #unmodifying a modified file
  git restore . #unmodifying all modified files in the directory
  git restore --staged file.txt #unstaging a staged file
  git clean -fd #removes all untracked files
  ```
  <br>

  ### - Commit
  ```bash
  git commit --amend
  git commit --amend -m "message"
  ```
  <br>

  ### - Reset (커밋 초기화)
  ```bash
  git reset --soft HEAD #removes the commit and keep changes at staging area
  git reset --mixed HEAD #removes the commit and keep changes at working directory
  git reset --hard HEAD #removes the commit and don't keep the code

  git reflog # HEAD 변경 이력
  git reset --hard hash
  ```
  <br>

  ### - Revert (커밋 되돌리기)
  ```bash
  git revert hash #reverts the given commit
  git revert HEAD~1
  gut revert --no-commit hash #reverts the given commit without revert commit
  ```
  <br>

  ### - Interactive Rebasing
  ```bash
  git rebase -i HEAD~2 #바꾸고 싶은 이전 해시코드 입력
  git rebase --continue
  git rebase --abort
  ```
  <br>

## **Remote**
  ```bash
  git clone URL #cloning
  git remote -v #shows all the remote URLs
  git remote add name URL #add a new remote with name

  git remote #inspecting
  git remote show
  git remote show origin

  git remote rename sec second #rename remote
  git remote remove second #remove remote
  ```
  - **Syncing with remotes**
  ```bash
  git fetch #pulls down all the data from remote
  git fetch origin #same as the above
  git fetch origin master #pulls down only master branch
  git pull #fetch and merge
  git pull --rebase #use rebase when pulling instead of merge
  git push
  git push origin master
  ```
  <br>

## **Debugging**
### - Blame
```bash
git blame file.txt
```
<br>

### - Bisect
  ```bash
  git bisect start
  git bisect good hash
  git bisect good
  git bisect bad
  git bisect reset
  ```

<br>
<br>

### **Reference**
- [Git - Reference](https://git-scm.com/docs)
- [Git 마스터 과정](https://academy.dream-coding.com/courses/git)