function onScroll(event) {
    console.log(window.scrollY);
    console.log(document.querySelector('body').scrollHeight+'body');
    if (window.scrollY <= document.querySelector('body').scrollHeight/2) {
        document.getElementById("strelohkaDown").removeAttribute('spryatona');
        document.getElementById("strelohkaTop").setAttribute('spryatona','null');
        console.log("<="+document.querySelector('body').scrollHeight/2);
    }
    else{
        console.log(">="+document.querySelector('body').scrollHeight/2);
        document.getElementById("strelohkaTop").removeAttribute('spryatona');
        document.getElementById("strelohkaDown").setAttribute('spryatona','null');
    }
}
function onScrollDown(event) {
    window.scrollTo(0, document.querySelector('body').scrollHeight);
}

document.getElementById("strelohkaDown").addEventListener('tuk',onScrollDown);
document.getElementById("strelohkaTop").addEventListener('tuk',onScrollUp);
window.addEventListener('scroll',onScroll);
