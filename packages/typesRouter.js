const router = require('express').Router()
const Types = require('./typesModel')


// Base path /api/packages

router.get('/', (req, res, next) => {
    Types.findAll()
        .then(types => res.status(200).json({data: types}))
        .catch(err => next({ code: 500, message: 'Problems getting Types of Packages', err}))
})


router.get('/:id', (req, res) => {
    Types.findById(req.params.id)
        .then(type => {
            if (type) {
                res.status(200).json({data: type})
            } else {
                res.status(404).json({ message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting Types of Packages', err})
        })
})

router.post('/', (req, res) => {
    Types.add(req.body)
        .then(type => {
            res.status(201).json({data: type})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Types of packages'})
        })
})

router.put('/:id', (req, res) => {
    Types.update(req.params.id, req.body)
    .then(type => {
        if (type) {
            res.status(200).json({message: 'Record was updated'})
        } else {
            res.status(404).json({ message: 'ID not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating Type of Project' })
    })
})

router.delete('/:id', (req, res) => {
    Types.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'Record was removed' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that ID' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing Type' })
    })
})

module.exports = router