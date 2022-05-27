var size = 16;
var sqColor = "";
const container = document.getElementById("container");
//clear canvas//
document.getElementById("resetButton").addEventListener("click", (e) => {
    console.log("Reset");
    var gridBoxes = document.querySelectorAll("#gridColumn1");
        gridBoxes.forEach((item) =>{
    item.style.backgroundColor="white";
        });
});
//drawing & grid//
function createGrid(){
    for (var i = 0; i <(256); i++) {
        var gridColumn1 = document.createElement("gridColumn1");
        gridColumn1.setAttribute("id", "gridColumn1");
        gridColumn1.classList.add("gridBoxStyle");    
        container.appendChild(gridColumn1);
        sqColor = "darkgrey";
        var gridBoxes = document.querySelectorAll("#gridColumn1");
        gridBoxes.forEach((item) =>{
        item.addEventListener("mouseover", (e) => {
        console.log("Went Over");
        e.target.style.backgroundColor = sqColor;
        })
    });
    };
};
//change-size//
document.getElementById("sizeButton").addEventListener("click", (e) => {
    var size = prompt("1 = Small, 2 = Medium, 3 = Large");
    console.log (size);
    var gridBoxes = document.querySelectorAll("#gridColumn1");
        gridBoxes.forEach((item) =>{
            item.style.height=((size*20)+"px");
            item.style.width=((size*20)+"px");
        });
    });
//draw-button//
document.getElementById("draw").addEventListener("click", (e) => {
    sqColor = "darkgrey";
    });
//erase-button//
document.getElementById("eraser").addEventListener("click", (e) => {
    sqColor = "white";
    });

createGrid();



/* function draw(){
    /* var gridBoxes = document.querySelectorAll("#gridColumn1");
    gridBoxes.forEach((item) =>{
        item.addEventListener('mouseenter', (e) => {
        console.log("Went Over");
        e.target.style.backgroundColor = "darkgrey";
        })
        item.addEventListener('click', (e) => {
            e.target.style.backgroundColor = "white";    
        })
    }); 
}; */