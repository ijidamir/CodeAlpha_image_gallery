let images = document.querySelectorAll('.gallery-img');
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');
let caption = document.querySelector('.lightbox-caption');
let closeBtn = document.querySelector('.close');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

let currentIndex = 0;

function showImage(index) {
     console.log('tryingto show index',index,'total images', images.length);



    lightboxImg.src = images[index].src;
    caption.textContent = images[index].alt;
    currentIndex = index;
    lightbox.style.display = 'flex';
}

images.forEach((img,i)=> {
    img.addEventListener('click',()=> showImage(i))
});
 
closeBtn.addEventListener('click',() =>{
    lightbox.style.display = 'none';
});

prevBtn.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex)
});

nextBtn.addEventListener('click',()=>{
 currentIndex = ( currentIndex + 1) % images.length;
 showImage(currentIndex);
});

lightbox.addEventListener('click',(e) =>{
    if (e.target === lightbox) lightbox.style.display = 'none'
});

document.addEventListener('keydown',(e) => {
    if (e.key === 'Escape') lightbox.style.display = 'none';
    if (e.key === 'ArrowLeft')prevBtn.click();
    if (e.key === 'ArrowRight')nextBtn.click();

}) 



