const avanca = document.querySelectorAll('btn-proximo')

avanca.forEach()
 Button.addEventListener('click', function()){
    const atual = document.querySelector('.ativo');
    const proximopasso = 'passo' + this.getAttribute('data-proximo');
    
    atual.classList.renove('ativo');
    document.getElementById(proximoPasso).classList.add('ativo');
 }


 }