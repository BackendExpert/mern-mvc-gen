const path = require('path')

const getModel = (modelname) => {
    try{
        return require(path.resolve(__dirname, '../../../../models', modelname)); 
    }
    catch(err){
        console.log(err)
    }
}

module.exports = { getModel };