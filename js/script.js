function updateUTCTime() {
    const currentUTC = new Date();
  
    // Update current day
    const currentDayOfWeek = currentUTC.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysOfWeek[currentDayOfWeek];
    const currentDay = document.querySelector(".currentDay");
    currentDay.textContent = currentDayName;
  
    // Update current time
    const hours = currentUTC.getUTCHours();
    const minutes = currentUTC.getUTCMinutes();
    const seconds = currentUTC.getUTCSeconds();
    const formattedUTC = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    const currentTime = document.querySelector(".currentTime");
    currentTime.textContent = formattedUTC;
  
    // Update current time in milliseconds
    const milliseconds = currentUTC.getTime();
    const currentTimeInMillSec = document.querySelector(".currentTimeInMillSec");
    currentTimeInMillSec.textContent = milliseconds;
  }
  
  // Update the time, day, and milliseconds immediately and then every second
  setInterval(updateUTCTime, 1000);
  