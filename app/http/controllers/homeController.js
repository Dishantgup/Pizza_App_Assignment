function homeController() {
    //Create factory function for object.
    return {
        index(req, res) {
            //Database Query

            res.render('home')
        }
    }
}

module.exports = homeController