const { getModel } = require("../utils/getModel")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')

const signin = (modelname) => {
    return async(req, res) => {
        try{
            const Model = getModel(modelname)
        }
        catch(err){
            console.log(err)
        }
    }
}

module.exports = {signin}