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

