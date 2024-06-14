const Cart = require('../model/cart');
const mongoose = require('mongoose');

const insert_cart = async (req, res) => {
    const cart = new Cart({
        user: req.body.user,
        product_details: {
            p_id: req.body.p_id,
            p_img: req.body.p_img,
            p_cost: req.body.p_cost,
            u_name: req.body.u_name
        }
    });
    try {
        const savedCart = await cart.save();
        console.log('Cart inserted');
        res.send(savedCart);
    } catch (error) {
        console.error('Error inserting cart:', error);
        res.status(400).send(error);
    }
}

const get_cart = async (req, res) => {
    try {
        const cart = await Cart.find();
        console.log('Cart fetched');
        res.send(cart);
    } catch (error) {
        console.error('Error fetching cart:', error);
        res.status(400).send(error);
    }
}

const reduce_cart = async(req, res) => {
    let p_id = req.body.product_details.p_id;
    try {
        const deletedCart = await Cart.deleteOne({ 'product_details.p_id': p_id });
        if (deletedCart.deletedCount != 0) {
            console.log('Cart deleted');
            res.send({ 'delete': 'success' });
        } else {
            console.log('Cart not deleted');
            res.send({ 'delete': 'Record Not Found' });
        }
    } catch (error) {
        console.error('Error deleting cart:', error);
        res.status(400).send(error);
    }
}


module.exports = {
    insert_cart,
    get_cart,
    reduce_cart
};