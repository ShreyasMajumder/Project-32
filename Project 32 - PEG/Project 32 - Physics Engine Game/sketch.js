const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20, box21, box22, box23, box24, box25, box26;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("background.jpg");
}

function setup() {
  createCanvas(1536, 713);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800, 700, 1800, 100);

  monster = new Monster(1200,400,300);
  rope = new Rope(monster.body, { x: 500, y: 50 });
  
  //blocks for the castle -
  box1 = new Building(130, 100, 70, 70);
  box2 = new Building(340, 100, 70, 70);
  box3 = new Window(340, 100, 70, 70);
  box4 = new Window(340, 100, 70, 70);
  box5 = new Window(340, 100, 70, 70);
  box6 = new Building(340, 100, 70, 70);
  box7 = new Door(340, 100, 70, 70);
  box8 = new Building(270, 100, 70, 70);
  box9 = new Building(270, 100, 70, 70);
  box10 = new Building(270, 100, 70, 70);
  box11 = new Building(270, 100, 70, 70);
  box12 = new Building(270, 100, 70, 70);
  box13 = new Building(270, 100, 70, 70);
  box14 = new Building(270, 100, 70, 70);
  box15 = new Building(200, 100, 70, 70);
  box16 = new Window(200, 100, 70, 70);
  box17 = new Window(200, 100, 70, 70);
  box18 = new Window(200, 100, 70, 70);
  box19 = new Building(200, 100, 70, 70);
  box20 = new Building(200, 100, 70, 70);
  box21 = new Building(130, 100, 70, 70);
  box22 = new Building(130, 100, 70, 70);
  box23 = new Building(130, 100, 70, 70);
  box24 = new Building(130, 100, 70, 70);
  box25 = new Building(130, 100, 70, 70);
  box26 = new Building(130, 100, 70, 70);
  box27 = new Building(410, 100, 70, 70);
  box28 = new Building(410, 100, 70, 70);
  box29 = new Building(410, 100, 70, 70);
  box30 = new Building(410, 100, 70, 70);
  box31 = new Building(410, 100, 70, 70);
  box32 = new Building(410, 100, 70, 70);
  box33 = new Building(410, 100, 70, 70);
  box34 = new Building(480, 100, 70, 70);
  box35 = new Window(480, 100, 70, 70);
  box36 = new Window(480, 100, 70, 70);
  box37 = new Window(480, 100, 70, 70);
  box38 = new Building(480, 100, 70, 70);
  box39 = new Building(480, 100, 70, 70);
  box40 = new Building(550, 100, 70, 70);
  box41 = new Building(550, 100, 70, 70);
  box42 = new Building(550, 100, 70, 70);
  box43 = new Building(550, 100, 70, 70);
  box44 = new Building(550, 100, 70, 70);
  box45 = new Building(550, 100, 70, 70);
  box46 = new Building(550, 100, 70, 70);
  box47 = new Building(130, 100, 70, 70);
  box48 = new Building(200, 100, 70, 70);
  box49 = new Door(270, 100, 70, 70);
  box50 = new Door(340, 100, 70, 70);
  box51 = new Door(410, 100, 70, 70);
  box52 = new Building(480, 100, 70, 70);
  box53 = new Building(550, 100, 70, 70);
  box54 = new Building(200, 100, 70, 70);
  box55 = new Door(340, 100, 70, 70);
  box56 = new Building(480, 100, 70, 70);
  box57 = new Building(130, 100, 70, 70);
  box58 = new Door(270, 100, 70, 70);
  box59 = new Door(410, 100, 70, 70);
  box60 = new Building(550, 100, 70, 70);
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();
  box37.display();
  box38.display();
  box39.display();
  box40.display();
  box41.display();
  box42.display();
  box43.display();
  box44.display();
  box45.display();
  box46.display();
  box47.display();
  box48.display();
  box49.display();
  box50.display();
  box51.display();
  box52.display();
  box53.display();
  box54.display();
  box55.display();
  box56.display();
  box57.display();
  box58.display();
  box59.display();
  box60.display();

  monster.display();
  rope.display();
}

function mouseDragged(){
  Matter.Body.setPosition(monster.body, {x:mouseX, y:mouseY});
}