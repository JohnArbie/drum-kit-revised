function playSound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

function keycode(e) {
    console.log(e.keyCode)
}

//window.addEventListener('keydown', keycode)
//window.addEventListener('keydown', playSound)
//keys.forEach(individualKey => individualKey.addEventListener('transitionend', removeTransition))

const keys = document.querySelectorAll('.key')

function removeTransition(e){
    if(e.propertyName != 'transform') return;
    e.target.classList.remove('playing')
}

keys.forEach(individualKey => individualKey.addEventListener('click', ()=> {
    const key = document.querySelector(`div[data-key="${individualKey.attributes[0].nodeValue}"]`)
    const audio = document.querySelector(`audio[data-key="${individualKey.attributes[0].nodeValue}"]`)

    if (!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}))

keys.forEach(individualKey => individualKey.addEventListener('transitionend', removeTransition))