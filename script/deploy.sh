# 현재 버전을 가져옵니다.
cd /Users/sungkyu/jhsk/sungkyu-v2.0
current_version=$(jq -r '.version' package.json)

# 현재 버전을 .을 기준으로 분리합니다.
IFS='.' read -ra version_parts <<< "$current_version"

# 마지막 숫자를 1 증가시킵니다.
new_last_part=$((version_parts[2] + 1))

# 새로운 버전을 생성합니다.
new_version="${version_parts[0]}.${version_parts[1]}.$new_last_part"

# package.json 파일의 버전 번호를 업데이트합니다.
jq ".version = \"$new_version\"" package.json > tmp.json && mv tmp.json package.json

# 변경 사항을 커밋합니다.
git pull origin main
git add .
git commit -m "v$new_version"
git push
git tag "v$new_version"
git push --tag