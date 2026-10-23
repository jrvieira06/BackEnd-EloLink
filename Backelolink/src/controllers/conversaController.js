let mensagensMock = [
  { id: '1', conversa_id: 'c1', texto: 'Olá! Vi o pitch da OmniFlow AI e fiquei muito interessado.', remetente_id: '101' }
];

export async function obterConversas(req, res) {
  return res.status(200).json(mensagensMock);
}

export async function enviarMensagem(req, res) {
  const { texto, conversa_id, remetente_id } = req.body;
  const novaMensagem = { id: String(Date.now()), conversa_id, texto, remetente_id };
  mensagensMock.push(novaMensagem);
  return res.status(201).json({ mensagem: 'Enviada', data: novaMensagem });
}