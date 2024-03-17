const ele = document.getElementById("ele1")
function pintar() {
    ele.style.backgroundColor = 'yellow';
}
ele.style.backgroundColor ='green';
ele.addEventListener("click", () => pintar ('yellow'));

