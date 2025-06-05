const usuarios = [
    {
        login: 'Escola Zilda',
        pass: 'sexto A'
    },


    {
        login: 'Escola Zilda',
        pass: 'sexto B'
    },

    {
        login: 'Escola Zilda',
        pass: 'sexto C'
    },

    {
        login: 'Escola Zilda',
        pass: 'sexto D'
    },

    {
        login: 'Escola Zilda',
        pass: 'setimo A'
    },

    {
        login: 'Escola Zilda',
        pass: 'setimo B'
    },

    {
        login: 'Escola Zilda',
        pass: 'setimo C'
    },

    {
        login: 'Escola Zilda',
        pass: 'setimo D'
    },

    {
        login: 'Escola Zilda',
        pass: 'oitavo A'
    },

    {
        login: 'Escola Zilda',
        pass: 'oitavo B'
    },

    {
        login: 'Escola Zilda',
        pass: 'oitavo C'
    },

    {
        login: 'Escola Zilda',
        pass: 'oitavo D'
    },

    {
        login: 'Escola Zilda',
        pass: 'nono A'
    },

    {
        login: 'Escola Zilda',
        pass: 'nono B'
    },

    {
        login: 'Escola Zilda',
        pass: 'nono C'
    },

    {
        login: 'Escola Zilda',
        pass: 'nono D'
    },

];
let botao = document.getElementById('btn-Logar');

botao.addEventListener('click', function logar() {

    let pegaUsuario = document.getElementById('usuario').value
    let pegaSenha = document.getElementById('senha').value
    let validaLogin=false


    for (let i in usuarios) {
        if (pegaUsuario == usuarios[i].login &&  pegaSenha==
        usuarios[i].pass) {
            validaLogin=true;
            break;
        }
        
    }        
            if (validaLogin==true){
                location.href='index.html'
            }else{
                alert('usuario e senha incorretos');
            }
              

       


});
