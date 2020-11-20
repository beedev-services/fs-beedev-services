const router = require('express').Router()
const Join = require('./Models/user-projectModel')


// Base path /api/packages

router.get('/', (req, res, next) => {
    Join.findAll()
        .then(Join => res.status(200).json({data: join}))
        .catch(err => next({ code: 500, message: 'Problems getting Packages', err}))
})


router.get('/:id', (req, res) => {
    Join.findById(req.params.id)
        .then(project => {
            if (project) {
                res.status(200).json({data: project})
            } else {
                res.status(404).json({ message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting Project', err})
        })
})

router.post('/', (req, res) => {
    Join.add(req.body)
        .then(project => {
            res.status(201).json({data: project})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Project'})
        })
})

router.put('/:id', (req, res) => {
    Join.update(req.params.id, req.body)
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
    Join.remove(req.params.id)
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