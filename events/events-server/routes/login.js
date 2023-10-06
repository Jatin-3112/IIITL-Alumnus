const router = require('express').Router()
const userModel = require('../models/user')
const jwt = require('jsonwebtoken')

router.post('/', async(req, res) => {
    console.log("check 4")
    try {
        const user = await userModel.find({
            email: req.body.email
        })
        if(user[0] === undefined){
            res.send({'error': "No user found"})
        }else{
            if(user[0].password === req.body.password){
                console.log("check 3")
                const token = jwt.sign({_id: user[0]._id}, "Kuch_BHI_DAALsakteho")
                res.send(token)
            }else{
                res.send({'error': "Wrong Password"})
            }
        }
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router