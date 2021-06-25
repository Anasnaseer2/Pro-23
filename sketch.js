const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerplayer,player,computerbase,playerbase;



function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   playerbase=new Playerbase(300,random(450,height-300),180,150)
   player=new Player(280,playerbase.body.position.y-140,50,150)

   computerbase=new Computerbase(width-300,random(450,height-300),180,150)
   computerplayer=new Player(width-280,computerbase.body.position.y-140,50,150)





 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerbase.display()
   computerbase.display()
   player.display()
   computerplayer.display()


   //display Player and computerplayer


}
