//Selectors
const inputField = document.querySelector('#input-field');
const guessBtn = document.querySelector('#guess-btn');
const form = document.querySelector('form');
const theAnswer = document.querySelector('#the-answer');

// Event Listener 

guessBtn.addEventListener('click', () => {
    const rand = Math.floor(Math.random() * 10 + 1);
    const newP = document.createElement('p');
    theAnswer.appendChild(newP);
    if (rand == inputField.value)
    {
        newP.classList.add('rightAnswer')
        newP.innerText = `Congrats you guessed right! your answer was ${inputField.value}! and the number i was looking for was ${rand}.`;
        
    } else
    {
        newP.classList.add('wrongAnswer')
        newP.innerText = `Wrong answer, try again. Your answer was ${inputField.value} the number i was looking for was ${rand}.`;
        setTimeout(() => {
            newP.remove(newP);
        }, 3000)
    };

    if (inputField.value === "")
    {
        newP.innerText = "Please enter a number!"
    };
    
     console.log(rand);

    // Clear Input Field
    inputField.value = "";

});

// Prevent Form From Submitting

form, addEventListener('click', function (e) {
    e.preventDefault();
});

