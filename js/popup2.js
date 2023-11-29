document.getElementById("BuatGroup").addEventListener("click", GroupGen);

function GroupGen() {
    var InputItem = document.getElementById("Item").value;
    var Jumlah = document.getElementById("Jumlah").value;
    var DaftarItem = InputItem.split(',').map(item => item.trim());
    var Hasil = [];
    n = 0;
    while (DaftarItem.length > 0) {
        var Kelompok = [];

        for (var i = 0; i < Jumlah; i++) {
            if (DaftarItem.length > 0) {
                var IndexAcak = Math.floor(Math.random() * DaftarItem.length);
                var x = DaftarItem[IndexAcak];
                Kelompok.push(" "+x);
                DaftarItem.splice(IndexAcak, 1);
            }
        }
        n++;
        Hasil.push("Group"+n+": <br>"+Kelompok+"<br><br>");
    }
    function pisahkanDenganStringKosong(array) {
        return array.join('');
    }
    document.getElementById('hasil').innerHTML = pisahkanDenganStringKosong(Hasil);
}
