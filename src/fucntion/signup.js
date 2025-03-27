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

            const missingFeilds = requiredFeilds.filter(feild => !req.body[feild]);

            if(missingFeilds.length > 0){
                return res.json({ Error: `Following Feilds are Missing ${missingFeilds.join(", ")}`})
            }


            const checkunique = await Model.findOne({
                $or: uniqueFeilds.map(feild => ({ [feild]: req.body[feild] }))
            })

            if(checkunique){
                return res.json({ Error: `User Already Exists in ${uniqueFeilds.join(", ")}`})
            }
            
            if(req.body.password){
                req.body.password = await bcrypt.hash(req.body.password, 10)
            }

            const newsUser = new Model(req.body)
            const resultnewuser = await newsUser.save();

            if(resultnewuser){
                return res.json({ Status: 'Success'})
            }
            else{
                return res.json({ Error: "Internal Server Error while creating New User"})
            }
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = {signup}