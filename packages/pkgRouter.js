const router = require('express').Router()
const Packages = require('./pkgModel')
const db = require('../database/db-config')


// Base path /api/packages

// Get Requests
router.get('/', (req, res, next) => {
    Packages.findAll()
        .then(pkgs => res.status(200).json({data: pkgs}))
        .catch(err => next({ code: 500, message: 'Problems getting list of packages', err}))
})

// Get by Requests
router.get('/:pkgType', (req, res) => {
    const {pkgType} = req.params
    db('pkgs')
    .where('pkgType', pkgType)
    .then((pkgs) => res.status(200).json({data: pkgs}))
    .catch((err) => console.log(err))
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

module.exports = router