const { getModel } = require("../utils/getModel")

const uniqueIdentifier = (identifierFeild, modelname) => {
    return async (req, res, next) => {
        try{
            const Model = getModel(modelname)

            if(!Model){
                return res.json({ Error: "Model Cannot be find"})
            }
    
            const requestData = req.body
    
            if(!requestData[identifierFeild]){
                return res.json({ Error: `Missing ${identifierFeild} on Request Data (request body)` })
            }
    
            const identifierValue = requestData[identifierFeild]
    
            const checkrecode = await Model.findOne({ [identifierFeild]: identifierValue })
    
            if(!checkrecode){
                return res.json({ Error: `No ${modelname} by Given ${identifierFeild}...`})
            }
    
            next()
        }
        catch(err){
            console.log(err)
        }
    }

}

module.exports = { uniqueIdentifier }