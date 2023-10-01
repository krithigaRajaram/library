const express=require('express')
const app=express()
const indexRouter=require('./routes/index')
const expressLayouts= require('express-ejs-layouts')
app.set('view engine','ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/library',{
    useNewUrlParser:true
})
const db=mongoose.connection
db.on('error',error=>console.error(error))
db.once('open',()=>console.log("connection established"))

app.use('/',indexRouter)
app.listen(2090,()=>{
    console.log("server listening")
})