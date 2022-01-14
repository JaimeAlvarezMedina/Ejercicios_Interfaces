function dados(num_dados){
    var num;
    document.getElementById("resultados_dados").innerHTML="";
    for(var i=0;i<num_dados; i++){
        num=Math.round((Math.random()* (6-1)+1));//Generamos un numero random y lo redondeamos
        switch(num){//Dependiendo del numero que salga, nos mostrara su numero, pero con una imagen de un dado
            case 1:
                document.getElementById("resultados_dados").innerHTML+="<img src='Num1.png' id='imagen_dados' class='dado'></img>";
                break;
            case 2:
                document.getElementById("resultados_dados").innerHTML+="<img src='num2.png' id='imagen_dados' class='dado'></img>";
                break;
            case 3:
                document.getElementById("resultados_dados").innerHTML+="<img src='Num3.png' id='imagen_dados' class='dado'></img>";
                break;
            case 4:
                document.getElementById("resultados_dados").innerHTML+="<img src='Num4.png' id='imagen_dados' class='dado'></img>";
                break;
            case 5:
                document.getElementById("resultados_dados").innerHTML+="<img src='Num5.png' id='imagen_dados' class='dado'></img>";
                break;
            case 6:
                document.getElementById("resultados_dados").innerHTML+="<img src='Num6.png' id='imagen_dados' class='dado'></img>";
                break;
        }
    }
}

//Declaramos aqui las variables para que los valores de las variables se mantengan fuera de las funciones
var eleccion;
var num_uno;
var num_dos;
var porcentaje_aciertos= new Array();
var i=0;

function mates(){
    document.getElementById("resultados_mates").innerHTML="<h3>Introduzca la repuesta:</h3>";
    document.getElementById("respuesta").innerHTML="";//limpiamos el div antes de introducir los datos
    document.getElementById("boton_empezar_mates").style.display="none";
    document.getElementById("boton_corregir_mates").style.display="block";
    eleccion=Math.round(Math.random()*(4-1)+1);
    switch(eleccion){
        case 1:
                num_uno=Math.round((Math.random()* (100-1)+1));
                num_dos=Math.round((Math.random()* (100-1)+1));
                document.getElementById("resultados_mates").innerHTML+= num_uno+" + "+ num_dos;
            break;
        case 2:
                num_uno=Math.round((Math.random()* (100-1)+1));
                num_dos=Math.round((Math.random()* (100-1)+1));
                document.getElementById("resultados_mates").innerHTML+= num_uno+" * "+ num_dos;
            break;
        case 3:
                num_uno=Math.round((Math.random()* (100-1)+1));
                num_dos=Math.round((Math.random()* (100-1)+1));
                if(num_uno>num_dos){
                    document.getElementById("resultados_mates").innerHTML+= num_uno+" - "+ num_dos;
                }
                else{
                    document.getElementById("resultados_mates").innerHTML+= num_dos+" - "+ num_uno;
                }
            break;
        case 4:
                num_uno=Math.round((Math.random()* (100-1)+1));
                num_dos=Math.round((Math.random()* (100-1)+1));
                if(num_uno>num_dos){
                    document.getElementById("resultados_mates").innerHTML+= num_uno+" / "+ num_dos;
                }
                else{
                    document.getElementById("resultados_mates").innerHTML+= num_dos+" / "+ num_uno;
                }
            break;
    }
    document.getElementById("resultados_mates").innerHTML+="<br><input type='text' id='resultado_operaciones_jugador'>";
}

