document.addEventListener("DOMContentLoaded", function() {
    const videoContainer = document.getElementById("videoContainer");
    const iframe = document.createElement("iframe");
    iframe.id = "videoIframe";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy"; // Añade carga diferida
    iframe.src = "https://terabox.com/sharing/embed?surl=UPQT8dhAO5Gx2OKZpibIoA&resolution=1080"; // URL del iframe
    videoContainer.appendChild(iframe);
});