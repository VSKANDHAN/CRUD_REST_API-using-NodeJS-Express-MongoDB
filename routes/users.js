import express from "express"
import { v4 as uuid } from "uuid"
const router=express.Router()
import 'dotenv/config'
import mongoose from'mongoose'
import user from "../models/userModel.js"
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log('Connected to the Database');

}
).catch((e)=>console.log(e))

router.get('/',async (req,res)=>{
    const User=await user.find()
    res.status(200).json(User)
})
router.post('/',async (req,res)=>{
   const User=await user.create(req.body)
   res.status(200).json(User)
})
router.delete('/:id',async (req,res)=>{
    let id=req.params.id
    await user.findByIdAndDelete(id)
    res.send('deleted the user')
})
router.patch('/:id',async (req,res)=>{
    let id=req.params.id
    const User=await user.findByIdAndUpdate(id,req.body)
    res.send(`Updated the user with the id of ${id}`)
})


export default router