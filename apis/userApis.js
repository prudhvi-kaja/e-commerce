const User = require('../model/user');

const insert_user = async (req, res) => {
    const user = new User({
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd
    });
    try {
        const savedUser = await user.save();
        console.log('User inserted');
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
};

const login = async (req, res) => {
    const username = req.body.u_name;
    const password = req.body.u_pwd;
    try {
        const user = await User.findOne({ u_name: username, u_pwd: password });
        if (user) {
            console.log('Login successful');
            res.send({ 'login': 'success' });
        } else {
            console.log('Invalid username or password');
            res.send({ 'login': 'failure' });
        }
    } catch (error) {
        res.status(400).send(error);
    }
};

module.exports = {
    insert_user,
    login
};
