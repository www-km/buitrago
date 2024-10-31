if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
    }).catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });
}

var iframes = [
    {url: "https://terabox.com/sharing/embed?surl=cwdt9dJBwYxn0LrWC66QEA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=112586840611394&slid=", name: "Episodio 001"},
    {url: "https://terabox.com/sharing/embed?surl=abqqsr-NvtiWSI9yfPQBzg&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=1008272566902301&slid=", name: "Episodio 002"},
    {url: "https://terabox.com/sharing/embed?surl=rKDozj3G8pQx3Cp0JrzNVg&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=833290771867259&slid=", name: "Episodio 003"},
    {url: "https://terabox.com/sharing/embed?surl=HE9bs6ZhHnH6Zi3URGFmPA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=675670008905838&slid=", name: "Episodio 004"},
    {url: "https://terabox.com/sharing/embed?surl=Kv5XkszWl0uHN3ElfocK7A&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=168365740114384&slid=", name: "Episodio 005"},
    {url: "https://terabox.com/sharing/embed?surl=wUpPlEOvZF43bkAB7-G_yw&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=300703111369899&slid=", name: "Episodio 006"},
    {url: "https://terabox.com/sharing/embed?surl=nz0v-i1DJ9u57AN4_OsQkw&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=675931388308793&slid=", name: "Episodio 007"}
    /*{url: "https://terabox.com/sharing/embed?surl=ihFyNR3Bv2HW1BZhiwTfiA&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=632612467299407&slid=", name: "008 ¡No hay suficiente amor!"},
    {url: "https://terabox.com/sharing/embed?surl=_gIWWBjuxYTk2K-CArK55w&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=460798318990109&slid=", name: "009 ¡No hay suficiente trabajo en equipo!"},
    {url: "https://terabox.com/sharing/embed?surl=aMaCOMutJmE2jbE73aM0EA&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=17026626055436&slid=", name: "010 ¡No se puede hacer nada!"},
    {url: "https://terabox.com/sharing/embed?surl=iCWocQY-u0phrpq4XHHTAA&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=215269004174797&slid=", name: "011 ¡No hay de qué preocuparse ahora!"},
    {url: "https://terabox.com/sharing/embed?surl=UT-LNMwtBzqI6tZCGFFunA&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=972159456213197&slid=", name: "012 ¡Nadie sabe lo que depara el futuro!"},
    {url: "https://terabox.com/sharing/embed?surl=q4o2-CrrnDpZ0zcgTqj5SQ&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=538501037472026&slid=", name: "013 ¡No es un buen PV! FINAL"}*/
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
