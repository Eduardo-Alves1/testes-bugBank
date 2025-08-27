# Fixtures de Dados para Testes

Este diretório contém dados fake para os testes de cadastro de usuários.

## Arquivo: `userData.ts`

### Interface UserData
```typescript
export interface UserData {
    email: string;
    nome: string;
    password: string;
    confirmarSenha: string;
}
```

### Dados Pré-definidos

#### 1. **validUserData**
- Dados válidos para testes de sucesso
- Email e nome gerados aleatoriamente
- Senha: `Teste@123`

#### 2. **invalidPasswordUserData**
- Dados para testar validação de senhas diferentes
- Senha e confirmação não coincidem

#### 3. **invalidEmailUserData**
- Dados para testar validação de email inválido
- Email: `email-invalido`

#### 4. **emptyNameUserData**
- Dados para testar validação de nome vazio
- Nome: `''`

#### 5. **weakPasswordUserData**
- Dados para testar validação de senha fraca
- Senha: `123`

### Usuários de Teste Específicos

#### **testUsers**
```typescript
testUsers.admin    // admin@teste.com
testUsers.user     // usuario@teste.com
testUsers.manager  // gerente@teste.com
```

### Cenários de Teste

#### **testScenarios**
- `completeUser`: Usuário com dados completos
- `longNameUser`: Usuário com nome muito longo
- `corporateUser`: Usuário com email corporativo

### Funções Úteis

#### **generateRandomUserData()**
Gera dados aleatórios para cada execução de teste.

#### **generateMultipleUsers(count)**
Gera um array com múltiplos usuários.

#### **emptyFieldsData**
Array com diferentes combinações de campos vazios para testar validações.

## Como Usar nos Testes

### Exemplo Básico:
```typescript
import { validUserData, testUsers } from '../fixtures/userData';

test("Cadastro com dados válidos", async () => {
    await cadastroPage.FillCadastroForm(
        validUserData.email,
        validUserData.nome,
        validUserData.password,
        validUserData.confirmarSenha
    );
});
```

### Exemplo com Usuário Específico:
```typescript
test("Cadastro de administrador", async () => {
    await cadastroPage.FillCadastroForm(
        testUsers.admin.email,
        testUsers.admin.nome,
        testUsers.admin.password,
        testUsers.admin.confirmarSenha
    );
});
```

### Exemplo com Dados Aleatórios:
```typescript
test("Cadastro com dados aleatórios", async () => {
    const randomUser = generateRandomUserData();
    await cadastroPage.FillCadastroForm(
        randomUser.email,
        randomUser.nome,
        randomUser.password,
        randomUser.confirmarSenha
    );
});
```

### Exemplo para Testes de Validação:
```typescript
test("Validação de campos obrigatórios", async () => {
    for (const invalidData of emptyFieldsData) {
        await cadastroPage.FillCadastroForm(
            invalidData.email || '',
            invalidData.nome || '',
            invalidData.password || '',
            invalidData.confirmarSenha || ''
        );
        // Adicione suas validações aqui
    }
});
```

## Vantagens

1. **Reutilização**: Dados podem ser usados em múltiplos testes
2. **Consistência**: Mesmos dados para testes similares
3. **Manutenibilidade**: Fácil de atualizar dados em um local
4. **Variedade**: Diferentes cenários para cobrir casos de teste
5. **Sem Dependências**: Funciona sem bibliotecas externas
