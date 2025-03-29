let body = document.querySelector("body");
let root = 16;

function createDivs(root) {
    const numberOfDivs = root ** 2;
    for (let i = 0; i < numberOfDivs; i++) {
        const newDiv = document.createElement("div");
        var sq = 700 / root + "px";
        newDiv.id = "child";
        newDiv.style.width = sq;
        newDiv.style.height = sq;
        frame.appendChild(newDiv);
    }
    const container = document.querySelector("#frame");
    body.appendChild(container);
}

createDivs(root);

function deleteDivs() {
    const container = document.querySelector("#frame");

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

const button = document.querySelector("button")

button.addEventListener("click", () => {
    let number = ""
    function getNumber() {
        input = Number(window.prompt("Type a number between 1 and 100", ""));
        
        if (input >= 1 && input <= 100) {
            number = input;
        } else {
            number = 16;
        }
        return number;
    }
    getNumber();
    deleteDivs();
    createDivs(number);
    
})