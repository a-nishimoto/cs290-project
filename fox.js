// display foxes

const sect = document.querySelector('#fox');

document.addEventListener('click', getFox())

async function getFox() {
    let res = await fetch('https://randomfox.ca/floof/');
    let some = await res.json();
    let foxPicture = document.createElement('img');
    foxPicture.src = some['image']
    sect.appendChild(foxPicture)
}

// answer the question!
const answerYes = document.querySelector('#answerYes');
const answerNo = document.querySelector('#answerNo');
const foxesSection = document.querySelector('#display');
const questions = document.querySelector('#question');

answerYes.addEventListener('click', () => {
    foxesSection.classList.remove('hidden');
    questions.classList.add('hidden');
})

answerNo.addEventListener('click', () => {
    questions.classList.add('hidden');
    document.querySelector('h1').classList.add('hidden');

    const yourAnswerisWrong = document.createElement('h1');
    yourAnswerisWrong.innerText = "I THINK YOU'RE QUITE MISTAKEN...let's try again"
    document.querySelector('body').appendChild(yourAnswerisWrong);

    return new Promise(resolve => {
        setTimeout(function () {
            location.reload()
        }, 3000)
    })
});

const backButton = document.querySelector('#return');
backButton.addEventListener('click', () => {
    window.location.replace('aboutMe.html')
})


