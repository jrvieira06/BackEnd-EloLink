import { usuariosMock } from './authController.js';

let startupsMock = [
  {
    id: '1',
    name: 'OmniFlow AI',
    companyName: 'OmniFlow AI',
    email: 'camila@omniflow.ai',
    stage: 'Semente (Seed)',
    targetAsk: 'R$ 1.5M',
    location: 'Recife - PE',
    cidade: 'Recife',
    uf: 'PE',
    bio: 'Plataforma de automação de compras corporativas usando Inteligência Artificial.'
  }
];

export async function obterStartups(req, res) {
  return res.status(200).json(startupsMock);
}

export async function obterStartupPorId(req, res) {
  const { id } = req.params;
  const startup = startupsMock.find(s => s.id === id);
  if (!startup) return res.status(404).json({ mensagem: 'Startup não encontrada' });
  return res.status(200).json(startup);
}

export async function cadastrarStartup(req, res) {
  const { name, companyName, email, senha, stage, targetAsk, cidade, uf, bio } = req.body;

  if (!name || !companyName || !email || !senha) {
    return res.status(400).json({ mensagem: 'Nome, Nome Fantasia, E-mail e Senha são obrigatórios' });
  }

  const idNovo = String(Date.now());

  const novaStartup = {
    id: idNovo,
    name,
    companyName,
    email,
    stage: stage || 'Pré-Semente',
    targetAsk: targetAsk || 'R$ 500k',
    location: `${cidade || 'Recife'} - ${uf || 'PE'}`,
    cidade: cidade || 'Recife',
    uf: uf || 'PE',
    bio: bio || 'Nova startup cadastrada'
  };

  startupsMock.push(novaStartup);

  // Cadastra o e-mail e a senha no sistema de login imediatamente
  usuariosMock.push({
    id: idNovo,
    nome: name,
    email: email,
    senha: senha,
    tipo: 'startup'
  });

  return res.status(201).json({
    mensagem: 'Startup e conta criadas com sucesso! Você já pode fazer login com esse e-mail e senha.',
    data: novaStartup
  });
}

export async function deletarStartup(req, res) {
  const { id } = req.params;
  const index = startupsMock.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Startup não encontrada' });
  }

  startupsMock.splice(index, 1);
  return res.status(200).json({ mensagem: 'Startup removida com sucesso' });
}
