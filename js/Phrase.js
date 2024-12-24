/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const list = document.querySelector("#phrase ul");
const hearts = document.querySelector("#scoreboard ol");
const qwerty = document.querySelector("#qwerty");


let letterFound = null; 
let missed = 0;

class Phrase {
    constructor(phrase) {
      this.phrase = phrase.toLowerCase();
    }
    addPhraseToDisplay() {
        for(let i = 0; i < this.phrase.length; i++) {
            const html = document.createElement("li");
            html.textContent = this.phrase[i];
            
            if(this.phrase[i] === " ") {
                html.className = "space";
                list.appendChild(html);
            } else {
                html.className = "letter" + " " + "hide" + " " + this.phrase[i];
                list.appendChild(html);
            } 
        }
    }
    checkLetter(button) {
        let item = list.children;
        let letter = "";
        let count = 0;
        for(let i = 0; i < item.length; i++) {
            letter = item[i].textContent;
            if(button.textContent.toUpperCase() === letter.toUpperCase()) {
                this.showMatchedLetter(i, letter);
                count += 1;
                button.className = 'chosen';
            } 
        }
        if(count === 0) {
            game.removeLife();
            button.className = 'wrong';
        }  
    }
    showMatchedLetter(i, letter) {
        let item = list.children;
        item[i].className = item[i].className + " show";
        item[i].classList.remove = "hide";
        item[i].style.transition = "all 2s";
        letterFound = letter;
        game.checkWin();
    }
}