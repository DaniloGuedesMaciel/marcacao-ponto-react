
const ValidarCadastro = async (usuario, senha) => {
  try {
    const resultado = await fetch('http://localhost:3000/validarProcedure', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ usuario, senha }),
    });

    if (!resultado.ok) {
      throw new Error(`Falha na solicitação: ${resultado.status}`);
    }

    const dados = await resultado.json();
    return dados.sucesso;
  } catch (erro) {
    console.error('Erro ao lidar com a Promise', erro);
    throw erro; // Rejogue o erro para quem chamar essa função lidar com ele
  }
};

export { ValidarCadastro };