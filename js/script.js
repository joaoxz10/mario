const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

mario.classList.remove('jump');


const jump = ()=> {

 mario.classList.add('jump');

 setTimeout(()=> {
    mario.classList.remove('jump');
 } , 570);
}

const loopGame =setInterval(()=> {
    const pipePosition =pipe.offsetLeft
    const marioPosition =+window.getComputedStyle(mario).bottom.replace('px' ,'');

    if (pipePosition <=120 && pipePosition > 0 && marioPosition <80){
        pipe.style.animation = 'none'
        mario.src= './images/game-over.png';
        pipe.style.bottom= '${pipePosition}px';

    
    
    }

  

    
    
    

    

} ,10)

let loop = setInterval(loopGame, 10);




document.addEventListener('keydown' ,jump);
