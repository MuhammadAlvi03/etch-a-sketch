/* 
need to create a 16 x 16 grid of divs
each needs to be of equal size
*/

// figure out how to add a line break between every 16 divs in order to create a grid
// or could use flexbox to create a grid
// create rows or column first, then append the sqaures to the columns

const container = document.querySelector('.container');
container.style.height = '100vh';
container.style.display = 'flex';
container.style.flexDirection = 'row';

const columns = [];

for (let i= 0; i < 16; i++) {
    columns[i] = document.createElement('div');
    columns[i].style.height = '100%';
    columns[i].style.width = '6.25%';
    columns[i].id = (i + 1);
    container.appendChild(columns[i]);
}

// creates 256 squares
const squares = [];
for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].id = (i + 1);
    squares[i].style.background = 'pink';
    squares[i].style.width = '6.25%';
    squares[i].style.height = '6.25%';
    squares[i].style.display = 'flex';
}

// goal is to append 16 squares per column

