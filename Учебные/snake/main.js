let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');


for (let i = 0; i < 100; i++) {
    let excel = document.createElement('div');
    field.appendChild(excel);
    excel.classList.add('excel');
}

let excels = document.getElementsByClassName('excel');

let x = 1;
    y = 10;

for(let i of excels) {
    if (x > 10) {
        x = 1;
        y--;
    }
    if (y < 1) break;
    i.setAttribute('posX', x);
    i.setAttribute('posY', y);
    x++;
}

function generateSnake() {
    let posX = Math.round(Math.random() * (10 -3) + 3);
    let posY = Math.round(Math.random() * (10 -1) + 1);
    return [posX, posY];
}
let coordinades = generateSnake();
let snakeBody = [document.querySelector('[posX = "'+coordinades[0]+'"][posY = "' + coordinades[1]+'"]'),
                document.querySelector('[posX = "'+ (coordinades[0] - 1)+'"][posY = "' + coordinades[1]+'"]'),
                document.querySelector('[posX = "'+ (coordinades[0] - 2)+'"][posY = "' + coordinades[1]+'"]')];
for (const i of snakeBody) {
    i.classList.add('snakeBody');
}
snakeBody[0].classList.add('head');

let mouse;
let mouseCoordinates;
function createMouse() {
    function generateMouse() {
        let posX = Math.round(Math.random() * (10 - 1) + 1);
        let posY = Math.round(Math.random() * (10 - 1) + 1);
        return [posX, posY];
    }
    mouseCoordinates = generateMouse();
    let a = document.querySelector('[posX = "'+mouseCoordinates[0]+'"][posY = "' + mouseCoordinates[1]+'"]');
    while (a.classList.contains('snakeBody')) {
        mouseCoordinates = generateMouse(); 
        a = document.querySelector('[posX = "'+mouseCoordinates[0]+'"][posY = "' + mouseCoordinates[1]+'"]');
    }
    mouse = document.querySelector('[posX = "' + mouseCoordinates[0]+'"][posY = "' + mouseCoordinates[1]+ '"]');
    mouse.classList.add('mouse');
}
let direction = 'right';
let score = 0;
createMouse();
function move() {
    
    let snakeCoords = [snakeBody[0].getAttribute('posX'), snakeBody[0].getAttribute('posy')];
    snakeBody[snakeBody.length -1].classList.remove('snakeBody');
    snakeBody[0].classList.remove('head');
    snakeBody.pop();
    if (direction == 'right') {
        if (snakeCoords[0] > 9) snakeCoords[0] = 0;
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoords[0] + 1) +'"][posY = "' + (+snakeCoords[1])+ '"]'));}
    if (direction == 'left') {
        if (snakeCoords[0] < 2) snakeCoords[0] = 11;
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoords[0] - 1) +'"][posY = "' + (+snakeCoords[1])+ '"]'));}
    if (direction == 'down') {
        if (snakeCoords[1] < 2) snakeCoords[1] = 11;
         snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoords[0]) +'"][posY = "' + (+snakeCoords[1]-1)+ '"]'));}
    if (direction == 'up')  {
        if (snakeCoords[1] > 9) snakeCoords[1] = 0;
        snakeBody.unshift(document.querySelector('[posX = "' + (+snakeCoords[0]) +'"][posY = "' + (+snakeCoords[1]+1)+ '"]'));}

    if (snakeBody[0].classList.contains('mouse')) {
        score++;
        mouse.classList.remove('mouse');
        createMouse();
        snakeBody.push(snakeBody[snakeBody.length -1]);
        snakeBody.forEach(a=>a.classList.add('snakeBody'));
        snakeBody[0].classList.remove('snakeBody');
    }   
    
    snakeBody[0].classList.add('head');
    if (snakeBody[0].classList.contains('snakeBody')) {
        alert("END");
    }
    snakeBody[0].classList.add('snakeBody');
    snakeBody[snakeBody.length -1].classList.add('snakeBody');
}
let interval = setInterval(move, 200);

window.addEventListener('keydown', function (e) {
    if (e.keyCode == 37 && direction != 'right') {
        direction = 'left';
    } else  if (e.keyCode == 38 && direction != 'down') {
        direction = 'up';
    } else  if (e.keyCode == 39 && direction != 'left') {
        direction = 'right';
    } else if (e.keyCode == 40 && direction != 'up') {
        direction = 'down';
    }
    console.log(direction);
});

