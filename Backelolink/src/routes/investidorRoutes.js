import express from 'express';
import { obterInvestidores, cadastrarInvestidor, deletarInvestidor } from '../controllers/investidorController.js';

const router = express.Router();

/**
 * @swagger
 * /api/investidores:
 *   get:
 *     summary: Lista investidores
 *     tags: [Investidores]
 *     responses:
 *       200:
 *         description: Sucesso
 *   post:
 *     summary: Cadastra novo investidor
 *     tags: [Investidores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Lucas Mendes"
 *               fundName:
 *                 type: string
 *                 example: "Porto Capital"
 *               ticketMedio:
 *                 type: string
 *                 example: "R$ 250k - R$ 1M"
 *               cidade:
 *                 type: string
 *                 example: "Recife"
 *               uf:
 *                 type: string
 *                 example: "PE"
 *     responses:
 *       201:
 *         description: Criado
 */
router.get('/', obterInvestidores);
router.post('/', cadastrarInvestidor);

/**
 * @swagger
 * /api/investidores/{id}:
 *   delete:
 *     summary: Remove investidor por ID
 *     tags: [Investidores]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 */
router.delete('/:id', deletarInvestidor);

export default router;