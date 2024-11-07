if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
    }).catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });
}

var iframes = [
    {
        name: "Super/man La Historia De Christopher Reeve Documental",
        url: "https://mixdrop.is/e/mkvkqedpujevkg"
    }
];
var currentIframeIndex = 0;

const servers = {
    'Super/man La Historia De Christopher Reeve Documental': {
        'es': [
            { name: 'Mixdrop', url: 'https://mixdrop.is/e/mkvkqedpujevkg' }
        ],
        'jp': [
           { name: 'Terabox', url: 'https://www.terabox.com/sharing/embed?surl=6_qq1GE48xW0zoz8mGnmtQ&resolution=1080' }
       
        ]
 
    }
};

function toggleDropdown(id) {
    const element = document.getElementById(id);
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
}

function showServers(language) {
    const serverDropdown = document.getElementById('serverDropdown');
    serverDropdown.innerHTML = '';
    servers[iframes[currentIframeIndex].name][language].forEach(server => {
        const button = document.createElement('button');
        button.textContent = server.name;
        button.onclick = () => {
            playServer(server.url);
            toggleDropdown('serverDropdown');
        };
        serverDropdown.appendChild(button);
    });
    serverDropdown.style.display = 'block'; // Asegúrate de mostrar el dropdown de servidores
}

function playServer(url) {
    var mainVideo = document.getElementById('mainVideo');
    mainVideo.src = url;
}

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
