const navbarBtn = document.querySelector('.navbar__btn');
const navbarLinks = document.querySelector('.navbar__links');

navbarBtn.addEventListener('click', function(){
  let value = navbarLinks.classList.contains('navbar__collapse')

  if (value) {
    navbarLinks.classList.remove('navbar__collapse')
    navbarBtn.classList.remove('change')
  }
  else {
    navbarLinks.classList.add('navbar__collapse')
    navbarBtn.classList.add('change')
  }
})



const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow','red','green','#3b5998','orange','purple'];

colorBtn.addEventListener('click',changeColor);

function changeColor(){
  // bodyBcg.style.backgroundColor = 'pink';
  // bodyBcg.style.backgroundColor = colors[2];
  let random = Math.floor(Math.random()*colors.length);
  bodyBcg.style.backgroundColor = colors[random];

}

const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide(){
  container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'});
  if(counter ===7){
    counter = -1;
  }

  counter++;

  container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
};

function prevSlide(){
  container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'});
  if(counter === 0){
    counter = 8;
  }

  counter--;

  container.style.backgroundImage = `url(img/bcg-${counter}.jpg)`
};