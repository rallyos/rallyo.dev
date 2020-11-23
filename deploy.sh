#!/bin/sh
# https://gohugo.io/hosting-and-deployment/hosting-on-github/#build-and-deployment

echo "Deleting public folders"
rm -rf public
mkdir public
git worktree prune
rm -rf .git/worktrees/public

# Worktrees ref - https://git-scm.com/docs/git-worktree
# git worktree add --track -b <branch> <path> <remote>/<branch>
echo "Checking out gh-pages branch into public"
git worktree add -B gh-pages public origin/gh-pages

echo "Building..."
hugo -t gravity-assist

echo "Setting up git credentials"
remote_repo="https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
git config --local user.email "shiftingphotons@users.noreply.github.com"
git config --local user.name "Dimitar Ralev"


echo "Publishing..."
cd public
git add --all
git commit -m “Publish”
git push --force "${remote_repo}"

echo "Done"
