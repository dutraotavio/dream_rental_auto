$(document).ready(function() {
    $('.nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        errorPlacement: function(error, element) {
            error.css("color", "red")
            error.insertAfter(element)
        },
        success: function(label) {
            label.css("color", "green")
        },

        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            mensagem: 'Por favor, digite sua mensagem'
        },
        submitHandler: function(form) {
            alert('Agradecemos seu contato!')
            form.reset()
        },
        invalidHandler: function(form, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})