window.addEventListener('load',function(){
    //todo lo q hago con js
    let h2 = document.querySelector('h2');
    h2.addEventListener('mouseover',function(){
        h2.style.color = "red";
    })
    h2.addEventListener('mouseover',function(){
        setTimeout(function(){
            h2.style.color = "green";
        },3000)
    })
    let numero = Math.round(Math.random()*100);
})