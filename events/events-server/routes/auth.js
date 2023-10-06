const jwt = require('jsonwebtoken')
const userModel = require('../models/user')

const auth = async(req, res, next) => {
     console.log("check 9")
     console.log(req.header('auth-token'))
    try {
        const token = req.header('auth-token')
        // token
        if(!token){
            res.send("Access denied.");
        }else{
            if(token.split("$$$")[0] === process.env.AUTH_SECRET){
                try{
                    const obj = await userModel.find({email: token.split('$$$')[1]})
                    req.userId = obj[0]
                    next()
                }catch(e){
                    next(e);
                }
            }else{
                const userId = jwt.verify(token,process.env.JWT_SECRET)
                req.userId = userId
                next();
            }
        }
    } catch (error) {
        console.log(error)
        res.send('Invalid token')
    }
}


module.exports = auth