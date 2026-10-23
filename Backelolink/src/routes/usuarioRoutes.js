import express from 'express';
import { deletarUsuarioGeral } from '../controllers/usuarioController.js';

const router = express.Router();

/**
 * @swagger
 * /api/usuarios/{id}:
 *   delete:
 *     summary: Deleta o perfil geral do usuário (Startup ou Investidor)
 *     tags: [Usuários (Geral)]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Perfil e vínculos excluídos
 */
router.delete('/:id', deletarUsuarioGeral);

export default router;