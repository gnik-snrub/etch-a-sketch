const grid = document.querySelector('.grid');
let gridSize = 600;
let gridWidth = 11;

let nodeSize = `${gridSize / gridWidth / 2 - 1}px`;

createGrid();

function createGrid() {
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
    nodes.forEach(node => node.classList.remove('entered'));
}