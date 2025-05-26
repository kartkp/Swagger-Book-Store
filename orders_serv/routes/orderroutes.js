const express = require('express')
const { placeOrder, getOrder, deleteOrder } = require('../controlers/ordercontroler')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management APIs
 */

/**
 * @swagger
 * /BookStore/v1/orders:
 *   post:
 *     summary: Place an order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - bookId
 *             properties:
 *               userId:
 *                 type: string
 *               bookId:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               orderDate:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Order placed successfully
 */
router.post('/', placeOrder)

/**
 * @swagger
 * /BookStore/v1/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     tags: [Orders]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details
 *       404:
 *         description: Order not found
 */
router.get('/:id', getOrder)

/**
 * @swagger
 * /BookStore/v1/orders/{id}:
 *   delete:
 *     summary: Delete order by ID
 *     tags: [Orders]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order deleted
 *       404:
 *         description: Order not found
 */
router.delete('/:id', deleteOrder)

module.exports = router
