// clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    document.getElementById('time').textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();

// hidden element
function toggleDetails(charId) {
    const charContent = document.getElementById(charId);
    const details = charContent.querySelector('.char-details');
  
    if (details.style.display === 'none' || details.style.display === '') {
      details.style.display = 'block'; 
    } else {
      details.style.display = 'none';
    }
  }