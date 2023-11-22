import CircularJSON from 'circular-json';

const ValidarCadastro = async (usuario, senha)=>{
    try {
        // Chama a procedure do SQL Server
        const resultado = await fetch('http://fe80::a5f9:1ca3:5ef0:5ec0%17:1433/dbo.proc_RealizarLogin', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: CircularJSON.stringify({
            usuario,
            senha,
          }),
        });
    
        if (!resultado.ok) {
          throw new Error(`Falha na solicitação: ${resultado.status}`);
        }
    
        // Converte o resultado da requisição para um objeto JSON
        const dados = CircularJSON.parse(await resultado.json());
    
        // Retorna o valor booleano da procedure
        return dados.sucesso;
      } catch (erro) {
        console.error('Erro ao lidar com esta a promisse', erro);
      }
  }
  export  {ValidarCadastro};