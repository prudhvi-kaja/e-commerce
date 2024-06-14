const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    u_name: String,
    u_pwd: String,
});

module.exports = mongoose.model('User', userSchema);
