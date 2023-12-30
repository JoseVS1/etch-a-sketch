const container = document.querySelector(".container");
const gridBtn = document.querySelector(".grid-btn");
let brightness = 100;

const changeSquareColor = (e) => {
    const currSquare = e.target;
    currSquare.style.backgroundColor = `rgb(${Math.random() * 255} ${Math.random() * 255} ${Math.random() * 255})`;
    currSquare.style.filter = `brightness(${brightness - 10}%)`;
    brightness -= 10;
}

const generateGrid = (size = 16) => {
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${(960 / size) - 2}px`;
        square.style.height = `${(960 / size) - 2}px`;
        square.addEventListener("mouseenter", (e) => changeSquareColor(e));
        container.appendChild(square);
    }
}

generateGrid();

const changeGridSize = () => {
    let newSize;
    do {
        newSize = Number(prompt("Enter the number of squares per side for the new grid:"));
    } while (newSize > 100);
    console.log(newSize)

    while (container.firstChild) {
        container.firstChild.remove();
    }

    generateGrid(newSize);
}


gridBtn.addEventListener("click", changeGridSize);