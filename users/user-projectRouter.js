const router = require('express').Router()
const Join = require('./user-projectModel')


// Base path /api/

router.get('/', (req, res, next) => {
    Join.findAll()
        .then(user_project => res.status(200).json({data: user_project}))
        .catch(err => next({ code: 500, message: 'Problems getting User-Project List', err}))
})


router.get('/:id', (req, res) => {
    Join.findById(req.params.id)
        .then(assigned => {
            if (assigned) {
                res.status(200).json({data: assigned})
            } else {
                res.status(404).json({ message: 'ID not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting Company Project', err})
        })
})

router.post('/', (req, res) => {
    Join.add(req.body)
        .then(assigned => {
            res.status(201).json({data: assigned})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Company Project List'})
        })
})

router.put('/:id', (req, res) => {
    Join.update(req.params.id, req.body)
    .then(assigned => {
        if (assigned) {
            res.status(200).json({data: assigned})
        } else {
            res.status(404).json({ message: 'ID not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating that List item' })
    })
})

router.delete('/:id', (req, res) => {
    Join.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'You removed that List Item' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that ID' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing List Item' })
    })
})

module.exports = router