function corregir(){
    var resultado_jugador=document.getElementById("resultado_operaciones_jugador").value;
    var escribir=document.getElementById("respuesta");
    var boton_corregir=document.getElementById("boton_corregir_mates");
    var boton_porcentajes=document.getElementById("boton_porcentaje");
    var boton_empezar=document.getElementById("boton_empezar_mates");//Les asignamos una variable debido a que como le vamos a llamar muchas veces, por si acaso ocurre un error o un cambio, podemos cambiar mas sencillamente
    var correcto=false;
    switch(eleccion){
        case 1:
            if(num_uno+num_dos==resultado_jugador){
                correcto=true;

            }
            else{
                correcto=false;
            }
            break;
        case 2:
            if(num_uno*num_dos==resultado_jugador){
                correcto=true;
            }
            else{
                correcto=false;
            }
            break;
        case 3:
            if(num_uno>num_dos){
                if(num_uno-num_dos==resultado_jugador){
                    correcto=true;
                }
                else{
                    correcto=false;
                }
            }
            else{
                if(num_dos-num_uno==resultado_jugador){
                    correcto=true;
                }
                else{
                    correcto=false;
                }
            }
            break;
        case 4:
            if(num_uno>num_dos){
                if(num_uno/num_dos==resultado_jugador){
                    correcto=true;
                }
                else{
                    correcto=false;
                }
            }
            else{
                if(num_dos/num_uno==resultado_jugador){
                    correcto=true;
                }
                else{
                    correcto=false;
                }
            }
            break;       
    }
        if(correcto==true){
            escribir.innerHTML="<h4>Correcto</h4>  <h5>¿Desea jugar de nuevo?</h5>";
            boton_empezar.style.display="block";
            boton_corregir.style.display="none";
            boton_porcentajes.style.display="block";
            porcentaje_aciertos[i]=1;//vamos a definir el 1 como que ha acertado
            i++;
        }
        else{
            escribir.innerHTML="<h4 id='erroneo'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
            boton_porcentajes.style.display="block";
            porcentaje_aciertos[i]=0;//vamos a definir el 0 como que ha fallado
            i++;
        }
}
function porcentaje(){
    var num_acertadas=0;
    var porcentaje;
    for(var cont=0;cont<porcentaje_aciertos.length;cont++){
        num_acertadas=num_acertadas+porcentaje_aciertos[cont];//Al haberle puesto un 1 a las que son correctas, pues solo es sumarlo y dividirlo entre el total
    }
    porcentaje=(num_acertadas/porcentaje_aciertos.length)*100;
    document.getElementById("porcentaje").innerHTML="<h5>Su porcentaje de acierto es:</h5> <h4>"+porcentaje+"%</h4>";
    if(porcentaje<50){
        document.getElementById("video").innerHTML="<video src='Video.mp4' id='aprender' width='640' height='480' controls></video>";//Si baja del 50% le mostramos un video para que aprenda
    }
    if(porcentaje>=50){
        document.getElementById("video").innerHTML="";//Si es mas del 50% lo quitamos
    }
}
var array_usuarios=new Array();
var array_contrasenas=new Array();
function registro(){
    var user=document.getElementById("user").value;
    var contra=document.getElementById("pass").value;
    array_usuarios.push(user);
    array_contrasenas.push(contra);
}
var encontrado=0;
function login(){
    
    for(var x=0;x<array_usuarios.length;x++){
        if(document.getElementById("user").value==array_usuarios[x] && document.getElementById("pass").value==array_contrasenas[x]){//Comprueba que la contraseña y usuario que han introducido sea correcta
            document.getElementById("iniciar").innerHTML=("<h1 id='login_correcto'>Bienvenido</h1> <h3 id='login_correcto'>"+document.getElementById("user").value+"</h3>");
        }
    }
    if(encontrado==0){//Si no se encuentra pone el mensaje, para que no entre mas de una vez, al entrar cambia el numero
        document.getElementById("iniciar").innerHTML+=("<p id='erroneo'>El usuario o contraseña no son correctos</p>");
        encontrado++;
    }
}

function atrapado(){
    document.getElementById("titulo").innerHTML="<h1>¡Capturado!</h1>";
    document.getElementById("pillala").innerHTML="<img src='raton.png' onclick='muerto()' id='ratoncito' class='raton'>"
    document.getElementById("ratoncito").classList.replace("raton","muerto");
    document.getElementById("titulo").innerHTML+="<p>Pinchale en la panza</p>";
}

