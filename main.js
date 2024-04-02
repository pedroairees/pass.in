let participantes = [
    {
        nome: 'Pedro Aires',
        email: 'pedroengsof@gmail.com',
        dataInscricao: new Date(2024, 1, 22, 19, 20),
        dataCheckIn: new Date(2024, 3, 25, 22, 0)
    },
    {
        nome: 'Myke',
        email: 'myke@gmail.com',
        dataInscricao: new Date(2024, 1, 22, 19, 20),
        dataCheckIn: new Date(2024, 3, 25, 22, 0)
    },
    {
        nome: 'Lara Campos',
        email: 'lara.campos@example.com',
        dataInscricao: new Date(2024, 2, 23, 10, 15),
        dataCheckIn: new Date(2024, 3, 25, 19, 30)
    },
    {
        nome: 'Ricardo Almeida',
        email: 'ricardo.almeida@example.com',
        dataInscricao: new Date(2024, 1, 24, 14, 5),
        dataCheckIn: new Date(2024, 3, 26, 20, 45)
    },
    {
        nome: 'Julia Martins',
        email: 'julia.martins@example.com',
        dataInscricao: new Date(2024, 1, 22, 8, 30),
        dataCheckIn: new Date(2024, 3, 25, 21, 15)
    },
    {
        nome: 'Carlos Henrique',
        email: 'carlos.henrique@example.com',
        dataInscricao: new Date(2024, 2, 23, 9, 45),
        dataCheckIn: new Date(2024, 3, 26, 18, 5)
    },
    {
        nome: 'Fernanda Lima',
        email: 'fernanda.lima@example.com',
        dataInscricao: new Date(2024, 1, 24, 13, 20),
        dataCheckIn: new Date(2024, 3, 25, 20, 30)
    },
    {
        nome: 'Roberto Silva',
        email: 'roberto.silva@example.com',
        dataInscricao: new Date(2024, 2, 22, 11, 50),
        dataCheckIn: new Date(2024, 3, 26, 22, 10)
    },
    {
        nome: 'Ana Paula',
        email: 'ana.paula@example.com',
        dataInscricao: new Date(2024, 2, 23, 12, 35),
        dataCheckIn: new Date(2024, 3, 25, 18, 0)
    },
    {
        nome: 'Tiago Nunes',
        email: 'tiago.nunes@example.com',
        dataInscricao: new Date(2024, 2, 24, 16, 50),
        dataCheckIn: new Date(2024, 3, 26, 21, 20)
    }
];

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)
    const dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

    return `
    <tr>
        <td><strong>${participante.nome}</strong><br><small>${participante.email}</small></td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
    </tr>
    `
}

const atualizarLista = (participante) => {
    let output = ''
    //repetição  - loop
    for(let participante of participantes){
        output = output + criarNovoParticipante(participante)
    }

    // substituir informação do HTML
    document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)