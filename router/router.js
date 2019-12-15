let backLogin = require('./backLogin')
let login = require('./login')
let coffeeCap = require('./coffeeCap')
let coffeeMachine = require('./coffeeMachine')
let userOrder = require('./userOrder')
let router = Object.assign({}, backLogin, login, coffeeCap, coffeeMachine, userOrder)

module.exports = router
