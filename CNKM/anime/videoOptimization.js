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
            } else {
                console.error('Error al cargar el video:', xhr.status);
            }
        };
        xhr.onerror = function() {
            console.error('Error de red al intentar cargar el video.');
        };
        xhr.send();
    }

    // Precargar el video del iframe si no es un dispositivo de bajos recursos
    {
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
        introVideo.controls = true;
        introVideo.preload = 'yes';
        mainVideo.preload = 'yes';
    }
});
