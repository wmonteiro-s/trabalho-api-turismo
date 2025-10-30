import express from "express"
import { createkeyadmin, deletekeyadmin, filtreget, placesall, upadatekeyadmin } from "../controllers/placesController.js"
import { authenticate } from "../middleware/authentication.js"
import { validation } from "../middleware/validate.js"
import { placeSchemas } from "../schemas/placesSchema.js"
import { isAdmin } from "../middleware/permissao.js"
// import { authorizeAdmin } from "../middleware/permissao.js"


const router = express.Router()

router.post('/criarplaces',authenticate,isAdmin, validation(placeSchemas),createkeyadmin)
router.get('/todoslocais',authenticate, placesall)
router.get('/filtrelocais', authenticate, filtreget)
router.put('/atualizarplaces/:id', authenticate, isAdmin, validation(placeSchemas), upadatekeyadmin)
router.delete('/deletarplaces/:id', authenticate, isAdmin, deletekeyadmin)


export default router