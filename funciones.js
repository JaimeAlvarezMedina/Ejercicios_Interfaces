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