const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body
const Bodies = Matter.Bodies

var engine,world;
 var girl, girlImg

var bg 
 var backgroundImg
 var snow = []

function preload(){
getTime();

girlImg = loadImage("girl.png");
 

  bg1 = loadImage("snow2.jpg")
}

function setup() {
  createCanvas(800,400);

 girl = createSprite(100,295,50,50)
girl.addImage("girl",girlImg);
girl.scale = 0.5


  engine = Engine.create();
  world = engine.world;

  
}

function draw() {

  girl.x = mouseX;

  Engine.update(engine);
  if(backgroundImg){
  background(backgroundImg); 
  }
  else{
    background(bg1);
  }
  

  rand = Math.round(random(1,4));

  if (frameCount% 5===0){
    snow.push(new Snow(random(0,800),30,30))
  }
  for (var j = 0;j<snow.length; j++){
    snow[j].display()
  }
  
  drawSprites();
}


async function getTime (){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responsejson = await response.json ();
  var dateTime = responsejson.datetime
  var hour = dateTime.slice (11,13);
  if(hour>06&&hour<18)
bg = "snow1.jpg"


else {
  bg = "snow2.jpg"

}
 backgroundImg = loadImage(bg)
 console.log(dateTime);

}


