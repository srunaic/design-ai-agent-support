@echo off
title Design Supporter Starter
echo.
echo [1/2] 로컬 웹뷰(Next.js)를 실행합니다...
CD /D "%~dp0web-view"
start cmd /k "npm run dev"

echo.
echo [2/2] 데스크탑 에이전트를 실행합니다 (Local First mode)...
CD /D "%~dp0desktop-agent"
start cmd /k "npm start"

echo.
echo ==================================================
echo 로컬 개발 환경 시퀀스가 가동되었습니다.
echo --------------------------------------------------
echo 1. 웹뷰 터미널(Step 1)에 'Ready on http://localhost:3000'이 뜨면 
echo 2. 에이전트 앱(Step 2)에서 로그인을 진행하세요.
echo 3. 이제 Step 5 애니메이션 탭이 포함된 최신 UI가 보입니다!
echo ==================================================
echo.
pause
exit
