import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()
import { comparePassword, generateToken, hashPassword } from "../utils/auth.js"

export const RegistrodeTurista = async (req, res)  =>  {
    const { name, email, phone, password } = req.body

    try {

        const hashedPassword = await hashPassword(password)

         const newPassoworduser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                phone: phone,
                password: hashedPassword
            }
         })

         const token = generateToken(newPassoworduser)
         res.status(201).json({
            nome: newPassoworduser.name,
            email: newPassoworduser.email,
            phone: newPassoworduser.phone,
            token: token
         })
    } catch (error) {
        res.status(400).json({
             erro: "erro ao criar turista",
            detalhes: error.message
        })
    }
} 


export const registroadmin = async (req, res) => {
    const {name, email, password} = req.body

    try {

        const hashedPassword = await hashPassword(password)
         const newPassowordAdmin = await prisma.admin.create({
            data: {
                name: name,
                email: email,
                password: hashedPassword
            }
         })

         const token = generateToken(newPassowordAdmin)
         res.status(201).json({
                name: name,
                email: email,
                token: token

         })

    } catch (error) {
         res.status(400).json({
             erro: "erro ao criar admin",
            detalhes: error.message
        })
    }
    


}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const user = await prisma.user.findUnique({
            where: { email }
        });

        // verdadeiro pega o user falso leva o admin
        const admin = user ? null : await prisma.admin.findUnique({
            where: { email }
        });

        if (!user && !admin) {
            return res.status(401).json({ mensagem: "Credenciais inválidas" });
        }

        const logintype = user || admin;
        const isPasswordValid = await comparePassword(password, logintype.password);

        if (!isPasswordValid) {
            return res.status(401).json({ mensagem: "Credenciais inválidas" });
        }

        // Gera token
        const token = generateToken(logintype, user ? 'user' : 'admin');

        // Envia resposta
        res.status(200).json({
            tipo: user ? "user" : "admin",
            usuario: {
                nome: logintype.name,
                email: logintype.email
            },
            token
        });

    } catch (error) {
        res.status(400).json({
            erro: "erro ao fazer login",
            detalhes: error.message
        });
    }
};