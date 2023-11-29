var waktu;
var detik = 0;
var menit = 0;
var jam = 0;
document.getElementById("Start").addEventListener("click", start);
document.getElementById("Stop").addEventListener("click", stopw);
document.getElementById("Reset").addEventListener("click", reset);
function start() {
  waktu = setInterval(updateStopwatch, 1000);
  document.getElementById("Start").style.display = "none";
  document.getElementById("Stop").style.display = "inline";
}

function stopw() {
  clearInterval(waktu);
  document.getElementById("Start").style.display = "inline";
  document.getElementById("Stop").style.display = "none";
}

function reset() {
  clearInterval(waktu);
  detik = 0;
  menit = 0;
  jam = 0;
  hasil();
  document.getElementById("Start").style.display = "inline";
  document.getElementById("Stop").style.display = "none";
}

function updateStopwatch() {
  detik++;
  if (detik === 60) {
    detik = 0;
    menit++;
    if (menit === 60) {
      menit = 0;
      jam++;
    }
  }
  hasil();
}

function hasil() {
  var JAM = document.getElementById("jam").innerHTML = "0"+jam;
  var MENIT = document.getElementById("menit").innerHTML = "0"+menit;
  var DETIK = document.getElementById("detik").innerHTML = "0"+detik;
}

function formatTime(time) {
  return time < 10 ? '0' + time : time;
}