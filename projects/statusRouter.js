const router = require('express').Router()
const Status = require('./statusModel')


// Base path /api/packages

router.get('/', (req, res, next) => {
    Status.findAll()
        .then(status => res.status(200).json({data: status}))
        .catch(err => next({ code: 500, message: 'Problems getting Project Status List', err}))
})


router.get('/:id', (req, res) => {
    Status.findById(req.params.id)
        .then(statu => {
            if (statu) {
                res.status(200).json({data: statu})
            } else {
                res.status(404).json({ message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting that Status', err})
        })
})

router.post('/', (req, res) => {
    Status.add(req.body)
        .then(statu => {
            res.status(201).json({data: statu})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Status List'})
        })
})

router.put('/:id', (req, res) => {
    Status.update(req.params.id, req.body)
    .then(statu => {
        if (statu) {
            res.status(200).json({data: statu})
        } else {
            res.status(404).json({ message: 'ID not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating that Status' })
    })
})

router.delete('/:id', (req, res) => {
    Status.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'You removed that status' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that ID' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing that Status' })
    })
})

module.exports = router