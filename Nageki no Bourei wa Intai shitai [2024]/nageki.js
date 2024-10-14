document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById("videoContainer");
    const iframe = document.createElement("iframe");
    iframe.id = "videoIframe";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy"; // Añade carga diferida
    videoContainer.appendChild(iframe);

    updateIframe(); // Llama a updateIframe para cargar el primer iframe
});

const iframes = [
    { src: "https://terabox.com/sharing/embed?surl=KkPykdUqDvTLZ5emNM5Qog&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=305507874696132&slid=", name: "T01E01 Solo quiero irme a casa" },
    { src: "https://terabox.com/sharing/embed?surl=bzpfxV9nA7Njs-c1gwglFQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=25109009172109&slid=", name: "T01E02 Quiero dejarle esto a Tino y relajarme"},
    { src: "https://terabox.com/sharing/embed?surl=_TIM5x6fwPfNIIpBw_-VSA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=25109009172109&slid=", name: "T01E03 Quiero volar por el cielo"}
];
let currentIframe = 0;

function updateIframe() {
    const iframe = document.getElementById('videoIframe');
    const iframeName = document.getElementById('iframeName');
    iframe.src = iframes[currentIframe].src;
    iframeName.textContent = iframes[currentIframe].name;
    iframeName.setAttribute('data-text', iframes[currentIframe].name); // Añade esta línea
}

function prevIframe() {
    if (currentIframe > 0) {
        currentIframe--;
        updateIframe();
        preloadNextIframe();
    }
}

function nextIframe() {
    if (currentIframe < iframes.length - 1) {
        currentIframe++;
        updateIframe();
        preloadNextIframe();
    }
}

function preloadNextIframe() {
    if (currentIframe < iframes.length - 1) {
        const nextIframe = document.createElement('iframe');
        nextIframe.src = iframes[currentIframe + 1].src;
        nextIframe.loading = 'lazy';
        document.body.appendChild(nextIframe);
        document.body.removeChild(nextIframe); // Remueve el iframe después de pre-cargarlo
    }
}
