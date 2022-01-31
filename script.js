const images = document.querySelectorAll(".mySlides");

let index = 0;

function carousel(){

    for(let i =0; i<images.length;i++){
        images[i].style.display = 'none';
    }
    index++;
    if(index === images.length){
        index = 1;
    }
    images[index-1].style.display = 'block';
    setTimeout(carousel,3000)
}

carousel();