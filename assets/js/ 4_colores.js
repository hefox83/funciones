function ColorBlue(){
    bl.style.backgroundColor = 'black'
    }
    let bl = document.getElementById("boxBlue")
    bl.addEventListener("click", ColorBlue);

function ColorRed(){
    red.style.backgroundColor = 'black'
    }
    let red = document.getElementById("boxRed")
    red.addEventListener("click", ColorRed);

function ColorGreen(){
    grn.style.backgroundColor = 'black'
    }
    let grn = document.getElementById("boxGreen")
    grn.addEventListener("click", ColorGreen);
    
function ColorYellow(){
    ylw.style.backgroundColor = 'black'
    }
    let ylw = document.getElementById("boxYellow")
    ylw.addEventListener("click", ColorYellow);

function pintar(color){
    var caja = document.getElementById("key")
    caja.style.backgroundColor = color
}

    document.addEventListener("keydown", function(event) { 
     if (event.key === "a") {
     pintar ("pink")
    } else if (event.key === "s") {
        pintar ("orange");
    }else if (event.key === "d") {
        pintar("aqua");
    }});
    
    document.addEventListener("keydown", function(event) { 
        if (event.key === "q" || event.key === "w"|| event.key === "e") {
                creaDiv(event.key)
            }})

 function creaDiv(key){
    const ncaja = document.createElement("div");
           ncaja.className = "ncaja1" 

    if(key=="q"){
        ncaja.style.backgroundColor = "purple"
    } 
    if (key=="w") {
       ncaja.style.backgroundColor = "grey"
        }
    if (key=="e") {
        ncaja.style.backgroundColor = "brown"
       }
       document.body.appendChild(ncaja)
    }
