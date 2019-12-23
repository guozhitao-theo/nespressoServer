// 咖啡胶囊的回调函数
let multer = require('multer')
let common = require('../common/common')
let data = require('../control/data/data')

// 配置 multer
var coffeeCapStorage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null,'./static/')
  },
  filename: function (req, file, callback) {
    callback(null, 'coffeeCap/'+file.fieldname + "_" + Date.now() + "_" + file.originalname)
  }
})
var upload = multer({ storage: coffeeCapStorage }).array("img", 5)
// 获取咖啡胶囊列表
let getCoffgCapLists = async (req, res) => {
  common.isLogin(req, res)
  let result = await data.getCoffCapLists()
  console.log(result)
  if (result) {
    res.json({
      status: 200,
      data:result,
      message: '获取商品成功'
    })
  } else {
    res.json({
      status: 509,
      message: '信息获取失败'
    })
  }
}
// 分页获取咖啡胶囊商品列表
let getcoffeeCap = async (req,res) => {
  let page = req.body.page || req.query.page
  let count = req.body.count || req.query.count
  page = Number(page)
  count = Number(count)
  common.isempty(res, [page, count])
  let start = (page - 1)*count
  let arr = [start,count]
  let result =await data.getCoffeeCapList(arr)
  if (result.length > 0) {
    res.json({
      status: 200,
      data: result,
      message: '分类查询成功'
    })
  } else {
    return res.json({
      status: 508,
      message: '分页失败'
    })
  }
}
// 咖啡胶囊筛选
let coffFilter = async (req,res) => {
  let classification = Number(req.body.coffeeClassification || req.query.coffeeClassification)
  let strength = Number(req.body.strength || req.query.strength)
  let aroma = Number(req.body.aroma || req.query.aroma)
  let capamount = Number(req.body.capamount || req.query.capamount)
  if(!classification && !strength && !aroma && !capamount) {
    return res.json({
      status: 500,
      message: '请输入正确的信息'
    })
  }
  // 创建对象 获得发送的字符串
  let object = {}
  object.classification = classification
  object.strength = strength
  object.aroma = aroma
  object.capamount = capamount
  let str =''
  for(prop in object) {
    if(isNaN(object[prop])) {
      delete object[prop]
    } else {
        str += prop
    }
  }
  // 定义一个空数组
  let arr = []
  arr.push(classification, strength, aroma, capamount)
  arr = arr.filter(function(s){
    if(s !== NaN) {
      return s 
    }
  })
  let result = null
  switch (str) {
    case 'classification':
      result = await data.getCoffeeCapByClass(arr)
      break;
    case 'classificationstrength':
      result = await data.getCoffByClassStrength(arr)
      break;
    case 'classificationaroma':
      result = await data.getCoffByClassAroma(arr)
      break;
    case 'classificationcapamount':
      result = await data.getCoffByClassCapAmount(arr)
      break;    
    case 'classificationstrengtharoma':
      result = await data.getCoffByClassStrengthAroma(arr)
      break;
    case 'classificationaromacapamount':
      result = await data.getCoffByClassAromaCapamount(arr)
      break;
    case 'classificationstrengthcapamount':
      result = await data.getCoffByClassStrengthCapamount(arr)
      break;
    case 'classificationstrengtharomacapamount':
      result = await data.getCoffByClassStrengthAromaCapamount(arr)
      break;
    case 'strength':
      result = await data.getCoffeeCapByStrength(arr)
      break;  
    case 'strengtharoma':
      result = await data.getCoffByStrengthAroma(arr)
      break;
    case 'strengthcapamount':
      result = await data.getCoffByStrengthCapacount(arr)
      break;
    case 'strengtharomacapamount':
      result = await data.getCoffByStrengthAromaCapamount(arr)
      break;
    case 'aroma':
      result = await data.getCoffeeCapByAroma(arr)
      break;  
    case 'aromacapamount':
      result = await data.getCoffByAromaCapacount(arr)
      break;
    case 'capamount':
      result = await data.getCoffeeCapByCapamount(arr)
      break;
  }
  if (result) {
    res.json({
      status: 200,
      data: result
    })
  } else {
    res.json({
      status: 500,
      message: '没查到！'
    })
  }
}
// 添加咖啡胶囊商品
let addcoffCap = async (req, res) => {
  upload(req, res,async function(err) {
    if (err) {
      return res.json({
        status: 508,
        message: '文件上传错误'
      })
    } else {
      let classification = Number(req.body.classification || req.query.classification)
      let name = req.body.name || req.query.name
      let title = req.body.title || req.query.title
      let description = req.body.description || req.query.description
      let bakingDescription = req.body.bakingDescription || req.query.bakingDescription
      let placefOrigin = req.body.placefOrigin || req.query.placefOrigin
      let strength = Number(req.body.strength || req.query.strength)
      let capAmount = Number(req.body.capAmount || req.query.capAmount)
      let aroma = Number(req.body.aroma || req.query.aroma)
      let acidity = Number(req.body.acidity || req.query.acidity)
      let bitterness = Number(req.body.bitterness || req.query.bitterness)
      let alcohol = Number(req.body.alcohol || req.query.alcohol)
      let degreeofBaking = Number(req.body.degreeofBaking || req.query.degreeofBaking)
      let coffeeClassification = Number(req.body.coffeeClassification || req.query.coffeeClassification)
      let price = req.body.price || req.query.price
      let discountPrice = req.body.discountPrice || req.query.discountPrice
      let taste = req.body.taste || req.query.taste
      let img = []
      // 判断杯量范围
      if(capAmount<1 || capAmount>4) {
        return res.json({
          status: 500,
          message: '杯量超出范围'
        })
      }
      // 判断酸度等的范围
      let isRang = common.isRang(res, [strength, aroma, acidity, bitterness, alcohol, degreeofBaking])
      if (!isRang) {
        return false
      }
      // 判断是否为咖啡胶囊
      if (classification === 1) {
        return res.json({
          status: 500,
          message: '请输入正确的分类，1 表示咖啡机， 2 表示咖啡胶囊'
        })
      }
      for (item of req.files) {
        img.push(item.filename)
      }
      img = JSON.stringify(img)
      let arr = [classification, name, title, img, description, bakingDescription, placefOrigin, strength, capAmount, aroma, acidity, bitterness, alcohol, degreeofBaking, coffeeClassification, price, discountPrice, taste, price]
      common.isempty(res,arr)
      let result =await data.addCoffcap(arr)
      if (result) {
        res.json({
          status: 200,
          message: '添加咖啡胶囊成功'
        })
      } else {
        res.json({
          status: 500,
          message: '添加咖啡胶囊失败'
        })
      }
    }
  })
}
// 修改咖啡胶囊商品
let updatecoffCap = async (req, res) => {
  upload(req, res,async function(err) {
    if (err) {
      return res.json({
        status: 508,
        message: '文件上传错误'
      })
    } else {
      let id = Number(req.body.id || req.query.id)
      let getcoffCap = await data.getCoffCapById(id)
      if (!getcoffCap) {
        return res.json ({
          status: 500,
          message: '该商品不存在'
        })
      }
      let classification = Number(req.body.classification || req.query.classification)
      let name = req.body.name || req.query.name
      let title = req.body.title || req.query.title
      let description = req.body.description || req.query.description
      let bakingDescription = req.body.bakingDescription || req.query.bakingDescription
      let placefOrigin = req.body.placefOrigin || req.query.placefOrigin
      let strength = Number(req.body.strength || req.query.strength)
      let capAmount = Number(req.body.capAmount || req.query.capAmount)
      let aroma = Number(req.body.aroma || req.query.aroma)
      let acidity = Number(req.body.acidity || req.query.acidity)
      let bitterness = Number(req.body.bitterness || req.query.bitterness)
      let alcohol = Number(req.body.alcohol || req.query.alcohol)
      let degreeofBaking = Number(req.body.degreeofBaking || req.query.degreeofBaking)
      let coffeeClassification = Number(req.body.coffeeClassification || req.query.coffeeClassification)
      let price = req.body.price || req.query.price
      let discountPrice = req.body.discountPrice || req.query.discountPrice
      let taste = req.body.taste || req.query.taste
      let isRang = common.isRang(res, [strength, aroma, acidity, bitterness, alcohol, degreeofBaking])
      if (!isRang) {
        return false
      }
      // 判断是否为咖啡胶囊
      if (classification === 1) {
        return res.json({
          status: 500,
          message: '请输入正确的分类，1 表示咖啡机， 2 表示咖啡胶囊'
        })
      }
      if( req.files.length > 0) {
        var img = req.files[0].filename
      }
      // 定义一个对象存放传过来的数据
      let getObject = {
        classification: classification,
        name: name,
        title: title,
        description: description,
        bakingDescription: bakingDescription,
        placefOrigin: placefOrigin,
        strength: strength,
        capAmount: capAmount,
        aroma: aroma,
        acidity: acidity,
        bitterness: bitterness,
        alcohol: alcohol,
        degreeofBaking: degreeofBaking,
        coffeeClassification: coffeeClassification,
        price: price,
        discountPrice: discountPrice,
        taste: taste,
        capsulePrice: price,
        img
      }
      // 遍历对象，当其键值对的值为undefined 的时候删除这个键值对
      for (props in getObject) {
        if (getObject[props] === undefined) {
          delete getObject[props]
        } else if (isNaN(getObject[props])) {
          delete getObject[props]
        }
      }
      // 删除原数据中的时间戳
      delete getcoffCap[0].createTime
      let changeCoffeeCap = Object.assign({},getcoffCap[0],getObject)
      let arr = Object.values(changeCoffeeCap)
      arr.splice(0,1)
      arr.push(id)
      let result =await data.updateCoffCap(arr)
      if (result) {
        res.json({
          status: 200,
          message: '修改咖啡胶囊成功'
        })
      } else {
        res.json({
          status: 500,
          message: '修改咖啡胶囊失败'
        })
      }
    }
  })
}
// 删除咖啡胶囊商品
let deletecoffCap = async (req, res) => {
  let id = Number(req.body.id || req.query)
  if (!id) {
    return res.json({
      status:500,
      message: '请输入id'
    })
  }
  // 判断id 是否存在
  let isExist = await data.isExist(id)
  if (!isExist) {
    return res.json({
      status: 500,
      message: '该商品不存在'
    })
  } 
  let result = await data.deleteCoffCap(id)
  console.log(result)
  if (result) {
    res.json({
      status: 200,
      message: '删除成功haha'
    })
  } else {
    res.json({
      status: 500,
      message: '删除失败'
    })
  }
  

}
// 获取商品分类
let getgoodsClass = async (req,res) => {
  let result = await data.getgoodsClass()
  if(result) {
    res.json({
      status: 200,
      data: result,
      message: '获取商品分类成功'
    })
  } else {
    res.json({
      status: 508,
      message: '获取商品分类失败'
    })
  }
}
// 获取咖啡胶囊的杯量
let getCoffCapamount = async (req, res) => {
  let result =await data.getCoffCapamount()
  if(result) {
    res.json({
      status: 200,
      data: result,
      message: '获取咖啡杯量成功'
    })
  } else {
    res.json({
      status: 508,
      message: '获取咖啡杯量失败'
    })
  }
}
// 获取咖啡香调
let getCoffCaparoma = async (req,res) => {
  let result = await data.getCoffCaparoma()
  if(result) {
    res.json({
      status: 200,
      data: result,
      message: '获取香调成功'
    })
  } else {
    res.json({
      status: 508,
      message: '获取咖啡香调失败'
    })
  }
}
// 获取咖啡的分类
let getCoffCapClassification = async (req, res) => {
  let result = await data.getCoffCapClassification()
  if(result) {
    res.json({
      status: 200,
      data: result,
      message: '获取咖啡的分类'
    })
  } else {
    res.json({
      status: 508,
      message: '获取咖啡分类失败'
    })
  }
}
module.exports = {
  getCoffgCapLists,
  getcoffeeCap,
  coffFilter,
  addcoffCap,
  updatecoffCap,
  deletecoffCap,
  getgoodsClass,
  getCoffCapamount,
  getCoffCaparoma,
  getCoffCapClassification
}
