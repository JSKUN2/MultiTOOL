document.getElementById("TombolItem").addEventListener("click", PilihItem);
function PilihItem(){
    var InputItem = document.getElementById("Item").value;
    var DaftarItem = InputItem.split(',').map(item => item.trim());
    var Hasil = DaftarItem[Math.floor(Math.random() * DaftarItem.length)];
    document.getElementById('hasil').textContent = Hasil;
}
