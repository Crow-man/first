let btnBasket=document.querySelector('.basket')
let basket=document.querySelector('.basket-popup')
let btnClose=document.querySelector('.basket-close-icon')

btnBasket.addEventListener('click',function(){
    basket.classList.add('show-basket');
    document.body.style.overflow='hidden';
})
btnClose.addEventListener('click',function(){
    basket.classList.remove('show-basket')
    document.body.style.overflow='auto';
})

let btnsidebar=document.querySelector('.btn-sidebar')
let sidebar=document.querySelector('.sidebar')

btnsidebar.addEventListener('click',function(){
    sidebar.classList.toggle('show-sidebar');
})


// test git add .