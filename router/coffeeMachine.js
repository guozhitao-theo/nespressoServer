// 咖啡机的的回调函数
let data = require('../control/data/coffeeMachine')
let common = require('../common/common')
let multer = require('multer')
// 配置 multer
var Storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null,'./static/')
  },
  filename: function (req, file, callback) {
    callback(null, 'coffeeMachine/'+file.fieldname + "_" + Date.now() + "_" + file.originalname)
  }
})
var upload = multer({ storage: Storage }).array("coffeeMachineimg", 5); 

// 获取咖啡机列表
let getCoffeeMachineLists = async (req, res) => {
  // if(!common.isLogin(req, res)) {
  //   return false
  // }
  let result = await data.getCoffeeMachineLists()
  if (result) {
    res.json({
      status: 200,
      data: result,
      message: '获取咖啡机列表成功'
    })
  } else {
    res.json({
      status: 500,
      message: '获取咖啡机列表失败'
    })
  }
}
// 通过分页获取咖啡机列表
let getCoffeeMachineBypage = async (req, res) => {
  let page = Number(req.body.page || req.query.page)
  let count = Number(req.body.count || req.query.count)
  let start = (page - 1)*count
  let arr = [start, count]
  let result = await data.getCoffeeMachineBypage(arr)
  if (result) {
    res.json({
      status: 200,
      data: result,
      message: '通过分页获取咖啡机列表成功'
    })
  } else {
    res.json({
      status: 500,
      message: '通过分页获取咖啡机列表失败'
    })
  }
}
// 根据咖啡机的颜色获取
let getCoffeeMachineByColor = async (req, res) => {
  let color = Number(req.body.color || req.query.color)
  // 颜色
  if (color>8 || !color) {
    return res.json({
      status: 500,
      message: '请输入正确的颜色'
    })
  }
  let result = await data.getCoffeeMachineByColor(color)
  if(result){
    return res.json({
      status: 200,
      message: '按颜色获取咖啡机列表成功',
      data: result
    })
  } else {
    return res.json({
      status: 500,
      message: '该颜色无对应商品'
    })
  }
}
// 添加咖啡机商品
let addCoffeeMachine = async (req, res) => {
  upload(req, res, async function(err) {
    if (err) {
      return res.json({
        status: 508,
        message: '文件上传错误'
      })
    } else {
      let npsCommodity = Number(req.body.npsCommodity || req.query.npsCommodity)
      if(npsCommodity>1 || npsCommodity<0) {
        return res.json({
          status: 500,
          message: '请输入正确的商品分类'
        })
      }
      let color = Number(req.body.color || req.query.color)
      if(color>8 || color<1){
        return res.json({
          status: 500,
          message: '无对应颜色商品'
        })
      }
      let price = req.body.price || req.query.price
      let discountPrice = req.body.discountPrice || req.query.discountPrice
      let specifications = Number(req.body.specifications || req.query.specifications)
      let manual = req.body.manual || req.query.manual
      let cmachineclass = Number(req.body.cmachineclass || req.query.cmachineclass)
      let name = req.body.name || req.query.name
      let img = []
      for (item of req.files) {
        img.push(item.filename)
      }
      img = JSON.stringify(img)
      let arr = [npsCommodity,color,img,price,discountPrice,specifications,manual,cmachineclass,name,price]
      common.isempty(res,arr)
      let result = await data.addCoffeeMachine(arr)
      if (result) {
        res.json({
          status: 200,
          message: '添加信息成功'
        })
      } else {
        res.json({
          status: 500,
          message: '添加信息失败'
        })
      }
    }
  })
  
}

// 修改咖啡机商品列表
let updateCoffeeMachine = async (req, res) => {
  upload(req, res,async function(err) {
    console.log(err)
    if (err) {
      return res.json({
        status: 508,
        message: '文件上传错误'
      })
    } else {
      let id = Number(req.body.cmachineproductsId || req.query.cmachineproductsId)
      let cmachineUpdate = await data.getCoffMachineById(id)
      if (!cmachineUpdate) {
        return res.json({
          status: 500,
          message: '不存在对应的商品'
        })
      }
      let npsCommodity = Number(req.body.npsCommodity || req.query.npsCommodity)
      let color = Number(req.body.color || req.query.color)
      let price = req.body.price || req.query.price
      let discountPrice = req.body.discountPrice || req.query.discountPrice
      let specifications = Number(req.body.specifications || req.query.specifications)
      let manual = req.body.manual || req.query.manual
      let cmachineclass = Number(req.body.cmachineclass || req.query.cmachineclass)
      let name = req.body.name || req.query.name
      let cMachineImg = []
      if (req.files) {
        for (item of req.files) {
          cMachineImg.push(item.filename)
        }
      }
      cMachineImg = JSON.stringify(cMachineImg)
      // 定义一个对象接受前端传的数据
      let CmachineObject = {
        npsCommodity,
        color,
        cMachineImg,
        price,
        discountPrice,
        specifications,
        manual,
        cmachineclass,
        machinePrice: price,
        name
      }
      // 循环查询出的对象
      for (props in CmachineObject) {
        if(CmachineObject[props] === undefined) {
          delete CmachineObject[props]
        } else if(typeof(CmachineObject[props]) === 'Number' && isNaN(CmachineObject[props])) {
          delete CmachineObject[props]
        }
      }
      // 删除对象中的时间戳
      delete cmachineUpdate[0].createTime
      // 合并前端传的数据对象 以及原数据库的对象
      let object = Object.assign({},cmachineUpdate[0],CmachineObject) 
      // 将循环后的对象转成数组
      let arr = Object.values(object)
      arr.splice(0,1)
      arr.push(id)
      let result = await data.updateCoffeeMachine(arr)
      if (result) {
        res.json({
          status: 200,
          message: '修改信息成功'
        })
      } else {
        res.json({
          status: 500,
          message: '修改信息失败'
        })
      }
    }
  })
  
}

// 删除咖啡机商品
let deleteCoffeeMachine = async (req, res) => {
  let id = Number(req.body.id || req.query.id)
  if (!id) {
    return res.json({
      status: 500,
      message: '没得删除的id'
    })
  }
  let isExit = await data.getCoffMachineById(id)
  if(!isExit) {
    return res.json({
      status: 500,
      message: '这个id的商品不存在'
    })
  }
  let result = await data.deleteCoffeeMachine(id)
  if (result) {
    res.json({
      status: 200,
      message: '删除咖啡机商品成功'
    })
  } else {
    res.json({
      ststus: 509,
      message: '删除信息失败'
    })
  }
}

// 获取咖啡机的规格
let getspecifications = async (req, res) => {
  let result =await data.getspecifications()
  if (result) {
    res.json({
      status: 200,
      data: result,
      message: '获取咖啡机规格成功'
    })
  } else {
    res.json({
      status: 500,
      message: '获取咖啡机规格失败'
    })
  }
}

// 获取咖啡机分类
let getcMachineClass = async (req, res) => {
  let result =await data.getcMachineClass()
  if (result.length > 0) {
    res.json({
      status: 200,
      data: result,
      message: '获取咖啡机分类成功'
    })
  } else {
    res.json({
      status: 500,
      message: '获取咖啡机分类失败'
    })
  }  
}

module.exports = {
  getCoffeeMachineLists,
  getCoffeeMachineBypage,
  addCoffeeMachine,
  updateCoffeeMachine,
  deleteCoffeeMachine,
  getspecifications,
  getcMachineClass,
  getCoffeeMachineByColor
}