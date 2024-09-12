document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do formulário e da tabela
    const userForm = document.getElementById('user-form');
    const usernameInput = document.getElementById('username');
    const roleSelect = document.getElementById('role');
    const userList = document.querySelector('.user-list tbody');

    // Array para armazenar os usuários
    let users = [];

    // Função para adicionar um novo usuário
    function addUser(username, role) {
        // Cria um objeto usuário
        const user = {
            id: Date.now(), // Gera um ID único com base no timestamp atual
            username: username,
            role: role
        };

        // Adiciona o usuário ao array de usuários
        users.push(user);

        // Atualiza a exibição da tabela de usuários
        updateUserList();
    }

    // Função para remover um usuário
    function removeUser(userId) {
        // Filtra o array de usuários removendo o usuário com o ID correspondente
        users = users.filter(user => user.id !== userId);

        // Atualiza a exibição da tabela de usuários
        updateUserList();
    }

    // Função para atualizar a lista de usuários na tabela
    function updateUserList() {
        // Limpa a lista de usuários exibida
        userList.innerHTML = '';

        // Percorre o array de usuários e cria uma linha para cada um
        users.forEach(user => {
            const row = document.createElement('tr');

            // Nome do usuário
            const usernameCell = document.createElement('td');
            usernameCell.textContent = user.username;
            row.appendChild(usernameCell);

            // Nível de acesso
            const roleCell = document.createElement('td');
            roleCell.textContent = user.role;
            row.appendChild(roleCell);

            // Ações (botão de remover)
            const actionCell = document.createElement('td');
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => removeUser(user.id));
            actionCell.appendChild(removeButton);
            row.appendChild(actionCell);

            // Adiciona a linha à tabela
            userList.appendChild(row);
        });
    }

    // Evento de submissão do formulário
    userForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Impede o envio do formulário

        const username = usernameInput.value.trim();
        const role = roleSelect.value;

        if (username) {
            // Adiciona o novo usuário
            addUser(username, role);

            // Limpa o formulário após adicionar
            usernameInput.value = '';
            roleSelect.selectedIndex = 0;
        }
    });
});
