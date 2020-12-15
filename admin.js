const router = require('express').Router()

// base URL/api/

router.get('/', (req, res) => {
    res.json({Route1: '/auth = Login Routes', Route2: '/users = View Users', Route3: '/packages = View Packages', Route4: '/projects = View Projects', Route5: '/billing = Invoices', Route6: '/company = Company Routes', Route7: '/admin = Admin Routes'})
})

router.get('/admin', (req,res) => {
    res.json({Route1: '/types = Package Types', Route2: '/status = Project Status', Route3: '/paystatus = Invoice Status', Route4: '/frequency = Payment Frequencies'})
})

router.get('/company', (req, res) => {
    res.json({Route1: '/projects', Route2: '/packages'})
})

module.exports = router