import express from 'express';
import { obterEventos, criarEvento, deletarEvento } from '../controllers/eventoController.js';

const router = express.Router();

/**
 * @swagger
 * /api/eventos:
 *   get:
 *     summary: Lista eventos e editais do ecossistema
 *     tags: [Eventos & Editais]
 *     responses:
 *       200:
 *         description: Sucesso
 *   post:
 *     summary: Cria um novo evento ou edital
 *     tags: [Eventos & Editais]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - titulo
 *               - descricao
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Demo Day Porto Digital 2026"
 *               descricao:
 *                 type: string
 *                 example: "Pitch para investidores anjo."
 *               localizacao:
 *                 type: string
 *                 example: "Recife - PE"
 *               organizador:
 *                 type: string
 *                 example: "EloLink"
 *     responses:
 *       201:
 *         description: Evento criado
 */
router.get('/', obterEventos);
router.post('/', criarEvento);

/**
 * @swagger
 * /api/eventos/{id}:
 *   delete:
 *     summary: Apaga um evento por ID
 *     tags: [Eventos & Editais]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Removido
 */
router.delete('/:id', deletarEvento);

export default router;