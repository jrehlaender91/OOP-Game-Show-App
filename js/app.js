let game;

// START BUTTON LISTENER
startButton.addEventListener("click", (e) => {
    game = new Game();
    game.startGame();
});

// KEYBOARD LISTENER THAT HANDLES KEYUP EVENTS AND THEN PAIRS IT WITH A QWERTY BUTTON
document.addEventListener("keyup", e => {
    for(let i = 0; i < qwerty.children.length; i++) {
        for(let x = 0; x < qwerty.children[i].children.length; x++) {
            if(e.key === qwerty.children[i].children[x].textContent) {
                game.handleInteraction(qwerty.children[i].children[x]);
            }
        }
    }
});

// QWERTY BUTTON LISTENER FOR CLICKS
qwerty.addEventListener("click", e => {
    e.preventDefault();
    if(e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
});

