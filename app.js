const switcher = document.querySelector('.botao');

swither.addEventListener('click',function(){
    document.body.classList.toggle('tema-escuro');
    document.body.classList.toggle('temaclaro');


    var nomedaclasse = document.body.className;

    if (nomedaclasse.includes("tema-claro")){
        this.textcontent = "escuro";
    } else{
        this.textcontent = "claro";
    }

});
