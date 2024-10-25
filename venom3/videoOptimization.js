document.addEventListener('DOMContentLoaded', function() {
    var introVideo = document.getElementById('introVideo');
    var mainVideo = document.getElementById('mainVideo');
    var isLowEndDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;

    // Ocultar el iframe hasta que el video introductorio termine
    mainVideo.style.display = 'none';

    // Función para manejar el final del video introductorio
    introVideo.onended = function() {
        mainVideo.style.display = 'block';
        introVideo.style.display = 'none';
    };

    // Función para precargar el video del iframe
    function preloadIframeVideo() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', mainVideo.src, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
            if (xhr.status === 200) {
                var blob = xhr.response;
                var url = URL.createObjectURL(blob);
                mainVideo.src = url;
            }
        };
        xhr.send();
    }

    // Precargar el video del iframe si no es un dispositivo de bajos recursos
    if (!isLowEndDevice) {
        preloadIframeVideo();
    }

    // Manejar la pausa del video para guardar el estado
    mainVideo.addEventListener('pause', function() {
        sessionStorage.setItem('videoTime', mainVideo.currentTime);
    });

    // Restaurar el estado del video al reproducir
    mainVideo.addEventListener('play', function() {
        var savedTime = sessionStorage.getItem('videoTime');
        if (savedTime !== null) {
            mainVideo.currentTime = savedTime;
        }
    });

    // Optimizar el rendimiento en dispositivos de bajos recursos
    if (isLowEndDevice) {
        introVideo.controls = false;
        introVideo.preload = 'none';
        mainVideo.preload = 'none';
    }
});