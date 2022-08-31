require('dotenv').config()

const config = {
    port: process.env.PORT,
    dbUri: process.env.MONGODB_URI,
    jwtSecret: process.env.JWT_SECRET
}

module.exports = config
