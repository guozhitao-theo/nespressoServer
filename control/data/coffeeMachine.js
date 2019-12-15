let query = require('../mysql')

/**
 * 获取咖啡机的列表
 */
let getCoffeeMachineLists = async () => {
  let sql = 'SELECT * FROM cmachineproducts cMachine LEFT JOIN npscommodity ON  cMachine.npscommodity=npscommodity.`id` LEFT JOIN colorofmachine ON cMachine.color = colorofmachine.`id` LEFT JOIN specifications ON  cMachine.specifications=specifications.`id`'
  let result = await query(sql).then((data) => {
    if (data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过分页来获取咖啡机的列表
 * @param {arr} data start count 
 */
let getCoffeeMachineBypage = async (data) => {
  let sql = 'SELECT * FROM cmachineproducts cMachine LEFT JOIN npscommodity ON  cMachine.npscommodity=npscommodity.`id` LEFT JOIN colorofmachine ON cMachine.color = colorofmachine.`id` LEFT JOIN specifications ON  cMachine.specifications=specifications.`id` ORDER BY createTime DESC limit ?,?'
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
 * 添加咖啡机商品列表
 * @param {arr} data npsCommodity(int), color(int), img(varchar), price(double), discountPrice(double), specifications(int), manual(varchar), cmachineclass(int), NAME(varchar)
 */
let addCoffeeMachine = async (data) => {
  let sql = 'INSERT INTO cmachineproducts(npsCommodity, color, img, price, discountPrice, specifications, manual, cmachineclass, NAME) VALUES(?,?,?,?,?,?,?,?,?)'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return true
    } else {
      return false
    }
  }).catch((err) =>{
    return err
  })
  return result
}
/**
 * 修改咖啡机的数据
 * @param {arr} data  npsCommodity(int), color(int), img(varchar), price(double), discountPrice(double), specifications(int), manual(varchar), cmachineclass(int), NAME(varchar), id(int)
 */
let updateCoffeeMachine = async (data) => {
  let sql = 'update cmachineproducts set npsCommodity=?, color=?, img=?, price=?, discountPrice=?, specifications=?, manual=?, cmachineclass=?, name=? where id =?'
  let result = await query(sql, data).then((data) => {
    if (data) {
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
 * 删除咖啡机商品
 * @param {Number} data id(int) 
 */
let deleteCoffeeMachine = async (data) => {
  let sql = 'delete from cmachineproducts where id =?'
  let result = query(sql, data).then((data) => {
    if(data){
      return true
    } else {
      return false
    }
  })
  return result
}
/**
 * 获取规格
 */
let getspecifications = async () => {
  let sql = 'SELECT * FROM specifications '
  let result = await query(sql).then((data) => {
    if (data.length > 0) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 获取咖啡机分类
 */
let getcMachineClass = async () => {
  let sql = 'select * from cmachineclass'
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
  getCoffeeMachineLists,
  getCoffeeMachineBypage,
  addCoffeeMachine,
  updateCoffeeMachine,
  deleteCoffeeMachine,
  getspecifications,
  getcMachineClass
}