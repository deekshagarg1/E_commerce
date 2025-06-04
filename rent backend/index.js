const express = require("express")
const app = express();
const cors= require("cors")
const users=require("./user")
const mongoose = require ("mongoose")


require("./config")
app.use(express.json())


app.use(cors())


app.post("/register", async (req,resp)=>{
    let data = new users (req.body)
    let result = await data.save()
    result = result.toObject();
    delete result.password
    resp.send(result)
})

app.post ("/login", async (req, resp)=>{
    console.log(req.body)
    if(req.body.password && req.body.email)
    {
        let user = await users.findOne(req.body).select("-password");
        if (user) {
            resp.send(user)
        }
        else {
            resp.send({result:"No user found "})
        }   
    }
    else{
        resp.send({result:"No user foundo"})
        }
    })

    // --------------------multer-----------------------

const multer = require("multer")

app.use("/uploads" , express.static('uploads'))

const Product = mongoose.model('product' , {
    tittle:String ,
    price:String,
delivery:String,
imageUrl:String
})

const storage = multer.diskStorage({
    destination: 'uploads/',
    filename: ( req, file, callback)=> callback(null , Date.now() + '-' + file.originalname),
})


const upload = multer ({storage});


app.post('/api/products', upload.single('image'), async (req, res) => {
    const { tittle, price , delivery } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';
    const product1 = new Product({ tittle , delivery, price, imageUrl });
     const result = await product1.save();
    res.json(result);
  });
  

app.get('/api/get' , async(req , resp)=>{
    const products= await Product.find();
    resp.json(products)
} )



    app.listen(5000)