const word = document.getElementById('word');
const allWords = ['manolito','pepa','argentina','peru','mamamielda','pauxichan','barritens','nomen'];
const startGame = document.getElementById('startGame');
const letterContainer = document.getElementById('letter-container');
const letters = document.querySelectorAll('.letter');
const lettersDontHave = document.getElementById('lettersDontHave');
const missed = document.getElementById('missed');
let wordSelected;
let randomWord;
let wordbars;
let misses=0;
startGame.addEventListener('click',()=>{
    randomWord =  allWords[randomInt(0,allWords.length-1)];
    wordSelected = randomWord.split("");
    wordbars = new Array(randomWord.length).fill('_');
    word.textContent=wordbars.toString().replaceAll(',','');
    if(word.textContent) startGame.textContent='Another word!';
    document.body.style.backgroundColor = '#fff';
    letters.forEach((el)=>{
        el.setAttribute('data-actionable','data-actionable');
    })
    lettersDontHave.textContent='';
    missed.textContent=0;
 
})
letterContainer.addEventListener('click',(e)=>{
    if(e.target.hasAttribute('data-actionable')){
        if(word.textContent.includes('!!')){
            e.target.removeAttribute('data-actionable');
       }
        else if(randomWord.includes(e.target.textContent)){
            document.body.style.backgroundColor = 'green' ; 
            hasAnotherIndex(wordSelected,e.target.textContent);
            if(!word.textContent.includes('_')) word.textContent = 'you`ve won!! congratulations :)';
        }
        
        else {
            document.body.style.backgroundColor = 'red';
            misses+=1;
            lettersDontHave.textContent+=e.target.textContent;
            missed.textContent=misses;
            if(misses===6){
                word.textContent='you`ve lost the game!! :(';
                randomWord='';
            }
        }
     
    }
    
})

const randomInt = (f,l) =>{
    return Math.round(Math.random()*(f-l)+l);
}
const hasAnotherIndex = (array,element) =>{
    wordbars[array.indexOf(element)]=element;
    array[array.indexOf(element)]='.';
    (array.indexOf(element)!==-1)?hasAnotherIndex(array,element)
    :word.textContent=wordbars.toString().replaceAll(',','')
}



