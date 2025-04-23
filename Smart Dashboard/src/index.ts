function loadLocation() {
  let locationSpan = document.getElementById("location");
  if (locationSpan) {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coord = pos.coords;
      locationSpan.innerText = `
            Latitude: ${coord.latitude}
            Longitude: ${coord.longitude}
            `;
    });
  }
}
function getTimeOfDayLabel() {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 8) return "Early Morning";
  if (hour >= 8 && hour < 12) return "Morning";
  if (hour >= 12 && hour < 16) return "Afternoon";
  if (hour >= 16 && hour < 20) return "Evening";
  if (hour >= 20 && hour < 24) return "Night";
  return "Late Night";
}

function setTimeLabel() {
  let timeSpan = document.getElementById("timeofday");
  if (timeSpan) {
    timeSpan.innerText = getTimeOfDayLabel();
  }
}
const notifiedSet = new Set();

const moodMessages = new Map([
  ["Morning", "Rise and shine! Great things await."],
  ["Afternoon", "A perfect time to refuel and refocus."],
  ["Evening", "You’re almost there. Keep going!"],
  ["Night", "Unwind and rest, you’ve earned it."],
  ["Late Night", "Burning the midnight oil? Don’t forget sleep!"],
]);

function sendMoodNotification(timeOfDay: string) {
  let notificationSpan = document.getElementById("notification");
  if (!("Notification" in window)) return;
  if (notifiedSet.has(timeOfDay)) return;

  const message = moodMessages.get(timeOfDay) || "";
  if (Notification.permission === "granted") {
    new Notification(message);
    notifiedSet.add(timeOfDay);
  }
  if (notificationSpan) {
    notificationSpan.insertAdjacentHTML(
      "beforeend",
      `<br>
        ${message}
            `
    );
  }
}

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    const timeOfDay = getTimeOfDayLabel();
    sendMoodNotification(timeOfDay);
  }
});
loadLocation();
setTimeLabel();
