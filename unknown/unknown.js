document.addEventListener("mousemove", (event) =>{
    let mouseX = event.clientX - 25;
    let mouseY = event.clientY - 25;

    let element = document.querySelector(".glowing");

    element.style.left = mouseX + "px";
    element.style.top = mouseY + "px";

})