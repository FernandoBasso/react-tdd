
const log = console.log.bind(console);

export function timerGame(callback) {
  setTimeout(function () {
    callback && callback();
  }, 1000);
}


export function countdown(callback) {
  let count = 0;
  const intervalId = setInterval(function () {
    callback(count);
    count += 1;
    if (count === 3) {
      clearInterval(intervalId);
    }
  }, 500);
};


