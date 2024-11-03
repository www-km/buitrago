if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(registration) {
        console.log('Service Worker registrado con éxito:', registration);
    }).catch(function(error) {
        console.log('Error al registrar el Service Worker:', error);
    });
}

var iframes = [
   
    {
        name: "S01E01 Héroe fracasado",
        url: "https://abysscdn.com/?v=NoqJUM6m0"
    },
    {
        name: "S01E02 Araña Negra de la Calamidad",
        url: "https://short.ink/tPYO9H0da"
    },
 {
        name: "S01E03 Shock humano",
        url: "https://abysscdn.com/?v=0IQTFh5YF"
    },
 {
        name: "S01E04 Demasiado tarde",
        url: "https://abysscdn.com/?v=pi5jJLySA"
    },
 {
        name: "S01E05 El viaje de una carreta de codiciosos",
        url: "https://short.ink/EC0Zd0fRo"
    },
{
        name: "S01E06 La melancolía de un atractivo cuarentón",
        url: "https://short.ink/XtMmsvw_i"
    },
 {
        name: "S01E07 Refinando una medicina secreta",
        url: "https://short.ink/h74n4MFlJ"
    },
 {
        name: "S01E08 El ranking de Akuu",
        url: "https://short.ink/KdNtG5_Hv"
    },
 {
        name: "S01E09 De vida o muerte",
        url: "https://short.ink/OqAj9tBM5"
    },
 {
        name: "S01E10 La aldea oculta de los ogros",
        url: "https://short.ink/wjY7rNDLO"
    },
 {
        name: "S01E11 Adiós",
        url: "https://short.ink/ZFc-Lev8G"
    },
 {
        name: "S01E12 Guiado por la luna…",
        url: "https://short.ink/Rymo17C_0"
    },
 {
        name: "S02E01",
        url: "https://vidhidefast.com/v/w2te74mjhkfp"
    },
 {
        name: "S02E02",
        url: "https://vidhidefast.com/v/cm2tzbjnwybp"
    },
 {
        name: "S02E03",
        url: "https://vidhidefast.com/v/h7oxokmais1b"
    },
 {
        name: "S02E04",
        url: "https://sendvid.com/embed/4hoqqrc6"
    },

    {
        "name": "S02E05",
        "url": "https://sendvid.com/embed/6s7w0nma"
    },
    {
        "name": "S02E06",
        "url": "https://sendvid.com/embed/apj5dkh6"
    },
    {
        "name": "S02E07",
        "url": "https://sendvid.com/embed/aexqrxr6"
    },
    {
        "name": "S02E08",
        "url": "https://sendvid.com/embed/0g6jgo93"
    },
    {
        "name": "S02E09",
        "url": "https://vidhidevip.com/v/wwvgp312kc6d"
    },
    {
        "name": "S02E10",
        "url": "https://vidhidevip.com/embed/ykea8xvrx3zy"
    },
{
        "name": "S02E11",
        "url": "https://vidhidevip.com/embed/scpzfexg1nwu"
    },
{
        "name": "S02E12",
        "url": "https://vidhidevip.com/embed/d9qjmlmgjx1s"
    },
{
        "name": "S02E13",
        "url": "https://vidhidevip.com/embed/m4afdhq14a6v"
    },
{
        "name": "S02E14",
        "url": "https://vidhidevip.com/embed/m5mtj6szd7h5"
    },
{
        "name": "S02E15",
        "url": "https://vidhidevip.com/embed/l6v0bbec67zb"
    },
{
        "name": "S02E16",
        "url": "https://vidhidevip.com/embed/jaugufygal7c"
    },
{
        "name": "S02E17",
        "url": "https://vidhidevip.com/embed/lx8u530yf2cd"
    },
{
        "name": "S02E18",
        "url": "https://vidhidepre.com/embed/mt8q537snjkv"
    },
{
        "name": "S02E19",
        "url": "https://vidhidepre.com/embed/9it6zrw0s7fu"
    },
{
        "name": "S02E20",
        "url": "https://vidhidepre.com/embed/jl86rmvpq950"
    },
{
        "name": "S02E21",
        "url": "https://vidhidepre.com/embed/c2vw6tocypcu"
    },
{
        "name": "S02E22",
        "url": "https://vidhidepre.com/embed/f7li1ktojma5"
    },
{
        "name": "S02E23",
        "url": "https://vidhidepre.com/embed/bc3a8brp7cub"
    },
{
        "name": "S02E24",
        "url": "https://vidhidepre.com/embed/yzqfimbhiid8"
    },
{
        "name": "S02E25",
        "url": "https://vidhidepre.com/embed/uv2wcjsj94s2"
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
