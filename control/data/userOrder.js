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
  let sql = 'SELECT name,price,discountPrice FROM coffeecapsule WHERE id=? &&  classification=? UNION SELECT name,price,discountPrice FROM cmachineproducts WHERE id = ? && npsCommodity=?'
  let result = query(sql, data).then((data) => {
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
  computed
}


