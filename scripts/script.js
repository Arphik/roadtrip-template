console.log("script loaded");

var windowH = window.innerHeight;
var sectionVisibleOffset = 120;
var inners = document.querySelectorAll('div.inner');
inners.length = 3;
document.addEventListener('scroll', () => {
    inners.forEach((inner, index) => {
            if(inner.getBoundingClientRect().bottom > 0 + sectionVisibleOffset && inner.getBoundingClientRect().top < windowH - sectionVisibleOffset){
                inner.classList.add('section--visible');
                if(index < inners.length-1)
                inner.nextElementSibling.classList.add('arrow--visible');
            }else{
                inner.classList.remove('section--visible');
                if(index < inners.length-1)
                inner.nextElementSibling.classList.remove('arrow--visible');
            }
    })
})

function checkIfInViewport(){

}