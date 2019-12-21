// 获取个人信息
let data = require('../control/data/login')
const getinfor = async (req, res) => {
  let result = await data.getInfor()
  if (result) {
    return res.json({
      status: 200,
      message: '获取顾客信息成功',
      data: result
    })
  } else {
    return res.json({
      status: 500,
      message: '获取用户信息失败'
    })
  }
}
module.exports = {
  getinfor
}