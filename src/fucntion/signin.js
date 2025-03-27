const { getModel } = require("../utils/getModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const signin = (modelname) => {
    return async(req, res) => {
        try{
            const Model = getModel(modelname)

            if(!Model){
                return res.json({ Error: "The Model cannot find in Project"})
            }

            const email = req.body.email

            const checkemail = await Model.findOne({ email: email })

            if(checkemail){
                return res.json({ Error: "No User Found by Given Email"})
            }

            const checlpass = await bcrypt.compare(req.body.password, checkemail.password)

            if(!checlpass){
                return res.json({ Error: "Password Not Match..."})
            }

            const token = jwt.sign({ id: checkemail._id, role:checkemail.role }, process.env.JWT_SECRET);
            return res.json({ Status: "Success", Result: checkemail, Token: token })

        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = {signin}