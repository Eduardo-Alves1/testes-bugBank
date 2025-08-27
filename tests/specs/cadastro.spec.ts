import { test, expect } from "@playwright/test";
import { CadastroPage } from "../pages/CadastroPage";
import { UserData, validUserData } from "../fixtures/userData";

test.describe('Cadastro Usuário', () => {
    let cadastroPage: CadastroPage;

    test.beforeEach(async ({ page }) => {
        cadastroPage = new CadastroPage(page);

        await cadastroPage.navigate();
    })

    test("Cadastro nova conta sem Saldo", async () => {
        await cadastroPage.clickBotaoCadastro()
        await cadastroPage.validatePageCadastro()

        await cadastroPage.FillCadastroForm
            (
            validUserData.email, 
            validUserData.nome, 
            validUserData.password, 
            validUserData.confirmarSenha
        )
        await cadastroPage.btnCadastrar()
        await cadastroPage.modalConfirm()
    
    })

})