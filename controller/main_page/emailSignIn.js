const { user } = require('../../models')
const jwt = require('jsonwebtoken')
module.exports = {
    post: async (req, res) => {
        let userInfo = await user.findOne({
            where: { email: req.body.email, password: req.body.password }
        })
        if (!userInfo) {
            res.status(400).json({ data: null, message: 'This is unauthorized user.' })
        }
        else {
            delete userInfo.dataValues.password;
            const accessToken = jwt.sign(userInfo.dataValues, process.env.ACCESS_SECRET, { expiresIn: "30m" });
            const refreshToken = jwt.sign(userInfo.dataValues, process.env.REFRESH_SECRET, { expiresIn: "30d" });
            res.cookie('refreshToken', refreshToken, { httpOnly: true });
            res.json({ data: { accessToken }, message: 'Sign in completed'  })
        }
    }
}