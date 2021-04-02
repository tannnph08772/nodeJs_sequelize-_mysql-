const { response } = require('express');
const User = require('../models/User');

const show = async(req, res, next) => {
    await User.findAll()
        .then(user => {
            res.json(user);
        })
        .catch(next);
}

const create = async(req, res, next) => {
    await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        .then(res.send("ok"))
        .catch(next);
}

const edit = async(req, res, next) => {
    await User.findOne({ where: { id: req.params.id } })
        .then(user => { return res.json({ user }) })
        .catch(next)
}

const update = async(req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    try {
        const user = await User.findOne({ where: { id: req.params.id } })
        user.firstName = firstName
        user.lastName = lastName
        user.email = email
        user.password = password

        await user.save()

        return res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
}

const deleted = async(req, res, next) => {
    try {
        const user = await User.findOne({ where: { id: req.params.id } })

        await user.destroy()

        return res.json({ message: 'User deleted!' })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })

    }
}


module.exports = { show, create, edit, update, deleted };