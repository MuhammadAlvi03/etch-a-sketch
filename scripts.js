
// make a gridsize var to determine how many times creation loop should iterate
const gridSize = prompt('how many squares per side?')

const bigContainer = document.querySelector('.biggerContainer');
bigContainer.style.display = 'flex';
bigContainer.style.justifyContent = 'center';
bigContainer.style.height = '100vh';

const container = document.createElement('div');
container.style.height = '100vh';
container.style.width = (container.style.height);
container.style.display = 'flex';
container.style.flexDirection = 'row';
container.style.flexWrap = 'wrap';
container.style.borderColor = 'black';
container.style.borderStyle = 'solid';
bigContainer.appendChild(container);


// need to rework this function to make the width and height take up as much space as they can
// creates 256 squares
const squares = [];
for (let i = 0; i < (gridSize * gridSize); i++) {
    squares[i] = document.createElement('div');
    squares[i].id = ('square' + (i + 1));
    squares[i].style.display = 'flex';
    squares[i].style.flexGrow = '1';
    squares[i].style.flexShrink = '1';
    squares[i].style.width = '6.25%';
    squares[i].style.height = '6.25%';
    squares[i].addEventListener('mouseover', randomColor);
    container.appendChild(squares[i]);
}


function randomColor() {
    let randomValueOne = (parseInt(Math.random() * 255) + 1)
    let randomValueTwo = (parseInt(Math.random() * 255) + 1)
    let randomValueThree = (parseInt(Math.random() * 255) + 1)
    this.style.backgroundColor = `rgb(${randomValueOne}, ${randomValueTwo}, ${randomValueThree})` // selector issue
}

