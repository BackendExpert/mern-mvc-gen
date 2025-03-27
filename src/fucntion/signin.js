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

            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ error: "Email and password are required" });
            }

            const user = await Model.findOne({ email });
            if (!user) {
                return res.status(404).json({ error: "No user found with the given email" });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                return res.json({ error: "Incorrect password" });
            }

            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: "1d" } 
            );

            return res.json({
                status: "success",
                user,
                token,
            });

        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = {signin}