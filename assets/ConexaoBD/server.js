/*const express = require('express');
const app = express();
const mssql = require('mssql');
const dbConfig = require('./dbConfig');
const cors = require('cors');

// Configurar a conexão com o banco de dados
mssql.connect(dbConfig, (err) => {
  if (err) {
    console.error('Erro ao conectar com o banco', err);
    process.exit(1);
  } else {
    console.log('Conexão estabelecida com sucesso');
  }
});

app.use(cors());
app.use(express.json()); // Adicione essa linha para parsear o corpo da solicitação como JSON

app.post('/buscarNoBanco', async (req, res) => {
  console.log('Recebeu uma solicitação POST para buscar no banco');
  try {

    const request = new mssql.Request();

    // Substitua 'SuaTabela' pelo nome da sua tabela e 'SeusCampos' pelos campos desejados
    const result = await request.query(`SELECT u.login, u.senha FROM dbo.USUARIO u`);
    
    // Extrai os resultados para um array
    const arrayDeResultados = result.recordset.map((registro) => {
      // Aqui você pode ajustar os campos que deseja extrair do registro
      return {
        campo1: registro.Campo1,
        campo2: registro.Campo2,
        // Adicione outros campos conforme necessário
      };
    });
    console.log(arrayDeResultados);

    res.json(arrayDeResultados);
  } catch (err) {
    console.error('Erro ao buscar no banco:', err);
    res.status(500).send('Erro interno do servidor');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});

process.on('SIGINT', async () => {
  await mssql.close();
  console.log('Conexão com o banco encerrada');
  process.exit(0);
});*/