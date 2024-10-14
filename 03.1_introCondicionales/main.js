var rightEdgeofLastCircle=0;

const PI2 = Math.PI * 2;
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
    CANVAS.width = CANVAS.getBoundingClientRect().width;
    CANVAS.height = CANVAS.getBoundingClientRect().height;
}

class Circulo {
    constructor(params = {}) {
        
        this.borderColor = "purple";
        this.borderWidth = 10;
        this.x = params.x || 100;
        this.y = 100;
        this.radiusX=30;
        this.radiusY=30;
        
        this.width=this.radiusX*2;
        this.distanceX=30;

        this.speed = {
            x: Math.random() * 0.7,
            y: 0.3
        }
    }


    updatePosition() {
        this.x += this.speed.x;
        this.y += this.speed.y;
    }

    draw() {
        CTX.strokeStyle = this.borderColor;
        CTX.lineWidth = this.borderWidth;
        //CTX.globalAlpha="0.2";
        CTX.beginPath();
        CTX.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, PI2);
        CTX.closePath();
        CTX.stroke();

        //this.updatePosition();
}
}

var circulo1= new Circulo();

let listaDeCirculos =[];

while (rightEdgeofLastCircle< CANVAS.width){
    let nuevoCirculo =new Circulo ({
        x: rightEdgeofLastCircle
    });
    listaDeCirculos.push(nuevoCirculo);

    rightEdgeofLastCircle = nuevoCirculo.x + nuevoCirculo.radiusX + nuevoCirculo.distanceX;

}

function render() {
   CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

   circulo1.draw();
   for (let i=0; i< listaDeCirculos.length; i++){
    listaDeCirculos [i].draw ();
   }

    requestAnimationFrame(render);
}


window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(render);
