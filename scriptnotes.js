
// conditional that tried to add breaks

const lineBreaks = [];
if ((squares[i].id) % 16 == 0) {    // every 16 iterations
    lineBreaks[i] = document.createElement('p');
    lineBreaks[i].id = ('break' + (i+1) * (0.0625));    // creates ids for each break
    container.appendChild(lineBreaks[i]);
}

// loop that creates a row of 256 squares
for (let i = 0; i < 256; i++) {
    squares[i] = document.createElement('div');
    squares[i].id = (i + 1);
    squares[i].style.background = 'pink';
    squares[i].style.width = '16px';
    squares[i].style.height = '16px';
    squares[i].style.display = 'flex';
    container.appendChild(squares[i]);
}