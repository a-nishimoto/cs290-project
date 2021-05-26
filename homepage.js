/*
Click Me!
Input: clicks the "click me!" text
Output: deletes the click me from the DOM and adds the stuff containing the relavent links to other sites
*/

const section1 = document.querySelector('.section1');

// Section 2: After clicking on section 1

const section2 = document.createElement('section');
section2.innerHTML = "<h1>Welcome to Peter's Project Website!</h1>"
section2.classList.add('section2', 'animated', 'fadeIn');


// declare new section to replace section 2
const section3 = document.createElement('section');
section3.classList.add('section3', 'animated', 'fadeIn');

// new text
const subpage1 = document.createElement('h1');
subpage1.innerHTML = '<span><a href="photography.html">Photography</a></span> &emsp; <span><a href="aboutMe.html" > Contact</a></span> &emsp; <span><a href ="resumeCV.html"> Resume</a></span>'

//append
section3.appendChild(subpage1);


// attach to document
section1.addEventListener('click', () => {
    const parent = section1.parentElement
    parent.removeChild(section1)
    parent.appendChild(section2)
    return new Promise(resolve => {
        setTimeout(function () {
            parent.removeChild(section2);
            parent.appendChild(section3);
        }, 3000)
    })
});

