import express from 'express'
import userRouter from './routes/users.js'
const app=express()
app.use(express.json())

app.use('/users',userRouter)
app.get('/',(req,res)=>{
    res.send('Welcome to Home Page')
})
app.listen(3000,()=>{
    console.log('Server Started at the port 3000');
})