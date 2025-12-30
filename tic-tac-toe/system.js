let cell = document.querySelectorAll('.cell');
let statusText = document.querySelector('.status');
let newGameBtn = document.querySelector('#new-game');
let resetBtn = document.querySelector('button');
const msgcontainer = document.querySelector('.message-container');
const msgtext = document.querySelector('.message');
let turn0= true;


const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

cell.forEach((cell) => {
    cell.addEventListener("click", function() {
        console.log("Cell clicked");
        if(this.innerText !== "") return;
        if(turn0) {
            this.innerText = "O";
            turn0= false;
        } else {
            this.innerText = "X";
            turn0= true;
        }
        // this.cell.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(let patterns of winPatterns) {
        let pos1val = cell[patterns[0]].innerText;
        let pos2val = cell[patterns[1]].innerText;
        let pos3val = cell[patterns[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") {
            if(pos1val == pos2val && pos2val == pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
        
    }};

const resetGame = () => {
    turn0= true;
    enableCells();
    msgcontainer.classList.add("hide");
}

const enableCells=() => {
    const cells = document.querySelectorAll('.cell');
    for(let cell of cells) {
        cell.style.pointerEvents = 'auto';
        cell.innerText = "";
    };
}

const showWinner = (winner) => {
        msgtext.innerText = `The Winner is ${winner}`;
        msgcontainer.classList.remove("hide");
        disableCells();
    }

const disableCells=() => {
    const cells = document.querySelectorAll('.cell');
    for(let cell of cells) {
        cell.style.pointerEvents = 'none';
    };
}

newGameBtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);
