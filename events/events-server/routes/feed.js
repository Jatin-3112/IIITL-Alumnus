const router = require('express').Router()
const feedModel = require('../models/feed')
const auth = require('./auth')

router.get('/', async(req, res) => {
    try {
        let feed = await feedModel.find().populate({ path: 'personId', select: ['fName', 'lName'] })
        res.send(feed)
    } catch (e) {
        console.log(e);
    }
})

router.post('/', auth, async(req, res) => {
    console.log(req.body)
    try {
        const feedObj = new feedModel({
            personId: req.userId._id,
            // personId: req.body.id,
            content: req.body.content,
       
            time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false }),
            venue: req.body.venue,
            desc: req.body.desc
        })
        await feedObj.save()
        res.send("Successs")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router