let btnBasket=document.querySelector('.basket')
let basket=document.querySelector('.basket-popup')
let btnClose=document.querySelector('.basket-close-icon')

btnBasket.addEventListener('click',function(){
    basket.classList.add('show-basket');
})
btnClose.addEventListener('click',function(){
    basket.classList.remove('show-basket')
})