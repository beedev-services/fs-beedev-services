const router = require('express').Router()
const Billing = require('./billingModel')


// Base path /api/billing

router.get('/', (req, res, next) => {
    Billing.findAll()
        .then(invoice => res.status(200).json({data: invoice}))
        .catch(err => next({ code: 500, message: 'Problems getting Invoice List', err}))
})


router.get('/:invoice', (req, res) => {
    Billing.findById(req.params.invoice)
        .then(invoice => {
            if (invoice) {
                res.status(200).json({data: invoice})
            } else {
                res.status(404).json({ message: 'Invoice not found'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble getting that Invoice', err})
        })
})

router.post('/', (req, res) => {
    Billing.add(req.body)
        .then(invoice => {
            res.status(201).json({data: invoice})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Trouble adding to Invoice List'})
        })
})

router.put('/:invoice', (req, res) => {
    Billing.update(req.params.invoice, req.body)
    .then(invoice => {
        if (invoice) {
            res.status(200).json({data: invoice})
        } else {
            res.status(404).json({ message: 'Invoice not found' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble updating that Invoice' })
    })
})

router.delete('/:invoice', (req, res) => {
    Billing.remove(req.params.invoice)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: 'You removed that Invoice' })
        } else {
            res.status(400).json({ message: 'Having trouble finding that Invoice' })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'Trouble removing that Invoice' })
    })
})

module.exports = router