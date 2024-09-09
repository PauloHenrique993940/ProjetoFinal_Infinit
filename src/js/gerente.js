document.addEventListener('DOMContentLoaded', () => {
    const resourceForm = document.getElementById('resourceForm');
    const inventoryList = document.getElementById('inventory');
    const resourceNameInput = document.getElementById('resourceName');
    const resourceTypeInput = document.getElementById('resourceType');

    let resources = [];
    let editingIndex = null;

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
                resourceNameInput.value = resource.name;
                resourceTypeInput.value = resource.type;
                editingIndex = index;
            });
            
            li.appendChild(removeButton);
            li.appendChild(editButton);
            inventoryList.appendChild(li);
        });
    }

    // Adicionar ou atualizar recurso
    resourceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const resourceName = resourceNameInput.value;
        const resourceType = resourceTypeInput.value;

        if (resourceName && resourceType) {
            if (editingIndex !== null) {
                // Atualizar recurso existente
                resources[editingIndex] = { name: resourceName, type: resourceType };
                editingIndex = null;
            } else {
                // Adicionar novo recurso
                resources.push({ name: resourceName, type: resourceType });
            }
            updateInventory();
            resourceForm.reset();
        }
    });

    // Inicialização
    updateInventory();
});

