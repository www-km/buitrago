@echo off
setlocal

REM Crear la carpeta teraboxvideouploader
mkdir "%~dp0teraboxvideouploader"

REM Descargar el archivo M3U8 usando ffmpeg
set "URL=https://play.cdn.trh999.com:3669/20241115/Nbt7UlUy/1099kb/hls/index.m3u8"
set "OUTPUT=%~dp0teraboxvideouploader\video.mp4"

REM Verificar si ffmpeg está instalado
where /q ffmpeg
if %errorlevel% neq 0 (
    echo ffmpeg no está instalado. Por favor, instálalo y asegúrate de que esté en el PATH.
    pause
    exit /b
)

REM Descargar el video
ffmpeg -i "%URL%" -c copy "%OUTPUT%"

echo Descarga completada. El video se ha guardado en la carpeta teraboxvideouploader.
pause

