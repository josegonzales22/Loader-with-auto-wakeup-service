const appUrl = "https://josegonz.netlify.app";
const checkInterval = 5000;

function checkAppStatus() {
  fetch(appUrl)
    .then((response) => {
      if (response.ok) {
        window.location.href = appUrl;
      } else {
        throw new Error("App is not available yet");
      }
    })
    .catch(() => {
      setTimeout(checkAppStatus, checkInterval);
    });
}

checkAppStatus();
