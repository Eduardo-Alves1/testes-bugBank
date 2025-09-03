
import { test } from "@playwright/test";
import { Login, Register } from "../pages/RegisterPage";
import { validUserData } from "../fixtures/userData";

// Configuração para compartilhar estado entre testes
test.describe.configure({ mode: 'serial' });

test.describe('Fluxo Completo: Cadastro + Login', () => {
    let cadastro: Register;
    let login: Login;
    let sharedPage: any; // Página compartilhada

    test.beforeAll(async ({ browser }) => {
        // Cria uma nova página que será compartilhada
        sharedPage = await browser.newPage();
        cadastro = new Register(sharedPage);
        login = new Login(sharedPage);
    });

    test.afterAll(async () => {
        // Fecha a página compartilhada
        await sharedPage.close();
    });

    test("CT-01. Cadastro nova conta sem Saldo", { tag: '@registro' }, async () => {
        console.log("INICIANDO OS TESTES CADASTRO");
        await cadastro.navigate();
        await cadastro.clickBotaoCadastro();
        await cadastro.validatePageCadastro();

        await cadastro.FillForm(
            validUserData.email,
            validUserData.nome,
            validUserData.password,
            validUserData.confirmarSenha
        );
        await cadastro.btnCadastrar();
        await cadastro.modalConfirm();
        console.log("TESTES DE CADASTRO FINALIZADOS COM SUCESSO");
    });

    test("CT-02. Fazendo Login com conta cadastrada", { tag: '@login' }, async () => {
        console.log('EXECULTANDO LOGIN');

        await login.fillLoginForm(
            validUserData.email,
            validUserData.password,
        );
        await login.clickBotaoLogin();

        await login.validateLoginPage();
        // Aqui você pode adicionar validações do login
        console.log("LOGIN EXECUTADO COM SUCESSO");
    });
});