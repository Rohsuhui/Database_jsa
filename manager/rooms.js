function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var rectfy = 100;
    var rectfx = 160;
    var rectsy = 200;
    var rectty = 300;

    ctx.fillStyle = 'red'; // db에서 예약여부 확인하기
    ctx.fillRect(rectfx, rectfy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('301', rectfx+50,rectfy+30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170, rectfy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('302', rectfx+50+170,rectfy+30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*2, rectfy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('303', rectfx+50+170*2,rectfy+30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*3, rectfy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('304', rectfx+50+170*3,rectfy+30);

//-----------------------------------------------------------

    ctx.fillStyle = 'blue'; // db에서 예약여부 확인하기
    ctx.fillRect(rectfx, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('201', rectfx+50,rectsy+30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('202', rectfx+50+170,rectsy+30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*2, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('203', rectfx+50+170*2,rectsy+30);

    ctx.fillStyle = 'red';
    ctx.fillRect(rectfx+170*3, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('204', rectfx+50+170*3,rectsy+30);

//-----------------------------------------------------------------

    ctx.fillStyle = 'red'; // db에서 예약여부 확인하기
    ctx.fillRect(rectfx, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('101', rectfx+50,rectty+30);

    ctx.fillStyle = 'red';
    ctx.fillRect(rectfx+170, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('102', rectfx+50+170,rectty+30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*2, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('103', rectfx+50+170*2,rectty+30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*3, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('104', rectfx+50+170*3,rectty+30);

//------------------------------------------------------------------

ctx.fillStyle = 'white';
ctx.fillRect(0, 100, 120,140);

ctx.fillStyle = 'red';
ctx.fillRect(10, 120, 30,30);

ctx.fillStyle = 'blue';
ctx.fillRect(10, 180, 30,30);


ctx.fillStyle = 'black'
ctx.font="17px Georgia"
ctx.fillText('예약안됨', 45,200);
ctx.fillText('예약됨', 45,140);

//---------------------------------------------------------------------

    var mon = '1'
    var tu = '5'
    var wed = '7'
    var th = '5'
    var fri = '9'
    var sa = '12'
    var sun = '15'
    var space = 75
    var fx = 290

    ctx.fillStyle = 'white';
    ctx.fillRect(220, 400, 570, 100);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText(mon, fx, 490);
    ctx.fillText(tu, fx+space, 490);
    ctx.fillText(wed, fx+space*2, 490);
    ctx.fillText(th, fx+space*3, 490);
    ctx.fillText(fri, fx+space*4, 490);
    ctx.fillText(sa, fx+space*5, 490);
    ctx.fillText(sun, fx+space*6, 490);

  }
}

window.onload = function(){
  draw();
}
