// WZ
var now = new Date();
var days = new Array('Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu');
var months = new Array('Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
                                }
today =  days[now.getDay()] + ", " + date + " " + months[now.getMonth()] + " " + (fourdigits(now.getYear())) ;

document.write(today);
// WZ
