
// canvas - drawing
let ctx = null;
// timer
let gameTime = 0, lastFrameTime = 0;
let currentSecond = 0, frameCount = 0, frameslastSecond = 0;

// top lef position of the grid
let offsetX = 0, offsetY = 0;
let grid = []

// check the postion of the mouseenter

let mouseState = {
  x: 0,
  y: 0,
  click: null
};

// current diffiulty level

let gamestate = {
  diffiulty: 'easy',
  screen: 'menu',
  newBest: false,
  timeTaken: 0,

  tileW: 20,
  tileH: 20,
};

// level to choose from
let difficulties: {
  easy : {
    name: "Easy",
    width: 10,
    heihgt: 10,
    mines: 10,
    besttime: 0,
    menuBox: [0,0]
  }
  medium : {
    name: "Medium",
    width: 12,
    heihgt: 12,
    mines: 20,
    besttime: 0,
    menuBox: [0,0]
  }
  Hard : {
    name: "Hard",
    width: 15,
    heihgt: 15,
    mines: 50,
    besttime: 0,
    menuBox: [0,0]
  }
};

// default setting of the tile on the grid
function Title (x,y){
  this.x = x;
  this.y = y;
  this.hasMine = false;
  this.danger = 0;
  this.crrentState = 'hidden';
}


// each tile needs a method to calculate the danger value
title.prototype.caclDanger = funciton(){
  let cDiff =
}
