function weekUpdate() {
  const weekDays = [
    "Sunday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Monday",
  ];
  const currentDate = new Date();
  let weekDay = weekDays[currentDate.getUTCDay()];
  document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    weekDay;
}

function timeUpdate() {
  setInterval(() => {
    const currentTime = new Date();
    const hours = currentTime.getUTCHours().toString().padStart(2, "0");
    const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
    const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
    const milliseconds = currentTime
      .getUTCMilliseconds()
      .toString()
      .padStart(3, "0");

    const formattedTime = `${hours}:${minutes}:${seconds}:${milliseconds}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
      formattedTime;
  }, 100); 
}

weekUpdate();
timeUpdate();
