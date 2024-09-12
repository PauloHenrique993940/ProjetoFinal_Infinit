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
            Swal.fire({
                title: 'Bem-vindo, Cavaleiro das Trevas!',
                text: 'Você está no controle da segurança de Gotham. Acompanhe as atividades e gerencie os recursos.',
                icon: 'success',
                background: '#1c1c1c',  /* Fundo preto/cinza escuro (tema Batman) */
                color: '#f1c40f',       /* Texto amarelo (cor do símbolo do Batman) */
                confirmButtonText: 'Continuar',
                confirmButtonColor: '#f1c40f', /* Botão amarelo */
                iconColor: '#f1c40f',   /* Ícone de sucesso em amarelo */
                backdrop: `
                    rgba(0, 0, 0, 0.9)
                    url("https://i.imgur.com/DPnJcQZ.png")  /* Imagem do símbolo do Batman */
                    left top
                    no-repeat
                `
            });
            
            setTimeout(() => {
                
                window.location.href = 'admin-dash.html'; //Direciona para Página do administrador
            }, 1000);
        } else if (username !== 'batman' && role === 'gerente') {
            if (password !== 'wayne') {
                alert("Gerente logado no sistema");
                window.location.href = 'gerente.html'; // Direciona para Página do gerente
            } else {
                loginMessage.textContent = 'Senha de administrador não permitida para o gerente.';
            }
        } else if (username !== 'batman' && role === 'gerente') {
            alert("Gerente logado no sistema");
            window.location.href = 'gerente.html'; // Direciona para Página do gerente

        } else if (username !== 'batman' && role === 'funcionario') {
            if (password !== 'wayne') {
                alert("Funcionário logado no sistema")
                window.location.href = 'funcionario.html'; // Direciona para Página do funcionário
            } else {
                loginMessage.textContent = 'Senha de administrador não permitida para o funcionário.';
            }
        } else {
            //loginMessage.textContent = 'Login falhou.Funcionário não deve utilizar  nome do administrador do Sistema';
            Swal.fire({
                title: 'Ação não permitida!',
                text: 'Não é permitido utilizar o nome "Administrador". Por favor, escolha outro nome de usuário.',
                icon: 'error',
                confirmButtonText: 'Entendi',
                background: '#1c1c1c',  /* Fundo preto/cinza escuro (tema Batman) */
                color: '#f1c40f',       /* Texto amarelo (cor do símbolo do Batman) */
                confirmButtonColor: '#f1c40f', /* Botão amarelo */
                iconColor: '#f1c40f'    /* Cor do ícone também em amarelo */
            });
            
            
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

// Quando a janela carregar, adicione a classe 'shake' ao body
window.onload = function() {
    document.body.classList.add('shake');

    // Remover a classe 'shake' após a animação terminar (para evitar repetição)
    setTimeout(function() {
        document.body.classList.remove('shake');
    }, 1500);  // 1500ms = 1.5 segundos (três vezes a duração da animação)
};



