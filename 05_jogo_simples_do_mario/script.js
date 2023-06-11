const mario = document.querySelector('.mario');

function jump() {
    mario.classList.add('jump');

    setTimeout(() => {    
        mario.classList.remove('jump');
    }, 500);
}

document.addEventListener('keydown', jump);