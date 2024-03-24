const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080]
};

const degToRad = (angle) => {
  return angle / 180 * Math.PI;
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, width, height);


    context.fillStyle = 'black';

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;

    const radio = width * 0.3;
    const num = 12;
    let slice = math.degToRad(360 / num);
    for(let i=0; i < num; i++){
      if (i > 1) {
        context.fillStyle = 'blue';
      }
      let angle = slice * i;
      context.save();
      let x = cx + radio * Math.cos((angle));
      let y = cy + radio * Math.sin((angle));
      context.translate(x, y);
      context.rotate((angle) + degToRad(90));
      //context.rotate(degToRad(-angle));
      context.scale(random.range(3,1), 1);

      context.beginPath();
      context.rect(-w * 0.5, -h * 0.5, w, h);
      context.fill();
      //context.arc(0,0,10,0,Math.PI * 2);
      //context.fill();
      context.restore();

      //ARCS
      context.save();
      context.translate(cx, cy);
      context.rotate(angle + degToRad(90));

      context.beginPath();
      context.arc(0, 0, radio, slice * 0.3, slice * 0.6);
      context.stroke();
      context.restore();
      
    }

    context.save();
    context.translate(100, 400);
    context.beginPath();
    context.arc(0,0,50,0,Math.PI * 2);
    context.fill();
    context.restore();

    context.beginPath();
    context.rect(0,0, 10, 100);
    context.fill();
  };
};

canvasSketch(sketch, settings);
console.log(Math.sin(degToRad(100)));
function hola(n){
  console.log('hola ' + n);
}