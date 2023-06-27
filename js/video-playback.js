// Function that plays and pauses video if in or out of viewport
function setVideoPlayback() {
    const allVideos = document.querySelectorAll('video');
    const viewportTop = window.scrollY;
    const viewportBottom = window.scrollY + window.innerHeight;
    for (const video of allVideos) {
        const videoTop = video.getBoundingClientRect().top + window.scrollY;
        const videoBottom = video.getBoundingClientRect().bottom + window.scrollY;
        // console.log('viewportTop:', viewportTop, 'viewportBottom:', viewportBottom);
        // console.log('videoTop:', videoTop, 'videoBottom:', videoBottom);
        // video (at least partly) in viewport
        if ((videoTop < viewportBottom) && (videoBottom > viewportTop)) {
            // console.log('in viewport');
            video.play();
        }
        else {
            video.pause();
            // restart the video next time it's played
            video.currentTime = 0;
        }
    }
}

window.addEventListener('scroll', event => {
    setVideoPlayback();
})

// in case in viewport on page load
setVideoPlayback()