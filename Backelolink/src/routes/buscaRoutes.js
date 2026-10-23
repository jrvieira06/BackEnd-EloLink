import express from 'express';
import { buscarGeral } from '../controllers/buscaController.js';

const router = express.Router();

/**
 * @swagger
 * /api/buscas:
 *   get:
 *     summary: Busca geral na plataforma
 *     tags: [Buscas]
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/', buscarGeral);

export default router;