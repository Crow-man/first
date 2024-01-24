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
let btnClosesidebar=document.querySelector('.btn-close-sidebar')
let sidebar=document.querySelector('.sidebar')



let x=[2,5,6,7,10]
console.log(x.includes(2));

document.addEventListener('click',function(e){
    const isClickedInsideDiv = e
    .composedPath()
    .includes(
      document.querySelector("main")
    );
    console.log(e.composedPath())

  if (isClickedInsideDiv == true) {
    btnClosesidebar.classList.remove("active");
    document.querySelector(".sidebar").classList.remove("show-sidebar");
  }
})

btnsidebar.addEventListener('click',function(){
    sidebar.classList.add('show-sidebar');
})
btnClosesidebar.addEventListener('click',function(){
    sidebar.classList.remove('show-sidebar');
})

window.addEventListener('mouseover',function(e){
})


// test git add .

let hours=document.querySelector('.hours')
let minutes=document.querySelector('.minutes')
let seconds=document.querySelector('.seconds')

function displayTime(){
    let dates=new Date();
    let hrs=dates.getHours();
    let mins=dates.getMinutes();
    let sec=dates.getSeconds();
    
    if(sec < 10){
        sec='0'+sec
    }
    if(mins < 10){
        mins='0'+mins
    }
    if(hrs>12){
        hrs=hrs-12
    }
    if(hrs < 10){
        hrs='0'+hrs
    }
    

    hours.innerHTML=hrs;
    minutes.innerHTML=mins;
    seconds.innerHTML=sec;
}
setInterval(displayTime,10)


let dhours = document.querySelector('.dhours')
let dday = document.querySelector('.dday')
let dminuets = document.querySelector('.dminutes')
let dseconds = document.querySelector('.dseconds')

let d=new Date().getFullYear();
let newYear=new Date(`january 01 ${d+1} 00:00:00`);

function coomingSoon(){
    let currentDate=new Date();
    let diff=newYear - currentDate;
    let d=Math.floor(diff / 1000 / 60 / 60 / 24);
    let h=Math.floor(diff / 1000 / 60 / 60 % 24);
    let m=Math.floor(diff / 1000 / 60 % 60);
    let s=Math.floor(diff / 1000 % 60);

    dday.innerHTML=d;
    dhours.innerHTML=h;
    dminuets.innerHTML=m;
    dseconds.innerHTML=s;
}

setInterval(coomingSoon,10)

