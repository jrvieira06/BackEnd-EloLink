import express from 'express';
import { obterStartups, obterStartupPorId, cadastrarStartup, deletarStartup } from '../controllers/startupController.js';

const router = express.Router();

/**
 * @swagger
 * /api/startups:
 *   get:
 *     summary: Retorna a lista de startups
 *     tags: [Startups]
 *     responses:
 *       200:
 *         description: Sucesso
 *   post:
 *     summary: Cadastra uma nova startup e cria a conta para login
 *     tags: [Startups]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - companyName
 *               - email
 *               - senha
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Minha Tech AI"
 *               companyName:
 *                 type: string
 *                 example: "Minha Tech LTDA"
 *               email:
 *                 type: string
 *                 example: "fundador@minhatech.com"
 *               senha:
 *                 type: string
 *                 example: "123456"
 *               stage:
 *                 type: string
 *                 example: "Pré-Semente"
 *               targetAsk:
 *                 type: string
 *                 example: "R$ 300k"
 *               cidade:
 *                 type: string
 *                 example: "Recife"
 *               uf:
 *                 type: string
 *                 example: "PE"
 *               bio:
 *                 type: string
 *                 example: "Plataforma inovadora de tecnologia."
 *     responses:
 *       201:
 *         description: Startup e conta de usuário criadas
 */
router.get('/', obterStartups);
router.post('/', cadastrarStartup);

/**
 * @swagger
 * /api/startups/{id}:
 *   get:
 *     summary: Retorna detalhes de uma startup
 *     tags: [Startups]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sucesso
 *   delete:
 *     summary: Remove uma startup por ID
 *     tags: [Startups]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Removido com sucesso
 */
router.get('/:id', obterStartupPorId);
router.delete('/:id', deletarStartup);

export default router;