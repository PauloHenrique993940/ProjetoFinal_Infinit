document.addEventListener('DOMContentLoaded', () => {
    const activityForm = document.getElementById('activityForm');
    const activityList = document.getElementById('activityList');
    const activityNameInput = document.getElementById('activityName');
    const activityDateInput = document.getElementById('activityDate');

    let activities = [];
    let editingIndex = null;

    // Função para atualizar a lista de atividades
    function updateActivityList() {
        activityList.innerHTML = '';
        activities.forEach((activity, index) => {
            const li = document.createElement('li');
            li.textContent = `${activity.name} - ${activity.date}`;
            
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => {
                activities.splice(index, 1);
                updateActivityList();
            });
            
            li.appendChild(removeButton);
            activityList.appendChild(li);
        });
    }

    // Adicionar ou atualizar atividade
    activityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const activityName = activityNameInput.value;
        const activityDate = activityDateInput.value;

        if (activityName && activityDate) {
            if (editingIndex !== null) {
                // Atualizar atividade existente
                activities[editingIndex] = { name: activityName, date: activityDate };
                editingIndex = null;
            } else {
                // Adicionar nova atividade
                activities.push({ name: activityName, date: activityDate });
            }
            updateActivityList();
            activityForm.reset();
        }
    });

    // Inicialização
    updateActivityList();
});
