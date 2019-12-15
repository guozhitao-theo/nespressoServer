let query = require('../mysql')
/**
 * 判断用户是否已经注册过
 * @param {String} data 
 */
const isRegisted = (data) => {
  let sql = 'select * from user where email = ?'
  let result = query(sql, data).then((data) => {
    if (data.length > 0) {
      return false /*该用户已经注册过了*/
    } else {
      return true /*用户未注册过*/
    }
  })
  return result
}
/**
 * 注册的数据库操作
 * @param {arr} data 
 */
const registe =async (data) => {
  let sql = 'insert into user(surname, name, email, password, distributeclass, title, location, address, city, postCode, phone, language, shippingNotes, deliveryAddress, subscription) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  let result = await query(sql,data).then((data) => {
    if (data) {
      return true
    } else {
      return false
    }
  })
  return result
}
/**
 * 登陆判断
 * @param {arr} data ['email', 'password'] 
 */
const login = async (data) => {
  let sql = 'select * from user where email=? and password=?'
  let result =await query(sql, data).then((data) => {
    if(data.length > 0) {
      // 将用户密码从要返回的信息中删除
      delete data[0].password
      return data[0]
    } else {
      return false
    }
  })
  return result

}
/**
 * 修改信息
 * @param {arr} data  
 */
const changeinfor = async (data) => {
  let sql = 'update user set surname=?, name=?, distributeclass=?, title=?, location=?, address=?, city=?, postCode=?, phone=?, shippingNotes=? where email=?'
  let result =await query(sql, data).then((data) => {
    if (data) {
      return true 
    } else {
      return false
    }
  })
  return result

}
module.exports = {
  isRegisted,
  registe,
  login,
  changeinfor
}