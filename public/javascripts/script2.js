window.addEventListener('load',function(){
    
    /*  ADIVINAR EL NUMERO   */
    let chancesNum = 5;
    let numero = Math.round(Math.random()*100);
    let button = document.querySelector('button');
    
    button.addEventListener('click',function(){
        let num = document.querySelector('input[name=numero]').value;
        if(num == numero){
            document.querySelector('h2').innerHTML="Ganaste!!";
        }else if(num > numero){
            document.querySelector('h2').innerHTML="te pasaste";
            chancesNum--;
            document.querySelector('h5 strong').innerHTML = chancesNum;
        }else if(num < numero){
            document.querySelector('h2').innerHTML="es mas alto...";
            chancesNum--;
            document.querySelector('h5 strong').innerHTML = chancesNum;
        }
        if(chancesNum == 0){
            button.style.display = "none";
        }
    })
    

    /* ADIVINAR LA FRASE */
    let frase = ["d","i","e","g","o","e","s","e","l","p","r","o","f","e"];

    var chances = 5;
    document.addEventListener('keyup',function(e){
        if(e.keyCode >=65 && e.keyCode <= 90){
            if(e.key == "a"){
                let letras = document.querySelectorAll('.a');
                letras.forEach(letra=>{
                    letra.innerHTML = "A"
                });
            }else if(e.key == "b"){
                let letras = document.querySelectorAll('.b');
                letras.forEach(letra=>{
                    letra.innerHTML = "B"
                });
            }else if(e.key == "c"){
                let letras = document.querySelectorAll('.c');
                letras.forEach(letra=>{
                    letra.innerHTML = "C"
                });
            }else if(e.key == "d"){
                let letras = document.querySelectorAll('.d');
                letras.forEach(letra=>{
                    letra.innerHTML = "D"
                });
            }else if(e.key == "i"){
                let letras = document.querySelectorAll('.i');
                letras.forEach(letra=>{
                    letra.innerHTML = "I"
                });
            }else if(e.key == "e"){
                let letras = document.querySelectorAll('.e');
                letras.forEach(letra=>{
                    letra.innerHTML = "E"
                });
            }else if(e.key == "g"){
                let letras = document.querySelectorAll('.g');
                letras.forEach(letra=>{
                    letra.innerHTML = "G"
                });
            }else if(e.key == "o"){
                let letras = document.querySelectorAll('.o');
                letras.forEach(letra=>{
                    letra.innerHTML = "O"
                });
            }else if(e.key == "f"){
                let letras = document.querySelectorAll('.f');
                letras.forEach(letra=>{
                    letra.innerHTML = "F"
                });
            }else if(e.key == "h"){
                let letras = document.querySelectorAll('.h');
                letras.forEach(letra=>{
                    letra.innerHTML = "H"
                });
            }else if(e.key == "j"){
                let letras = document.querySelectorAll('.j');
                letras.forEach(letra=>{
                    letra.innerHTML = "J"
                });
            }else if(e.key == "k"){
                let letras = document.querySelectorAll('.k');
                letras.forEach(letra=>{
                    letra.innerHTML = "K"
                });
            }else if(e.key == "l"){
                let letras = document.querySelectorAll('.l');
                letras.forEach(letra=>{
                    letra.innerHTML = "L"
                });
            }else if(e.key == "m"){
                let letras = document.querySelectorAll('.m');
                letras.forEach(letra=>{
                    letra.innerHTML = "M"
                });
            }else if(e.key == "n"){
                let letras = document.querySelectorAll('.n');
                letras.forEach(letra=>{
                    letra.innerHTML = "N"
                });
            }else if(e.key == "p"){
                let letras = document.querySelectorAll('.p');
                letras.forEach(letra=>{
                    letra.innerHTML = "P"
                });
            }else if(e.key == "q"){
                let letras = document.querySelectorAll('.q');
                letras.forEach(letra=>{
                    letra.innerHTML = "Q"
                });
            }else if(e.key == "r"){
                let letras = document.querySelectorAll('.r');
                letras.forEach(letra=>{
                    letra.innerHTML = "R"
                });
            }else if(e.key == "s"){
                let letras = document.querySelectorAll('.s');
                letras.forEach(letra=>{
                    letra.innerHTML = "S"
                });
            }else if(e.key == "t"){
                let letras = document.querySelectorAll('.t');
                letras.forEach(letra=>{
                    letra.innerHTML = "T"
                });
            }else if(e.key == "u"){
                let letras = document.querySelectorAll('.u');
                letras.forEach(letra=>{
                    letra.innerHTML = "U"
                });
            }else if(e.key == "v"){
                let letras = document.querySelectorAll('.v');
                letras.forEach(letra=>{
                    letra.innerHTML = "V"
                });
            }else if(e.key == "w"){
                let letras = document.querySelectorAll('.w');
                letras.forEach(letra=>{
                    letra.innerHTML = "W"
                });
            }else if(e.key == "x"){
                let letras = document.querySelectorAll('.x');
                letras.forEach(letra=>{
                    letra.innerHTML = "X"
                });
            }else if(e.key == "y"){
                let letras = document.querySelectorAll('.y');
                letras.forEach(letra=>{
                    letra.innerHTML = "Y"
                });
            }else if(e.key == "z"){
                let letras = document.querySelectorAll('.z');
                letras.forEach(letra=>{
                    letra.innerHTML = "Z"
                });
            }


            if(frase.indexOf(e.key) == -1) {
                chances--
                if(chances == 0){
                    alert("perdiste!!!");
                }else{
                    alert("te quedan "+chances+ " chances");
                }
            }


        }
    })
})


    /* TA TE TI */
