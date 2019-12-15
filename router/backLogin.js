let jwt = require('jsonwebtoken')
let md5 = require('md5')
let query = require('../control/data/data')
let sendEmail = require('../control/email')
let common = require('../common/common')
// 找回密码发送验证
const backRetrieve = async (req, res) => {
  let email = req.body.email || req.query.email
  if(!email || !common.variEmail(email)) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  let result = await query.backisAdm(email)
  if(!result) {
    return res.json({
      status: 507,
      message: '用户不存在'
    })
  } else {
    // 生成随机数
    let variCode = common.variCode()
    // 发送邮件
    sendEmail(email, variCode)
    let arr = [email, variCode]
    let resultS = await query.backRetrieve(arr)
    if (!resultS) {
      return res.json({
        status: 501,
        message: '验证码获取失败'
      })
    } else {
      res.json({
        status: 200,
        message: '发送验证成功'
      })
    }
  }
  
}
// 修改密码
const backupdate = async (req, res) => {
  let email = req.body.email || req.query.email
  let variCode = req.body.variCode || req.query.variCode
  console.log('传的验证码',variCode)
  let password = req.body.password || req.query.password
  if (!email || !common.variEmail(email)) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  if (!variCode) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  if (!password) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  let vResult = await query.isbackCode(email)
  if (vResult.veriCode === variCode) {
    password = md5(password)
    let arr = [password, email]
    let result = await query.backupdate(arr)
    if (!result) {
      return res.json({
        status:502,
        message: '修改密码失败'
      })
    } else {
      res.json ({
        status: 200,
        message: '修改密码成功'
      })
    }
  } else {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }  
}
// 登陆的回调函数
const backLogin =async (req, res) => {
  let user = req.body.email || req.query.email
  let password = req.body.password || req.query.password
  let token = jwt.sign({password:password},'password',{expiresIn: 60*30})
  if(!user) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  if (!password) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  password = md5(password)
  let arr = [user,password]
  let result = await query.backLogin(arr)
  console.log('在登陆接口')
  console.log(result)
  if (result) {
    res.json({
      status: 200,
      message: '登陆成功',
      data: {
        token: token,
        info: result
      }
    })
  } else {
    res.json ({
      status: 500,
      message: '用户名或密码错误'
    })
  }
}
// 验证登陆
const backIslogin = (req,res) => {
  let token = req.body.token || req.query.token
  jwt.verify(token, 'password', (err,decode) => {
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
module.exports = {
  backLogin,
  backRetrieve,
  backupdate,
  backIslogin
}