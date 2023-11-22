const express = require('express');
const app = express();
const mssql = require('mssql');
const dbConfig = require('./dbConfig');

// Configurar a conexão com o banco de dados
mssql.connect(dbConfig, (err) => {
  if (err) {
    console.error('Erro ao conectar com o banco', err);
    process.exit(1);
  }else{
    console.log('Conexão estabelecida com sucesso');
  }
});

// Definir uma rota de exemplo
/*app.get('/api/validacao', async (req, res) => {
  try{
    const request = new mssql.Request();
    const result = await request.query('SELECT * FROM dbo.USUARIO');
    res.json(result.recordset);
  }catch(err){
    console.log('Erro na consulta SQL', err);
    res.status(500).send('Erro no servidor de novo');
  }
});*/

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});

process.on('SIGINT', ()=>{
  mssql.close();
  console.log('Conexão com o banco encerrada');
  process.exit(0);
})
