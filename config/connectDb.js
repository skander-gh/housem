const mongoose= require('mongoose')


const connectDb= async ()=>{

    try {
       await mongoose.connect(process.env.MONGO_URI)

       console.log("Db connected")
    } catch (error) {
        console.log({msg:'Db is not connected', error})
    }
}


module.exports=connectDb