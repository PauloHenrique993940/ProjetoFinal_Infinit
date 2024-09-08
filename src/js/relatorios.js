document.addEventListener('DOMContentLoaded', () => {
    const activityReportForm = document.getElementById('activityReportForm');
    const resourceReportForm = document.getElementById('resourceReportForm');
    const activityReportList = document.getElementById('activityReportList');
    const resourceReportList = document.getElementById('resourceReportList');

    let activities = [];
    let resources = [];

    // Função para atualizar o relatório de atividades
    function updateActivityReport() {
        activityReportList.innerHTML = '';
        activities.forEach((activity, index) => {
            const li = document.createElement('li');
            li.textContent = `${activity.date} - ${activity.activity} - ${activity.status}`;
            
            // Botão Remover
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                activities.splice(index, 1);
                updateActivityReport();
            });

            // Botão Editar
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit');
            editButton.addEventListener('click', () => {
                document.getElementById('activityDate').value = activity.date;
                document.getElementById('activityDescription').value = activity.activity;
                document.getElementById('activityStatus').value = activity.status;
                activities.splice(index, 1);
                updateActivityReport();
            });

            li.appendChild(removeButton);
            li.appendChild(editButton);
            activityReportList.appendChild(li);
        });
    }

    // Função para atualizar o relatório de recursos
    function updateResourceReport() {
        resourceReportList.innerHTML = '';
        resources.forEach((resource, index) => {
            const li = document.createElement('li');
            li.textContent = `${resource.name} - ${resource.quantity} - ${resource.status}`;
            
            // Botão Remover
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                resources.splice(index, 1);
                updateResourceReport();
            });

            // Botão Editar
            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.classList.add('edit');
            editButton.addEventListener('click', () => {
                document.getElementById('resourceName').value = resource.name;
                document.getElementById('resourceQuantity').value = resource.quantity;
                document.getElementById('resourceStatus').value = resource.status;
                resources.splice(index, 1);
                updateResourceReport();
            });

            li.appendChild(removeButton);
            li.appendChild(editButton);
            resourceReportList.appendChild(li);
        });
    }

    // Adicionar novo relatório de atividades
    activityReportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const date = document.getElementById('activityDate').value;
        const activityDescription = document.getElementById('activityDescription').value;
        const status = document.getElementById('activityStatus').value;

        if (date && activityDescription && status) {
            activities.push({ date, activity: activityDescription, status });
            updateActivityReport();
            activityReportForm.reset();
        }
    });

    // Adicionar novo relatório de recursos
    resourceReportForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('resourceName').value;
        const quantity = document.getElementById('resourceQuantity').value;
        const status = document.getElementById('resourceStatus').value;

        if (name && quantity && status) {
            resources.push({ name, quantity, status });
            updateResourceReport();
            resourceReportForm.reset();
        }
    });
});
