let query = require('../mysql')
/**
 * 后台登陆
 * @param {arr} data ['用户名','密码']
 */
const  backLogin = async (data) => {
  let sql = 'select * from administrator where email=? && password=?'
  let result = await query(sql, data).then((data) => {
    if (data.length > 0) {
      return data[0]     
    } else {
      return false
    }
  }).catch((err) => {
    return err
  })
  return result
}
/**
 * 后台找回密码，向数据库查找验证码
 * @param {String} data 'email'
 */
const isbackCode = async (data) => {
  let sql = 'select * from retrievepwd where email = ? order by createTime desc'
  let result = query(sql, data).then((data) => {
    if (data.length > 0) {
      return data[0]     
    } else {
      return false
    }
  })
  return result
}
/**
 * 后台找回密码判断用户是否存在
 * @param {String} data 'email'
 */
const backisAdm = async (data) => {
  let sql = 'select * from administrator where email=?'
  let result = query(sql, data).then((data) => {
    if (data.length > 0) {
      return true     
    } else {
      return false
    }
  }).catch((err) => {
    return err
  })
  return result
}
/**
 * 后台找回密码验证
 * @param {arr} data ['邮箱', '验证码'] 
 */
const backRetrieve = async (data) => {
  let sql = 'insert into retrievepwd(email, veriCode) values(?,?)'
  let result = await query(sql, data).then((data) => {
    console.log(data)
    if(data) {
      return true
    } else {
      return false
    }
  })
  return result
}
/**
 * 
 * @param {arr} data ['邮箱','密码'] 
 */

const backupdate = async (data) => {
  let sql = ' UPDATE administrator SET PASSWORD = ? WHERE email = ?'
  let result = query(sql, data).then((data) => {
    if(data) {
      return true
    } else {
      return false
    }
  })
  return result
}
module.exports = {
  backLogin,
  backRetrieve,
  backisAdm,
  backupdate,
  isbackCode
}