# 1단계: Node.js 빌드
FROM node:lts-alpine as build
WORKDIR /app

# package.json과 package-lock.json을 먼저 복사하여 의존성 설치
COPY package.json package-lock.json ./
RUN npm ci

# 프로젝트 파일을 복사하고 빌드
COPY . .
RUN npm run build  # React 프로젝트 빌드 후 build/ 폴더 생성

# 2단계: nginx로 배포
FROM nginx:stable-alpine

# nginx의 html 디렉토리를 먼저 생성 (이미 존재할 수 있음)
RUN mkdir -p /usr/share/nginx/html

# 빌드된 React 애플리케이션 파일을 nginx의 html 디렉토리로 복사
COPY --from=build /app/build/ /usr/share/nginx/html/

# nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 포트 80을 외부에 노출
EXPOSE 80

# nginx를 백그라운드가 아닌 포그라운드에서 실행
CMD ["nginx", "-g", "daemon off;"]
