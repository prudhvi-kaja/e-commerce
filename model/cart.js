const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    product_details: [
        {
        p_id: Number,
        p_img: String,
        p_cost: Number,
        u_name: String
        }
    ]
});

module.exports = mongoose.model("Cart", cartSchema);