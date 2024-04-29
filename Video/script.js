document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('customVideo');
    var playPauseBtn = document.getElementById('customPlayPauseBtn');
    var volumeRange = document.getElementById('customVolumeRange');
  
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });
  
    volumeRange.addEventListener('input', function() {
        video.volume = volumeRange.value;
    });
});
