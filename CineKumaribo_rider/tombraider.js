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
    { src: "https://terabox.com/sharing/embed?surl=8mZMiIyqTGJ8-Tj6yf64-g&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=605337627753120&slid=", name: "T01E01" },
{ src: "https://terabox.com/sharing/embed?surl=27tW0ISpS7kCHhUl7yNoFA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=212895351405938&slid=", name: "T01E02" },
{ src: "https://terabox.com/sharing/embed?surl=X2QHg1rcYtrNs-yNCP-8qw&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=71323761151691&slid=", name: "T01E03" },
{ src: "https://terabox.com/sharing/embed?surl=tuN_D7aDzuGgAijyeaOthg&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=287763410540081&slid=", name: "T01E04" },
{ src: "https://terabox.com/sharing/embed?surl=Bi56f75ZK2SP6Lr3haPOfA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=190536608456199&slid=", name: "T01E05" },
{ src: "https://terabox.com/sharing/embed?surl=TXueim4e9xmvzgQ2UEQwZQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=144471881109021&slid", name: "T01E06" },
{ src: "https://terabox.com/sharing/embed?surl=a-RAutxxGgY4r5xPk1dfuQ&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=464799929554797&slid=", name: "T01E07" },
{ src: "https://terabox.com/sharing/embed?surl=bO16iIDT6FperFVo44ltog&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=959704153623156&slid=", name: "T01E08" }
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
