import { Page } from "@playwright/test";


export class CadastroPage {

    constructor(private page: Page){}

    
    async navigate(){
        await this.page.goto('/')
    }

    async clickBotaoCadastro(){
        await this.page.getByRole('button', {name: 'Registrar'}).click()
    }
    async validatePageCadastro(){
        await this.page.getByText('Cadastrar')
    }
    async btnCadastrar(){
        await this.page.getByRole('button', { name: 'Cadastrar' }).click()
    }

    async modalConfirm(){
        await this.page.getByTestId('modalText').click;
    }

    async FillCadastroForm(email: string, nome: string, password: string, confirmarSenha: string){
        await this.page.getByPlaceholder('Informe seu e-mail').nth(1).fill(email);
        await this.page.getByPlaceholder('Informe seu Nome').fill(nome);
        await this.page.getByPlaceholder('Informe sua senha').nth(1).fill(password);
        await this.page.getByPlaceholder('Informe a confirmação da senha').fill(confirmarSenha);

    }

    
}