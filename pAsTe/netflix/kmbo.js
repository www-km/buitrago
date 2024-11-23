const episodes = [
    { title: 'HECHIZADOS 2024[spa][ing][cast]', 
      latino: 'https://terabox.com/sharing/embed?surl=E3tTOFtjDEmPU4b30DVEXA&resolution=1080&autoplay=true&mute=false&uk=4400793594669&fid=239555176765865&slid=',
      ingles: 'https://hihihaha1.xyz/?v=Tkrbnpybv',
      ingles_sub_spa: 'https://iplayerhls.com/e/7kmmijnhv8ck',  
      castellano: 'https://iplayerhls.com/e/zqf17s5woqgp' }
];

let currentEpisode = 0;
let currentLanguage = 'latino';

function changeEpisode(direction) {
    currentEpisode += direction;
    if (currentEpisode < 0) {
        currentEpisode = 0;
    } else if (currentEpisode >= episodes.length) {
        currentEpisode = episodes.length - 1;
    }
    updateVideoSource();
    updateButtons();
}

function changeLanguage() {
    const languageSelect = document.getElementById('language');
    currentLanguage = languageSelect.value;
    updateVideoSource();
}

function updateVideoSource() {
    const videoPlayer = document.getElementById('videoPlayer');
    const episodeTitle = document.getElementById('episodeTitle');
    videoPlayer.src = episodes[currentEpisode][currentLanguage];
    episodeTitle.textContent = episodes[currentEpisode].title;
}

function updateButtons() {
    document.getElementById('prevButton').disabled = currentEpisode === 0;
    document.getElementById('nextButton').disabled = currentEpisode === episodes.length - 1;
}

function createPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';
    episodes.forEach((episode, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.onclick = () => {
            currentEpisode = index;
            updateVideoSource();
            updateButtons();
        };
        pagination.appendChild(button);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    updateVideoSource();
    updateButtons();
    createPagination();
});
