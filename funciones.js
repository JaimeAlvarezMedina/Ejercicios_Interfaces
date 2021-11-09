function dados(num_dados){
    document.getElementById("resultados_dados").innerHTML="";
    for(var i=0;i<num_dados; i++){
        document.getElementById("resultados_dados").innerHTML+=Math.round((Math.random()* (6-1)+1));
    }
}

var eleccion;
var num_uno;
var num_dos;

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
    var boton_empezar=document.getElementById("boton_empezar_mates");//Les asignamos una variable debido a que como le vamos a llamar muchas veces, por si acaso ocurre un error o un cambio, podemos cambiar mas sencillamente
    switch(eleccion){
        case 1:
            if(num_uno+num_dos==resultado_jugador){
                escribir.innerHTML="<h4>Correcto</h4>  <h5>¿Desea jugar de nuevo?</h5>";
                boton_empezar.style.display="block";
                boton_corregir.style.display="none";
            }
            else{
                escribir.innerHTML="<h4 id='letra_incorrecto'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
            }
            break;
        case 2:
            if(num_uno*num_dos==resultado_jugador){
                escribir.innerHTML="<h4>Correcto</h4>  <h5>¿Desea jugar de nuevo?</h5>";
                boton_empezar.style.display="block";
                boton_corregir.style.display="none";
            }
            else{
                escribir.innerHTML="<h4 id='letra_incorrecto'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
            }
            break;
        case 3:
            if(num_uno>num_dos){
                if(num_uno-num_dos==resultado_jugador){
                    escribir.innerHTML="<h4>Correcto</h4>  <h5>¿Desea jugar de nuevo?</h5>";
                    boton_empezar.style.display="block";
                    boton_corregir.style.display="none";
                }
                else{
                    escribir.innerHTML="<h4 id='letra_incorrecto'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
                }
            }
            else{
                if(num_dos-num_uno==resultado_jugador){
                    escribir.innerHTML="<h4>Correcto</h4>  <h5>¿Desea jugar de nuevo?</h5>";
                    boton_empezar.style.display="block";
                    boton_corregir.style.display="none";
                }
                else{
                    escribir.innerHTML="<h4 id='letra_incorrecto'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
                }
            }
            break;
        case 4:
            if(num_uno>num_dos){
                if(num_uno/num_dos==resultado_jugador){
                    escribir.innerHTML="<h4>Correcto</h4>  <h5>¿Desea jugar de nuevo?</h5>";
                    boton_empezar.style.display="block";
                    boton_corregir.style.display="none";
                }
                else{
                    escribir.innerHTML="<h4 id='letra_incorrecto'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
                }
            }
            else{
                if(num_dos/num_uno==resultado_jugador){
                    escribir.innerHTML="<h4>Correcto</h4>  <h5>¿Desea jugar de nuevo?</h5>";
                    boton_empezar.style.display="block";
                    boton_corregir.style.display="none";
                }
                else{
                    escribir.innerHTML="<h4 id='letra_incorrecto'>Incorrecto</h4>  <h5>Vuelva a intentarlo</h5>";
                }
            }
            break;
    }
}

