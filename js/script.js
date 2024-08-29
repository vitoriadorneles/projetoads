// variaveis de verificação do email que vai receber o formulario
const serviceID = 'vitoriadorneles.testes';
const templateID = 'template_pk1sm4p';

//funcao que faz envio do formlário
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        //criando o objeto do formulario
        const formData = {
            nome: document.getElementById('name').value,
            telefone: document.getElementById('fone').value,
            email: document.getElementById('email').value,
            mensagem: document.querySelector('textarea[name= "messege"]').value
        };

        //enviando os dados do formulário usando EMAILJS
        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                console.log('MENSAGEM ENVIADA')
                alert('Formulário enviado com sucesso.')
            }, (error) => {
                console.log('Erro de envio:', error)
                alert('Ocorreu um erro ao enviar sua mensagem.')
            });
    }
)};

