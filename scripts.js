
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
bigContainer.appendChild(container);

// creates 256 squares
const squares = [];
for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].id = ('square' + (i + 1));
    squares[i].style.background = 'pink';
    squares[i].style.width = '6.25%';
    squares[i].style.height = '6.25%';
    squares[i].style.display = 'flex';
    squares[i].style.flexGrow = '1';
    squares[i].style.flexShrink = '0';
    container.appendChild(squares[i]);
}