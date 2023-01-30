class App {
    runApplication(){
        var canvas = document.getElementById("CanvasID");
        var ctx = canvas.getContext("2d");
    
  

  //lucht
  ctx.fillStyle = "lightblue";
  ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
    
  // lucht
  var skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
  skyGradient.addColorStop(0, "lightblue");
  skyGradient.addColorStop(1, "white");
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

  // Draw the buildings
  ctx.fillStyle = "grey";
  ctx.fillRect(50, 200, 75, 200);
  ctx.fillRect(150, 100, 100, 300);
  ctx.fillRect(300, 200, 75, 250);
  ctx.fillRect(450, 200, 150, 250);


  // weg
  ctx.fillStyle = "black";
  ctx.fillRect(0, 400, canvas.width, 50);

  

  //auto1
  let autox = 0;
  let autoy = 412;
  ctx.fillStyle = "red"
  ctx.fillRect(autox, autoy + 1, 20, 6);
  ctx.fillStyle = "grey"
  ctx.fillRect(autox + 2, autoy + 5, 4, 4);
  ctx.fillRect(autox + 14, autoy + 5, 4, 4);

//auto2
let auto2x = 100;
let auto2y = 412;
ctx.fillStyle = "blue"
ctx.fillRect(auto2x, auto2y + 1, 20, 6);
ctx.fillStyle = "grey"
ctx.fillRect(auto2x + 2, auto2y + 5, 4, 4);
ctx.fillRect(auto2x + 14, auto2y + 5, 4, 4);
  
//auto3
let auto3x = 200;
let auto3y = 412;
ctx.fillStyle = "yellow"
ctx.fillRect(auto3x, auto3y + 1, 20, 6);
ctx.fillStyle = "grey"
ctx.fillRect(auto3x + 2, auto3y + 5, 4, 4);
ctx.fillRect(auto3x + 14, auto3y + 5, 4, 4);

//auto4
let auto4x = 350;
let auto4y = 412;
ctx.fillStyle = "green"
ctx.fillRect(auto4x, auto4y + 1, 20, 6);
ctx.fillStyle = "grey"
ctx.fillRect(auto4x + 2, auto4y + 5, 4, 4);
ctx.fillRect(auto4x + 14, auto4y + 5, 4, 4);

 //boompje
 let boomx = 130;
 let boomy = 374;
 ctx.fillStyle = "green"
 ctx.fillRect(boomx, boomy, 12, 20);
 ctx.fillStyle = "brown"
 ctx.fillRect(boomx + 4, boomy + 20, 4, 6);

//boompje2
let boom2x = 260;
let boom2y = 374;
ctx.fillStyle = "green"
ctx.fillRect(boom2x, boom2y, 12, 20);
ctx.fillStyle = "brown"
ctx.fillRect(boom2x + 4, boom2y + 20, 4, 6);

//boompje3
let boom3x = 10;
let boom3y = 374;
ctx.fillStyle = "green"
ctx.fillRect(boom3x, boom3y, 12, 20);
ctx.fillStyle = "brown"
ctx.fillRect(boom3x + 4, boom3y + 20, 4, 6);

//sneeuwpopp
ctx.beginPath();
ctx.arc(410, 375, 30, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(410, 325, 20, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(410, 290, 15, 0, 2 * Math.PI);
ctx.fill();

//sneeuwpop ogen en knoppen
ctx.fillStyle = "black";
ctx.fillRect(400, 280, 5, 5);
ctx.fillRect(412, 280, 5, 5);
ctx.fillRect(407, 320, 5, 5);
ctx.fillRect(407, 330, 5, 5);
ctx.fillRect(407, 360, 5, 5);
ctx.fillRect(407, 370, 5, 5);
ctx.fillRect(407, 380, 5, 5);
ctx.fillStyle = "orange";
ctx.fillRect(407, 290, 5, 5);


ctx.font = "60px Sans-Serif";
ctx.fillText("Fijne Kerst!", 100, 75);

    }
}

let app = new App();
app.runApplication();