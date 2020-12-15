const router = require("express").Router();
const Join = require('./companyModel')

// base URL/api/company

// Get Requests
router.get('/projects', (req, res, next) => {
    Join.findCoProjects()
    .then(user => res.status(200).json(user))
    .catch(err => next({ code: 500, message: "Error getting user projects", err}));
});
router.get('/packages', (req, res, next) => {
    Join.findCoPackages()
    .then(user => res.status(200).json(user))
    .catch(err => next({ code: 500, message: 'Error getting user packages', err}))
})

// Get by requests
router.get('/projects/:company_name', (req, res) => {
    Join.findByCoNameProject(req.params.company_name)
    .then(projects => {
        if (projects) {
            res.status(200).json({data: projects})
        } else {
            res.status(404).json({message: 'Projects not found'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: "trouble getting Companies Projects", err})
    })
})
router.get('/packages/:user_company', (req, res) => {
    Join.findByCoNamePackage(req.params.user_company)
    .then(packages => {
        if (packages) {
            res.status(200).json({data: packages})
        } else {
            res.status(404).json({message: 'packages not found'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'trouble getting Comapanies packages', err})
    })
})

// Post Requests
router.post('/projects', (req, res) => {
    Join.addCoProject(req.body)
    .then(project => {
        res.status(201).json({data: project})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Trouble adding Company Projects'})
    })
})
router.post('/packages', (req, res) => {
    Join.addCoPackage(req.body)
    .then(package => {
        res.status(201).json({data: package})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Trouble adding Company Packages'})
    })
})

// Delete Requests
router.delete('/projects/:id', (req, res) => {
    Join.removeCoProject(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: 'You removed that Companies project'})
        } else {
            res.status(400).json({message: 'Trouble finding that ID'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Trouble removing that Company Project'})
    })
})
router.delete('/packages/:id', (req, res) => {
    Join.removeCoPackage(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({message: 'You removed that Companies Package'})
        } else {
            res.status(400).json({message: 'Trouble finding that ID'})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({message: 'Trouble removing that Company Package'})
    })
})

module.exports = router;