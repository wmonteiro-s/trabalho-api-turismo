import express from "express"
import { login, registroadmin, RegistrodeTurista } from "../controllers/turistaController.js"
import { validation } from "../middleware/validate.js"
import { adminrequests, loginschema, tourismrequests } from "../schemas/turismoschema.js"


const router = express.Router()
router.post('/registreuser', validation(tourismrequests), RegistrodeTurista)
router.post('/registreadmin', validation(adminrequests), registroadmin)
router.post('/login', validation(loginschema), login)


export default router