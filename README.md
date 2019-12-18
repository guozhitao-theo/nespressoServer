[TOC] 

 

### 1.  前端注册接口： http://192.168.97.240:3000/register

###           类型：==x-www-form-urlencoded==



​		==前端需要发送的字段==：

|       Key       |  Type  |    Value 示例     |                    Description                    |
| :-------------: | :----: | :---------------: | :-----------------------------------------------: |
|     surname     | String |        郭         |                        姓                         |
|      name       | String |       治涛        |                        名                         |
|      email      | String | 2943439858@qq.com |                       邮箱                        |
|    password     | String |      000000       |                       密码                        |
| distributeclass |  Int   |         0         |        配送地址分类 0 代表个人 1 代表公司         |
|      title      |  Int   |         1         | 称谓 1 先生 2 太太 3 小姐，4 女士，5 博士，6 夫妇 |
|    location     | String |       中国        |                    地点（国家                     |
|     address     | String |    重庆涪陵xx     |                       地址                        |
|      city       | String |       重庆        |                       城市                        |
|    postCode     | String |      408000       |                       邮编                        |
|      phone      | String |    18323929404    |                     电话号码                      |
|    language     |  Int   |         0         |            语言 0 表示中文 1 表示英文             |
|  shippingNotes  | String |     配送备注      |                    配送的备注                     |
| deliveryAddress |  Int   |         0         |      配送地址是否与账单相同 0 表示否 1表示是      |
|  subscription   |  Int   |         0         |         是否要订阅 0 表示否， 1 表示订阅          |

​		==后台返回数据：==

~~~javascript
{
    "status": 200,
    "message": "注册成功"
}

~~~

###  2.  前端登陆接口： http://192.168.97.240:3000/login

###           类型：==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key      | Type   | Value 示例        | Description |
| -------- | ------ | ----------------- | ----------- |
| email    | string | 2943439858@qq.com | 用户qq邮箱  |
| password | string | 000000            | 用户密码    |

​		==后台返回数据：== 包含 **用户信息**和**token**

~~~javascript
{
    "status": 200,
    "data": {
        "infor": {
            "id": 1,
            "surname": "郭",
            "name": "涛",
            "email": "2943439858@qq.com",
            "distributeclass": "0",
            "title": 1,
            "location": "中国",
            "address": "重庆",
            "city": "重庆",
            "postCode": "4000000",
            "phone": "17784450544",
            "language": "0",
            "shippingNotes": "没有备注1",
            "deliveryAddress": "0",
            "subscription": "0"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZCI6IjAwMDAwMCIsImlhdCI6MTU3NjU0NDQ1MSwiZXhwIjoxNTc2NTQ2MjUxfQ.9cD6sz3ukVqblh781Waa6S99PunZwoC-wP92xHDsuvA"
    },
    "message": "登陆成功"
}

~~~



### 3.  前端验证登陆接口：http://192.168.97.240:3000/islogin  

###      	 类型：==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key   | Type   | Value 示例 | Description   |
| ----- | ------ | ---------- | ------------- |
| token | string | 123        | Token验证信息 |

​		==后台返回数据：== 失效后的返回结果

~~~javascript
{
    "status": 503,
    "message": "登陆已失效"
}

~~~

### 4.  修改用户信息接口：http://192.168.97.240:3000/changeInfor 

###      	 类型：==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key             | Type   | Value 示例        | Description                                       |
| --------------- | ------ | ----------------- | ------------------------------------------------- |
| surname         | String | 郭                | 姓                                                |
| name            | String | 治涛              | 名                                                |
| email           | String | 2943439858@qq.com | 邮箱                                              |
| distributeclass |        | 0                 | 配送地址分类 0 代表个人 1 代表公司                |
| title           |        | 1                 | 称谓 1 先生 2 太太 3 小姐，4 女士，5 博士，6 夫妇 |
| location        | String | 中国              | 地点（国家）                                      |
| address         | String | 重庆涪陵xx        | 地址                                              |
| city            | String | 重庆              | 城市                                              |
| postCode        | String | 408000            | 邮编                                              |
| phone           | String | 18323929404       | 电话号码                                          |
| shippingNotes   | String | 配送备注          | 配送的备注                                        |

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "message": "修改个人信息成功"
}

~~~

### 5.  前端邮箱验证的接口：http://192.168.97.240:3000/backRetrieve 

###      类型：==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key   | Type   | Value 示例        | Description        |
| ----- | ------ | ----------------- | ------------------ |
| email | string | 2943439858@qq.com | 发送验证信息的邮箱 |

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "message": "发送验证成功"
}
~~~

### 6.  前端找回密码接口: http://192.168.97.240:3000/pwdUpdate 