function muerto(){
    $(document).ready(function(){
            $("#ratoncito").click(function(){
                    $("#ratoncito").fadeOut(3000);/*-----------------------------------------------------------*/
                }
            )
        }
    )
    document.getElementById("ratoncito").style.display="none";
    document.getElementById("pillala").innerHTML+=("<button class='empezar' onclick='empezar()'>Empezar</button>");
    document.getElementsByClassName("empezar")[0].style.opacity = "1";
}

function empezar(){
    document.getElementsByClassName("todo")[0].innerHTML=("<div id='titulo'><h1>Atrapa al raton</h1></div><div id='pillala'><img src='raton.png' onclick='atrapado()' id='ratoncito' class='raton'></div>")
}

function comprobar(){
    /* Cogemos los valores del formulario */
    var dni=document.getElementsByName("dni")[0].value;
    var correo=document.getElementsByName("correo")[0].value;
    var nombre=document.getElementsByName("nombre")[0].value;
    var apellidos=document.getElementsByName("apellidos")[0].value;
    var edad=document.getElementsByName("edad")[0].value;
    var cp=document.getElementsByName("cp")[0].value;
    var contra=document.getElementsByName("contra")[0].value;
    var contra2=document.getElementsByName("contra2")[0].value;
    var comentario=document.getElementsByName("comentario")[0].value;
    /* Cogemos los lugares donde vamos a escribir*/
    var escribir_dni=document.getElementById('error_dni');
    var escribir_correo=document.getElementById('error_correo');
    var escribir_edad=document.getElementById('error_edad');
    var escribir_cp=document.getElementById('error_cp');
    var escribir_contra=document.getElementById('error_contra');
    var escribir_nombre=document.getElementById('error_nombre');
    var escribir_apellidos=document.getElementById('error_apellidos');
    var escribir_edad=document.getElementById('error_edad');
    var escribir_comentario=document.getElementById("error_comentario");
    /* Y creamos las variable para la comprobacion de las partes del formulario*/
    var conf_dni;
    var conf_cp;
    var conf_contra;
    var conf_correo;
    var conf_nombre;
    var conf_apellidos; 
    var conf_edad;
    var conf_comentario;
    var conf_total;

    conf_comentario=comprobar_comentario(comentario);
    if(conf_comentario==0){
        escribir_comentario.innerHTML=("<p id='letra_error'>No se pueden poner insultos en los comentarios</p>");
    }
    else{
        escribir_comentario.innerHTML=("")
    }
    conf_nombre=comprobar_nombre(nombre);
    if(conf_nombre==0){
        escribir_nombre.innerHTML=("<p id='letra_error'>El nombre no puede estar vacio</p>");
    }
    else{
        escribir_nombre.innerHTML=("")
    }
    conf_apellidos=comprobar_apellido(apellidos);
    if(conf_apellidos==0){
        escribir_apellidos.innerHTML=("<p id='letra_error'>El apellido no puede estar vacio</p>");
    }
    else{
        escribir_apellidos.innerHTML=("")
    }
    conf_edad=comprobar_edad(edad);
    if(conf_edad==0){
        escribir_edad.innerHTML=("<p id='letra_error'>La edad no puede estar vacia</p>");
    }
    else{
        escribir_edad.innerHTML=("")
    }

    conf_dni=comprobar_dni(dni);
    if(conf_dni==0){
        escribir_dni.innerHTML=("<p id='letra_error'>El dni que ha introducido no es correcto</p>");
    }
    else{
        escribir_dni.innerHTML=("")
    }
    conf_correo=comprobar_correo(correo);
    if(conf_correo==0){
        escribir_correo.innerHTML=("<p id='letra_error'>El correo introducido no es valido</p>");
    }
    else{
        escribir_correo.innerHTML=("");
    }
    conf_cp=comprobar_codigopostal(cp);
    if(conf_cp==0){
        escribir_cp.innerHTML=("<p id='letra_error'> El codigo postal no es valido</p>");
    }
    else{
        escribir_cp.innerHTML=("");
    }
    conf_contra=comprobar_contraseña(contra,contra2);
    if(conf_contra==0){
        escribir_contra.innerHTML=("<p id='letra_error'>La contraseña no coincide</p>");
    }
    else{
        escribir_contra.innerHTML=("");
    }

    console.log('dni:'+conf_dni);
    console.log('correo:'+conf_correo);
    console.log('cp:'+conf_cp);
    console.log('contra:'+conf_contra);
    
    conf_total=conf_dni+conf_cp+conf_contra+conf_correo+conf_nombre+conf_apellidos+conf_edad+conf_comentario;
    if(conf_total==8){
        return false;
    }
    else{
        return false;
    }
}

