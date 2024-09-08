// Inventory list
const inventoryList = document.getElementById('inventory');

// Form to add a new resource
const resourceForm = document.getElementById('resourceForm');
const resourceNameInput = document.getElementById('resourceName');
const resourceTypeSelect = document.getElementById('resourceType');

// Manage resources form
const manageResourcesForm = document.getElementById('manageResourcesForm');
const resourceActionSelect = document.getElementById('resourceAction');
const resourceSelect = document.getElementById('resourceSelect');
const resourceList = document.getElementById('resourceList');

// Event listener for adding a new resource
resourceForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const resourceName = resourceNameInput.value;
    const resourceType = resourceTypeSelect.value;

    // Add the new resource to the inventory
    const newItem = document.createElement('li');
    newItem.textContent = `${resourceName} - ${capitalize(resourceType)}`;
    inventoryList.appendChild(newItem);

    // Reset the form
    resourceForm.reset();
});

// Event listener for managing resources
manageResourcesForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const action = resourceActionSelect.value;
    const selectedResource = resourceSelect.value;

    // Perform action based on selected option
    if (action === 'adicionar') {
        addResourceToList(selectedResource);
    } else if (action === 'editar') {
        editResourceInList(selectedResource);
    } else if (action === 'remover') {
        removeResourceFromList(selectedResource);
    }
});

// Add resource to the list
function addResourceToList(resource) {
    const newItem = document.createElement('li');
    newItem.textContent = `${capitalize(resource)} - Disponível`;
    resourceList.appendChild(newItem);
}

// Edit resource in the list (in this case, just toggling status for simplicity)
function editResourceInList(resource) {
    const items = resourceList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(capitalize(resource))) {
            if (items[i].textContent.includes('Disponível')) {
                items[i].textContent = `${capitalize(resource)} - Em Uso`;
            } else {
                items[i].textContent = `${capitalize(resource)} - Disponível`;
            }
            break;
        }
    }
}

// Remove resource from the list
function removeResourceFromList(resource) {
    const items = resourceList.getElementsByTagName('li');
    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent.includes(capitalize(resource))) {
            items[i].remove();
            break;
        }
    }
}

// Helper function to capitalize the first letter of a string
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Event listener for managing access
const manageAccessButton = document.getElementById('manageAccess');
manageAccessButton.addEventListener('click', function () {
    alert('Acesso gerenciado com sucesso!');
});
