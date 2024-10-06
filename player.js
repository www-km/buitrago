function initializePlayer(videoElementId, m3u8Url) {
    var video = document.getElementById(videoElementId);
    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = m3u8Url;
        video.addEventListener('canplay', function() {
            video.play();
        });
    }
}