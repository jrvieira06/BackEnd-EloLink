import express from 'express';
import { obterConversas, enviarMensagem } from '../controllers/conversaController.js';

const router = express.Router();

/**
 * @swagger
 * /api/conversas:
 *   get:
 *     summary: Lista mensagens/conversas
 *     tags: [Conversas]
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.get('/', obterConversas);

/**
 * @swagger
 * /api/conversas/mensagem:
 *   post:
 *     summary: Envia uma mensagem
 *     tags: [Conversas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - texto
 *             properties:
 *               texto:
 *                 type: string
 *                 example: "Olá, vamos agendar uma conversa!"
 *     responses:
 *       201:
 *         description: Mensagem enviada
 */
router.post('/mensagem', enviarMensagem);

export default router;