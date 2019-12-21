// 用户订单的数据操作
let query = require('../mysql')

/**
 * 添加用户订单
 * @param {arr} data  npscommodity(int) commodity(int) userId(id) quantity(int) orderNumber(timestamp) totalPrice(double(8,2)) status(varchar)
 */
let addUserOrder = async (data) => {
  let sql = 'insert into userOrder(commodity, npscommodity,  userId, quantity, orderNumber, totalPrice, status) values(?,?,?,?,?,?,?)'
  let result = query(sql, data).then((data) => {
    if (data) {
      return true
    } else {
      return false
    }
  })
  return result
} 

/**
 * 通过商品 id 和分类 查询商品
 * @param {arr} data  ['商品id','分类id','商品id','分类id']
 */
let computed = async (data) => {
  let sql = 'SELECT name,price,discountPrice FROM coffeecapsule WHERE id=? &&  classification=? UNION SELECT name,price,discountPrice FROM cmachineproducts WHERE cmachineproductsId = ? && npsCommodity=?'
  let result = query(sql, data).then((data) => {
    if (data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 添加购物车
 * @param {arr} data npscommodity(int) commodity(int) userId(id) quantity(int) totalPrice(double(8,2)) status(varchar)
 */
let addCart = async (data) => {
  let sql = 'insert into shoppingCart(commodity, npscommodity,  userId, quantity, totalPrice, status) values(?,?,?,?,?,?)'
  let result = query(sql, data).then((data) => {
    if (data) {
      return true
    } else {
      return false
    }
  })
  return result
}
/**
 * 获取购物车列表
 * @param {int} data  用户id
 */
let getCart = async (data) => {
  let sql = 'SELECT * FROM shoppingCart SCart LEFT JOIN npscommodity ON  SCart.npscommodity=npscommodity.`id` LEFT JOIN coffeecapsule ON SCart.commodity = coffeecapsule.id LEFT JOIN cmachineproducts ON  SCart.commodity=cmachineproducts.`cmachineproductsId` where userId = ? && status = 0'
  let result = await query(sql, data).then((data) => {
    if(data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
// 查询购物车列表
let getCartList = async () => {
  let sql = 'SELECT * FROM shoppingCart ORDER BY userId ASC'
  let result = await query(sql).then((data) => {
    if (data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
// 查询订单列表
let getOrderList = async () => {
  let sql = ' SELECT * FROM userOrder ORDER BY userId '
  let result = await query(sql).then((data) => {
    if (data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
module.exports = {
  addUserOrder,
  computed,
  addCart,
  getCart,
  getCartList,
  getOrderList
}


