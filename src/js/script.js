document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');
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
            // Adicionar a animação de fade-out
            document.body.classList.add('fade-out');

            // Redirecionar após a animação (1 segundo)
            setTimeout(() => {
                window.location.href = 'admin-dash.html'; // Página do administrador
            }, 1000);
        } else if (username === 'batman' && role === 'gerente') {
            if (password !== 'wayne') {
                alert("Gerente logado no sistema");
                window.location.href = 'gerente.html'; // Página do gerente
            } else {
                loginMessage.textContent = 'Senha de administrador não permitida para o gerente.';
            }
        } else if (username !== 'batman' && role === 'gerente') {
            alert("Gerente logado no sistema");
            window.location.href = 'gerente.html'; // Página do gerente
        } else if (role === 'funcionario') {
            if (password !== ' ') {
                window.location.href = 'funcionario.html'; // Página do funcionário
            } else {
                loginMessage.textContent = 'Senha de administrador não permitida para o funcionário.';
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
});



