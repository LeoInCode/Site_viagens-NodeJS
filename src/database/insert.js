const db = require('./db')

async function insertData(){
    await db.connect()

    const nome = document.getElementById("inputUsuario").value
    const email = document.getElementById("inputEmail").value
    const cpf = document.getElementById("inputCpf").value
    const rg = document.getElementById("inputRg").value
    console.log(nome)
    //const senha = document.getElementById("inputSenha").value
    
    const queryAluno = "INSERT INTO aluno (nome,email,cpf,rg) VALUES ($1, $2, $3, $4)"

    await db.query(queryAluno,[nome,email,cpf,rg])

    await db.end()

    console.log("Dados Inseridos")

}
insertData()