let cantclicks = 0;
let letra = "X";

function elegir(){
    caja = this;
    cantclicks++;
    if(caja.innerText == ""){
        //hacer la marca
        if(cantclicks%2==0){
            caja.innerText = "X";
        }else{
            caja.innerText = "O";
        }
        /*if(letra == "X"){
            caja.innerText = "O";
            letra = "O";
        }else{
            caja.innerText = "X";
            letra = "X";
        }*/
    }
    let caja1 = document.querySelector('.caja1').innerHTML;
    let caja2 = document.querySelector('.caja2').innerHTML;
    let caja3 = document.querySelector('.caja3').innerHTML;
    let caja4 = document.querySelector('.caja4').innerHTML;
    let caja5 = document.querySelector('.caja5').innerHTML;
    let caja6 = document.querySelector('.caja6').innerHTML;
    let caja7 = document.querySelector('.caja7').innerHTML;
    let caja8 = document.querySelector('.caja8').innerHTML;
    let caja9 = document.querySelector('.caja9').innerHTML;

    if(caja1 == caja2 && caja2 == caja3 && caja1 != ""){
        alert("ganaste!");
    }else if(caja4 == caja5 && caja5 == caja6 && caja4 != ""){
        alert("ganaste")
    }else if(caja7 == caja8 && caja8 == caja9 && caja7 != ""){
        alert("ganaste")
    }else if(caja1 == caja4 && caja4 == caja7 && caja1 != ""){
        alert("ganaste!")
    }else if(caja2 == caja5 && caja5 == caja8 && caja2 != ""){
        alert("ganaste!")
    }else if(caja3 == caja6 && caja6 == caja9 && caja3 != ""){
        alert("ganaste!")
    }else if(caja1 == caja5 && caja5 == caja9 && caja1 != ""){
        alert("ganaste")
    }else if(caja3 == caja5 && caja5 == caja7 && caja3 != ""){
        alert("ganaste")
    }
}
let cajas = document.querySelectorAll('.caja');
cajas.forEach(caja =>{
    caja.addEventListener("click", elegir);
});



/* PAINT */

var colorElegido = "white";

window.addEventListener('load',function(){
    var colores = document.querySelectorAll('.elegir');
    colores.forEach(color=>{
        color.addEventListener('click',function(){
            //eligiendo color
            colorElegido = color.getAttribute('id');
        })
    });

    var pintados = document.querySelectorAll('.pintar');
    pintados.forEach(pintado=>{
        pintado.addEventListener('click',function(){
            //pintando
            pintado.style.background = colorElegido;
        })
    });
})


function escribir(esto){
    console.log(esto.getAttribute('class'))
}