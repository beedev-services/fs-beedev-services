const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const session = require('express-session')
const knexSessionStore = require('connect-session-knex')(session)

// Import Routers
const authenticate = require('./auth/authenticate')
const Auth = require('./users/authRouter')
const User = require('./users/userRouter')
const Packages = require('./packages/pkgRouter')
const Projects = require('./projects/projectsRouter')
const Billing = require('./billing/billingRouter')
const Company = require('./company/companyRouter')
// const Invoice = require('./billing/invoiceRouter')

const Admin = require('./admin')
const Status = require('./projects/statusRouter')
const Types = require('./packages/typesRouter')
// const Paid = require('./billing/paidRouter')
// const Freq = require('./billing/freqRouter')

// Server set up
const server = express()

const sessionConfig = {
    name: 'auth',
    secret: 'authenticateUser',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true
    },
    resave: false,
    saveUninitialized: false,
    store: new knexSessionStore(
        {
            knex: require('./database/db-config.js'),
            tablename: 'sessions',
            sidfieldname: 'sid',
            createtable: true,
            clearInterval: 1000 * 60 * 60
        }
    )
};

// Api middleware
server.use(helmet())
server.use(cors())
server.use(morgan('dev'))
server.use(express.json())
server.use(session(sessionConfig));

// API paths
server.use('/api/auth', Auth)
server.use('/api/users', User)
server.use('/api/packages', Packages)
server.use('/api/projects', Projects)
server.use('/api/billing', Billing)
server.use('/api/company', Company)
// server.use('/api/company/billing', Invoice)

server.use('/api', Admin)
server.use('/api/admin/types', Types)
server.use('/api/admin/status', Status)
// server.use('/api/admin/paystatus', Paid)
// server.use('/api/admin/frequency', Freq)

server.get('/', (req, res) => {
    res.json({ message: 'Server is running'})
})

server.use((err, req, res, next) => {
    res.status(err.code).json(err);
});

module.exports = server