var saldo = 0.0
var cadena= ''
// var confirmacion = false
var intento = ''
var estado = ''


function tecla_1 () {
    var tecla = document.querySelector(".Button_1")//tomar tomo 
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_2 () {
    var tecla = document.querySelector(".Button_2")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_3 () {
    var tecla = document.querySelector(".Button_3")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_4 () {
    var tecla = document.querySelector(".Button_4")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_5 () {
    var tecla = document.querySelector(".Button_5")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_6 () {
    var tecla = document.querySelector(".Button_6")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_7 () {
    var tecla = document.querySelector(".Button_7")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_8 () {
    var tecla = document.querySelector(".Button_8")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_9 () {
    var tecla = document.querySelector(".Button_9")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_0 () {
    var tecla = document.querySelector(".Button_0")
    cadena += tecla.value
    console.log(cadena)
    if (estado == 'verif'){
        intento += '*'
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_e () {
    cadena = cadena.slice(0,-1);
    console.log(cadena)
    if (estado == 'verif'){
        intento = intento.slice(0,-1);
        verificacion() 
    }else if (estado == 'depo_1'){
        depositar_1 ()
    }else if (estado == 'ret_1'){
        retirar_1 ()
    }
}

function tecla_a () {
    if (estado == 'verif' && cadena == '9876'){
        acceso_comprobado ( )
    }else if (estado == 'depo_1'){
        depositar_2 ()
    }else if (estado == 'ret_1'){
        retirar_2 ()
    }
}

function request_11 () {
    if (estado == 'opciones'){
        cadena = ''
        depositar_1()
    }else{
        //tarea_invalida ()
    }
}

function request_12 () {
    if (estado == 'opciones'){
        saldo_actual ()
    }else if (estado == 'depo_2'){
        acceso_comprobado ()
    }else if (estado == 'saldo_'){
        acceso_comprobado ()
    }else if (estado == 'ret_2'){
        acceso_comprobado ()
    }else if (estado == 'inval'){
        acceso_comprobado ()
    }
}

function request_13 () {
    if (estado == 'opciones'){
        cadena = ''
        retirar_1()
    }else{
        //tarea_invalida ()
    }
}

function request_14 () {
    if (estado == 'opciones'){
        terminar()
    }else if (estado =='depo_2'){
        terminar()
    }else if (estado == 'saldo_'){
        terminar()
    }else if (estado == 'ret_2'){
        terminar()
    }else if (estado == 'inval'){
        terminar()
    }
}

function request_tarjeta () {
    if (estado == ''){
        verificacion()
    }else if (estado == 'fin'){
        cadena = '';
        intento ='';
        verificacion ()
    }
}


function depositar_1 (){
    estado = 'depo_1'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    parte_superior = "<code><br><br>Ingrese la cantidad a depositar<br>"
    parte_media = "<br>$" + cadena + "<br>"
    parte_inferior = "<br><br></code>"
    pantallazo.innerHTML  = parte_superior + parte_media + parte_inferior
}

function depositar_2(){
    estado = 'depo_2'
    console.log('estado: ' + estado)
    var cantidad_numero = parseFloat(cadena) 
    saldo += cantidad_numero
    var pantallazo = document.querySelector("#pantalla")
    parte_superior = "<code><br><br>Su saldo actual es:"
    parte_media = "<br>$" + saldo + "<br><br>"
    parte_inferior = "<br><-Regresar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Terminar-></code>"
    pantallazo.innerHTML  = parte_superior + parte_media + parte_inferior
    console.log("Tus fondos son:" + saldo)
}

function retirar_1 (){
    estado = 'ret_1'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    parte_superior = "<code><br><br>Ingrese la cantidad a retirar<br>"
    parte_media = "<br>$" + cadena + "<br>"
    parte_inferior = "<br><br></code>"
    pantallazo.innerHTML  = parte_superior + parte_media + parte_inferior
}

function retirar_2(){
    estado = 'ret_2'
    console.log('estado: ' + estado)
    var cantidad_numero = parseFloat(cadena)
    
    if (cantidad_numero <= saldo){
        saldo -= cantidad_numero
        var pantallazo = document.querySelector("#pantalla")
        parte_superior = "<code><br><br>Su saldo actual es:"
        parte_media = "<br>$" + saldo + "<br><br>"
        parte_inferior = "<br><-Regresar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Terminar-></code>"
        pantallazo.innerHTML  = parte_superior + parte_media + parte_inferior
        console.log("Tus fondos son:" + saldo)
    }else{
        tarea_invalida ()
    }
}

function saldo_actual (){
    estado = 'saldo_'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    parte_superior = "<code><br><br>Su saldo actual es:"
    parte_media = "<br>$" + saldo + "<br><br>"
    parte_inferior = "<br><-Regresar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Terminar-></code>"
    pantallazo.innerHTML  = parte_superior + parte_media + parte_inferior
    console.log("Tus fondos son:" + saldo)
}

function acceso_comprobado () {
    estado = 'opciones'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    pantallazo.innerHTML = "<code><-Deposito &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Retiro-><br><br>Acceso Comprobado<br>Seleccione operacion<br><br><br><-Saldo &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Terminar-> </code>"
}

function tarea_invalida () {
    estado = 'inval'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    pantallazo.innerHTML  = "<code><br>BANCO TORRO<br><br>Lo sentimos, su operacion no pudo ser procesada<br><br><-Regresar &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Terminar-></code>"
}

function bienvenida () {
    estado = 'bienv'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    pantallazo.innerHTML  = "<code><br>BANCO TORRO<br><br>Bienvenido<br> Ingrese su tarjeta<br><br></code>"
}

function terminar () {
    estado = 'fin'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    pantallazo.innerHTML  = "<code><br>BANCO TORRO<br><br>Gracias por usar el cajero<br> Vuelva pronto<br><br><br></code>"
}

function verificacion(){
    estado = 'verif'
    console.log('estado: ' + estado)
    var pantallazo = document.querySelector("#pantalla")
    parte_superior = "<code><br><br>Ingrese su NIP<br>"
    parte_media = "<br>" + intento + "<br>"
    parte_inferior = "<br><br></code>"
    pantallazo.innerHTML  = parte_superior + parte_media + parte_inferior
}
