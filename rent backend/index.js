const express = require("express")
const app = express();
const cors= require("cors")
const users=require("./user")
const mongoose = require ("mongoose")
const {RAZORPAY_ID_KEY ,RAZORPAY_SECRET_KEY }= process.env

// ----------
const Razorpay = require("razorpay")

require("dotenv").config();
require("./config")
app.use(express.json())


app.use(cors())

// ---------razaor pay


app.post('/orders', async(req, res) => {
    const razorpay = new Razorpay({
        key_id: "RAZORPAY_ID_KEY",
        key_secret: "RAZORPAY_SECRET_KEY"
    })

    const options = {
        amount: req.body.amount,
        currency: req.body.currency,
        receipt: "receipt#1",
        payment_capture: 1
    }

    try {
        const response = await razorpay.orders.create(options)

        res.json({
            order_id: response.id,
            currency: response.currency,
            amount: response.amount
        })
    } catch (error) {
        res.status(500).send("Internal server error")
    }
})

app.get("/payment/:paymentId", async(req, res) => {
    const {paymentId} = req.params;

    const razorpay = new Razorpay({
        key_id: "RAZORPAY_ID_KEY",
        key_secret: "RAZORPAY_SECRET_KEY"
    })
    
    try {
        const payment = await razorpay.payments.fetch(paymentId)

        if (!payment){
            return res.status(500).json("Error at razorpay loading")
        }

        res.json({
            status: payment.status,
            method: payment.method,
            amount: payment.amount,
            currency: payment.currency
        })
    } catch(error) {
        res.status(500).json("failed to fetch")
    }
})



// -------------

// --------OTHER BACKEND API-----------------------------

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


app.get('/getdetail/:id' , async(req , resp)=>{
    let data = await Product.findOne({_id:req.params.id})
    if(data){
        resp.send(data)
    }
    else{
        resp.send("no data found")
    }
})



app.get('/searchapi/:key' , async(req, resp)=>{
    let result = await Product.find({"$or" :[{"tittle":{$regex:req.params.key} }]
    })
    resp.send(result)

})


    app.listen(5000)