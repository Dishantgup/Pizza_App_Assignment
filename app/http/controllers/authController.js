function authController() {
    //Create factory function for object.
    return {
        login(req, res) {
            res.render('auth/login')
        },

        register(req, res) {
            res.render('auth/register')
        }
    }
}

module.exports = authController