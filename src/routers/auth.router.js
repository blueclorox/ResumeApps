import express from 'express'
import { HTTP_STATUS } from '../constants/http-status.constant.js';
import { MESSAGES } from '../constants/message.constant.js';

const authRouter = express.Router();

authRouter.post('/sign-up', async (req, res, next)=>{
    try {
        const data = null;

        return res.status(HTTP_STATUS.CREATED).json({
            status: HTTP_STATUS.CREATED,
            message: MESSAGES.AUTH.SIGN_UP.SUCCEED,
            data,
        })
        }   catch (error){
            next(error);
        };
})

export { authRouter };