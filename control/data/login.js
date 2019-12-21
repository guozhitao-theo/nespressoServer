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
// 获取用户信息
const getUser = async () => {
  let sql = 'select * from user'
  let result = query(sql).then((data) => {
    if (data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 添加个人资料
 * @param {arr} data
 */
const infor = async (data) => {
  let sql = 'insert into infor(title,firstName,lastName, chooseLocation,email, phone ,postCode ,MessageCategory , repliedLanguage, capsuleType ,subject ,message ,attachment) values(?,?,?,?,?,?,?,?,?,?,?,?,?)'
  let result = await query(sql,data).then((data) => {
    if(data) {
      return true
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过用户id判断用户是否存在
 * @param {int} data 
 */
const isUser = async (data) => {
  let sql = 'select * from user where id = ?'
  let result = await query(sql, data).then((data) => {
    if (data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 查询个人的信息
 * @param {}
 */
const getInfor = async () => {
  let sql = 'select * from infor order by createTime desc'
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
  isRegisted,
  registe,
  login,
  changeinfor,
  getUser,
  infor,
  isUser,
  getInfor
}