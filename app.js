import express from 'express'
import cors from 'cors'

import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'
import catRouter from './cats/routes/cats.routes.js'

const app = express()
const port = 6360
const url = 'http://localhost';

// swagger definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Cats API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `${url}:${port}`,
            }
        ]
    },
    apis: ['./cats/routes/*.js'],
}

/* Global middlewares */
app.use(cors())
app.use(express.json())
app.use(
    '/api-docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerJSdoc(swaggerSpec))
)

/* Routes */
app.use('/cats', catRouter)

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at ${url}:${port}`))
}

export default app