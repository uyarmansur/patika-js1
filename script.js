var adınız = prompt("Adınız Soyadınızı Yazınız");

var print =  document.querySelector("#myName");

print.innerHTML = `${adınız}`;



function clock() {

	var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    const gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    const tme = new Date();
    var gun = gunler[tme.getDay()];

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = hours + ":" + minutes + ":" + seconds + " " + gun
    document.getElementById('myClock').innerHTML = time;

}

setInterval(clock, 1000);