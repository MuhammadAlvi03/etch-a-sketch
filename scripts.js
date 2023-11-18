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
    columns[i].style.display = 'flex';
    columns[i].style.flexDirection = 'column';
    columns[i].style.height = '100%';
    columns[i].style.width = '6.25%';
    columns[i].id = ('column' + (i + 1));
    columns[i].className = 'column';
    container.appendChild(columns[i]);
}


// creates 256 squares
const squares = [];
for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].id = ('square' + (i + 1));
    squares[i].style.background = 'pink';
    squares[i].style.width = '100%';
    squares[i].style.height = '6.25%';
    squares[i].style.display = 'flex';
    squares[i].style.flex = '1';
}

// goal is to append 16 squares per column
// maybe use forEach to loop through column array
// and for each column, append 16 squares
// or use for loop?

const columnsDiv = document.querySelectorAll('.column');
columnsDiv[0].appendChild(squares[0]);
columnsDiv[0].appendChild(squares[1]);

// here i am trying to solve how to append 16 squares to each column