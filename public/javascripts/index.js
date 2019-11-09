const body = document.querySelector('body');
const clock = document.querySelector('.clock');
const color = document.querySelector('.color');

setInterval(() => {
  const curDate = new Date();
  let h = curDate.getHours().toString();
  let m = curDate.getMinutes().toString();
  let s = curDate.getSeconds().toString();

  const array = [h, m, s].map((el) => (el.length < 2 ? `0${el}` : el));
  [h, m, s] = array;
  const curTime = `${h}:${m}:${s}`;
  const curColor = `#${h}${m}${s}`;

  clock.textContent = curTime;
  color.textContent = curColor;

  body.style.background = curColor;
}, 1000);
