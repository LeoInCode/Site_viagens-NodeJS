const db = require('./db')

async function insertData(){
    await db.connect()

    
    const queryAluno = "INSERT INTO aluno (cpf,rg,nome) VALUES ($1, $2, $3)"

    await db.query(queryAluno,[87987,234234,'Leo'])
    await db.query(queryAluno, [324234,56756,'Luana'])

    await db.end()


    console.log("Dados Inseridos");

}
insertData()
