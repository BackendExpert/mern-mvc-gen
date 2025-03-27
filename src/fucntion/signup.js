const { getModel } = require('../utils/getModel')
const bcrypt = require('bcrypt')

const signup = (modelname) => {
    return async(req, res) => {
        try{
            const Model = getModel(modelname)
            if(!Model){
                return res.json({ Error: "Models is not found in Project"})
            }

            const modelSchema = Model.schema.paths;
            const uniqueFeilds = []
            const requiredFeilds = []

            for (const feild in modelSchema){
                if(modelSchema[feild].option.unique){
                    uniqueFeilds.push(feild)
                }
                if(modelSchema[feild].option.isRequired){
                    requiredFeilds.push(feild)
                }
            }

            
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = {signup}