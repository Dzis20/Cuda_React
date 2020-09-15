document.getElementsByClassName('.header-burger').onclick = function() {
    document.getElementsByClassName('.header-burger, .header-menu').classList.toggle('active');
    document.getElementsByClassName('body').classList.toggle('lock')
}