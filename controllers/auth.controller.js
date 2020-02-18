const { validationResult } = require("express-validator");
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

exports.signUp = async (req, res) => {
    try {
        const errors = validationResult(req);
        console.log(req.body);
        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні данні при реєстрації'
            })
        }
        console.log(req.body);
        const {email, password} = req.body;
        const candidate = await User.findOne({email});

        if(candidate) {
            return res.status(400).json({ message: 'Користувач уже існує' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });
        console.log(req.body);
        await user.save();
        //res.status(200).json({ message: 'Користувача створено' });
       const token = jwt.sign(
           { userId: user.id },
           config.get('jwtSecret'),
           {expiresIn: '1h'}
       );
        res.status(200).json({token, userId: user.id});
    }
    catch (e) {
        res.status(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};

exports.signIn = async (req, res) => {
    try {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некоректні данні при вході'
            })
        }
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user) {
            return res.status(400).json({message: 'Користувача не знайдено'});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(400).json({message: 'Некоректний пароль'});
        }
        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        );

        await res.json({token, userId: user.id});
    }
    catch (e) {
        res.send(500).json({message: 'Щось пішло не так, спробуйте знову'});
    }
};
