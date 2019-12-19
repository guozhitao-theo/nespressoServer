let common = require('../common/common')
let data = require('../control/data')
let md5 = require('md5')
let sendemail = require('../control/email')
let jwt =  require('jsonwebtoken')
let multer = require('multer')
// 配置 multer
var inforS = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null,'./static/')
  },
  filename: function (req, file, callback) {
    callback(null, 'infor/'+file.fieldname + "_" + Date.now() + "_" + file.originalname)
  }
})
var upload = multer({ storage: inforS }).array("file", 5); 

//  前端显示页面的登陆，注册
// 判断账号是否已经注册
const isRegisted = async (req, res) => {
  let email = req.body.email || req.query.email
  if (!email || !common.variEmail(email)) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  let result = data.isRegisted(email)
  if (result) {
    res.json({
      status: 200
    })
  } else {
    res.json({
      status: 504,
      message: '邮箱已经被注册'
    })
  }


}
// 注册的回调函数、
const register = async (req, res) => {
  let surname = req.body.surname || req.query.surname
  let name = req.body.name || req.query.name
  let email = req.body.email || req.query.email
  let password = req.body.password || req.query.password
  let distributeclass = req.body.distributeclass || req.body.distributeclass
  let title = req.body.title || req.query.title
  let location = req.body.location || req.query.location
  let address = req.body.address || req.query.address
  let city = req.body.city || req.query.city
  let postCode = req.body.postCode || req.query.postCode
  let phone = req.body.phone || req.query.phone
  let language = req.body.language || req.query.language
  let shippingNotes = req.body.shippingNotes || req.shippingNotes
  let deliveryAddress = req.body.deliveryAddress || req.query.deliveryAddress
  let subscription = req.body.subscription || req.query.subscription
  password = md5(password)
  let arr = [surname, name, email, password, distributeclass, title, location, address,
    city, postCode, phone, language, shippingNotes, deliveryAddress, subscription]
  common.isempty(res, arr)
  if (!common.variPhone(phone)) {
    return res.json({
      status: 500,
      message:'请输入正确的电话'
    })
  }
  if (!common.variEmail(email)) {
    return res.json({
      status: 500,
      message:'请输入正确的邮箱'
    })
  }
  let result =await data.registe(arr)
  if (result) {
    sendemail(email, '你已经成功成为NESPRESSO会员')
    res.json({
      status: 200,
      message:'注册成功'
    })
  } else {
    res.json({
      status: 505,
      message: '注册失败'
    })
  }
}
// 修改个人信息回调函数
const changeInfor = async (req,res) => {
  console.log(11111)
  let surname = req.body.surname || req.query.surname
  let name = req.body.name || req.query.name
  let email = req.body.email || req.query.email
  let distributeclass = req.body.distributeclass || req.body.distributeclass
  let title = req.body.title || req.query.title
  let location = req.body.location || req.query.location
  let address = req.body.address || req.query.address
  let city = req.body.city || req.query.city
  let postCode = req.body.postCode || req.query.postCode
  let phone = req.body.phone || req.query.phone
  let shippingNotes = req.body.shippingNotes || req.shippingNotes
  let arr = [surname, name, distributeclass, title, location, address,
    city, postCode, phone, shippingNotes, email]
  common.isempty(res, arr)
  console.log(arr)
  if (!common.variPhone(phone)) {
    return res.json({
      status: 500,
      message:'请输入正确的电话'
    })
  }
  if (!common.variEmail(email)) {
    return res.json({
      status: 500,
      message:'请输入正确的邮箱'
    })
  }
  let arr2 = [surname, name, distributeclass, title, location, address,
    city, postCode, phone, shippingNotes, email]
  let result = await data.changeinfor(arr2)
  if (result) {
    return res.json({
      status: 200,
      message: '修改个人信息成功'
    })
  } else {
    return res.json({
      tatus: 505,
      message: '个人信息修改失败'
    })
  }
}
// 登陆的回调函数
const login = async (req, res) => {
  let email = req.body.email || req.query.email
  let password = req.body.password || req.query.password
  let token = jwt.sign({password:password}, 'login', {expiresIn: 60*30})
  password = md5(password)
  common.isempty(res, [email, password])
  let result = await data.login([email, password])
  if(result) {
    return res.json ({
      status: 200,
      data:{
        infor: result,
        token: token
      },
      message: '登陆成功'
    })
  } else {
    return res.json({
      status: 500,
      message: '用户名或密码错误'
    })
  }
}
// 前端页面 验证登陆
const islogin = async (req, res) => {
  let token = req.body.token || req.query.token
  jwt.verify(token, 'login', (err,decode) => {
    if(!err) {
      res.json({
        status:200
      })
    } else {
      res.json ({
        status: 503,
        message: '登陆已失效'
      })
    }
  })  
}
// 找回密码的回调函数
const pwdUpdate = async (req,res) => {
  let email  = req.body.email || req.query.email
  if (!email || !common.variEmail(email)) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  let result =await data.isRegisted(email)  
  if(result) {
    res.json({
      status: 507,
      message: '该账户不存在'
    })
  } else {
    sendemail(email, '你最帅！')
    return res.json({
      status: 200,
      message: '找回成功'
    })
    
  }


}
// 获取用户列表
const getUsers = async (req, res) => {
  let result =await data.getUser()
  if (result) {
    res.json({
      status: 200,
      data: result,
      message: '获取用户列表'
    })
  }
}
const infor = async (req, res) => {
  upload(req, res, async (err) => {
    if(err) {
      return res.json({
        status: 500,
        message: '上传文件错误'
      })
    } else {
      let value  = req.body.value || req.query.value
      let name  = req.body.name || req.query.name
      let surname = req.body.surname || req.query.surname
      // let vip = req.body.vip || req.query.vip
      let areaCode = req.body.areaCode || req.query.areaCode
      let email = req.body.email || req.query.email
      let call = req.body.call || req.query.call
      let office = req.body.Office || req.query.Office
      let infos = req.body.infos || req.query.infos
      let values = req.body.values || req.query.values
      let radio = req.body.radio || req.query.radio
      let infoindex = req.body.InfoIndex || req.query.InfoIndex
      let desc = req.body.desc || req.query.desc
      let file = req.files[0].filename
      let arr = [value, name,surname,areaCode,email,call,office,infos,values,radio,infoindex,desc,file]
      console.log(arr)
      common.isempty(res,arr)
      let result = await data.infor(arr)
      if(result) {
        console.log(result)
        return res.json({
          status: 200,
          message: '添加个人资料成功'
        })
      } else {
        res.json({
          status: 500,
          message: '添加个人信息失败'
        })
      }
      console.log('这在添加用户信息接口')
      console.log(req.body)
      res.json({
        message: '接口完善中ing'
      })
    }
  })
}

module.exports = {
  isRegisted,
  register,
  changeInfor,
  login,
  islogin,
  pwdUpdate,
  getUsers,
  infor
}