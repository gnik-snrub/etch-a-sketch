const grid = document.querySelector('.grid');
let gridSize = 600;
let gridWidth = 50;

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