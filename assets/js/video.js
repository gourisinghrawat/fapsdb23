
/*====================video1=================*/
const videoFile1 = document.getElementById('video-file_1'),
      videoButton1 = document.getElementById('video-button_1'),
      videoIcon1 = document.getElementById('video-icon_1')
function playnpause(){
    if (videoFile1.paused){
        videoFile1.play()
        videoIcon1.classList.add('ri-pause-line')
        videoIcon1.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile1.pause(); 
        // We change the icon
        videoIcon1.classList.remove('ri-pause-line')
        videoIcon1.classList.add('ri-play-line')

    }
}
videoButton1.addEventListener('click', playnpause)
function finalVideo1(){
    // Video ends, icon change
    videoIcon1.classList.remove('ri-pause-line')
    videoIcon1.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile1.addEventListener('ended', finalVideo1)
/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)
