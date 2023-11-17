/* 
need to create a 16 x 16 grid of divs
each needs to be of equal size
*/


const container = document.querySelector('.container');
container.style.height = '100vh';
container.style.display = 'flex';

const squares = [];
const lineBreaks = [];

for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].id = (i + 1);
    squares[i].style.background = 'pink';
    squares[i].style.width = '6.25%';
    squares[i].style.height = '6.25%';
    squares[i].style.display = 'flex';
    container.appendChild(squares[i]);
    if ((squares[i].id) % 16 == 0) {    // every 16 iteratiosns
        lineBreaks[i] = document.createElement('br');
        lineBreaks[i].id = ('break' + (i+1) * (0.0625));    // creates ids for each break
        container.appendChild(lineBreaks[i]);
    }
}