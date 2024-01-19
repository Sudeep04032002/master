// DOM - document object model -interacting with web page
// DOM is a structured representation of html document which allows js to access html elements and StylePropertyMaples to manipulate them.

// console.log(document.querySelector('.message'))
// console.log(document.querySelector('.message').textContent)
// console.log(document.querySelector('.message').textContent)


// console.log(document.querySelector('.message').textContent='Currect number')

// document.querySelector('.score').textContent= 10
// document.querySelector('.guess').value= 18
// document.querySelector('.number').textContent= 15


let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0
let playing = true

const displayMag =function(message){
    document.querySelector('.message').textContent = message

}

// document.querySelector('.number').textContent = secretNumber
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(typeof guess, guess)

    if (playing) {
        if (!guess || guess <= 0 || guess > 20) {
            displayMag('plz enter between 1 and 20')
        }


        else if (guess == secretNumber) {
            displayMag('currect number')
            document.querySelector('.number').textContent = secretNumber
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('body').style.backgroundColor = '#60b347'

            if (score > highScore) {
                highScore = score
                document.querySelector('.highscore').textContent = highScore

            }
            playing = false

        }
        else if (guess !== secretNumber) {
            if (score > 1) {
                displayMag( guess>secretNumber? 'too high' : 'too low')
                
                score--
                document.querySelector('.score').textContent = score
            }
            else{
                displayMag('you lost the game')
                document.querySelector('.score').textContent=0
            }
        }


        // else if(guess > secretNumber){
        //     if(score>1){
        //         document.querySelector('.message').textContent='too high'        
        //         score--
        //         document.querySelector('.score').textContent=score
        //     }
        // }
        // else if(guess < secretNumber){
        //     if(score>1){
        //     document.querySelector('.message').textContent='too low'
        //     score--
        //     document.querySelector('.score').textContent=score
        //     }
        //     else{
        //         document.querySelector('.message').textContent='you lost the game'  
        //         document.querySelector('.score').textContent=0
        //     }
        // }
    }

})
document.querySelector('.again').addEventListener('click', function () {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    displayMag('start guessing...')
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    playing = true
})
