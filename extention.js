let element = document.getElementById("rotateImage");
window.addEventListener('scroll', function () {
    let variable = window.scrollY * 0.35;
    element.style.transform = `rotate(${variable}deg)`; // Correct usage of backticks
});
