const User = require('../models/User')

class Users{
    async getOneByEmail(email){
        try {
            const user = await User.findOne({
                email
            })

            return {
                success:user?true:false,
                data:user
            }

        } catch (error) {
            return {
                success:false,
                message: error.message
            }
        }
    }

    async create(data){
        try {
            const user = await User.create(data)
            return {
                success: true,
                data: user
            }
        } catch (error) {
            return{
                success: false,
                message: error.message
            }
        }
    }
}

module.exports = Users