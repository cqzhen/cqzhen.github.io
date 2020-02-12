# Git
git remote add "xxx"
git config --local -l
git config --local user.name "xxx"
git config --local user.email "xxx"

git rebase -i HEAD~xxx
git commit --amend --author="user <email>"
git rebase --continue
