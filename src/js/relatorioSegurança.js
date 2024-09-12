// Simulação de dados de segurança
const incidentes = [
    { id: 'INC123', data: '07/09/2024', descricao: 'Invasão no perímetro norte da Torre Wayne', status: 'Neutralizado' },
    { id: 'INC124', data: '06/09/2024', descricao: 'Alerta de segurança nos laboratórios subterrâneos', status: 'Em investigação' }
];

const patrulhas = [
    { data: '05/09/2024', descricao: 'Sem incidentes' },
    { data: '06/09/2024', descricao: 'Alerta suspeito na entrada principal' },
    { data: '07/09/2024', descricao: 'Área segura' }
];

// Função para exibir incidentes na tabela
function exibirIncidentes() {
    const tbody = document.querySelector('.incident-report tbody');
    tbody.innerHTML = '';  // Limpa o conteúdo anterior

    incidentes.forEach(incidente => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${incidente.id}</td>
            <td>${incidente.data}</td>
            <td>${incidente.descricao}</td>
            <td>${incidente.status}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Função para exibir patrulhas na lista
function exibirPatrulhas() {
    const ul = document.querySelector('.patrol-report ul');
    ul.innerHTML = '';  // Limpa o conteúdo anterior

    patrulhas.forEach(patrulha => {
        const li = document.createElement('li');
        li.textContent = `${patrulha.data}: ${patrulha.descricao}`;
        ul.appendChild(li);
    });
}

// Função para adicionar novo incidente
function adicionarIncidente(id, data, descricao, status) {
    incidentes.push({ id, data, descricao, status });
    exibirIncidentes();
}

// Função para adicionar nova patrulha
function adicionarPatrulha(data, descricao) {
    patrulhas.push({ data, descricao });
    exibirPatrulhas();
}

// Chama as funções para exibir dados iniciais
document.addEventListener('DOMContentLoaded', () => {
    exibirIncidentes();
    exibirPatrulhas();
});

// Exemplo: Adiciona um novo incidente após 5 segundos
setTimeout(() => {
    adicionarIncidente('INC125', '08/09/2024', 'Tentativa de invasão na garagem', 'Neutralizado');
}, 5000);
