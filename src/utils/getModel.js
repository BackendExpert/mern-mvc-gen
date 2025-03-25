const getModel = (modelname) => {
    try{
        return require(`../models/${modelname}`)
    }
    catch(err){
        console.log(err)
    }
}

module.exports = { getModel };