/* Nos referiremos al 1 como true y al 0 como false, esto nos hara que ahorremos unas lineas de codigo y que sea mas claro */

function comprobar_dni(dni){

    
    if(dni.length==9){//comprueba que tiene 9 digitos
        for(i=0;i<8;i++){//recorre la cadena y comprueba que los caracteres sean numeros
            if(isNaN(dni.charAt(i))){
                return 0;//Si hay alguno que no es un numero, sale del bucle y manda un 0
            }
        }
    }
    else{
        return 0;//Si no tiene 9 caracteres manda el el 0 y se sale de la funcion
    }
    if(!isNaN(dni.charAt(dni.length-1))){
        return 0;
    }
    return 1;//Si no ha saltado ningun 0, significa que es true, por lo tanto se devulve la variable
}

function comprobar_codigopostal(cp){

    if( cp.length==5  && parseInt(cp) >= 1000 && parseInt(cp)<=52999){//Comprobamos que el codigo postal tenga 5 digitos comprendidos entre el 01000 y el 52999
        return 1;
    }
    else{
        return 0;//Si no se cumple ninguna de estas, se devuelve que el codigo postal es falso
    }

}

function comprobar_correo(correo){
    var comprobado_a=false;//Para comprobar que haya una arroba
    var comprobado_p=false;//Para comprobar si hay un punto despues del arroba, que seria el de .com o .es o similar
    for(var i=0;i<correo.length;i++){//recorre la cadena
        if(correo.charAt(i)=='@'){//Comprueba que haya una arroba
            if(correo.charAt(i++)!='.' && comprobado_a==false){//Comprueba que al haber una arroba el siguiente caracter no es un punto
                comprobado_a=true;
            }
            else{ 
                
                return 0;
            } 
        }
        if(correo.charAt(i)=='.' && comprobado_a==true && correo.charAt(++i)!='.'){//Comprueba que despues de un punto no haya otro, y que haya un punto despues del arroba
            comprobado_p=true;
        }
    }
    if(comprobado_a==true && comprobado_p==true){//Comprueba que las 2 condiciones se han cumplido
        return 1;
    }
    else{
        
        return 0;
    }

}

function comprobar_contraseña(contra,contra2){
    if(contra==contra2){//Si son iguales, confirmamos que ha escrito bien las 2 contraseñas
        return 1;
    }
    else{
        return 0;//Si no son iguales, nos devuelve falso
    }
}

function comprobar_nombre(nombre){
    if(nombre.length==0){
        return 0;
    }
    for(var i=0;i<nombre.length;i++){//recorre la cadena y comprueba que los caracteres sean letras
        if(!isNaN(nombre.charAt(i))){
            return 0;
        }
    }
    return 1;
}

function comprobar_apellido(apellido){
    if(apellido.length==0){
        return 0;
    }
    for(var i=0;i<apellido.length;i++){//recorre la cadena y comprueba que los caracteres sean letras
        if(!isNaN(apellido.charAt(i))){
            return 0;
        }
    }
    return 1;
}

function comprobar_edad(edad){
    if(edad.length==0){
        return 0;
    }
    for(var i=0;i<edad.length;i++){//recorre la cadena y comprueba que los caracteres sean numeros
        if(isNaN(edad.charAt(i))){
            return 0;
        }
    }
    return 1;
}

function comprobar_comentario(comentario){
    comentario=comentario.toLowerCase();
    if(comentario.match("aweonao") || comentario.match("hijo de puta") || comentario.match("mamon") || comentario.match("trolo") || comentario.match("pedazo de mierda sifilitica")){
        return 0;
    }
    else{
        return 1;
    }
}