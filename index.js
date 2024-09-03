
const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')

canvas.style.border = "1px solid black"
const ITERS = 5

const size   = 200
const startX = canvas.width / 2
const startY = canvas.height
const toX    = startX 
const toY    = startY
const tetha  = Math.PI / 4


function branch(x, y, angle, size, iter) {
    if (iter === 15) {
        return;
    }

    let xTo = x + size * Math.cos(angle);
    let yTo = y - size * Math.sin(angle);

    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(xTo, yTo);
    c.stroke();
    c.closePath();

    branch(xTo, yTo, angle + Math.PI / 4, size * 0.8, iter + 1);
    branch(xTo, yTo, angle - Math.PI / 4, size * 0.8, iter + 1);
   

}

function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    branch(startX, startY,tetha, size, 0)
}


animate()