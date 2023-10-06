const router = require('express').Router()
const postModel = require('../models/post')


router.get('/', async(req, res) => {
    try {
        let posts = await postModel.find()
        console.log(posts)
        res.send(posts)
    } catch (e) {
        console.log(e);
    }
})

router.post('/', async (req, res) => {
    console.log("check 13")
    console.log(req.body)
    let post = ''
    if (true) {
        post = new postModel({
            desc: req.body.desc,
            name: req.body.name,
            time: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', hour12: false }),
            image: req.body.image,
            userimage: req.body.userimage
        })
        
    }
    try {
        await post.save()
        console.log(post)
        res.send("post created succesfully")
    } catch (e) {
        res.send({ 'error': e })
    }
})

module.exports = router