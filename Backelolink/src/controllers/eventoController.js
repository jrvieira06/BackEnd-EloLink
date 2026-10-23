let eventosMock = [
  {
    id: 'e1',
    titulo: 'Demo Day Porto Digital 2026',
    descricao: 'Apresentação de pitches de startups para fundos de VCs e Anjos.',
    data_evento: '2026-11-10T14:00:00Z',
    localizacao: 'Recife - PE (Bairro do Recife)',
    organizador: 'Porto Digital / EloLink'
  },
  {
    id: 'e2',
    titulo: 'Edital de Inovação Aberta - FINEP',
    descricao: 'Aporte de até R$ 500k para startups de IA e DeepTech.',
    data_evento: '2026-12-01T23:59:00Z',
    localizacao: 'Online',
    organizador: 'FINEP'
  }
];

export async function obterEventos(req, res) {
  return res.status(200).json(eventosMock);
}

export async function criarEvento(req, res) {
  const { titulo, descricao, data_evento, localizacao, organizador } = req.body;

  if (!titulo || !descricao) {
    return res.status(400).json({ mensagem: 'Título e descrição são obrigatórios' });
  }

  const novoEvento = {
    id: `e${Date.now()}`,
    titulo,
    descricao,
    data_evento: data_evento || new Date().toISOString(),
    localizacao: localizacao || 'Porto Digital',
    organizador: organizador || 'EloLink'
  };

  eventosMock.push(novoEvento);
  return res.status(201).json({ mensagem: 'Evento/Edital criado com sucesso', data: novoEvento });
}

export async function deletarEvento(req, res) {
  const { id } = req.params;
  const index = eventosMock.findIndex(e => e.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Evento não encontrado' });
  }

  eventosMock.splice(index, 1);
  return res.status(200).json({ mensagem: 'Evento removido com sucesso' });
}