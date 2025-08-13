const playBtn = document.getElementById('playAudioBtn');
const audio = document.getElementById('myAudio');
const headerTitle = document.getElementById('headerTitle');
const profileVideo = document.getElementById('profileVideo');

playBtn.addEventListener('click', () => {
  audio.play().catch(e => {
    alert("Ses çalınırken bir sorun oluştu: " + e.message);
  });
  playBtn.style.display = 'none';
  profileGifVideo.style.display = 'block'; // Küçük video görünür olsun
});

