//day
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

//time
function timeUpdate() {
  const updateUTCTimeElement = () => {
    const currentTime = new Date().getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent =
      currentTime;
  };

  updateUTCTimeElement();

  setInterval(updateUTCTimeElement, 100);
}

weekUpdate();
timeUpdate();
