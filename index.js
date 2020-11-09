const grid = document.querySelector('.grid');
let gridSize = 600;
let gridWidth = 16;

let nodeSize = `${gridSize / gridWidth / 2 - 1}px`;

createGrid();

function createGrid() {
    let nodeSize = `${gridSize / gridWidth / 2 - 1}px`;
    for (i = 0; i < gridWidth * gridWidth; i++) {
        const node = document.createElement('div');
        node.classList.add('node');
        node.style.padding = nodeSize;
    
        node.addEventListener('mouseover', function() {
            node.classList.add('entered');
        });
    
        grid.appendChild(node);
    }
}

const resetButton = document.querySelector('.reset');
resetButton.addEventListener("click", reset);

function reset() {
    const nodes = document.querySelectorAll('.node');
    nodes.forEach(node => node.remove());
    createGrid();
}

const sizeChangers = document.querySelectorAll('.grid-change');
const sizeDisplay = document.querySelector('.grid-size');
sizeChangers.forEach(btn => btn.addEventListener('click', function() { changeSize(btn.value)}));


function changeSize(val) {
    gridWidth += parseInt(val);

    if (gridWidth > 100) { gridWidth = 100; }
    else if (gridWidth < 1) { gridWidth = 1; }

    sizeDisplay.textContent = `Size: ${gridWidth}`;
}