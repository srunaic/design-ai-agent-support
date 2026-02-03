@echo off
title Design Supporter Starter
echo.
echo [1/1] 데스크탑 에이전트를 실행합니다 (Remote Web App)...
CD /D "%~dp0desktop-agent"
:: 에이전트 실행
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
