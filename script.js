let openBtn = document.getElementById('open');
let closeBtn = document.getElementById('close');
let container = document.getElementsByClassName('container')

openBtn.addEventListener("click", function(e) {
    container[0].classList.add('show-nav');
});

closeBtn.addEventListener("click", function(e) {
    container[0].classList.remove('show-nav');
})