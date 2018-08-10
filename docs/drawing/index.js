{
  let canvas = document.getElementById('cqzhen_drawing');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    
    ctx.beginPath();
    ctx.arc(75,75,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(100,120);
    ctx.arc(75,120,25,0,1*Math.PI,true);   // 口(顺时针)
    ctx.moveTo(65,65);
    ctx.arc(60,65,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(95,65);
    ctx.arc(90,65,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(75,235,50,0,Math.PI*2,true); // 绘制
    ctx.moveTo(110,235);
    ctx.arc(75,235,35,0,Math.PI,false);   // 口(顺时针)
    ctx.moveTo(65,225);
    ctx.arc(60,225,5,0,Math.PI*2,true);  // 左眼
    ctx.moveTo(95,225);
    ctx.arc(90,225,5,0,Math.PI*2,true);  // 右眼
    ctx.stroke();
    
    // TODO: robot

    // TODO: animation
  }
}
