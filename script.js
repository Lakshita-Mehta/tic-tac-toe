let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let turno = true; // Boolean for tracking turns
let newgamebtn = document.querySelector("#New-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetgame = () => {
    turno = true; // Reset turn to true (boolean)
    enableboxes();
    msgcontainer.classList.add("hide"); // Hide the message container
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turno) {
            box.innerText = "O"; // Use consistent case for "O"
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true; // Disable the clicked box

        checkwinner();
    });
});

const disableboxes = () => {
    for (let box of boxes) {
        box.disabled = true; // Use boolean `true`
    }
};

const enableboxes = () => {
    for (let box of boxes) {
        box.disabled = false; // Use boolean `false`
        box.innerText = ""; // Clear the text in boxes
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
};

const checkwinner = () => {
    for (let patterns of winpatterns) {
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                disableboxes(); 
                showwinner(pos1val);
                return;
            }
        }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