### 	 类型：==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key   | Type   | Value 示例        | Description        |
| ----- | ------ | ----------------- | ------------------ |
| email | string | 2943439858@qq.com | 需要找回密码的邮箱 |

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "message": "找回成功"
}
~~~

### 7.  用户信息接口：http://192.168.97.240:3000/getUsers

### 	 类型： ==x-www-form-urlencoded==

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "surname": "郭",
            "name": "涛",
            "email": "2943439858@qq.com",
            "password": "670b14728ad9902aecba32e22fa4f6bd",
            "distributeclass": "0",
            "title": 1,
            "location": "中国",
            "address": "重庆",
            "city": "重庆",
            "postCode": "4000000",
            "phone": "17784450544",
            "language": "0",
            "shippingNotes": "没有备注1",
            "deliveryAddress": "0",
            "subscription": "0"
        },
        {
            "id": 2,
            "surname": "郭",
            "name": "涛",
            "email": "2943439858@qq.com",
            "password": "e10adc3949ba59abbe56e057f20f883e",
            "distributeclass": "0",
            "title": 1,
            "location": "中国",
            "address": "重庆",
            "city": "重庆",
            "postCode": "4000000",
            "phone": "17784450544",
            "language": "0",
            "shippingNotes": "没有备注1",
            "deliveryAddress": "0",
            "subscription": "0"
        },
        {
            "id": 3,
            "surname": "郭",
            "name": "涛",
            "email": "2943439858@qq.com",
            "password": "670b14728ad9902aecba32e22fa4f6bd",
            "distributeclass": "0",
            "title": 1,
            "location": "中国",
            "address": "重庆",
            "city": "重庆",
            "postCode": "4000000",
            "phone": "17784450544",
            "language": "0",
            "shippingNotes": "没有备注1",
            "deliveryAddress": "0",
            "subscription": "0"
        },
        {
            "id": 4,
            "surname": "郭",
            "name": "涛",
            "email": "2943439858@qq.com",
            "password": "670b14728ad9902aecba32e22fa4f6bd",
            "distributeclass": "0",
            "title": 1,
            "location": "中国",
            "address": "重庆",
            "city": "重庆",
            "postCode": "4000000",
            "phone": "17784450544",
            "language": "0",
            "shippingNotes": "没有备注1",
            "deliveryAddress": "0",
            "subscription": "0"
        },
        {
            "id": 5,
            "surname": "郭",
            "name": "涛",
            "email": "2943439858@qq.com",
            "password": "670b14728ad9902aecba32e22fa4f6bd",
            "distributeclass": "0",
            "title": 1,
            "location": "中国",
            "address": "重庆",
            "city": "重庆",
            "postCode": "4000000",
            "phone": "17784450544",
            "language": "0",
            "shippingNotes": "没有备注1",
            "deliveryAddress": "0",
            "subscription": "0"
        },
        {
            "id": 6,
            "surname": null,
            "name": null,
            "email": null,
            "password": null,
            "distributeclass": null,
            "title": null,
            "location": null,
            "address": null,
            "city": null,
            "postCode": null,
            "phone": null,
            "language": null,
            "shippingNotes": null,
            "deliveryAddress": null,
            "subscription": null
        },
        {
            "id": 7,
            "surname": "郭郭",
            "name": "治涛",
            "email": "2943439858@qq.com",
            "password": "670b14728ad9902aecba32e22fa4f6bd",
            "distributeclass": "0",
            "title": 1,
            "location": "中国",
            "address": "重庆",
            "city": "重庆",
            "postCode": "408000",
            "phone": "18323929404",
            "language": "0",
            "shippingNotes": "配送备注",
            "deliveryAddress": "0",
            "subscription": "0"
        }
    ],
    "message": "获取用户列表"
}
~~~

### 8.  咖啡胶囊列表接口：http://192.168.97.240:3000/getCoffgCapLists

