import express from 'express'
import cors from 'cors'
//routes
import petRoutes from './pets/routes/pets.routes.js'

///documentation
import swaggerUI from 'swagger-ui-express'
import swaggerJSdoc from 'swagger-jsdoc'

const url = 'https://localhost';
const app = express()
const port = 6360

// swagger definition
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Meowzy API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `${url}:${port}`,
            }
        ]
    },
    apis: ['./pets/routes/*.js'],
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
app.use('/pets', petRoutes)

/* Server setup */
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => console.log(`⚡️[server]: Server is running at ${url}:${port}`))
}

export default app