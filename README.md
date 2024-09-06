# Sistema de Gerenciamento de Segurança - Indústrias Wayne

## Descrição do Projeto

O Sistema de Gerenciamento de Segurança das Indústrias Wayne é uma aplicação web full stack desenvolvida para otimizar os processos internos e melhorar a segurança das instalações da empresa, liderada pelo lendário Bruce Wayne. Este projeto aborda a necessidade de um sistema robusto e eficiente para controle de acesso, gestão de recursos e visualização de dados relacionados à segurança.

## Funcionalidades

### 1. Autenticação e Autorização
- **Login Seguro:** Permite que usuários se autentiquem com diferentes níveis de acesso (Funcionário, Gerente, Administrador).
- **Controle de Acesso:** Restrição de acesso a áreas específicas com base no papel do usuário.

### 2. Gestão de Recursos
- **Interface de Gestão:** Permite aos administradores adicionar, remover e atualizar informações sobre equipamentos, veículos e dispositivos de segurança.
- **Visualização Dinâmica:** Exibe recursos em uma lista interativa com opções de edição e remoção.

### 3. Dashboard de Visualização
- **Painel de Controle:** Apresenta dados relevantes sobre segurança, recursos e atividades dentro das instalações.
- **Visões Personalizadas:** Oferece diferentes visões do dashboard com base no papel do usuário (Funcionário, Gerente, Administrador).

## Tecnologias Utilizadas

- **HTML/CSS:** Para a estrutura e estilização da interface.
- **JavaScript:** Para a lógica de autenticação, gerenciamento de recursos e interatividade do dashboard.
- **JavaScript (ES6+):** Utilização de recursos modernos para uma melhor experiência de desenvolvimento.

## Como Executar o Projeto

1. **Clone o Repositório:**
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
#Código HTML

<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Indústrias Wayne - Sistema de Segurança</title>
    <link rel="stylesheet" href="src/css/style.css">
</head>
<body>
    <header>
        <img src="src/image/-LOGO BATMAN.svg" alt="" class=" logo">
        <h1>Indústrias Wayne</h1>
        <nav>
            <ul>
                <li><a href="#login">Login</a></li>
                <li><a href="#dashboard">Dashboard</a></li>
                <li><a href="#gestao">Gestão de Recursos</a></li>
            </ul>
        </nav>
    </header>

    <!-- Login -->
    <section id="login">
        <h2>Login de Usuário</h2>
        <form id="loginForm">
            <label for="username">Nome de Usuário:</label>
            <input type="text" id="username" name="username" required>
            <label for="password">Senha:</label>
            <input type="password" id="password" name="password" required>
            <label for="role">Tipo de Usuário:</label>
            <select id="role" name="role" required>
                <option value="funcionario">Funcionário</option>
                <option value="gerente">Gerente</option>
                <option value="admin">Administrador</option>
            </select>
            <button type="submit">Entrar</button>
        </form>
        <p id="loginMessage"></p>
    </section>

    <!-- Dashboard -->
    <section id="dashboard" class="hidden">
        <h2>Painel de Controle</h2>
        <div id="dashboardContent">
            <!-- Área do Funcionário -->
            <div id="employeeView" class="user-view hidden">
                <h3>Tarefas e Alertas</h3>
                <ul id="taskList"></ul>
                <h3>Relatórios de Atividades</h3>
                <p>Visualização básica de atividades.</p>
            </div>

            <!-- Área do Gerente -->
            <div id="managerView" class="user-view hidden">
                <h3>Visão Geral de Equipe</h3>
                <p>Status das tarefas e desempenho dos funcionários.</p>
                <h3>Gestão de Recursos</h3>
                <button id="manageResources">Gerenciar Recursos</button>
            </div>

            <!-- Área do Administrador de Segurança -->
            <div id="adminView" class="user-view hidden">
                <h3>Gerenciamento Completo de Recursos</h3>
                <p>Adicionar, editar e remover recursos.</p>
                <h3>Relatórios de Segurança</h3>
                <p>Relatórios detalhados sobre segurança e incidentes.</p>
                <h3>Controle de Acesso</h3>
                <p>Gerenciar permissões de usuários e grupos.</p>
            </div>
        </div>
    </section>

    <!-- Gestão de Recursos -->
    <section id="gestao" class="hidden">
        <h2>Gestão de Recursos</h2>
        <form id="resourceForm">
            <label for="resourceName">Nome do Recurso:</label>
            <input type="text" id="resourceName" name="resourceName" required>
            <label for="resourceType">Tipo:</label>
            <select id="resourceType" name="resourceType" required>
                <option value="equipamento">Equipamento</option>
                <option value="veiculo">Veículo</option>
                <option value="dispositivo">Dispositivo</option>
            </select>
            <button type="submit">Adicionar Recurso</button>
        </form>
        <div id="resourceList">
            <h3>Inventário Atual</h3>
            <ul id="inventory"></ul>
        </div>
    </section>

    <script src="./src/js/script.js"></script>
