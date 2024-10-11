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
    { src: "https://terabox.com/sharing/embed?surl=tya89bl7hRu7AGT-MB4HDQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=1069898159071920&slid=", name: "T01E01" },
    { src: "https://terabox.com/sharing/embed?surl=6uci9nFbXMoHOW3MXUPcmA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=127005110423675&slid=", name: "T01E02" },
    { src: "https://terabox.com/sharing/embed?surl=Wm1gCgMK_YbzSsyMqzrnVQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=858127820589416&slid=", name: "T01E03" },
    { src: "https://terabox.com/sharing/embed?surl=7jNfgzjlzUcSxEmx6cT6DA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=140239516995824&slid=", name: "T01E04" },
    { src: "https://terabox.com/sharing/embed?surl=_A-Nmub83Ziaa1RaQRxpMg&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=141638677481970&slid=", name: "T01E05" },
    { src: "https://terabox.com/sharing/embed?surl=Wq17gGe-XiTt5Jzj1-FgiQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=526152532010158&slid=", name: "T01E06" },
    { src: "https://terabox.com/sharing/embed?surl=H_0RzUUiHSFnT8WWWvw_HQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=381164176178302&slid=", name: "T01E07" },
    { src: "https://terabox.com/sharing/embed?surl=GORv_w0l8KxrbRtpPe4JWA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=977412487820838&slid=", name: "T01E08" },
    { src: "https://terabox.com/sharing/embed?surl=SbTijEYCpeQH359gTyLT2g&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=313611158581046&slid=", name: "T01E09" },
    { src: "https://terabox.com/sharing/embed?surl=POvZfCrbOFpQjAKNvkAfjQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=539298964079854&slid=", name: "T01E10" },
    { src: "https://terabox.com/sharing/embed?surl=RYeQO1AdaUDpsTixHTkv1g&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=187804134425390&slid=", name: "T01E11 " },
    { src: "https://terabox.com/sharing/embed?surl=pHfKK277400HyU67mqG8-g&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=582449968066199&slid=", name: "T01E12" },

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
