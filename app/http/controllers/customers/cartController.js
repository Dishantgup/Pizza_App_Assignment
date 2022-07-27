function cartController() {
    //Create factory function for object.
    return {
        index(req, res) {
            res.render('customers/cart')
        }
    }
}

module.exports = cartController