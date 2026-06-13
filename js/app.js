const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

setInterval(() => {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();
  hourEl.textContent = h;
  minuteEl.textContent = m;
  secondEl.textContent = s;
}, 1000);
