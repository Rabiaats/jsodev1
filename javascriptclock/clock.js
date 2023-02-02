let isim = prompt("Lütfen, isminizi giriniz.")

let giris = document.querySelector("#myName")
giris.innerHTML = `${isim}`

setInterval(showTime, 1000);

function showTime(){
    var tarih = new Date();
    var gun = tarih.getDay();
    var saat = tarih.getHours(); // 0 - 23
    var dakika = tarih.getMinutes(); // 0 - 59
    var saniye = tarih.getSeconds(); // 0 - 59

var gunler=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

document.getElementById("myClock").innerHTML = `${saat}:${dakika}:${saniye} ${gunler[tarih.getDay()]}`
}