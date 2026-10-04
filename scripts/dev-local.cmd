@echo off
cd /d "%~dp0.."
echo Checking free space on C: ...
for /f "tokens=3" %%a in ('dir /-c ^| find "bytes free"') do set FREE=%%a
echo.

if not exist "node_modules\vite" (
  echo Installing dependencies ^(needs ~500MB+ free on C:^)...
  call npm install
  if errorlevel 1 (
    echo.
    echo Install failed. Free disk space, then run:
    echo   npm cache clean --force
    echo   npm install
    pause
    exit /b 1
  )
)

echo.
echo Starting Raj Houlage site at http://127.0.0.1:5174/
echo Press Ctrl+C to stop.
call npm run dev -- --host 127.0.0.1 --port 5174
