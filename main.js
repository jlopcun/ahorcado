const word = document.getElementById('word');
const allWords = ['manolito','pepa','argentina','peru','mamamielda','pauxichan','barritens','nomen'];
const startGame = document.getElementById('startGame');
const letterContainer = document.getElementById('letter-container');
let wordSelected;
let randomWord;
let wordbars;
startGame.addEventListener('click',()=>{
    randomWord =  allWords[randomInt(0,allWords.length-1)];
    wordSelected = randomWord.split("");
    wordbars = new Array(randomWord.length).fill('_');
    word.textContent=wordbars.toString().replaceAll(',','');
    if(word.textContent) startGame.textContent='Another word!';
})
letterContainer.addEventListener('click',(e)=>{
    if(e.target.className==='letter'){
        if(randomWord.includes(e.target.textContent)){
            document.body.style.backgroundColor = 'green' ; 
            wordbars[wordSelected.indexOf(e.target.textContent)]=e.target.textContent;
            wordSelected[wordSelected.indexOf(e.target.textContent)]='.';
            word.textContent=wordbars.toString().replaceAll(',','');
        }
        
        else document.body.style.backgroundColor = 'red';

    }
    c
})

const randomInt = (f,l) =>{
    return Math.round(Math.random()*(f-l)+l);
}



