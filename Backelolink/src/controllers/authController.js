// Lista inicial de usuários
export let usuariosMock = [
  {
    id: '1',
    nome: 'Camila Rocha',
    email: 'camila@omniflow.ai',
    senha: '123456',
    tipo: 'startup'
  },
  {
    id: '101',
    nome: 'Lucas Mendes',
    email: 'lucas@portocapital.com',
    senha: '123456',
    tipo: 'investidor'
  }
];

export async function login(req, res) {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ mensagem: 'E-mail e senha são obrigatórios' });
  }

  // Busca se o usuário foi cadastrado
  const usuarioEncontrado = usuariosMock.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.senha === senha
  );

  if (!usuarioEncontrado) {
    return res.status(401).json({ mensagem: 'E-mail ou senha incorretos. Faça o cadastro primeiro.' });
  }

  return res.status(200).json({
    mensagem: 'Login realizado com sucesso',
    user: usuarioEncontrado,
    token: 'token-fake-apresentacao-elolink'
  });
}