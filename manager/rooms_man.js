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
    ctx.fillText('김XX', rectfx+30,rectfy+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170, rectfy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('302', rectfx+50+170,rectfy+30);
    ctx.fillText('이XX', rectfx+30+170,rectfy+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*2, rectfy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('303', rectfx+50+170*2,rectfy+30);
    ctx.fillText('박XX', rectfx+30+170*2,rectfy+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*3, rectfy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('304', rectfx+50+170*3,rectfy+30);
    ctx.fillText('김XX', rectfx+30+170*3,rectfy+70); // DB에서 담당직원 불러오기


//-----------------------------------------------------------

    ctx.fillStyle = 'blue'; // db에서 예약여부 확인하기
    ctx.fillRect(rectfx, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('201', rectfx+50,rectsy+30);
    ctx.fillText('김XX', rectfx+30,rectsy+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('202', rectfx+50+170,rectsy+30);
    ctx.fillText('김XX', rectfx+30+170,rectsy+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*2, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('203', rectfx+50+170*2,rectsy+30);
    ctx.fillText('김XX', rectfx+30+170*2,rectsy+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'red';
    ctx.fillRect(rectfx+170*3, rectsy, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('204', rectfx+50+170*3,rectsy+30);
    ctx.fillText('김XX', rectfx+30+170*3,rectsy+70); // DB에서 담당직원 불러오기


//-----------------------------------------------------------------

    ctx.fillStyle = 'green'; // db에서 예약여부 확인하기
    ctx.fillRect(rectfx, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('101', rectfx+50,rectty+30);
    ctx.fillText('김XX', rectfx+30,rectty+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'red';
    ctx.fillRect(rectfx+170, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('102', rectfx+50+170,rectty+30);
    ctx.fillText('김XX', rectfx+30+170,rectty+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*2, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('103', rectfx+50+170*2,rectty+30);
    ctx.fillText('김XX', rectfx+30+170*2,rectty+70); // DB에서 담당직원 불러오기


    ctx.fillStyle = 'blue';
    ctx.fillRect(rectfx+170*3, rectty, 150, 80);
    ctx.fillStyle = 'black'
    ctx.font="35px Georgia"
    ctx.fillText('104', rectfx+50+170*3,rectty+30);
    ctx.fillText('김XX', rectfx+30+170*3,rectty+70); // DB에서 담당직원 불러오기


//------------------------------------------------------------------

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 100, 120,200);

    ctx.fillStyle = 'red';
    ctx.fillRect(10, 120, 30,30);

    ctx.fillStyle = 'blue';
    ctx.fillRect(10, 180, 30,30);

    ctx.fillStyle = 'green';
    ctx.fillRect(10, 240, 30,30);

    ctx.fillStyle = 'black'
    ctx.font="17px Georgia"
    ctx.fillText('사용불가', 45,140);
    ctx.fillText('예약안됨', 45,200);
    ctx.fillText('예약됨', 45,260);



  }
}

window.onload = function(){
  draw();
}
