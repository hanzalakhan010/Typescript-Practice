"use strict";
const canvas = document.getElementById("doodleCanvas");
const colorPicker = document.getElementById("color-picker");
const brush = document.getElementById("brush");
if (canvas && colorPicker && brush) {
    let drawing = false;
    const context = canvas.getContext("2d");
    if (context) {
        function draw(e) {
            if (!drawing)
                return;
            context.lineCap = "round";
            context.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
        }
        canvas.addEventListener("mouseup", () => {
            drawing = false;
            context.closePath();
        });
        canvas.addEventListener("mousedown", () => {
            drawing = true;
            context.beginPath();
        });
        canvas.addEventListener("mousemove", draw);
        colorPicker.addEventListener("input", (e) => {
            context.strokeStyle = e.target?.value;
        });
        brush.addEventListener("input", (e) => {
            context.lineWidth = parseFloat(e.target?.value);
        });
    }
}
function clearCanvas() {
    const canvas = document.getElementById("doodleCanvas");
    if (canvas) {
        const context = canvas.getContext("2d");
        if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
        }
    }
}
