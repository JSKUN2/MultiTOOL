var interval;
var audio = new Audio("../properti/Alarm.mp3");
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stopd);

function start() {
  var Jam = document.getElementById('jam').value;
  var Menit = document.getElementById('menit').value;
  var Detik = document.getElementById('detik').value;

  var TotalDetik = (Jam * 3600) + (Menit * 60) + parseInt(Detik);

  var HitungMundur = document.getElementById('HitungMundur');

  interval = setInterval(function () {
    var Jam = Math.floor(TotalDetik / 3600);
    var SisaDetik = TotalDetik % 3600;
    var Menit = Math.floor(SisaDetik / 60);
    var Detik = SisaDetik % 60;

    HitungMundur.innerHTML = Jam.toString().padStart(2, '0') + ':' +
      Menit.toString().padStart(2, '0') + ':' +
      Detik.toString().padStart(2, '0');

    if (TotalDetik <= 0) {
      clearInterval(interval);
      HitungMundur.innerHTML = "Waktu Habis!";
      audio.play();
      document.getElementById("start").style.display = "inline";
      document.getElementById("stop").style.display = "none";
    } else {
      TotalDetik--;
    }
  }, 1000);
  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "inline";
}

function stopd() {
  clearInterval(interval);
  document.getElementById("start").style.display = "inline";
  document.getElementById("stop").style.display = "none";
}