function dados(num_dados){
    document.getElementById("resultados_dados").innerHTML="";
    for(var i=0;i<num_dados; i++){
        document.getElementById("resultados_dados").innerHTML+=Math.round((Math.random()* (6-1)+1));
    }
}

var eleccion;

function mates(){
    document.getElementById("resultados_dados").innerHTML="";
    eleccion=Math.round(Math.random()*(4-1)+1);
    switch(eleccion){
        case 1:
            for(var i=0;i<2; i++){
                var num_uno=Math.round((Math.random()* (100-1)+1));
                var num_dos=Math.round((Math.random()* (100-1)+1));
                document.getElementById("resultados_dados").innerHTML+= num_uno+" + "+ num_dos;
            }
            break;
        case 2:
            for(var i=0;i<2; i++){
                var num_uno=Math.round((Math.random()* (100-1)+1));
                var num_dos=Math.round((Math.random()* (100-1)+1));
                document.getElementById("resultados_dados").innerHTML+= num_uno+" * "+ num_dos;
            }
            break;
        case 3:
            for(var i=0;i<2; i++){
                var num_uno=Math.round((Math.random()* (100-1)+1));
                var num_dos=Math.round((Math.random()* (100-1)+1));
                document.getElementById("resultados_dados").innerHTML+= num_uno+" - "+ num_dos;
            }
            break;
        case 4:
            for(var i=0;i<2; i++){
                var num_uno=Math.round((Math.random()* (100-1)+1));
                var num_dos=Math.round((Math.random()* (100-1)+1));
                if(num_uno>num_dos){
                    document.getElementById("resultados_dados").innerHTML+= num_uno+" / "+ num_dos;
                }
                else{
                    document.getElementById("resultados_dados").innerHTML+= num_dos+" / "+ num_uno;
                }
                
            }
            break;
    } 
}

function corregir(){
    
}
