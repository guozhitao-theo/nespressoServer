let express =  require('express') 
let bodyparse = require('body-parser')
let router = require('./router')


let jsonParse = bodyparse.json()
let urlEncoded = bodyparse.urlencoded({extended: false})

let app = express()
app.use(jsonParse)
app.use(urlEncoded)
// 静态资源文件
app.use(express.static('static'))

// 后台登陆接口
app.post('/backLogin', router.backLogin)
app.post('/backRetrieve', router.backRetrieve)
app.post('/backupdate', router.backupdate)
app.post('/backIslogin', router.backIslogin)

// 前端页面登陆，注册接口
app.post('/register', router.register)
app.post('/login', router.login)
app.post('/islogin', router.islogin)
app.post('/changeInfor', router.changeInfor)
app.post('/pwdUpdate', router.pwdUpdate)
app.post('/getUsers',router.getUsers)

// 咖啡胶囊的接口
app.post('/getcoffeeCap', router.getcoffeeCap)
app.post('/getCoffgCapLists',router.getCoffgCapLists)
app.post('/coffFilter', router.coffFilter)
app.post('/addCoffcap', router.addcoffCap)
app.post('/updatecoffCap', router.updatecoffCap)
app.post('/deletecoffCap', router.deletecoffCap)
app.post('/getgoodsClass',router.getgoodsClass)
app.post('/getCoffCapamount',router.getCoffCapamount)
app.post('/getCoffCaparoma',router.getCoffCaparoma)
app.post('/getCoffCapClassification',router.getCoffCapClassification)

// 咖啡机的接口
app.post('/getCoffeeMachineLists',router.getCoffeeMachineLists)
app.post('/getCoffeeMachineBypage',router.getCoffeeMachineBypage)
app.post('/addCoffeeMachine',router.addCoffeeMachine)
app.post('/updateCoffeeMachine',router.updateCoffeeMachine)
app.post('/deleteCoffeeMachine',router.deleteCoffeeMachine)
app.post('/getspecifications',router.getspecifications)
app.post('/getcMachineClass',router.getcMachineClass)
app.post('/getCoffeeMachineByColor',router.getCoffeeMachineByColor)

// 添加个人信息
app.post('/infor',router.infor)
// 添加订单
app.post('/addUserOrder',router.addUserOrder)
app.get('/public/index.html',router.payresult)
// 添加购物车
app.post('/addCart',router.addCart)
// 根据用户获取购物车列表
app.post('/getCart', router.getCart)
// 获取个人信息
app.post('/getinfor', router.getinfor)
// 获取购物车信息
app.post('/getCartList', router.getCartList)
// 获取订单信息
app.post('/getOrderList', router.getOrderList)
// 端口监听
app.listen(3000,() => {
  console.log('port: 3000')
})