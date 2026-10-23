export async function deletarUsuarioGeral(req, res) {
  const { id } = req.params;

  // Em um banco real, deletaria o usuário e cascatearia para startups/investidores
  return res.status(200).json({
    mensagem: `Perfil e dados vinculados ao ID ${id} foram removidos com sucesso do sistema.`
  });
}