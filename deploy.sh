#!/usr/bin/env sh
set -e
yarn run build
cd dist

git init
git add -A
git commit -m 'deploy: 发布到 gh-pages'

git push -f https://github.com/xxholly32/what-i-learned-from-analysis-vuepress.git master:gh-pages

cd -