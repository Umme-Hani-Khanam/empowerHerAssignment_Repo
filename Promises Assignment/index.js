function timer(duration, onComplete) {
  setTimeout(() => {
    onComplete(`Timer of ${duration} ms finished`);
  }, duration);
}

// Example use:
timer(2000, (message) => {
  console.log(message);
});
