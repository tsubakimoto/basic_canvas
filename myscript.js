window.onload = function() {
  //draw();
  draw2();
}

// #01-05
function draw() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  //ctx.strokeStyle='red';
  //ctx.strokeStyle='#ff0000';
  //ctx.strokeStyle='rgb(255,0,0)';
  ctx.strokeStyle='rgba(255,0,0,0.5)';
  ctx.lineWidth=15;
  //ctx.lineJoin='round';
  //ctx.lineJoin='bevel';
  //ctx.lineJoin='miter';
  
  ctx.fillStyle='rgba(255,0,0,0.5)';
  
  ctx.strokeRect(10,10,50,50);
  ctx.fillRect(100,10,50,50);
  
  //console.log(ctx);
}

// #06
function draw2() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  //var g = ctx.createLinearGradient(0,0,0,100); //線形のグラデーション
  var g = ctx.createRadialGradient(50,50,20,50,50,60); // 円形のグラデーション
  
  g.addColorStop(0.0,'red');
  g.addColorStop(0.5,'yellow');
  g.addColorStop(1.0,'blue');
  
  ctx.fillStyle=g;
  ctx.fillRect(0,0,100,100);
}