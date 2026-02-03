@echo off
title Design Supporter Starter
set PORT=3000
echo [1/2] Web View 서버를 실행합니다 (Port: %PORT%)...
CD /D "%~dp0web-view"
:: 기존 프로세스가 있을 수 있으므로 포트 강제 지정
start cmd /k "set PORT=3000 && npm run dev"

echo.
echo [2/2] 데스크탑 에이전트를 실행합니다 (최신 소스 적용)...
CD /D "%~dp0desktop-agent"
start cmd /k "npm start"

echo.
echo ==================================================
echo 모든 서비스 시작 시퀀스가 가동되었습니다.
echo --------------------------------------------------
echo 1. 웹뷰 터미널에 'Ready' 메시지가 뜨는지 확인하세요.
echo 2. 에이전트 앱에서 로그인을 진행하세요.
echo 3. 자동으로 대시보드 화면으로 전환됩니다.
echo ==================================================
echo.
pause
exit
