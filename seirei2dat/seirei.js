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
    { src: "https://terabox.com/sharing/embed?surl=TyKu33otFIzua3pWIR158A&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=637389966422299&slid=", name: "T02E01" },
    { src: "https://terabox.com/sharing/embed?surl=BRTXStAoKDvvc2f-PEuxpg&resolution=720&autoplay=true&mute=false&uk=4400793594669&fid=637389966422299&slid=", name: "T02E02" }
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
