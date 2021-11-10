function dados(num_dados){
    document.getElementById("resultados_dados").innerHTML="";
    for(var i=0;i<num_dados; i++){
        document.getElementById("resultados_dados").innerHTML+=Math.round((Math.random()* (6-1)+1));
    }
}

var eleccion;
var num_uno;
var num_dos;
var porcentaje_aciertos= new Array();
var i=0;

function mates(){
    document.getElementById("resultados_mates").innerHTML="<h3>Introduzca la repuesta:</h3>";
    document.getElementById("respuesta").innerHTML="";
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
            boton_porcentajes.style.dysplay="block";
            porcentaje_aciertos[i]=1;//vamos a definir el 1 como que ha acertado
            i++;
        }
        else{
            escribir.innerHTML="<h4 id='letra_incorrecto'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
            porcentaje_aciertos[i]=0;//vamos a definir el 0 como que ha fallado
            i++;
        }
}

function porcentaje(){
    var num_acertadas=0;
    var porcentaje;
    for(var cont=0;cont<porcentaje_aciertos.length;cont++){
        num_acertadas=num_acertadas+porcentaje_aciertos[cont];
    }
    porcentaje=(num_acertadas/porcentaje_aciertos.length)*100;
    document.getElementById("porcentaje").innerHTML="<h5>Su porcentaje de acierto es:</h5> <h4>"+porcentaje+"%</h4>"
}