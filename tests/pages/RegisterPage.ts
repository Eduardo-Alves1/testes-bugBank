import { expect, Page } from "@playwright/test";

// Classe base para reutilizar funcionalidades comuns
export abstract class BasePage {
    constructor(protected readonly page: Page) {}

    async navigate() {
        await this.page.goto('/');
    }
}

export class Register extends BasePage {
    async clickBotaoCadastro() {
        await this.page.getByRole('button', { name: 'Registrar' }).click();
    }
    
    async validatePageCadastro() {
        await expect(this.page.getByText('Cadastrar')).toBeVisible();
    }
    
    async btnCadastrar() {
        await this.page.getByRole('button', { name: 'Cadastrar' }).click();
    }

    async modalConfirm() {
        const confirmarButton = this.page.getByRole('link', { name: 'x' });

        try {
            await confirmarButton.waitFor({ state: 'visible', timeout: 5000 });
            await expect(confirmarButton).toBeVisible({ timeout: 5000 });
            await expect(confirmarButton).toBeEnabled({ timeout: 5000 });

            await this.page.getByText('Fechar').click();
        } catch (e) {
            console.log("ERRO GERADO", e);
        }
    }

    async FillForm(email: string, nome: string, password: string, confirmarSenha: string) {
        await this.page.getByPlaceholder('Informe seu e-mail').nth(1).fill(email);
        await this.page.getByPlaceholder('Informe seu Nome').fill(nome);
        await this.page.getByPlaceholder('Informe sua senha').nth(1).fill(password);
        await this.page.getByPlaceholder('Informe a confirmação da senha').fill(confirmarSenha);
    }
}

export class Login extends BasePage {

    async fillLoginForm(email: string, password: string) {
        // Usando nth(0) para pegar o primeiro campo de email (formulário de login)
        await this.page.getByPlaceholder('Informe seu e-mail').nth(0).fill(email);
        await this.page.getByPlaceholder('Informe sua senha').nth(0).fill(password);
    }
    
    async clickBotaoLogin() {
        await this.page.getByRole('button', { name: 'Acessar' }).click();
    }

    async validateLoginPage() {
        // Aguarda a URL mudar para a página home após login
        await this.page.waitForURL('**/home');
        
        // Valida se está na página correta
        await expect(this.page).toHaveURL(/.*\/home/);
        
    }

}