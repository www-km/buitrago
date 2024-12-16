if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
    }).catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });
}

var iframes = [
    {
        name: "SO1E01",
        url: "https://terabox.com/sharing/embed?surl=q2lP6ruDtKfJR9LVtSISgg&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=972620301678624&slid="
    },
    {
        name: "S01E02",
        url: "https://terabox.com/sharing/embed?surl=BfvOps0aUIlG4hHUll3AHQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=1064903117027575&slid="
    },
 {
        name: "S01E03",
        url: "https://terabox.com/sharing/embed?surl=B2cTisBBJYzKswBKSc2csg&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=936540130958982&slid="
    },
 {
        name: "S01E04",
        url: "https://terabox.com/sharing/embed?surl=ui-9h5m4iiUpwG8yY-lGyA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=1051662077398435&slid="
    },
 {
        name: "S01E05",
        url: "https://terabox.com/sharing/embed?surl=-oci2aSwhmV-5psvTtVMdQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=231854253371089&slid="
    },
 {
        name: "S01E06",
url: "https://terabox.com/sharing/embed?surl=fzoaZ-tiVyxC5ZkQ-KAnvw&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=278015928596714&slid="
},
 {
        name: "S01E07",
url: "https://terabox.com/sharing/embed?surl=s2B4_jFbp28gYBN1HdRjzA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=326928953207267&slid="
},
 {
        name: "S01E08",
url: "https://terabox.com/sharing/embed?surl=FLaPHsjOFc02sZZaHKWC7Q&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=704190213583578&slid="
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
