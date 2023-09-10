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
  const currentUTCTime = new Date().getTime();
  document.querySelector('[data-testid="currentUTCTime"]').textContent =
    currentUTCTime;
}

weekUpdate();
timeUpdate();
