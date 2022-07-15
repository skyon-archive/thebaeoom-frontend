# 더배움 백엔드

## 서버 필요 환경

1. Node.js 12.22 이상 (16 이상 권장)
2. Yarn 패키지 매니저 (`npm install -g yarn`으로 설치)

## .env

프로젝트 루트에 .env 파일을 생성하여 아래 변수를 입력합니다.

`key=value` 형식으로 각 줄에 변수를 입력합니다.

`.env.example` 파일을 참고하세요.
> `NEXT_PUBLIC_BASE_URL` 백엔드 서버 주소(맨 끝 슬래시(/) 제외) - ex) http://127.0.0.1:8000 https://api.thebaeoom.com

## 서버를 처음 시작하기 전에

`yarn install`

`yarn build`

## 서버 실행

`yarn start` - 기본 포트 3000

`yarn start -p {port}` - < port >에 서버가 실행될 포트 숫자 입력 ex) yarn start -p 8080