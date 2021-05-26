/*
This code block handles the static display of the headers
*/
window.onscroll = function () { staticHeader() };
const header = document.getElementById("myHeader");
const sticky = header.offsetTop;

function staticHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}


/*
Handles the logic of controlling visibility of different sections
of the resume
*/

// helper functions
function hideAll() {
    for (let section of allSections) {
        section.classList.add('hidden');
    }
}

function displaySection(sectionName) {
    let section = document.querySelector(sectionName)
    section.classList.remove('hidden');
}

// define the 4 buttons
const experience = document.querySelector('#exp');
const education = document.querySelector('#edu');
const certifications = document.querySelector('#cert');
const skills = document.querySelector('#skl');

// define all elements
const allSections = document.querySelectorAll('.subsection');

experience.addEventListener('click', () => {
    hideAll();
    displaySection('#experience');
})

education.addEventListener('click', () => {
    hideAll();
    displaySection('#education');
})

certifications.addEventListener('click', () => {
    hideAll();
    displaySection('#certifications');
})

skills.addEventListener('click', () => {
    hideAll();
    displaySection('#skills');
})
