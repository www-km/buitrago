 const adVideo = document.getElementById('adVideo');
        const adContainer = document.getElementById('adContainer');
        const adWarning = document.getElementById('adWarning');
        const playButton = document.getElementById('playButton');
        const mainContent = document.getElementById('mainContent');

        playButton.onclick = function() {
            adWarning.style.display = 'none';
            adContainer.style.display = 'block';
            adVideo.play();
        };

        adVideo.onended = function() {
            adContainer.style.display = 'none';
            mainContent.style.display = 'block';
        };

        adVideo.ontimeupdate = function() {
            if (adVideo.currentTime > 0 && adVideo.currentTime < adVideo.duration && adVideo.paused) {
                alert('No se puede adelantar o pausar el anuncio. La página se cerrará.');
                window.close();
            }
        };