window.onload = function() {
  //draw();
  //draw2();
  //draw3();
  //draw4();
  //draw5();
  //draw6();
  //draw7();
  //draw8();
  //draw9();
  //draw10();
  //draw11();
  //draw12();
  draw13();
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

// #07
function draw3() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.shadowColor='#ccc';
  ctx.shadowOffsetX=5;
  ctx.shadowOffsetY=5;
  ctx.shadowBlur=2;
  
  ctx.globalAlpha=0.5;
  
  ctx.fillRect(0,0,100,100);
}

// #08
function draw4() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  // 描画前に変形
  ctx.scale(0.8,0.8); //縦、横の縮小
  ctx.rotate(30/180*Math.PI); //回転（引数にはラジアンを指定、基準は左上）
  ctx.translate(100,10); //x,y
  
  ctx.fillRect(0,0,100,100);
}

// #09
function draw5() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  ctx.moveTo(20,20);
  ctx.lineTo(120,20);
  ctx.lineTo(120,120);
  ctx.closePath(); //始点と終点を結ぶ
  //ctx.stroke(); //線を引く
  ctx.fill(); //塗りつぶす
}

// #10
function draw6() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.beginPath();
  //ctx.arc(100,100,50,10/180*Math.PI,210/180*Math.PI);
  //ctx.arc(100,100,50,0/180*Math.PI,360/180*Math.PI);
  ctx.arc(100,100,50,0/180*Math.PI,270/180*Math.PI);
  ctx.lineWidth=15;
  //ctx.lineCap="round"; //線の端のスタイル
  ctx.lineCap="butt"; //線の端のスタイル
  ctx.stroke();
}

// #11
function draw7() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.font='bold 20px Verdana';
  ctx.textAlign='left'; //right,center,start,end
  ctx.fillStyle='red';
  ctx.strokeStyle='red';
  
  ctx.fillText('dotinstall',20,20,200); //塗りつぶし：内容、左端、上端、幅
  ctx.strokeText('dotinstall',20,120,200); //中抜き：内容、左端、上端、幅
}

// #12
function draw8() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  var img = new Image();
  img.src = 'girl.jpg';
  img.onload = function() {
    ctx.drawImage(img,10,10); //src,x,y
  }
  
}

// #13
function draw9() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  var img = new Image();
  img.src = 'girl2.jpg';
  img.onload = function() {
    var pattern = ctx.createPattern(img,'repeat'); //no-repeat,repeat-x,repeat-y
    ctx.fillStyle=pattern;
    ctx.fillRect(20,20,100,100);
  }
  
}

// #14
function draw10() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.fillStyle='yellow';
  ctx.save(); //設定の保存
  
  ctx.fillRect(0,0,50,50);
  
  ctx.fillStyle='blue';
  ctx.fillRect(100,0,50,50);
  
  ctx.restore() //設定の復元
  ctx.fillRect(200,0,50,50);
}

// #15-16
function draw11() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.globalAlpha=0.5;
  
  for (var i=0;i<100;i++) {
    var x = Math.floor(Math.random() * 400);
    var y = Math.floor(Math.random() * 200);
    var r = Math.floor(Math.random() * 200);
    
    ctx.fillStyle='rgb('+rgb()+','+rgb()+','+rgb()+')';
    ctx.beginPath();
    ctx.arc(x,y,r,0,2*Math.PI);
    ctx.stroke();
    ctx.fill();
  }
  
  function rgb() {
    return Math.floor(Math.random() * 255);
  }
}

// #17
function draw12() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.fillStyle='red';
  var y=0;
  
  (function loop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if (y>canvas.height) y=-50;
    y++;
    ctx.fillRect(0,y,50,50);
    setTimeout(loop,10);
  })();
}

// #17の応用
function draw13() {
  var canvas = document.getElementById('mycanvas');
  if (!canvas || !canvas.getContext) return false;
  var ctx = canvas.getContext('2d');
  
  ctx.fillStyle='red';
  ctx.save();
  var x=0;
  var y=0;
  
  (function loop() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    if (x>canvas.width) x=0;
    if (y>canvas.height) y=-50;
    
    x+=5;
    y++;
    
    ctx.fillStyle='gray';
    ctx.fillRect(x,y,10,10);
    ctx.restore();
    ctx.fillRect(0,y,50,50);
    ctx.save();
    
    setTimeout(loop,10);
  })();
}
