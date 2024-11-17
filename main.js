const container = document.createElement("div");
    container.setAttribute("id", "container");

let btn = document.getElementById("btn").addEventListener("click", function() {
    
    let rows = 0;
    let cols = 0;
    let sketchDiv;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    rows = parseInt(prompt("Rows"));
    cols = parseInt(prompt("Columns"));   

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            sketchDiv = document.createElement("div");
            sketchDiv.classList.add("littleBox")
            
            container.appendChild(sketchDiv);   
        }
    }

    document.body.appendChild(container);     
    
    container.childNodes.forEach(e => {
        e.onmouseover = function() {
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            const rgb = `rgb(${r},${g},${b})`;

            if(e.style.backgroundColor) {
                e.style.opacity -= '-0.1';
            } else {
                e.style.backgroundColor = rgb;
            }
             
            
        }
    }); 
    
});
