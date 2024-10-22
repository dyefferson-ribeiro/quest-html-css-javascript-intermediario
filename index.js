let formularios = document.querySelectorAll('form input'); 

let enviar = document.getElementById('botao');

enviar.addEventListener('click', function(event){
    event.preventDefault();

 formularios.forEach(campo =>{ 
    let errorMessage = document.getElementById(`error-${campo.name}`);

    if(campo.value === ''){ 
        campo.classList.remove('verde');
        campo.classList.add('vermelho');
        errorMessage.textContent = 'Campo obrigatório'
        errorMessage.classList.add('error-message')
    }else{ 
        campo.classList.remove('vermelho');
        campo.classList.add('verde');
        errorMessage.classList.remove('error-message');
        errorMessage.textContent = '';
    }
 })
})