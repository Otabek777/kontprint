$('.banner__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
});
const li = document.querySelectorAll('.header__navbar .li');

document.querySelector('.header__burgir').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header__navbar').classList.toggle('active');
    document.querySelector('.bg').classList.toggle('active');
    for(let i = 0; i < li.length; i++) {
        li[i].classList.remove('open');
    };
});

for(let i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function() {
        this.classList.toggle('open');
    });
};