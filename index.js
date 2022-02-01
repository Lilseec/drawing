const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const save = document.getElementById('save')
const clear = document.getElementById('clear')
var img = new Image();
let isDrawing = false

canvas.width = window.innerWidth
canvas.height = window.innerHeight - 50

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
}

function getFingerPos(e) {
    return {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
    }
}


canvas.addEventListener('mousedown', (e) => {
    let pos = getMousePos(canvas, e)
    isDrawing = true
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5
    ctx.moveTo(pos.x, pos.y);
  })

canvas.addEventListener('touchstart', (e) => {
    let pos = getFingerPos(e)
    isDrawing = true
    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5
    ctx.moveTo(pos.x, pos.y);
})

canvas.addEventListener('mouseup', () => {
    isDrawing = false
    ctx.closePath()
})

canvas.addEventListener('touchend', () => {
    isDrawing = false
    ctx.closePath()  
})

canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      let pos = getMousePos(canvas, e)
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }
})

canvas.addEventListener('touchmove', (e) => {
    if (isDrawing) {
        let pos = getFingerPos(e)
        ctx.lineTo(pos.x, pos.y);
        ctx.stroke();
      }
})

save.addEventListener('click', () => {
    console.log(canvas.toDataURL())
})

clear.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})
