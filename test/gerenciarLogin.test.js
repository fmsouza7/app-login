import { realizarLogin_ForEach, realizarLogin_ForOf, realizarLogin_ForIn, realizarLogin_For } from "../src/gerenciarLogin.js";
import assert from 'node:assert';

describe ('Testes do Modulo Login', () => {
    describe ('Testes da função realizarLogin_ForEach', () => {
        it('Validar que passando login e senha corretos o login seja realizado com sucesso - realizarLogin_ForEach', () => {
            //Pré-condições
            const loginEsperado = 'fsouza';
            const senhaEsperada = 'fsouza';
            const mensagemEsperada = 'Logado com sucesso.';

            //Ações
            const resultado = realizarLogin_ForEach(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })

        it('Validar que passando login e senha não existente exiba a mensagem não encontrado - realizarLogin_ForEach', () => {
            //Pré-condições
            const loginEsperado = 'teste';
            const senhaEsperada = 'teste';
            const mensagemEsperada = 'Usuário não encontrado';

            //Ações
            const resultado = realizarLogin_ForEach(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })
    })

    describe ('Testes da função realizarLogin_ForOf', () => {
        it('Validar que passando login e senha corretos o login seja realizado com sucesso - realizarLogin_ForOf', () => {
            //Pré-condições
            const loginEsperado = 'fsouza';
            const senhaEsperada = 'fsouza';
            const mensagemEsperada = 'Logado com sucesso.';

            //Ações
            const resultado = realizarLogin_ForOf(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })

        it('Validar que passando login e senha não existente exiba a mensagem não encontrado - realizarLogin_ForOf', () => {
            //Pré-condições
            const loginEsperado = 'teste';
            const senhaEsperada = 'teste';
            const mensagemEsperada = 'Usuário não encontrado';

            //Ações
            const resultado = realizarLogin_ForOf(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })
    })

    describe ('Testes da função realizarLogin_ForIn', () => {
        it('Validar que passando login e senha corretos o login seja realizado com sucesso - realizarLogin_ForIn', () => {
            //Pré-condições
            const loginEsperado = 'fsouza';
            const senhaEsperada = 'fsouza';
            const mensagemEsperada = 'Logado com sucesso.';

            //Ações
            const resultado = realizarLogin_ForIn(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })

        it('Validar que passando login e senha não existente exiba a mensagem não encontrado - realizarLogin_ForIn', () => {
            //Pré-condições
            const loginEsperado = 'teste';
            const senhaEsperada = 'teste';
            const mensagemEsperada = 'Usuário não encontrado';

            //Ações
            const resultado = realizarLogin_ForIn(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })
    })

    describe ('Testes da função realizarLogin_For', () => {
        it('Validar que passando login e senha corretos o login seja realizado com sucesso - realizarLogin_For', () => {
            //Pré-condições
            const loginEsperado = 'fsouza';
            const senhaEsperada = 'fsouza';
            const mensagemEsperada = 'Logado com sucesso.';

            //Ações
            const resultado = realizarLogin_For(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })

        it('Validar que passando login e senha não existente exiba a mensagem não encontrado - realizarLogin_For', () => {
            //Pré-condições
            const loginEsperado = 'teste';
            const senhaEsperada = 'teste';
            const mensagemEsperada = 'Usuário não encontrado';

            //Ações
            const resultado = realizarLogin_For(loginEsperado, senhaEsperada);

            //Pós-condições
            assert.equal(resultado, mensagemEsperada);
        })
    })
})