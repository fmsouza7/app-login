/* Preciso de uma função capaz de receber duas entradas :Login e Senha.
   Ela deveá navegar em uma lista pre-existente, com 3 usuários e então
   retornar o texto "Logado com sucesso.", caso exista um usuario com 
   login e senha iguais aos informados. Caso não exista um usuario com 
   login e senha informados, uma mensagem dizendo "Usuário  não encontrado." deverá ser exibibida

   PENSAMENTO LÓGICO
   1. Entradas (O que é informado)
   - Login
   - Senha

   2. Regras (Regras quanto ao que foi informado, não são regras de negócio)
   - Login e Senha são alfanuméricos

   3. Processamento (Como o computador deve tomar decisões)
   - Se ao percorrer a lista, encontrar um usuário com login e senha válidos exibir mensagem "Logado com sucesso."
   - Se ao percorrer a lista e não encontrar nenhum usuário com login e senha informados exibir mensagem "Usuário não encontrado."

   4. Saída
   - "Logado com sucesso." e "Usuário não encontrado."
 */
const usuarios = [
    {
        nome: 'Fabio Souza',
        login: 'fsouza',
        senha: 'fsouza'
    },
    {
        nome: 'Ana Paula',
        login: 'apaula',
        senha: '12345'
    },
    {
        nome: 'Renata Silva',
        login: 'rsilva',
        senha: '54321'
    }
]

// Foreach
export function realizarLogin_ForEach(login, senha) {
    
    let resultado = 'Usuário não encontrado';

    usuarios.forEach(function(usuario){
        if (usuario.login == login && usuario.senha == senha) {
            resultado = 'Logado com sucesso.';
        }
    })

    return resultado;
}

//For of
export function realizarLogin_ForOf(login, senha) {

    for (let item of usuarios) {
        if (item.login == login && item.senha == senha) {
            return 'Logado com sucesso.';
        }
    }

    return 'Usuário não encontrado';
}

// For in
export function realizarLogin_ForIn(login, senha) {

    for (let i in usuarios) {
        if (usuarios[i].login == login && usuarios[i].senha == senha) {
            return 'Logado com sucesso.';
        }
    }

    return 'Usuário não encontrado';
}

// For
export function realizarLogin_For(login, senha) {

    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].login == login && usuarios[i].senha == senha) {
            return 'Logado com sucesso.';
        }
    }

    return 'Usuário não encontrado';
}
