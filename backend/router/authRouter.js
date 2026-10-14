import express from 'express'
import { test } from '../controller/authController.js'

const authRouter = express.Router()

authRouter.get("/",test)

export default authRouter