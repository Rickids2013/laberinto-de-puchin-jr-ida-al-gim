



canvas = document.getElementById("myCanvas");
 ctx= canvas.getContext("2d");
 playerwith=25; 
 playerheight=15;

 fondo="https://www.tuexperto.com/wp-content/uploads/2020/03/laberintos-para-imprimir-4.jpg.webp";

player="https://m.media-amazon.com/images/I/61ZIT1oWilL.jpg";


playerx=10;

playery=10;

function add() {
         background_imgTag=new Image(); //define una variable con la imagen nuevae 
         
         background_imgTag.onload = uploadBackground; // establece la función para cargar esta variable 
         
         background_imgTag.src = fondo;
         
         
         rover_imgTag = new Image(); //define una variable para la imagen nueva 
         
         
         rover_imgTag.onload = uploadrover; // establece la función para cargar esta variable 
         
         rover_imgTag.src = player;
} 
function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); }

function uploadrover() { ctx.drawImage(rover_imgTag, playerx, playery, playerwith, playerheight); }

window.addEventListener("keydown", my_keydown);

function my_keydown(e) { keyPressed = e.keyCode;
     console.log(keyPressed);
      if(keyPressed == '38') { up();
         console.log("up");
         } if(keyPressed == '40') { down();
             console.log("down");
             } if(keyPressed == '37') { left(); console.log("left");

              } if(keyPressed == '39') { right(); console.log("right");


              }}


















































              function up()
{
    if(playery >=0)
    {
        playery = playery - 10;
        console.log("Cuando se presione la flecha hacia arriba,  x = " + playerx + " | y = " +playery);
        uploadBackground();
         uploadrover();
    }
}


function down()
{
    if(playery <=700)
    {
        playery =playery+ 10;
        console.log("Cuando se presoiona la flecha hacia abajo,  x = " + playerx + " | y = " +playery);
        uploadBackground();
         uploadrover();
    }
}

function left()
{
    if(playerx >= 0)
    {
        playerx =playerx - 10;
        console.log("Cuando se presiona la flecha izquierda,  x = " + playerx + " | y = " +playery);
        uploadBackground();
         uploadrover();
    }
}
function right()
{
    if(playerx <= 700)
    {
        playerx =playerx + 10;
        console.log("Cuando se presiona la flecha derecha,  x = " + playerx + " | y = " +playery);
        uploadBackground();
         uploadrover();
    }
}
