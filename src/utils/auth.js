import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const SALT_ROUNDS = 10
const JWT_SECRET = process.env.JWT_SECRET

export async function hashPassword(password){
    return await bcrypt.hash(password, SALT_ROUNDS)
}

export async function comparePassword (password, hashedpassword){
    return await bcrypt.compare(password, hashedpassword)
}

export function generateToken (user, type){

    return jwt.sign(
        {id: user.id, email: user.email, type: type}, 
        JWT_SECRET,
        {expiresIn: "1h"}
    )

}

export function verifyToken(token){
    return jwt.verify(token, JWT_SECRET)
}