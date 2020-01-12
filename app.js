const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

// canvas에도 width height 지정을 해주어야한다(CSS, JS따로)
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting(event){
    painting = false;
}

function startPainting(){
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        // !painting === false
        // 시작지점(클릭시 비활성화)
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        // 
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event){
    painting = true;
}



if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}