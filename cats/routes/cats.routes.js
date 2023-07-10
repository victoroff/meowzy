import express from "express";
import {
  listCats,
  getCat,
  editCat,
  addCat,
  deleteCat,
} from "../controllers/cats.controllers.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *     cat:
 *      type: object
 *      properties:
 *          id:
 *              type: integer
 *              description: cat id
 *          name:
 *              type: string
 *              description: cat name
 *          age:
 *              type: integer
 *              description: cat age
 *          type:
 *              type: string
 *              description: cat type
 *          breed:
 *              type: string
 *              description: cat breed
 *     example:
 *          id: 1
 *          name: Rexaurus
 *          age: 3
 *          breed: labrador
 *          type: dog
 */

/**
 * @swagger
 * /cats:
 *  get:
 *     summary: Get all cats
 *     description: Get all cats
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/", listCats);

/**
 * @swagger
 * /cats/{id}:
 *  get:
 *     summary: Get cat detail
 *     description: Get cat detail
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: cat id
 *     responses:
 *      200:
 *         description: Success
 *      500:
 *         description: Internal Server Error
 */
router.get("/:id", getCat);

/**
 * @swagger
 * /cats/{id}:
 *  put:
 *     summary: Edit cat
 *     description: Edit cat
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: cat id
 *     requestBody:
 *       description: A JSON object containing cat information
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/cat'
 *           example:
 *              name: Rexaurus
 *              age: 12
 *              breed: labrador
 *              type: dog
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 *
 */
router.put("/:id", editCat);

/**
 * @swagger
 * /cats:
 *  post:
 *      summary: Add cat
 *      description: Add cat
 *      requestBody:
 *          description: A JSON object containing cat information
 *          content:
 *             application/json:
 *                 schema:
 *                    $ref: '#/components/schemas/cat'
 *                 example:
 *                    name: Pustinqk
 *                    age: 7
 *                    breed: ulichna prevuzhodna
 *                    type: cat
 *      responses:
 *      200:
 *          description: Success
 *      500:
 *          description: Internal Server Error
 */
router.post("/", addCat);

/**
 * @swagger
 * /cats/{id}:
 *  delete:
 *     summary: Delete cat
 *     description: Delete cat
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: cat id
 *     responses:
 *     200:
 *        description: Success
 *     500:
 *       description: Internal Server Error
 */
router.delete("/:id", deleteCat);

export default router;