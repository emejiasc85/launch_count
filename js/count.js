var month = 6; //mes del evento 0:enero, 1:febrero, ... 
var day = 1; //dia del evento 
var year = 2015; //año del evento 
var one_day = 1000*60*60*24; //tiempo en milisegundos de duracion de un dia 
var one_hour= 1000*60*60; //tiempo en milisegundos de duracion de una hora 
var one_min = 1000*60; //tiempo en milisegundos de duracion de un minuto 
var one_seg = 1000; //tiempo de duracion de 1 segundo 
var aux; //variable que me permite almacenar datos temporales 
var evento = new Date(year,month,day); //dia del evento 
var begin = true; //variable para verificar si ya inicio el evento 

function count_regressive() { 

var today = new Date(); //colocamos la hora del servidor 

if(today.getMonth()==month && today.getDay()>day) //verificamos si el evento todavia no ocurre 
begin = true; 

aux = (evento.getTime()-today.getTime()); //obtenemos los milisegundos 

var days = Math.ceil(aux/one_day); //dias que faltan 

aux = (aux%one_day); //residuo 

var hours = Math.ceil(aux/one_hour); //horas que faltan 

aux = aux%one_hour; //residuo 

var mins = Math.ceil(aux/one_min); //minutos que faltan 

aux = aux%one_min; //residuo 

var segs = Math.ceil(aux/one_seg); //segundos 


document.getElementById('show').innerHTML = days + ' Dias ' + hours + ' horas ' + mins + ' Minutos ' + segs + ' Segundos ' ; 

setTimeout("count_regressive()",1000); //para mostrar el contador regresivo 
} 