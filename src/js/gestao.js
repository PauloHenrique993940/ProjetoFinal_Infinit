document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões de edição e exclusão
    const editButtons = document.querySelectorAll('.btn-edit');
    const deleteButtons = document.querySelectorAll('.btn-delete');

    // Adiciona um evento de clique para cada botão de edição
    editButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const cells = row.querySelectorAll('td');
            
            // Obtém o conteúdo atual das células
            const id = cells[0].innerText;
            const name = cells[1].innerText;
            const category = cells[2].innerText;
            const quantity = cells[3].innerText;

            // Solicita novos valores para o recurso
            const newName = prompt('Digite o novo nome do recurso:', name);
            if (newName !== null) {
                cells[1].innerText = newName;
            }
            
            const newCategory = prompt('Digite a nova categoria do recurso:', category);
            if (newCategory !== null) {
                cells[2].innerText = newCategory;
            }
            
            const newQuantity = prompt('Digite a nova quantidade do recurso:', quantity);
            if (newQuantity !== null) {
                cells[3].innerText = newQuantity;
            }
        });
    });

    // Adiciona um evento de clique para cada botão de exclusão
    deleteButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            if (confirm('Tem certeza de que deseja excluir este recurso?')) {
                const row = e.target.closest('tr');
                row.remove();
            }
        });
    });
});
