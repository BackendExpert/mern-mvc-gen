const nodemailer = require('nodemailer')

const createTransporter = (service, user, pass) => {
    return nodemailer.createTransport({
        service: service,
        auth: {
            user: user,
            pass: pass
        }
    })
}

module.exports = { createTransporter }