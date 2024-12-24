/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const startButton = document.querySelector("#btn__reset");
const heading = document.querySelector("h2");
let phraseArray = "";
let overlay = document.querySelector("#overlay");

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase ('BORN TO RUN'), 
            new Phrase ('SMOKE ON THE WATER'),
            new Phrase ('WHOLE LOTTA LOVE'), 
            new Phrase ('COMFORTABLY NUMB'), 
            new Phrase ('HOTEL CALIFORNIA'),
            new Phrase ('HELLO I LOVE YOU')
        ];
        this.activePhrase = null;
    }
    getRandomPhrase() {
        let randomNumber = Math.floor(Math.random() * 6);
        this.activePhrase = this.phrases[randomNumber];
        return this.activePhrase;
    } 
    startGame() {
        for(let i = 0; i < qwerty.children.length; i++) {
            for(let x = 0; x < qwerty.children[i].children.length; x++) {
                qwerty.children[i].children[x].disabled = false;
                qwerty.children[i].children[x].className = "key";
            }
        }
        for(let i = 0; i < hearts.children.length; i++) {
            hearts.children[i].getElementsByTagName("IMG")[0].src = "images/liveHeart.png";
        }
        overlay.style.display = "none";
        list.innerHTML = "";
        this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay(this.activePhrase.phrase);
    }
    checkWin() {
        let item = list.children;
        let showCount = 0;
        let letterCount = 0;

        for(let i = 0; i < item.length; i++) {       
            if(item[i].className.includes('letter')) {
                letterCount += 1;
            } 
            if (item[i].className.includes('show')) {
                showCount += 1;
            }
        }
        if(letterCount === showCount) {
            this.gameOver(true);
        } 
    };
    handleInteraction(button) {  
        console.log(button);      
            button.disabled = true; 
            this.activePhrase.checkLetter(button);             
    }
    removeLife() {
        let score = document.querySelector("#scoreboard ol");
        let hearts = score.children
        hearts[this.missed].getElementsByTagName("IMG")[0].src = "images/lostHeart.png";
        this.missed += 1;

        if(this.missed === 5) {
            this.gameOver(false);
        }
    }
    gameOver(gameWon) {
        if(gameWon) {
            overlay.style.display = "flex";
            overlay.className = "win"
            heading.textContent = "You won!"
        } else {
            overlay.style.display = "flex";
            overlay.className = "lose"
            heading.textContent = "Try again!"
        }

    }
  }