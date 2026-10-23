export async function buscarGeral(req, res) {
  const { q } = req.query;
  
  return res.status(200).json({
    termo: q || '',
    startups: [
      { id: '1', name: 'OmniFlow AI', setor: 'Inteligência Artificial' }
    ],
    investidores: [
      { id: '101', name: 'Lucas Mendes', fundo: 'Porto Capital' }
    ]
  });
}