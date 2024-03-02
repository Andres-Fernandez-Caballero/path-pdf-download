const {Router} = require('express')

const webRouter = Router()
webRouter.get('/', (req, res)=> res.send('ok'));

module.exports = webRouter;