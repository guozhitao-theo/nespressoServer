const fs = require('fs')
const path = require('path')
// 数据库配置文件
let mysqlConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'nespresso'
}
// 邮箱配置文件
let emailConfig = {
  host: 'smtp.qq.com',
  port: 465,
  secure: true,
  auth: {
    user: '2622353599@qq.com',
    pass: 'hjpavdauzrkzeagd'  
  }
}
// 支付宝配置文件

// 文件读取 应用私钥
let appPrivateKey = fs.readFileSync(path.join(__dirname,'../sendbox_pem/private_app2048.txt'),'utf-8')
// 支付宝 公钥
let alipayPublicKey = fs.readFileSync(path.join(__dirname,'../sendbox_pem/public_alipay.txt'),'utf-8')
const alipayConfig = {
  appId: '2016101500692746',
  privateKey: appPrivateKey,
  alipayPublicKey: alipayPublicKey,
  getway: 'https://openapi.alipaydev.com/gateway.do',
  charset: 'utf-8',
  version: '1.0',
  signType:'RSA2'
}
module.exports = {
  mysqlConfig,
  emailConfig,
  alipayConfig
}