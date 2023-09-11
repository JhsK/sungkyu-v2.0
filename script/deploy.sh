# 현재 버전을 가져옵니다.
current_version=$(jq -r '.version' package.json)

# 버전 번호를 1 증가시킵니다.
new_version=$(npm version "$current_version" --no-git-tag-version)

# package.json 파일의 버전 번호를 업데이트합니다.
jq ".version = \"$new_version\"" package.json > tmp.json && mv tmp.json package.json

# 변경 사항을 커밋합니다.
git add package.json
git commit -m "v$new_version"
git tag "v$new_version"
git push --tag