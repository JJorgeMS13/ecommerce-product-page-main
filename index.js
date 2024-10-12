const btnMenu = document.getElementById('btnMenu--toogle');
const navbar = document.getElementById('menu');
const iconBtn = document.getElementById('iconBtn');
/* Slider Main */
const imgSlider = document.getElementById('slider-img');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');
const sliderCounter = document.getElementById('slider-counter');
const mainSlider = document.getElementById('slider-main');
/* Slider Full Screen */
const imgSliderScreen = document.getElementById('img_slider-screen');
const btnPrevScreen = document.getElementById('prev-btn-screen');
const btnNextScreen = document.getElementById('next-btn-screen');
const sliderCounterScreen = document.getElementById('slider-counter-screen');
const screenSlider = document.getElementById('slider-screen');
const btncloseSlider = document.getElementById('closeSlider');

/* Add cart */
const btnMinus = document.getElementById('btn-minus');
const btnPlus = document.getElementById('btn-plus');
const amount = document.getElementById('amount');
const btnAddCart = document.getElementById('btn_addCart');
const amountProductCart = document.getElementById('amount_product-cart');

const showCard = document.getElementById('showCard');
const cardInfoEmpty = document.getElementById('card-info-empty');
const cardInfoProduct = document.getElementById('card-info-product');
const btnCart = document.getElementById('btn_cart');
const btnDelete = document.getElementById('btn_delete');
const cardAmountProduct = document.getElementById('card_amount_product');
const cardPrice = document.getElementById('card_price');
const totalPay  = document.getElementById('total_pay');
const btnCheckout = document.getElementById('btn_checkout');

//Se obtienen los elementos donde se va aponer le borde
const thumbnails = [
    document.getElementById('thumbnail1'),
    document.getElementById('thumbnail2'),
    document.getElementById('thumbnail3'),
    document.getElementById('thumbnail4')
];

let amou = 0;
function plusAmount() {
    amou++;
    amount.textContent = amou;
}
function minusAmount() {
    
    if (amou > 0) {
        amou--;
        amount.textContent = amou;
    }
    
}
btnPlus.addEventListener('click', plusAmount);
btnMinus.addEventListener('click', minusAmount);

function changeContentCard() {
    if (amou > 0 && amountProductCart.textContent !== '0') {

        cardInfoProduct.classList.add('show-info-full');
        cardInfoEmpty.classList.add('hidden-empty');
        cardAmountProduct.textContent = amou;
        let price = parseInt(cardPrice.textContent, 10);

        totalPay.textContent = ` $${price * amou}`;

    } else if (amountProductCart.textContent === '0') {
        
        cardInfoEmpty.classList.remove('hidden-empty');
        cardInfoProduct.classList.remove('show-info-full');
    }
}

/* button que agrega productos al carrito */
btnAddCart.addEventListener('click', () => {
    amountProductCart.textContent = amou;
    if (amou > 0) {
        amountProductCart.classList.add('active_product-cart');
    } else  {
        amountProductCart.classList.remove('active_product-cart');
        showCard.classList.remove('active_card-cart');
    }
    changeContentCard();
});

/* button para ver los productos en el carrito */
btnCart.addEventListener('click', () => {
    showCard.classList.toggle('active_card-cart');
});
/* Button para eliminar porductos del carrito */
btnDelete.addEventListener('click', () => {    
    amou = 0;
    amountProductCart.textContent = amou;
    amount.textContent = amou;
    amountProductCart.classList.remove('active_product-cart');
    changeContentCard();
});
/* Button que envia los productos a pagar */
btnCheckout.addEventListener('click', () => {
    amou = 0;
    amountProductCart.textContent = amou;
    amount.textContent = amou;
    amountProductCart.classList.remove('active_product-cart');
    changeContentCard();
    alert('Se enviarón su productos');
});
 
const images =  [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg'
];
let indexImg = 0;
function updateImg(imgElement, index) {
    imgElement.src = images[index];
}
function previous(event, imgElement, counterElement) {
    //evita que a dar click en el boton se propage al elemto padre
    event.stopPropagation();
    indexImg = indexImg <= 0 ? images.length - 1: indexImg -= 1;
    updateImg(imgElement, indexImg);
    updateCounterPage(counterElement, indexImg);
}
function next(event, imgElement, counterElement) {
    //evita que a dar click en el boton se propage al elemto padre
    event.stopPropagation();
    indexImg = indexImg < images.length - 1 ? indexImg += 1 : 0;
    updateImg(imgElement, indexImg);
    updateCounterPage(counterElement, indexImg);
}
function updateCounterPage(counterElement, index) {
    counterElement.textContent =  `${(index + 1)} / ${images.length}`;
}
function openSlider() {
    indexImg = 0;
    updateImg(imgSliderScreen, indexImg);
    updateCounterPage(sliderCounterScreen, indexImg);
    screenSlider.classList.add('slider_active');
    selectedImg(thumbnails);
}
function closedSlider() {
    indexImg = 0;
    updateImg(imgSlider, indexImg);
    updateCounterPage(sliderCounter, indexImg);
    screenSlider.classList.remove('slider_active');
}
/* Pone el border a la imagen  thumbnail*/
function selectedImg(thumbnails) {
    thumbnails.forEach((thumbnail, index) => {
        // si los indices coinciden le agrego la clase si no se las quito
        if (index === indexImg) {
            thumbnail.classList.add('selected_img-small');
        }else {
            thumbnail.classList.remove('selected_img-small');
        }
        
    });
}
btnMenu.addEventListener('click', () => {
    const isExpand = btnMenu.getAttribute('aria-expanded') === 'true';    
    navbar.classList.toggle('menu_active');
    // Se cambia stado para saber que esta abierto el menu
    btnMenu.setAttribute('aria-expanded', !isExpand);

    if (isExpand) {
        btnMenu.style.position = 'static';
        iconBtn.src = './images/icon-menu.svg';
    }
    else {
        btnMenu.style.position = 'fixed';
        iconBtn.src = './images/icon-close.svg';
    }

});
mainSlider.addEventListener('click', openSlider);
btncloseSlider.addEventListener('click', closedSlider)


//Se obtienen los elementos donde se va aponer le borde
const thumbnailsMain = [
    document.getElementById('thumbnailMain1'),
    document.getElementById('thumbnailMain2'),
    document.getElementById('thumbnailMain3'),
    document.getElementById('thumbnailMain4')
];
/* Slider Main */
btnNext.addEventListener('click', (e) => {    
    next(e, imgSlider, sliderCounter);
    selectedImg(thumbnailsMain);
});
btnPrev.addEventListener('click', (e) => {
    previous(e, imgSlider, sliderCounter);
    selectedImg(thumbnailsMain);
});


/* Slider Full Screen */
btnNextScreen.addEventListener('click', (e) => {

    next(e, imgSliderScreen, sliderCounterScreen);
    selectedImg(thumbnails);
});
btnPrevScreen.addEventListener('click', (e) => {
    previous(e, imgSliderScreen, sliderCounterScreen);
    selectedImg(thumbnails);
});
selectedImg(thumbnailsMain);