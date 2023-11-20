
// DO RIGHT NOW: 
// MAKE PROMPT INTO BUTTON,
// FIX ALPHA COUNTER

const bigContainer = document.querySelector('.bigContainer');
bigContainer.style.display = 'flex';
bigContainer.style.flexDirection = 'column';
bigContainer.style.justifyContent = 'space-between';
bigContainer.style.alignItems = 'center';
bigContainer.style.height = '100vh';

const resetButton = document.createElement('button');
resetButton.style.display = 'flex';
resetButton.style.width = '20vh';
resetButton.style.height = '5vh';
resetButton.style.flexGrow = '0.5';
resetButton.style.alignItems = 'center';
resetButton.style.justifyContent = 'center';
resetButton.style.borderStyle = 'solid';
resetButton.style.fontWeight = '600';
resetButton.style.fontFamily = 'Verdana, Geneva, Tahoma, sans-serif';
resetButton.style.padding = '6px';
resetButton.innerText = 'Select grid size';
bigContainer.appendChild(resetButton);

const container = document.createElement('div');
container.style.height = '90vh';
container.style.width = (container.style.height);
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.flexWrap = 'wrap';
container.style.borderColor = 'black';
container.style.borderStyle = 'solid';
bigContainer.appendChild(container);



resetButton.addEventListener('click', () => {
    clearGrid();
    createSquares();
});

function createSquares() {
    let squares = [];
    gridSize = prompt('Enter desired squares per side. Maximum of 100');
    for (let i = 0; i < (Math.pow(gridSize, 2)); i++) {
        const sizePercent = (100 / gridSize);
        const squareSize = `${sizePercent}%`
        squares[i] = document.createElement('div');
        squares[i].className = 'squares';
        squares[i].id = ('square' + (i + 1));
        squares[i].style.display = 'flex';
        squares[i].style.flexGrow = '1';
        squares[i].style.flexShrink = '1';
        squares[i].style.width = squareSize;
        squares[i].style.height = squareSize;
        squares[i].addEventListener('mouseover', randomColor);
        container.appendChild(squares[i]);
    }
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

function randomColor() {
    let randomValueOne = (parseInt(Math.random() * 255) + 1)
    let randomValueTwo = (parseInt(Math.random() * 255) + 1)
    let randomValueThree = (parseInt(Math.random() * 255) + 1)
    let alphaCounter = '';
    alphaCounter += 0.1;
    this.style.backgroundColor = `rgba(${randomValueOne}, ${randomValueTwo}, ${randomValueThree}, ${alphaCounter})` // selector issue
}


