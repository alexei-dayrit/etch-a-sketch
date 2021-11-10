const container = document.querySelector('.container');
const btnBlack = document.createElement('button');
const btnRGB = document.createElement('button');
const btnGray = document.createElement('button');
const btnSize = document.createElement('button');
const btnEraser = document.createElement('button');
const buttonsContainer = document.querySelector('.buttons');

function createDivs(col, rows) {
    for(let i = 0; i < (col * rows); i++){
        const div = document.createElement('div');
        div.style.border = '0.1px solid black';
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box');
    }
}

createDivs(16, 16);

function createGrayColor() {
    const boxes = container.querySelectorAll('.box')
    btnGray.textContent = 'Gray'
    btnGray.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            let randomNum = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${randomNum}, ${randomNum}, ${randomNum})`
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn');
}
createGrayColor()

function createBlackColor() {
    const boxes = container.querySelectorAll('.box')
    btnBlack.textContent = 'Black'
    btnBlack.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = 'black';
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn');
}
createBlackColor()

function createRGB() {
    const boxes = container.querySelectorAll('.box')
    btnRGB.textContent = 'RGB'
    btnRGB.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            let red = Math.floor(Math.random() * 255)
            let green = Math.floor(Math.random() * 255)
            let blue = Math.floor(Math.random() * 255)
            box.style.background = `rgb(${red}, ${green}, ${blue})`
        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn');
}
createRGB()

function createEraser() {
    const boxes = container.querySelectorAll('.box')
    btnEraser.textContent = 'Eraser'
    btnEraser.addEventListener('click' , () =>{
        boxes.forEach(box => box.addEventListener('mouseover', ()=> {
            box.style.background = 'white';
        }))
    })
    buttonsContainer.appendChild(btnEraser).classList.add('btn');
}
createEraser()

function resetGrid() {
    const boxes = container.querySelectorAll('.box')
    boxes.forEach(box => box.remove())
}

function changeGridSize() {
    btnSize.textContent = 'Grid Size'
    btnSize.addEventListener('click', () => {
        let user = prompt('How many squares on each side?')
        if(user === null || user === '' || user < 1) {
            alert('Invalid entry, page will now reset')
        } else {
            resetGrid()
            createDivs(user, user)
            createBlackColor()
            createGrayColor()
            createRGB()
            createEraser()
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
changeGridSize()