### 	 类型： ==x-www-form-urlencoded==

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "data": [
        {
            "id": 32,
            "classification": 1,
            "name": "咖啡",
            "title": "这里是描述",
            "img": "[\"coffeeCap/img_1576493517541_timg (4).jpg\"]",
            "description": "商品详情描述",
            "bakingDescription": "1",
            "placefOrigin": "中国",
            "strength": 6,
            "capAmount": 2,
            "aroma": 1,
            "acidity": 2,
            "bitterness": 1,
            "alcohol": 3,
            "degreeofBaking": 1,
            "coffeeClassification": 3,
            "price": 62.2,
            "discountPrice": 3,
            "taste": "还可以",
            "createTime": "2019-12-16T10:51:58.000Z",
            "aromaId": 1,
            "value": "果香型",
            "fragrance": 1,
            "descript": "果香型的描述",
            "fragranceId": 1
        },
        {
            "id": 28,
            "classification": 1,
            "name": "咖啡",
            "title": "这里是描述",
            "img": "[\"coffeeCap/img_1576464977721_timg (5).jpg\"]",
            "description": "商品详情描述",
            "bakingDescription": "1",
            "placefOrigin": "中国",
            "strength": 6,
            "capAmount": 1,
            "aroma": 1,
            "acidity": 6,
            "bitterness": 1,
            "alcohol": 1,
            "degreeofBaking": 2,
            "coffeeClassification": 1,
            "price": 62.2,
            "discountPrice": 21,
            "taste": "还可以",
            "createTime": "2019-12-16T02:56:19.000Z",
            "aromaId": 1,
            "value": "果香型",
            "fragrance": 1,
            "descript": "果香型的描述",
            "fragranceId": 1
        },
        {
            "id": 22,
            "classification": 1,
            "name": "nanem",
            "title": "1",
            "img": "[\"coffeeCap/img_1576297412497_timg (3).jpg\"]",
            "description": "23是打发GV的说法",
            "bakingDescription": "1",
            "placefOrigin": "skjsjk",
            "strength": 3,
            "capAmount": 3,
            "aroma": 4,
            "acidity": 1,
            "bitterness": 1,
            "alcohol": 1,
            "degreeofBaking": 1,
            "coffeeClassification": 1,
            "price": 12.2,
            "discountPrice": 1,
            "taste": "11",
            "createTime": "2019-12-14T04:23:33.000Z",
            "aromaId": 4,
            "value": "圆润均衡型",
            "fragrance": 2,
            "descript": "圆润均衡型的描述",
            "fragranceId": 2
        }
    ],
    "message": "获取商品成功"
}
~~~

### 9.  咖啡胶囊筛选接口：http://192.168.97.240:3000/coffFilter

### 	 类型： ==x-www-form-urlencoded==

==前端需要发送的字段==：**4 个字段至少有==1==个**

| Key                  | Type | Value 示例 | Description |
| -------------------- | ---- | ---------- | ----------- |
| strength             | int  | 6          |             |
| aroma                | int  | 1          |             |
| coffeeClassification | int  | 1          |             |
| capamount            | int  | 1          |             |

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "data": [
        {
            "id": 28,
            "classification": 1,
            "name": "咖啡",
            "title": "这里是描述",
            "img": "[\"coffeeCap/img_1576464977721_timg (5).jpg\"]",
            "description": "商品详情描述",
            "bakingDescription": "1",
            "placefOrigin": "中国",
            "strength": 6,
            "capAmount": 1,
            "aroma": 1,
            "acidity": 6,
            "bitterness": 1,
            "alcohol": 1,
            "degreeofBaking": 2,
            "coffeeClassification": 1,
            "price": 62.2,
            "discountPrice": 21,
            "taste": "还可以",
            "createTime": "2019-12-16T02:56:19.000Z"
        }
    ]
}
~~~



### 10.  新增咖啡胶囊接口：http://192.168.97.240:3000/addCoffcap

### 	 类型： ==form-data==

==前端需要发送的字段==：

| Key                  | Type   | Value 示例 | Description                                                  |
| -------------------- | ------ | ---------- | ------------------------------------------------------------ |
| classification       | int    | 1          | 1 表示咖啡机 2 表示咖啡胶囊                                  |
| name                 | string | 拿铁       | 咖啡的名称                                                   |
| title                | string | 哈哈哈     | 咖啡标题                                                     |
| description          | string | 嘻嘻嘻     | 咖啡的描述                                                   |
| bakingDescription    | string | 烘焙的描述 | 烘焙的描述                                                   |
| placefOrigin         | string | 中国       | 咖啡原产地                                                   |
| strength             | int    | 1          | 咖啡的强度（1-12级）                                         |
| capAmount            | int    | 1          | 咖啡杯量（1-12级）                                           |
| aroma                | int    | 2          | 咖啡香调（1-3）                                              |
| acidity              | int    | 3          | 咖啡酸度（1-12级）                                           |
| bitterness           | int    | 4          | 咖啡苦度（1-12级）                                           |
| alcohol              | int    | 1          | 醇厚度（1-12级）                                             |
| degreeofBaking       | int    | 3          | 烘焙度（1-12级）                                             |
| coffeeClassification | int    | 6          | 咖啡分类（1-6）                                              |
| price                | double | 120.1      | 价格                                                         |
| discountPrice        | double | 120.0      | 折后价                                                       |
| taste                | string | 121211     | 根据口味生成6个数字组成的字符串<br/>0 1 2 ：苦 甜 酸<br/>0 1 ：软 脆<br/>0 1 ：浓烈 温和<br/>0 1 2 ：提神 快乐 二者都有<br/>0 1 ：黑咖啡 牛奶咖啡<br/>0 1 2 ：小杯（25ml） 中杯(40ml) 大杯(110ml) |
| img                  | file   | 上传的图片 | 咖啡胶囊的图片，至少1个，最多5个                             |

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "message": "添加咖啡胶囊成功"
}
~~~

