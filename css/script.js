let toogleButton=document.getElementById('burger-bar');
let navigation=document.getElementById('nav');

toogleButton.addEventListener('click', function() {
navigation.classList.toggle('active');
});