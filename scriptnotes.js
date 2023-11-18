
// conditional that tried to add breaks

const lineBreaks = [];
if ((squares[i].id) % 16 == 0) {    // every 16 iterations
    lineBreaks[i] = document.createElement('p');
    lineBreaks[i].id = ('break' + (i+1) * (0.0625));    // creates ids for each break
    container.appendChild(lineBreaks[i]);
}

// creates 256 squares
const squares = [];
for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].id = ('square' + (i + 1));
    squares[i].style.background = 'pink';
    squares[i].style.width = '6.25%';
    squares[i].style.height = '6.25%';
    squares[i].style.display = 'flex';
}

// failed column idea
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
