const router = require('express').Router()
const Pkgs = require('./pkgModel')


// Base path /api/packages

router.get('/', (req, res, next) => {
    Pkgs.findAll()
        .then(pkgs => res.status(200).json({data: pkgs}))
        .catch(err => next({ code: 500, message: 'Problems getting Packages', err}))
})


router.get('/:id', (req, res) => {
    Pkgs.findById(req.params.id)
        .then(project => {
            if (project) {
                res.status(200).json({data: project})
            } else {
                res.status(404).json({ message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting Packages', err})
        })
})

router.post('/', (req, res) => {
    Pkgs.add(req.body)
        .then(project => {
            res.status(201).json({data: project})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Packages'})
        })
})

router.put('/:id', (req, res) => {
    Pkgs.update(req.params.id, req.body)
    .then(project => {
        if (project) {
            res.status(200).json({data: project})
        } else {
            res.status(404).json({ message: 'ID not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating Project' })
    })
})

router.delete('/:id', (req, res) => {
    Pkgs.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'You removed that project' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that ID' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing Project' })
    })
})

module.exports = router