</body>
</html>
#Código CSS
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap');

:root{
    --background-color: #000000;
    --yellow: #ffc107;
    --redText: #d31f1f;
    --subtitle: #1E90FF;
    --navItemLink: #fff;
    --backgroundButton: #B22222;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-image: url(/src/image/CAPA_PROJETO.webp);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    justify-content: center;
    color: var(--navItemLink);
    text-align: center;
    height: auto;
    font-family: 'Merriweather', serif;
    margin-bottom: 0;
}
header {
    background-color: var(--background-color);
    padding: 20px;
}
.logo{
    width: 40px;
}
h1 {
    font-size: 2rem;
    /*color: blue; */
    color: #4169E1;
    text-transform: uppercase;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    display: inline;
    margin: 0 15px;
}

nav ul li a {
    color: var(--navItemLink);
    text-decoration: none;
    font-weight: bold;
}
a:hover{
    color: var(--yellow);
    text-decoration: underline;

}
section {
    margin: 50px auto;
    width: 80%;
}

h2{
    color: var(--subtitle);
}

form {
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    width: 50%;
}

form label {
    margin: 10px 0 5px 0;
}

form input, form select {
    padding: 10px;
    margin-bottom: 15px;
}

form button {
    padding: 10px;
    background-color: #B22222;
    color: var(--navItemLink);
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
}

form button:hover{
    background-color: #333;

}

footer {
    padding: 20px;
    color: var(--navItemLink);
    position: fixed;
    bottom: 0;
    width: 100%;
}

footer a {
    color: #4caf50;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

.hidden {
    display: none;
}

#inventory {
    margin-top: 20px;
    text-align: left;
}

#inventory li {
    margin: 5px 0;
}

#inventory button {
    margin-left: 10px;
    padding: 5px 10px;
    background-color: #ff4c4c;
    color: var(--navItemLink);
    border: none;
    cursor: pointer;
}

#inventory button.edit {
    background-color: #4caf50;
}

#manageResources{
    width: 200px;
    background-color: var(--subtitle);
    color: var(--navItemLink);
    height: 40px;
    border: none;
    font-size: 16px;
    font-weight: 500;
}

#manageResources:hover{
    background-color:  #333;
}
 #Código Javascript
 document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const dashboard = document.getElementById('dashboard');
    const gestao = document.getElementById('gestao');
    const employeeView = document.getElementById('employeeView');
    const managerView = document.getElementById('managerView');
    const adminView = document.getElementById('adminView');
    const manageResourcesButton = document.getElementById('manageResources');
    const resourceForm = document.getElementById('resourceForm');
    const inventoryList = document.getElementById('inventory');
    let resources = [];

    // Função para atualizar a lista de recursos
    function updateInventory() {
        inventoryList.innerHTML = '';
        resources.forEach((resource, index) => {
            const li = document.createElement('li');
            li.textContent = `${resource.name} (${resource.type})`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                resources.splice(index, 1);
                updateInventory();
            });
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit');
            editButton.addEventListener('click', () => {
                document.getElementById('resourceName').value = resource.name;
                document.getElementById('resourceType').value = resource.type;
                resources.splice(index, 1);
                updateInventory();
            });
            li.appendChild(removeButton);
            li.appendChild(editButton);
            inventoryList.appendChild(li);
        });
    }

    // Evento de login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Simulação de autenticação
        if (username === 'batman' && password === 'wayne' && role === 'admin') {
            loginMessage.textContent = 'Login bem-sucedido!';
            dashboard.classList.remove('hidden');
            gestao.classList.remove('hidden');
            adminView.classList.remove('hidden');
            employeeView.classList.add('hidden');
            managerView.classList.add('hidden');
        } else if (username && password) {
            loginMessage.textContent = 'Acesso limitado ao dashboard.';
            dashboard.classList.remove('hidden');
            gestao.classList.add('hidden');

            if (role === 'funcionario') {
                employeeView.classList.remove('hidden');
                managerView.classList.add('hidden');
                adminView.classList.add('hidden');
            } else if (role === 'gerente') {
                employeeView.classList.add('hidden');
                managerView.classList.remove('hidden');
                adminView.classList.add('hidden');
            }
        } else {
            loginMessage.textContent = 'Login falhou. Verifique suas credenciais.';
        }
    });

    // Adicionar novo recurso
    resourceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const resourceName = document.getElementById('resourceName').value;
        const resourceType = document.getElementById('resourceType').value;
        if (resourceName && resourceType) {
            resources.push({ name: resourceName, type: resourceType });
            updateInventory();
            resourceForm.reset();
        }
    });

    // Gerenciar recursos
    manageResourcesButton.addEventListener('click', () => {
        gestao.classList.remove('hidden');
    });
});
