import express from "express"
import { router as productsRoutes} from "./routes/products.routes.js"
import { router as categoriesRoutes} from "./routes/categories.routes.js"

const app = express()

app.use(express.json())

app.use('/api', productsRoutes )
app.use('/api', categoriesRoutes)

app.listen(3000)

console.log('server on port', 3000)
