// Interface para os dados do usuário
export interface UserData {
    email: string;
    nome: string;
    password: string;
    confirmarSenha: string;
}

// Função para gerar email fake
function generateFakeEmail(): string {
    const domains = ['gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com', 'teste.com'];
    const names = ['usuario', 'teste', 'dev', 'qa', 'admin', 'user', 'john', 'maria', 'joao'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomNumber = Math.floor(Math.random() * 1000);
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    
    return `${randomName}${randomNumber}@${randomDomain}`;
}

// Função para gerar nome fake
function generateFakeName(): string {
    const nomes = [
        'João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Costa', 'Carlos Ferreira',
        'Lucia Rodrigues', 'Roberto Almeida', 'Fernanda Lima', 'Ricardo Pereira', 'Juliana Souza',
        'Marcos Barbosa', 'Patricia Gomes', 'Andre Martins', 'Camila Ribeiro', 'Felipe Carvalho',
        'Isabela Cardoso', 'Thiago Mendes', 'Gabriela Nascimento', 'Diego Silva', 'Carolina Santos'
    ];
    
    return nomes[Math.floor(Math.random() * nomes.length)];
}

// Função para gerar senha fake
function generateFakePassword(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*';
    let password = '';
    for (let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Dados de usuário válidos para testes
export const validUserData: UserData = {
    email: generateFakeEmail(),
    nome: generateFakeName(),
    password: 'Teste@123',
    confirmarSenha: 'Teste@123'
};

// Dados de usuário com senhas diferentes (para teste de validação)
export const invalidPasswordUserData: UserData = {
    email: generateFakeEmail(),
    nome: generateFakeName(),
    password: 'Teste@123',
    confirmarSenha: 'Teste@456'
};

// Dados de usuário com email inválido
export const invalidEmailUserData: UserData = {
    email: 'email-invalido',
    nome: generateFakeName(),
    password: 'Teste@123',
    confirmarSenha: 'Teste@123'
};

// Dados de usuário com nome vazio
export const emptyNameUserData: UserData = {
    email: generateFakeEmail(),
    nome: '',
    password: 'Teste@123',
    confirmarSenha: 'Teste@123'
};

// Dados de usuário com senha fraca
export const weakPasswordUserData: UserData = {
    email: generateFakeEmail(),
    nome: generateFakeName(),
    password: '123',
    confirmarSenha: '123'
};

// Função para gerar dados aleatórios
export function generateRandomUserData(): UserData {
    return {
        email: generateFakeEmail(),
        nome: generateFakeName(),
        password: generateFakePassword(),
        confirmarSenha: generateFakePassword()
    };
}

// Função para gerar múltiplos usuários
export function generateMultipleUsers(count: number): UserData[] {
    return Array.from({ length: count }, () => generateRandomUserData());
}

// Dados pré-definidos para testes específicos
export const testUsers = {
    admin: {
        email: 'admin@teste.com',
        nome: 'Administrador Teste',
        password: 'Admin@123',
        confirmarSenha: 'Admin@123'
    },
    user: {
        email: 'usuario@teste.com',
        nome: 'Usuário Teste',
        password: 'User@123',
        confirmarSenha: 'User@123'
    },
    manager: {
        email: 'gerente@teste.com',
        nome: 'Gerente Teste',
        password: 'Manager@123',
        confirmarSenha: 'Manager@123'
    }
};

// Dados para teste de validação de campos obrigatórios
export const emptyFieldsData: Partial<UserData>[] = [
    { email: '', nome: generateFakeName(), password: 'Teste@123', confirmarSenha: 'Teste@123' },
    { email: generateFakeEmail(), nome: '', password: 'Teste@123', confirmarSenha: 'Teste@123' },
    { email: generateFakeEmail(), nome: generateFakeName(), password: '', confirmarSenha: 'Teste@123' },
    { email: generateFakeEmail(), nome: generateFakeName(), password: 'Teste@123', confirmarSenha: '' }
];

// Dados para teste de diferentes cenários
export const testScenarios = {
    // Usuário com dados completos
    completeUser: {
        email: 'usuario.completo@teste.com',
        nome: 'Usuário Completo',
        password: 'Senha@123',
        confirmarSenha: 'Senha@123'
    },
    
    // Usuário com nome longo
    longNameUser: {
        email: 'nome.longo@teste.com',
        nome: 'João da Silva Santos Oliveira Costa Ferreira Rodrigues Almeida Lima Pereira Souza Barbosa Gomes Martins Ribeiro Carvalho Cardoso Mendes Nascimento',
        password: 'Senha@123',
        confirmarSenha: 'Senha@123'
    },
    
    // Usuário com email corporativo
    corporateUser: {
        email: 'usuario@empresa.com.br',
        nome: 'Usuário Corporativo',
        password: 'Corp@2024',
        confirmarSenha: 'Corp@2024'
    }
};
