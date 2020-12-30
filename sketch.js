const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,800);

  ground = new Ground(600,height,1200,20);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}