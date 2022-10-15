const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const time = date.getTime();
const mins = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
document.getElementById(
  "time"
).innerHTML = `${month}/${day}/${year} ${date.getHours()}:${mins}`;
const queue = [...document.querySelectorAll(".queue.select")];
queue.forEach(e => {
  e.addEventListener("click", event => {
    e.classList.toggle("highlighted");
  });
});
