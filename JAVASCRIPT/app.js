let boxes = document.querySelectorAll(".box");
let btn =  document.querySelector("#reset");

let turno =  true;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turno)
        {
            box.innerHTML = "o";
            turno=false;
            
        }else
        {
            box.innerHTML = "x";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let patter of winPatterns){
        let post1val = boxes[pattern[0]]
    }

}