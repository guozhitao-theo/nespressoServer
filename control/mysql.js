let mysql = require('mysql')
let config = require('../config/config')
// 建立数据库连接池
let pool = mysql.createPool(config.mysqlConfig)
// 封装数据库查询方法
let query = (sql, data) => {
  return  new Promise ((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (!err) {
        connection.query(sql, data, (error, result) => {
          if (!error) {
            resolve(result)
          } else {
            console.log(error)
            console.log('数据库连接失败')
            reject(result)
          }
          connection.release()
        })
      } else {
        reject(err)
        console.log('请检查你的数据库配置')
      }
    })
  })
}
module.exports = query