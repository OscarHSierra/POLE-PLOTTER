var a= document.getElementById("input_a");
var b= document.getElementById("input_b");
var c= document.getElementById("input_c");


var boton=document.getElementById("boton");


var b0=0.0;
var r=document.getElementById("resultado");
var wc=0.0;
var w=0.0;
var ro=0.0;
var tipo
var s1=0.0;
var s2=0.0;
var s=0;
var s3=0;
var s4=0;


 // Obtener el contexto del canvas
 var canvas = document.getElementById("canvas");
 var ctx = canvas.getContext("2d");

 // Definir el tamaño del canvas
 canvas.width = 200;
 canvas.height = 200;

 function plano(){
 // Definir el origen del plano cartesiano
 var originX = canvas.width / 2;
 var originY = canvas.height / 2;
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 // Dibujar ejes X e Y
 ctx.beginPath();
 ctx.moveTo(0, originY);
 ctx.lineTo(canvas.width, originY);
 ctx.moveTo(originX, 0);
 ctx.lineTo(originX, canvas.height);
 ctx.fillText( "  jw", originX, 6);
 ctx.fillText( "  -jw", originX, canvas.height-5);
 //ctx.fillText( "  r", canvas.width-10, originY);
 //ctx.fillText( "  -r", 1, originY);
 ctx.strokeStyle = "black";
 ctx.stroke();
 }
 plano();

function calcular(){
    
    a.value=parseFloat(a.value);
    b.value=parseFloat(b.value);
    c.value=parseFloat(c.value);
    

    if (a.value > 0 && c.value >= 0)
    {
        console.log(a.value);
        k= a.value/c.value;
        w= Math.sqrt(c.value);
        ro=b.value/(2*w);
        os=Math.pow(Math.E,-((ro*Math.PI)/(Math.sqrt(1-Math.pow(ro,2)))))*100;
        ts=4/(ro*w);
        
        if (ro==0)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            plano();
            var originX = canvas.width / 2;
            var originY = canvas.height / 2;
            tipo="Sin amortiguar/ Undamped";
            s1=w;
            if(Math.abs(s1)<10 ){
                s=s1*10;
                
            }
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>"+"<br/>"  + tipo +"<br/>"+"<br/>"+"Con polos en : ±"+ s1.toFixed(2)+" j";
            ctx.beginPath();
            ctx.fillStyle="green";
            ctx.mozTextStyle = "50pt Arial"
            //ctx.arc( originX, -s + originY, 3, 0, 2 * Math.PI);
            ctx.fillText( "X  ",originX-3.5, -s+originY+3);
            ctx.fill();
            ctx.fillText( "  "+s1.toFixed(2)+"j", originX, -s+originY-5);
            ctx.beginPath();
            //ctx.arc( originX, s + originY, 3, 0, 2 * Math.PI);
            ctx.fillText( "X  ",originX-3.5, s+originY+3);
            ctx.fill();
            ctx.fillText( "  "+-s1.toFixed(2)+"j", originX, s+originY+15);
            
            
        }
        
        else if (ro>0 && ro< 1)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            plano();
            var originX = canvas.width / 2;
            var originY = canvas.height / 2;
            tipo="Subamortiguado/ Underdamped";
            s1=-ro*w;
            s2=w*Math.sqrt(1-(Math.pow(ro,2)));
            if(Math.abs(s1)<10 ){
                s3=s1*10;
                
            }
            else{
                s3=s1;
            }
            if(Math.abs(s2)<10 ){
                s4=s2*10;
                
            }
            else{
                s4=s2;
            }
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>"+"<br/>"  + tipo +"<br/>"+"<br/>"+"Con polos en : "+ s1.toFixed(2)+" ± "+s2.toFixed(2)+"j" ;
            ctx.beginPath();
            ctx.fillStyle="blue";
            ctx.mozTextStyle = "50pt Arial"
            //ctx.arc( s3+originX, -s4 + originY, 3, 0, 2 * Math.PI);
            ctx.fillText( "X  ",originX+s3-5, -s4+originY+3);
            ctx.fill();
            ctx.fillText( "   "+s1.toFixed(2)+" + "+s2.toFixed(2)+"j",s3+ originX, -s4+originY-5);
            ctx.beginPath();
            //ctx.arc( s3+originX, s4 + originY, 3, 0, 2 * Math.PI);
            ctx.fillText( "X  ",originX+s3-5, s4+originY+3);
            ctx.fill();
            ctx.fillText( "   "+s1.toFixed(2)+" "+ -s2.toFixed(2)+"j",s3+ originX, s4+originY+15);
            
        }
        else if (ro==1)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            plano();
            var originX = canvas.width / 2;
            var originY = canvas.height / 2;
            tipo= "Criticamente amortiguado/ Critically damped";
            s1=-ro*w;
           
            if(Math.abs(s1)<10 ){
                s2=s1*10;
                
            }
            else{
                s2=s1;
            }
            
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>"+"<br/>"  + tipo +"<br/>"+"<br/>"+"Con polos en : "+ s1.toFixed(2);
            ctx.beginPath();
            ctx.mozTextStyle = "50pt Arial"
            ctx.fillStyle="red";
           // ctx.arc( s2+originX, originY, 3, 0, 2 * Math.PI);
            ctx.fillText( "X  ",originX+s2-5, originY+3);
            ctx.fill();
            ctx.fillText( "   "+s1.toFixed(2),s2+originX,originY);
            
        }
        else if (ro>1)
        {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            plano();
            var originX = canvas.width / 2;
            var originY = canvas.height / 2;
            tipo="Sobre amortiguado/ Overdamped";
            s1=-ro*w+w*Math.sqrt((Math.pow(ro,2))-1);
            s2=-ro*w-w*Math.sqrt((Math.pow(ro,2))-1);

            if ( Math.abs(s2)<10 || Math.abs(s1)<10)
            {
                s4=s2*5;
                s3=s1*5;
            }
            else{
                s4=s2;
                s3=s1;
            }
            r.innerHTML="La funcion de transferencia corresponde a un sistema:"+"<br/>"+"<br/>"  + tipo +"<br/>"+"<br/>"+"Con polos en : "+ s1.toFixed(2)+" y "+s2.toFixed(2);
            ctx.beginPath();
            //ctx.arc( s3+originX, originY, 3, 0, 2 * Math.PI);
            ctx.fillStyle="purple";
            ctx.mozTextStyle = "50pt Arial"
            ctx.fill();
            ctx.fillText( "X  ",originX+s3-5, originY+3);
            ctx.fillText( " "+s1.toFixed(2),s3+ originX, originY-5);
            ctx.beginPath();
            //ctx.arc( s4+originX, originY, 3, 0, 2 * Math.PI);
            ctx.fill();
            ctx.fillText( "X  ",originX+s4-5, originY+3);
            ctx.fillText( " "+s2.toFixed(2),s4+ originX, originY+15);
            
        }
        else
        {
            tipo="error determinando el tipo de sistema";
        }

        
        
        

    }
    else
    {   
        alert("Error de parametros")
    }
    
}


boton.addEventListener("click",calcular);