### 11.  更改咖啡胶囊接口：http://192.168.97.240:3000/updatecoffCap

### 	 类型： ==from-data==

==前端需要发送的字段==：

| Key                  | Type   | Value 示例 | Description                                                  |
| -------------------- | ------ | ---------- | ------------------------------------------------------------ |
| classification       | int    | 1          | 1 表示咖啡机 2 表示咖啡胶囊                                  |
| name                 | string | 拿铁       | 咖啡的名称                                                   |
| title                | string | 哈哈哈     | 咖啡标题                                                     |
| description          | string | 嘻嘻嘻     | 咖啡的描述                                                   |
| bakingDescription    | string | 烘焙的描述 | 烘焙的描述                                                   |
| placefOrigin         | string | 中国       | 咖啡原产地                                                   |
| strength             | int    | 1          | 咖啡的强度（1-12级）                                         |
| capAmount            | int    | 1          | 咖啡杯量（1-12级）                                           |
| aroma                | int    | 2          | 咖啡香调（1-3）                                              |
| acidity              | int    | 3          | 咖啡酸度（1-12级）                                           |
| bitterness           | int    | 4          | 咖啡苦度（1-12级）                                           |
| alcohol              | int    | 1          | 醇厚度（1-12级）                                             |
| degreeofBaking       | int    | 3          | 烘焙度（1-12级）                                             |
| coffeeClassification | int    | 6          | 咖啡分类（1-6）                                              |
| price                | double | 120.1      | 价格                                                         |
| discountPrice        | double | 120.0      | 折后价                                                       |
| taste                | string | 121211     | 根据口味生成6个数字组成的字符串<br/>0 1 2 ：苦 甜 酸<br/>0 1 ：软 脆<br/>0 1 ：浓烈 温和<br/>0 1 2 ：提神 快乐 二者都有<br/>0 1 ：黑咖啡 牛奶咖啡<br/>0 1 2 ：小杯（25ml） 中杯(40ml) 大杯(110ml) |
| img                  | file   | 上传的图片 | 咖啡胶囊的图片，至少1个，最多5个                             |
| id                   | int    | 2          | 需要修改的咖啡胶囊的id                                       |

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "message": "修改咖啡胶囊成功"
}
~~~

### 12.  删除咖啡胶囊接口：http://192.168.97.240:3000/deletecoffCap

### 	 类型：  ==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key  | Type | Value 示例 | Description            |
| ---- | ---- | ---------- | ---------------------- |
| id   | int  | 10         | 需要删除的咖啡胶囊的id |

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "message": "删除成功haha"
}
~~~







## 咖啡机


### 20.  添加咖啡机接口：http://192.168.97.240:3000/addCoffeeMachine

### 	 类型： ==from-data==

==前端需要发送的字段==：

| Key              | Type   | Value 示例       | Description    |
| ---------------- | ------ | ---------------- | -------------- |
| npsCommodity     | int    | 1                | 商品分类 0-1   |
| color            | int    | 2                | 咖啡机颜色 1-7 |
| price            | double | 12.1             | 价格           |
| discountPrice    | double | 12.1             | 折后价         |
| specifications   | int    | 1                | 规格           |
| manual           | string | 说明书的连接     | 说明书 pdf     |
| cmachineclass    | int    | 1                | 分类           |
| name             | string | 咖啡机112        | 名字           |
| coffeeMachineimg | file   | 4 files selected | 图片           |

​		==后台返回数据：==  商品不能重名，否则失败

~~~javascript
{
    "status": 200,
    "message": "添加信息成功"
}
~~~

### 21.  修改咖啡机接口：http://192.168.97.240:3000/updateCoffeeMachine

### 	 类型： ==from-data==

==前端需要发送的字段==：

| Key              | Type   | Value 示例       | Description    |
| ---------------- | ------ | ---------------- | -------------- |
| npsCommodity     | int    | 1                | 商品分类 0-1   |
| color            | int    | 2                | 咖啡机颜色 1-7 |
| price            | double | 12.1             | 价格           |
| discountPrice    | double | 12.1             | 折后价         |
| specifications   | int    | 1                | 规格           |
| manual           | string | 说明书的连接     | 说明书 pdf     |
| cmachineclass    | int    | 1                | 分类           |
| name             | string | 咖啡机112        | 名字           |
| coffeeMachineimg | file   | 4 files selected | 图片           |

​		==后台返回数据：==  

~~~javascript
{
  "status": 200,
  "message": "修改信息成功"
}
~~~

