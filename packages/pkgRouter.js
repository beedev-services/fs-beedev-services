const router = require('express').Router()
const Packages = require('./pkgModel')


// Base path /api/packages

// Get Requests
router.get('/', (req, res, next) => {
    Packages.findAll()
        .then(pkgs => res.status(200).json({data: pkgs}))
        .catch(err => next({ code: 500, message: 'Problems getting list of packages', err}))
})
router.get('/types', (req, res, next) => {
    Packages.findAllTypes()
        .then(types => res.status(200).json({data: types}))
        .catch(err => next({ code: 500, message: 'Problems getting package types list', err}))
})
router.get('/frequency', (req, res, next) => {
    Packages.findAllPayFreq()
        .then(frequency => res.status(200).json({data: frequency}))
        .catch(err => next({ code: 500, message: 'Problems getting list of pay frequencies', err}))
})


// Get by Requests
router.get('/:packageName', (req, res) => {
    Packages.findByPkg(req.params.packageName)
        .then(pkg => {
            if (pkg) {
                res.status(200).json({data: pkg})
            } else {
                res.status(404).json({ message: 'Package not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting Package', err})
        })
})
router.get('/types/:type', (req, res) => {
    Packages.findByType(req.params.type)
        .then(type => {
            if (type) {
                res.status(200).json({ data: type })
            } else {
                res.status(404).json({ message: 'Package type not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting package type', err})
        })
})
router.get('/frequency/:frequency', (req, res) => {
    Packages.findByFreq(req.params.frequency)
        .then(frequency => {
            if (frequency) {
                res.status(200).json({ data: frequency })
            } else {
                res.status(404).json({ message: 'Pay Frequency not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting pay frequency', err})
        })
})


// Post Requests
router.post('/', (req, res) => {
    Packages.add(req.body)
        .then(pkg => {
            res.status(201).json({message: 'Package created'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding package to list'})
        })
})
router.post('/types', (req, res) => {
    Packages.addType(req.body)
        .then(type => {
            res.status(201).json({data: type})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding package type to list'})
        })
})
router.post('/frequency', (req, res) => {
    Packages.addFrequency(req.body)
        .then(frequency => {
            res.status(201).json({data: frequency})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding frequency to pay list'})
        })
})


// Put requests
router.put('/:packageName', (req, res) => {
    Packages.update(req.params.packageName, req.body)
    .then(pkg => {
        if (pkg) {
            res.status(200).json({data: pkg})
        } else {
            res.status(404).json({ message: 'Package Name not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating that package' })
    })
})
router.put('/types/:type', (req, res) => {
    Packages.updateType(req.params.type, req.body)
    .then(type => {
        if (type) {
            res.status(200).json({data: type})
        } else {
            res.status(404).json({ message: 'Package type not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating that package type' })
    })
})
router.put('/frequency/:frequency', (req, res) => {
    Packages.updateFrequency(req.params.frequency, req.body)
    .then(frequency => {
        if (frequency) {
            res.status(200).json({data: frequency})
        } else {
            res.status(404).json({ message: 'Pay Frequency not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating that Pay Frequency' })
    })
})


// Delete Requests
router.delete('/:id', (req, res) => {
    Packages.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'You removed that package' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that package' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing package' })
    })
})
router.delete('/types/:id', (req, res) => {
    Packages.removeType(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "Package type has been removed" })
        } else {
            res.status(400).json({ message:  'Having trouble find that package type id' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing package type'})
    })
})
router.delete('/frequency/:id', (req, res) => {
    Packages.removeFrequency(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'Pay frequency has been removed' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that pay frequency id' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing pay frequency'})
    })
})

module.exports = router