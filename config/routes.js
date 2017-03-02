const express = require('express')

module.exports = function(server) {
    //API routes
    const router = express.Router()
    server.use('/api', router)

    //rotas da API
    const billingCyclesService = require('../api/billingCycle/billingCycleService')
    billingCyclesService.register(router, '/billingCycles')
}
