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

            // Botão Remover
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                resources.splice(index, 1);
                updateInventory();
            });

            // Botão Editar
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
        if (username && password) {
            loginUser(role);
        } else {
            loginMessage.textContent = 'Credenciais inválidas!';
        }
    });

    function loginUser(role) {
        // Ocultar a tela de login e mostrar o dashboard
        document.getElementById('login').classList.add('hidden');
        document.getElementById('dashboard').classList.remove('hidden');

        // Exibir a visão correta de acordo com o tipo de usuário
        if (role === 'admin') {
            window.location.href = "admin-dash.html"; // Redirecionar para a página do admin
        } else if (role === 'gerente') {
            document.getElementById('managerView').classList.remove('hidden');
            adminView.classList.add('hidden');
            employeeView.classList.add('hidden');
        } else {
            document.getElementById('employeeView').classList.remove('hidden');
            managerView.classList.add('hidden');
            adminView.classList.add('hidden');
        }
    }

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
