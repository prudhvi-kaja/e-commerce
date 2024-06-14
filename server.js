const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');

const url = 'mongodb+srv://admin:admin@cluster0.rab9xde.mongodb.net/';
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

mongoose.connect(url, {dbName : "miniprj"})
.then(() => {
    console.log("Connected to the database");
}, (errRes) => {
    console.log("Connection failed", errRes);
    process.exit();
});

let PORT = 4000;
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


app.use("/", productRoutes);
app.use("/", userRoutes);
app.use("/", cartRoutes);




