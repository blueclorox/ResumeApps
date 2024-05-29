import express from 'express';
import { prisma } from '../utils/prisma.util.js'

const router = express.Router();

Router.post('/sign-up', async(req, res, next) =>{
    const {email, password, passwordCheck, name} = req.body

    const isExistUser = await prisma.users.findFirst({
        where: {email},
    })
    if (isExistUser){
        return res.status(400).json({message:'이미 존재하는 이메일입니다.'})
    }

    if (password != passwordCheck){
        return res.status(400).json({message:'비밀번호와 확인 입력값이 다릅니다.'})
    }

    const user = await prisma.users.create({
        data:{
            email, password,
        }
    })

    const userInfo = await prisma.userInfos.create({
        data: {
            UserId: user.userId,
            name,
            email,
            status: 'APPLICANT',
            createdAt: dateNow(),
            updatedAt: updatedAt(),
        }
    })
    
    return res.status(201).json({message: '회원가입이 완료되었습니다'})
})