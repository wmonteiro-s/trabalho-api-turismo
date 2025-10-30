export function validation(schema){
    return (req, res, next) =>{
        try {
            const validate = schema.parse(req.body)
            req.body = validate
            next()
            
        } catch (error) {
            return res.status(400).json({
                messagem: "erro de validação",
                erro: error.message
            })
        }
    }
}