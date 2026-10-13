let clicks = 0;

function changeShape() {
    clicks++;

    const shape = document.getElementById("shape");
    const message = document.getElementById("message")

    if (clicks === 1) {
        shape.className = "circle";
        message.textContent = "You made a circle";
    }
    else if (clicks === 2) {
        shape.className = "square";
        message.textContent = "Now it's a square!";
    }
    else if (clicks === 3) {
    shape.className = "triangle";
    message.textContent = "Now it's a triangle!";
    }

    else{
        clicks = 0;
        shape.className = "circle";
        message.textContent = "Back to a circle. Start again!";
    }
}
