const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
  /*dimensions: 'A4',
  pixelsPerInch: '300',
  orientation: 'landscape'*/
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;
    context.strokeStyle = 'white';

    let w = width * 0.10;
    let h = height * 0.10;
    let gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;
    const off = width* 0.02;

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
          

          let x = ix + (w + gap) * i;
          let y = iy + (h + gap) * j;
          context.beginPath();
          context.rect(x, y,w, h);
          context.stroke();
          

          if(Math.random() > 0.5){
            context.rect(x + off/2, y + off/2, w - off, h - off);
            context.stroke();
          }
        }
        
      }
  };
};

canvasSketch(sketch, settings);
