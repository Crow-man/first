let username=document.querySelector('.username')

username.addEventListener('keyup',function(){
    if(username.value == ''){
        alert('no')
    }
})

let password = document.querySelector('.password')


password.addEventListener('keyup', function(){
    if(password.value.length<10 && password.value.length > 4){
        alert('bye')
    }
})