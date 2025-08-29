
import { test } from "@playwright/test";
import { Register } from "../pages/RegisterPage";
import { validUserData } from "../fixtures/userData";

test.describe('Cadastro Usuário', () => {
    let cadastro: Register;

    test.beforeEach(async ({ page }) => {
        cadastro = new Register(page);
        await cadastro.navigate();
    })

    test("Cadastro nova conta sem Saldo", { tag: '@registro' }, async () => {
        console.log("INICIANDO OS TESTES CADASTRO");
        await cadastro.clickBotaoCadastro()
        await cadastro.validatePageCadastro()

        await cadastro.FillForm
            (
                validUserData.email,
                validUserData.nome,
                validUserData.password,
                validUserData.confirmarSenha
            );
        await cadastro.btnCadastrar();
        await cadastro.modalConfirm();
        console.log("TESTES DE CADASTRO FINALIZADOS COM SUCESSO");

    })

})