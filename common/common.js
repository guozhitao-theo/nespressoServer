// 公共方法的封装

// 导入sdk环境
const AlipaySDK = require('alipay-sdk').default
const config = require('../config/config')
// 实例化对象
let alipay = new AlipaySDK(config.alipayConfig)
// PC支付接口 alipay.trade.page.pay 返回的内容为 表单
let AlipayFormData = require('alipay-sdk/lib/form')

/**
 * 生成随机四位验证码
 */
let variCode = () => {
  const str = '1234567890abcdefghijklmnopqrstuvwxyz'
  let newStr = ''
  let n = NaN
  for (i = 0 ;i < 4; i++ ) {
    n = Math.floor(Math.random()*(str.length))
    newStr += str[n]
  }
  return newStr
}
/**
 * 邮箱验证的方法封装
 * @param {String} email 
 */
const variEmail = (email) => {
  let reg = new RegExp('^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')
  return reg.test(email)
}
/**
 * 手机验证的封装方法
 * @param {String} phone  电话号码
 */
const variPhone = (phone) => {
  let reg = new RegExp(/^1[34578]\d{9}$/)
  return reg.test(phone)
}
/**
 * 验证信息是否为空
 * @param {Function} res 服务器的方法 
 * @param {Arr} data 需要验证的 数组  
 */
const isempty = (res,data) => {
  for (item of data) {
    if (!item) {
      return res.json({
        status: 500,
        message: '请输入正确的信息'
      })
    }
  }
}
/**
 * 创建订单支付宝封装
 * @param {*} goods 
 */
const createOrder = async (goods) => {
  // 设置调用的接口
  let method = 'alipay.trade.page.pay'
  // 设置公共参数
  // let params = {
  //   app_id: '2016101500692746', /*应用的id*/
  //   method: method,/*调用接口*/
  //   format: 'JSON', /*返回数据*/
  //   charset: 'utf-8',/*字符编码*/
  //   timestamp: '',/*请求时间戳*/
  //   version: '1.0'/*版本*/
  // }

  // 根据官方给的api文档提供一个参数合集
  let bizContent = {
    out_trade_no: goods.orderNumber, //订单号 时间戳
    product_code: 'FAST_INSTANT_TRADE_PAY', // 商品码
    total_amount: goods.allTotal, // 商品价格
    subject: goods.orderName, // 订单名称
    timeout_express: '5m', // 超时时间
    passback_params: JSON.stringify(goods.pack_params) // 返回一个参数，用于自定义商品信息最后做通知使用
  }
  // 创建formData 对象
  const formData = new AlipayFormData()
  formData.addField('returnUrl','http://192.168.97.240:3000/public/') // 客户支付成功之后会同步跳回的地址
  // formData.addField('notifyUrl','http://192.168.97.240:3000/public/')  // 支付宝在用户支付成功之后会异步通知的回调地址，必须在公网ip 才能收到
  formData.addField('bizContent', bizContent); // 将必要的参数集合添加进 form 表单

  // 异步向支付宝 发送生成订单请求，第二个参数为公共参数，可以为空
  const result = await alipay.exec(method, {}, {
    formData: formData
  })
  return result
}
module.exports = {
  variCode,
  variEmail,
  isempty,
  variPhone,
  createOrder
}