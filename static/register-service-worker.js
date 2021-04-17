if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((req) => console.log("Service Worker Registered"))
      .catch((err) => console.error(`Service Worker Error: ${err}`));
  });
}
