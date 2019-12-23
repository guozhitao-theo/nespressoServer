// 用户订单表的回调函数
let common = require('../common/common')
let data = require('../control/data/data')
let checkSign = require('../common/checkSign')
// 添加订单的回调函数
let addUserOrder = async (req, res) => {
  let userId = Number(req.body.userId || req.query.userId)
  let status = req.body.status || req.query.status
  let goods = req.body.goods || req.query.goods
  // 定义一个变量表示价格计算状态
  let count = 1
  console.log(goods)
  goods = JSON.parse(goods)
  console.log(goods)

  let totalprice = NaN
  let allTotal = 0
  // 以时间戳作为订单号，保证唯一性
  let orderNumber = Date.now()
  if (goods.length>0) {
    for(item of goods) {
      let npscommodity = Number(item.npscommodity)
      let commodity = Number(item.commodity)
      let quantity = Number(item.quantity)
      let isEmptyArr = [npscommodity, commodity, quantity]
      common.isempty(res, isEmptyArr)
      let getPrice = [npscommodity,commodity,npscommodity,commodity]
      let priceResult = await data.computed(getPrice) 
      if (priceResult) {
        let price = priceResult[0].price
        let discountPrice = priceResult[0].discountPrice
        // 计算单个商品的总价
        totalprice = discountPrice * quantity
        allTotal += totalprice
        // 生成订单号
        let adduserOrderArr = [npscommodity, commodity, userId, quantity, orderNumber, totalprice, status]
        let result = data.addUserOrder(adduserOrderArr)
        if (result) {
          count = count * 1
        } else {
          count = count * 0
          res.json({
            status: 500,
            message: '这个商品购物车添加失败'
          })
        }
      } else {
        return res.json({
          status: 500,
          message: '不存在这个商品'
        })
      }
    }
    if (count) {
      // 创建对象用于支付宝订单信息
      let goods = {
        orderName: '订单名称',
        allTotal: allTotal,
        orderNumber: orderNumber,
        pack_params: req.body
      }
      // 创建支付宝订单
      let resultOfAlipay = await common.createOrder(goods)
      res.json({
        status: 200,
        result: resultOfAlipay,
        data: {
          allTotal: allTotal,
          orderNumber: orderNumber
        },
        message: '添加订单成功'
      })
    } else {
      res.json({
        status: 500,
        message: '添加订单失败'
      })
    }
  }
}
// 支付信息
let payresult = (req, res) => {
  console.log(req.query)
  console.log(req.body)
  res.end("hahaha")
}
// 验签结果
let notify = async (req, res) => {
  let result = await checkSign(postData)
  if(result){
    console.log('订单支付成功')
  }
}
// 添加购物车
let addCart = async (req, res) => {
  let userId = Number(req.body.userId || req.query.userId)
  let status = req.body.status || req.query.status
  let goods = req.body.goods || req.query.goods  
  console.log(goods)
  goods = JSON.parse(goods)
  console.log(goods)
  // 定义总价
  let totalprice = 1
  let allTotal = 0
  // 定义一个变量表示状态
  let count = 1
  if (!userId) {
    return res.json ({
      status: 500,
      message: '请输入用户Id'
    })
  }
  // 通过用户id 判断用户是否存在
  let isUser = await data.isUser(userId)
  if (!isUser) {
    return res.json({
      status: 500,
      message: '该用户不存在'
    })
  }
  // 判断当前状态
  if (status !== '0') {
    return res.json({
      status: 500,
      message: '现在是加入购物车，status状态应该为 1'
    })
  }
  if (goods.length>0) {
    for(item of goods) {
      console.log(item)
      let npscommodity = Number(item.npscommodity)
      let commodity = Number(item.commodity)
      let quantity = Number(item.quantity)
      let isEmptyArr = [npscommodity, commodity, quantity]
      common.isempty(res, isEmptyArr)
      let getPrice = [npscommodity,commodity,npscommodity,commodity]
      let priceResult = await data.computed(getPrice) 
      if (priceResult) {
        let price = priceResult[0].price
        let discountPrice = priceResult[0].discountPrice
        // 计算单个商品的总价
        totalprice = discountPrice * quantity
        allTotal += totalprice
        // 生成订单
        let addCartArr = [npscommodity, commodity, userId, quantity, totalprice, status]
        let result = data.addCart(addCartArr)
        if (result) {
          count = count * 1
        } else {
          count = count * 0
          res.json({
            status: 500,
            message: '这个商品购物车添加失败'
          })
        }
      } else {
        return res.json({
          status: 500,
          message: '不存在这个商品'
        })
      }
    }
    if (count) {
      res.json({
        status: 200,
        message: '添加购物车成功'
      })
    } else {
      return res.json({
        status: 500,
        message: '添加购物车失败'
      })
    }
  }
}
// 获取购物车列表
let getCart = async (req, res) => {
  let userId = Number(req.body.userId || req.query.userId)
  console.log('获取购物车列表接口被请求')
  console.log(userId)
  if (!userId) {
    return res.json({
      status: 500,
      message: '请输入用户id'
    })
  }
  let result = await data.getCart(userId)
  console.log(result)
  // 数据处理，删除所有的值为null的键 result 是一个数组
  for (item of result) {
    for(props in item) {
      if(!item[props]) {
        delete item[props]
      }
    }
  }
  if (result) {
    res.json({
      status: 200,
      message: '获取购物车列表成功',
      data: result
    })
  } else {
    res.json({
      status: 500,
      message: '获取购物车列表失败'
    })
  }
}
// 获取购物车表
let getCartList = async (req, res) => {
  let result = await data.getCartList()
  if (result) {
    return res.json({
      status: 200,
      data: result,
      message: '获取购物车列表成功'
    })
  } else {
    return res.json({
      status: 500,
      message: '获取购物车列表失败'
    })
  }
}
// 获取订单表
let getOrderList = async (req, res) => {
  let result = await data.getOrderList()
  if (result) {
    return res.json({
      status: 200,
      data: result,
      message: '获取订单成功'
    })
  } else {
    return res.json({
      status: 500,
      message: '获取订单失败'
    })
  }
}
module.exports = {
  addUserOrder,
  payresult,
  notify,
  addCart,
  getCart,
  getCartList,
  getOrderList
}