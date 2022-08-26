const hora = document.getElementById("hora")
const minuto = document.getElementById("minuto")
const segundo = document.getElementById("segundo")
const dia = document.getElementById("dia")
const mes = document.getElementById("mes")
const ano =  document.getElementById("ano")

const relogio = setInterval (function time() {

    let dateToday = new Date ();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min= '0' + min;
    if (s < 10) s = '0' + s;

    hora.innerText = hr;
    minuto.innerText = min;
    segundo.innerText = s;

    let day = dateToday.getDate();
    let month = (dateToday.getMonth() + 1);
    let year = dateToday.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;

    dia.innerText = day;
    mes.innerText = month;
    ano.innerText = year;
})