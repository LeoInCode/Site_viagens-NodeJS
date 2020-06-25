const db = require('./db')

async function listData(){
    await db.connect()
    var result

    result = await db.query("SELECT * FROM aluno;")
    console.log("Alunos:")
    console.log(result.rows);

}

listData()
