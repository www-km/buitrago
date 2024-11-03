if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
    }).catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });
}

var iframes = [ 
 {
        name: "Venom 3 el ultimo baile 2024",
        url: "https://supervideo.cc/e/13mla0ott4qr"
    }

];
var currentIframeIndex = 0;

function toggleEpisodeList() {
    const overflow = document.getElementById('overflow');
    const episodeList = document.getElementById('episodeList');
    episodeList.innerHTML = ''; // Limpiar la lista antes de llenarla
    iframes.forEach((iframe, index) => {
        const li = document.createElement('li');
        li.textContent = iframe.name;
        li.onclick = () => playEpisode(index);
        episodeList.appendChild(li);
    });
    overflow.style.display = 'block';
}

function closeOverflow() {
    document.getElementById('overflow').style.display = 'none';
}

function playEpisode(index) {
    currentIframeIndex = index;
    updateIframe();
    closeOverflow();
}

function updateIframe() {
    var mainVideo = document.getElementById('mainVideo');
    mainVideo.src = iframes[currentIframeIndex].url;
    document.getElementById('iframeName').textContent = iframes[currentIframeIndex].name;
    document.getElementById('prevButton').disabled = currentIframeIndex === 0;
    document.getElementById('nextButton').disabled = currentIframeIndex === iframes.length - 1;
}

function prevIframe() {
    if (currentIframeIndex > 0) {
        currentIframeIndex--;
        updateIframe();
    }
}

function nextIframe() {
    if (currentIframeIndex < iframes.length - 1) {
        currentIframeIndex++;
        updateIframe();
    }
}

function searchEpisodes() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var episodeList = document.getElementById('episodeList');
    episodeList.innerHTML = '';
    iframes.forEach(function(iframe, index) {
        if (iframe.name.toLowerCase().includes(input)) {
            var li = document.createElement('li');
            li.textContent = iframe.name;
            li.onclick = function() {
                currentIframeIndex = index;
                updateIframe();
                closeOverflow();
            };
            episodeList.appendChild(li);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    updateIframe();
    document.getElementById('searchInput').addEventListener('input', searchEpisodes);
});
