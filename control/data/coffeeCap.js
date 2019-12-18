// 咖啡胶囊的数据操作
let query = require('../mysql')

// 获取商品列表
let getCoffCapLists = async () => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`aromaId` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`fragranceId` ORDER BY createTime DESC'
  let result = await query(sql).then((data) => {
    if(data.length > 0) {
      return data
    } else {
      return false 
    }
  })
  return result
}
/**
 * 通过id 查询商品
 * @param {Number} data id 
 */
let getCoffCapById = async (data) => {
  let sql = 'select * from coffeecapsule where id=?'
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
 * 判断商品是否存在
 * @param {Number} data id 
 */
let isExist = async (data) => {
  let sql = 'select * from coffeeCapsule where id = ?'
  let result = await query(sql, data).then((data) => {
    if (data.length > 0) {
      return true //如果商品存在 返回 true
    } else {
      return false // 如果商品不存在 ，返回 false
    }
  })
  return result
}
/**
 * 分页获取咖啡胶囊的数据
 * @param {*} data  [start count]
 */

// 咖啡胶囊的筛选
let getCoffeeCapList =async (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.`aromaId` LEFT JOIN fragrance ON aroma.fragrance = fragrance.`fragranceId` order by createTime desc limit ?, ?'
  let result = await query(sql, data).then((data) => {
    if(data.length > 0) {
      return data
    } else {
      return false 
    }
  })
  return result
}
/**
 * 通过分类获取咖啡胶囊
 * @param {Number} data 'coffeeClassification' 
 */
let getCoffeeCapByClass =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE fragrance.fragranceId = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过强度获取咖啡胶囊
 * @param {String} data  'strength'
 */
let getCoffeeCapByStrength =async  (data) => {
  let sql = 'select * from coffeeCapsule where strength = ? order by createTime desc'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过香调获取咖啡胶囊分类
 * @param {Number} data '香调' 
 */
let getCoffeeCapByAroma =async  (data) => {
  let sql = 'select * from coffeeCapsule where aroma = ? order by createTime desc'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过杯量获取咖啡胶囊分类
 * @param {Number} data '杯量' 
 */
let getCoffeeCapByCapamount =async  (data) => {
  let sql = 'select * from coffeeCapsule where capAmount = ? order by createTime desc'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 通过分类和强度查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度']
 */
let getCoffByClassStrength =async  (data) => {
  let sql = 'select * from coffeeCapsule where coffeeClassification = ? && strength = ? order by createTime desc '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类和杯量查询咖啡胶囊的数据
 * @param {arr} data ['分类','杯量']
 */
let getCoffByClassCapAmount =async  (data) => {
  let sql = 'select * from coffeeCapsule where coffeeClassification = ? && capAmount = ?  order by createTime desc '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类和香调查询咖啡胶囊的数据
 * @param {arr} data ['分类','香调']
 */
let getCoffByClassAroma =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE cCap.coffeeClassification=? && fragrance.fragranceId = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过强度和香调查询咖啡胶囊的数据
 * @param {arr} data ['咖啡强度','香调']
 */
let getCoffByStrengthAroma  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE cCap.strength=? && fragrance.fragranceId = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过强度和杯量查询咖啡胶囊的数据
 * @param {arr} data ['咖啡强度','杯量']
 */
let getCoffByStrengthCapacount  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE cCap.strength=? && cCap.capAmount = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过香调和杯量查询咖啡胶囊的数据
 * @param {arr} data ['香调','杯量']
 */
let getCoffByAromaCapacount  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE fragrance.fragranceId = ? && cCap.capAmount = ? '
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类、强度、香调、查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度','香调']
 */
let getCoffByClassStrengthAroma  =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE coffeeClassification = ? && strength = ? && fragrance.fragranceId = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}
/**
 *  通过分类、强度、杯量、查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度','杯量']
 */
let getCoffByClassStrengthCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE coffeeClassification = ? && strength = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}
/**
 *  通过分类、香调、杯量、查询咖啡胶囊的数据
 * @param {arr} data ['分类','香调','杯量']
 */
let getCoffByClassAromaCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE coffeeClassification = ? && fragrance.fragranceId = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}
/**
 *  通过 分类、香调、杯量、强度 查询咖啡胶囊的数据
 * @param {arr} data ['分类','强度','香调','杯量']
 */
let getCoffByClassStrengthAromaCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE coffeeClassification = ? && strength=? && fragrance.fragranceId = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}
/**
 *  通过 香调、杯量、强度 查询咖啡胶囊的数据
 * @param {arr} data ['强度','香调','杯量']
 */
let getCoffByStrengthAromaCapamount =async  (data) => {
  let sql = 'SELECT * FROM coffeeCapsule cCap LEFT JOIN aroma ON  cCap.aroma=aroma.aromaId LEFT JOIN fragrance ON aroma.fragrance = fragrance.fragranceId WHERE strength=? && fragrance.fragranceId = ? && capAmount = ?'
  let result = await query(sql, data).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result    
}

// 咖啡胶囊的删除
let deleteCoffCap = async (data) => {
  let sql = 'delete from  coffeeCapsule where id =?'
  let result = query(sql, data).then((data) => {
    if (data) {
      return true
    } else {
      return false
    }
  })
  return result    
}

// 咖啡胶囊的新增
let addCoffcap = async (data) => {
  let sql = 'insert into coffeeCapsule(classification, name, title,  img, description, bakingDescription, placefOrigin, strength, capAmount, aroma, acidity, bitterness, alcohol, degreeofBaking, coffeeClassification, price, discountPrice, taste) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
  let result = query(sql,data).then((data) => {
    if (data) {
      return true
    } else {
      return false
    }
  })
  return result    
}
/**
 *  咖啡胶囊的修改
 * classification,NAME,title, img,description,bakingDescription=?,placefOrigin=?, strength capAmount aroma acidity bitterness alcohol degreeofBaking coffeeClassification price discountPrice taste id
 * @param {arr} data 
 */
let updateCoffCap = async (data) => {
  console.log(data)
  let sql = 'update coffeecapsule set classification=?, NAME=?, title=?,  img=?, description=?, bakingDescription=?, placefOrigin=?, strength=?, capAmount=?, aroma=?, acidity=?, bitterness=?, alcohol=?, degreeofBaking=?, coffeeClassification=?, price=?, discountPrice=?, taste=? where id=?'
  let result =await query(sql,data).then((data) => {
    if (data) {
      console.log(data)
      return true
    } else {
      return false
    }
  })
  return result    
}
/**
 * 获取商品分类
 */
let getgoodsClass = async () => {
  let sql = 'select * from npscommodity'
  let result = query(sql).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 获取咖啡胶囊杯量
 */
let getCoffCapamount = async () => {
  let sql = 'select * from capAmount'
  let result = query(sql).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 获取咖啡胶囊香调aroma
 */
let getCoffCaparoma = async () => {
  let sql = 'select * from aroma'
  let result = query(sql).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result
}
/**
 * 获取咖啡胶囊 的分类
 */
let getCoffCapClassification = async () => {
  let sql = 'select * from coffeeclassification'
  let result = query(sql).then((data) => {
    if (data) {
      return data
    } else {
      return false
    }
  })
  return result  
}

module.exports = {
  getCoffCapLists,
  getCoffeeCapList,
  getCoffeeCapByClass,
  getCoffeeCapByStrength,
  getCoffeeCapByAroma,
  getCoffeeCapByCapamount,
  getCoffByClassStrength,
  getCoffByClassCapAmount,
  getCoffByClassAroma,
  getCoffByStrengthAroma,
  getCoffByStrengthCapacount,
  getCoffByAromaCapacount,
  getCoffByClassStrengthAroma,
  getCoffByClassStrengthCapamount,
  getCoffByClassAromaCapamount,
  getCoffByClassStrengthAromaCapamount,
  getCoffByStrengthAromaCapamount,
  deleteCoffCap,
  addCoffcap,
  updateCoffCap,
  getgoodsClass,
  getCoffCapamount,
  getCoffCaparoma,
  getCoffCapClassification,
  isExist,
  getCoffCapById
}