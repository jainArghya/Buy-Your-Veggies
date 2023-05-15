const { verify } = require("jsonwebtoken");
const Cart = require("../models/Cart");
const { verifyToken, verifyAuthorization, verifyAdmin } = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req,res) => {
    const newCart = new Cart(req.body);

    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch(err){
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id", verifyAuthorization, async (req,res) => {
    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true})
        res.status(200).json(updatedCart);
    } catch(err){
        res.status(500).json(err);
    }
})

//DELETE
router.delete("/:id", verifyAuthorization, async (req,res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart has been deleted ...");
    } catch(err){
        res.status(500).json(err);
    }
})

//FIND
router.get("/find/:id", async (req, res) => {
    try{
        const cart = await Cart.findById(req.params.id);
        res.status(200).json(cart);
    } catch(err){
        res.status(500).json(err);
    }
})

//FIND ALL
router.get("/", verifyAdmin, async (req,res) => {
    try{
        const carts = await Cart.find();
        res.status(200).json(carts);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;
