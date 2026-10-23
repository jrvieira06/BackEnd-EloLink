let investidoresMock = [
  {
    id: '101',
    name: 'Lucas Mendes',
    fundName: 'Porto Capital',
    role: 'investor',
    ticketMedio: 'R$ 250k - R$ 1M',
    location: 'Recife - PE'
  }
];

export async function obterInvestidores(req, res) {
  return res.status(200).json(investidoresMock);
}

// ➕ NOVO: POST Investidor
export async function cadastrarInvestidor(req, res) {
  const { name, fundName, ticketMedio, cidade, uf } = req.body;

  if (!name) {
    return res.status(400).json({ mensagem: 'Nome é obrigatório' });
  }

  const novoInvestidor = {
    id: String(Date.now()),
    name,
    fundName: fundName || 'Investidor Anjo',
    role: 'investor',
    ticketMedio: ticketMedio || 'R$ 100k - R$ 500k',
    location: `${cidade || 'Recife'} - ${uf || 'PE'}`
  };

  investidoresMock.push(novoInvestidor);
  return res.status(201).json({ mensagem: 'Investidor cadastrado com sucesso', data: novoInvestidor });
}

// ➕ NOVO: DELETE Investidor por ID
export async function deletarInvestidor(req, res) {
  const { id } = req.params;
  const index = investidoresMock.findIndex(i => i.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Investidor não encontrado' });
  }

  investidoresMock.splice(index, 1);
  return res.status(200).json({ mensagem: 'Investidor removido com sucesso' });
}