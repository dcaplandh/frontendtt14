console.log("estoy en hoja externa");

function notificar(){
    console.log("estoy notificando")
    //tomar el section con articles
    let notificaciones = document.querySelector('section.notificaciones');
    let texto = document.querySelector('input.noti');
    console.log(texto.value);
    let notificacion = "<article class='notificacion'>"+texto.value+"</article>";
    notificaciones.innerHTML += notificacion;
    //esribir lo que le llega por el input al article
    //crear una variable que guare el valor del input
    //hacerle un innerHTML al section con un nuevo article
    
}