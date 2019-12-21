[TOC] 

 # 所有的接口都为 ==post==方式请求

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
| capAmount            | int    | 1          | 咖啡杯量（1-4）                                              |
| aroma                | int    | 2          | 咖啡香调（1-12）                                             |
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

==前端需要发送的字段==：可传其中某个字段或者不传

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



### 13.  获取商品分类接口：http://192.168.97.240:3000/getgoodsClass

​		==后台返回数据：==  

~~~javascript
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "commodityName": "咖啡机"
        },
        {
            "id": 2,
            "commodityName": "咖啡胶囊"
        }
    ],
    "message": "获取商品分类成功"
}
~~~

### 14.  获取咖啡杯量接口：http://192.168.97.240:3000/getCoffCapamount

​		==后台返回数据：==

```javascript
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "amount": "小杯(25ml)"
        },
        {
            "id": 2,
            "amount": "中杯(40ml)"
        },
        {
            "id": 3,
            "amount": "大杯(80ml)"
        },
        {
            "id": 4,
            "amount": "超大杯(110ml)"
        }
    ],
    "message": "获取咖啡杯量成功"
}
```

### 15.  获取咖啡香调接口：http://192.168.97.240:3000/getCoffCaparoma

​		==后台返回数据：==

  ```javascript
{
    "status": 200,
    "data": [
        {
            "aromaId": 1,
            "value": "果香/酒香",
            "fragrance": 1,
            "descript": "果香/酒香 的描述"
        },
        {
            "aromaId": 2,
            "value": "花香",
            "fragrance": 1,
            "descript": "花香 的描述"
        },
        {
            "aromaId": 3,
            "value": "柑橘香",
            "fragrance": 1,
            "descript": "柑橘香 的描述"
        },
        {
            "aromaId": 4,
            "value": "饼干香",
            "fragrance": 2,
            "descript": "饼干香的描述"
        },
        {
            "aromaId": 5,
            "value": "谷物香",
            "fragrance": 2,
            "descript": "谷物香 的描述"
        },
        {
            "aromaId": 6,
            "value": "烘焙香",
            "fragrance": 2,
            "descript": "烘焙香的描述"
        },
        {
            "aromaId": 7,
            "value": "蜂蜜香",
            "fragrance": 2,
            "descript": "蜂蜜香的描述"
        },
        {
            "aromaId": 8,
            "value": "辛辣香",
            "fragrance": 3,
            "descript": "辛辣香的描述"
        },
        {
            "aromaId": 9,
            "value": "麦芽香",
            "fragrance": 3,
            "descript": "麦芽香的描述"
        },
        {
            "aromaId": 10,
            "value": "木本香",
            "fragrance": 3,
            "descript": "木本香的描述"
        },
        {
            "aromaId": 11,
            "value": "可可香",
            "fragrance": 3,
            "descript": "可可香的描述"
        },
        {
            "aromaId": 12,
            "value": "深度烘焙",
            "fragrance": 3,
            "descript": "深度烘焙的描述"
        }
    ],
    "message": "获取香调成功"
}
  ```

### 16.  获取咖啡分类接口：http://192.168.97.240:3000/getCoffCapClassification

​		==后台返回数据：==

```javascript
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "className": "浓烈咖啡",
            "descript": "浓烈咖啡的描述"
        },
        {
            "id": 2,
            "className": "浓缩咖啡",
            "descript": "浓烈咖啡的描述"
        },
        {
            "id": 3,
            "className": "大杯咖啡",
            "descript": "大杯咖啡的描述"
        },
        {
            "id": 4,
            "className": "低咖啡因咖啡",
            "descript": "低咖啡因咖啡描述"
        },
        {
            "id": 5,
            "className": "风味咖啡",
            "descript": "风味咖啡描述"
        },
        {
            "id": 6,
            "className": "大师匠心之作",
            "descript": "大师匠心之作的描述"
        }
    ],
    "message": "获取咖啡的分类"
}
```

### 17.  分页获取咖啡胶囊接口：http://192.168.97.240:3000/getcoffeeCap

### 	 类型：  ==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key   | Type | Value 示例 | Description |
| ----- | ---- | ---------- | ----------- |
| page  | int  | 1          | 页码        |
| count | int  | 2          | 数量        |

​		==后台返回数据：==

```javascript
{
    "status": 200,
    "data": [
        {
            "id": 59,
            "classification": 2,
            "name": "拿铁111",
            "title": "你去看人家的哇嘎也",
            "img": "[\"coffeeCap/img_1576661189875_002.jpg\",\"coffeeCap/img_1576661189876_007.jpg\",\"coffeeCap/img_1576661190209_008.jpg\"]",
            "description": "娃娃啊",
            "bakingDescription": "烘焙",
            "placefOrigin": "中国",
            "strength": 1,
            "capAmount": 1,
            "aroma": 12,
            "acidity": 3,
            "bitterness": 4,
            "alcohol": 1,
            "degreeofBaking": 3,
            "coffeeClassification": 6,
            "price": 120.1,
            "discountPrice": 120,
            "taste": "121211",
            "createTime": "2019-12-18T09:26:30.000Z",
            "aromaId": 12,
            "value": "浓烈系列",
            "fragrance": 3,
            "descript": "浓烈系列的描述",
            "fragranceId": 3
        },
        {
            "id": 54,
            "classification": 2,
            "name": "拿铁111",
            "title": "你去看人家的哇嘎也",
            "img": "[\"coffeeCap/img_1576635518748_002.jpg\",\"coffeeCap/img_1576635518749_007.jpg\",\"coffeeCap/img_1576635518776_008.jpg\"]",
            "description": "娃娃啊",
            "bakingDescription": "烘焙",
            "placefOrigin": "中国",
            "strength": 1,
            "capAmount": 1,
            "aroma": 2,
            "acidity": 3,
            "bitterness": 4,
            "alcohol": 1,
            "degreeofBaking": 3,
            "coffeeClassification": 6,
            "price": 120.1,
            "discountPrice": 120,
            "taste": "121211",
            "createTime": "2019-12-18T02:18:38.000Z",
            "aromaId": 2,
            "value": "果香型",
            "fragrance": 1,
            "descript": "果香型的描述",
            "fragranceId": 1
        }
    ],
    "message": "分类查询成功"
}
```



# 咖啡机

### 18.  获取咖啡机列表接口：http://192.168.97.240:3000/getCoffeeMachineLists

​		==后台返回数据：==  

```javascript
{
    "status": 200,
    "data": [
        {
            "cmachineproductsId": 1,
            "npsCommodity": 1,
            "color": 2,
            "img": "[\"coffeeMachine/coffeeMachineimg_1576197909849_005.jpg\",\"coffeeMachine/coffeeMachineimg_1576197909852_006.jpg\",\"coffeeMachine/coffeeMachineimg_1576197909853_007.jpg\",\"coffeeMachine/coffeeMachineimg_1576197909966_008.jpg\"]",
            "price": 12.1,
            "discountPrice": 14.1,
            "specifications": 1,
            "manual": "说明书的连接",
            "createTime": "2019-12-13T00:45:09.000Z",
            "cmachineclass": 1,
            "name": "咖啡机112",
            "commodityName": "咖啡机",
            "value": "白色",
            "weight": "5kg",
            "capacity": "500ml",
            "size": "15*70*20",
            "pressure": "50pa",
            "auto_shoutD": "0",
            "water_tank": "1",
            "height_pressure_extraction": "1",
            "origin": "中国",
            "app_connection": "1",
            "milk_form_system": "1",
            "cupAmount": 1,
            "preheatTime": "70s"
        },
        {
            "cmachineproductsId": 1,
            "npsCommodity": 1,
            "color": 2,
            "img": "[\"coffeeMachine/coffeeMachineimg_1576562297634_005.jpg\",\"coffeeMachine/coffeeMachineimg_1576562297635_006.jpg\",\"coffeeMachine/coffeeMachineimg_1576562297635_007.jpg\",\"coffeeMachine/coffeeMachineimg_1576562297752_008.jpg\"]",
            "price": 12.1,
            "discountPrice": 14.1,
            "specifications": 1,
            "manual": "说明书的连接",
            "createTime": "2019-12-17T05:58:17.000Z",
            "cmachineclass": 1,
            "name": "咖啡机1122",
            "commodityName": "咖啡机",
            "value": "白色",
            "weight": "5kg",
            "capacity": "500ml",
            "size": "15*70*20",
            "pressure": "50pa",
            "auto_shoutD": "0",
            "water_tank": "1",
            "height_pressure_extraction": "1",
            "origin": "中国",
            "app_connection": "1",
            "milk_form_system": "1",
            "cupAmount": 1,
            "preheatTime": "70s"
        }
    ],
    "message": "获取咖啡机列表成功"
}
```

### 19.  分页获取咖啡机接口：http://192.168.97.240:3000/getCoffeeMachineBypage

### 	 类型：  ==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key   | Type | Value 示例 | Description    |
| ----- | ---- | ---------- | -------------- |
| page  | int  | 1          | 咖啡机的页码   |
| count | int  | 1          | 咖啡机单页数量 |

​		==后台返回数据：==  

```javascript
{
    "status": 200,
    "data": [
        {
            "cmachineproductsId": 59,
            "classification": 2,
            "name": "拿铁111",
            "title": "你去看人家的哇嘎也",
            "img": "[\"coffeeCap/img_1576661189875_002.jpg\",\"coffeeCap/img_1576661189876_007.jpg\",\"coffeeCap/img_1576661190209_008.jpg\"]",
            "description": "娃娃啊",
            "bakingDescription": "烘焙",
            "placefOrigin": "中国",
            "strength": 1,
            "capAmount": 1,
            "aroma": 12,
            "acidity": 3,
            "bitterness": 4,
            "alcohol": 1,
            "degreeofBaking": 3,
            "coffeeClassification": 6,
            "price": 120.1,
            "discountPrice": 120,
            "taste": "121211",
            "createTime": "2019-12-18T09:26:30.000Z",
            "aromaId": 12,
            "value": "浓烈系列",
            "fragrance": 3,
            "descript": "浓烈系列的描述",
            "fragranceId": 3
        }
    ],
    "message": "分类查询成功"
}
```

### 20.  获取咖啡机列表接口：http://192.168.97.240:3000/getCoffeeMachineLists

​		==后台返回数据：== 

```javascript
{
    "status": 200,
    "data": [
        {
            "cmachineproductsId": 1,
            "npsCommodity": 1,
            "color": 2,
            "img": "[\"coffeeMachine/coffeeMachineimg_1576197909849_005.jpg\",\"coffeeMachine/coffeeMachineimg_1576197909852_006.jpg\",\"coffeeMachine/coffeeMachineimg_1576197909853_007.jpg\",\"coffeeMachine/coffeeMachineimg_1576197909966_008.jpg\"]",
            "price": 12.1,
            "discountPrice": 14.1,
            "specifications": 1,
            "manual": "说明书的连接",
            "createTime": "2019-12-13T00:45:09.000Z",
            "cmachineclass": 1,
            "name": "咖啡机112",
            "commodityName": "咖啡机",
            "value": "白色",
            "weight": "5kg",
            "capacity": "500ml",
            "size": "15*70*20",
            "pressure": "50pa",
            "auto_shoutD": "0",
            "water_tank": "1",
            "height_pressure_extraction": "1",
            "origin": "中国",
            "app_connection": "1",
            "milk_form_system": "1",
            "cupAmount": 1,
            "preheatTime": "70s"
        },
        {
            "id": 1,
            "npsCommodity": 1,
            "color": 2,
            "img": "[\"coffeeMachine/coffeeMachineimg_1576562297634_005.jpg\",\"coffeeMachine/coffeeMachineimg_1576562297635_006.jpg\",\"coffeeMachine/coffeeMachineimg_1576562297635_007.jpg\",\"coffeeMachine/coffeeMachineimg_1576562297752_008.jpg\"]",
            "price": 12.1,
            "discountPrice": 14.1,
            "specifications": 1,
            "manual": "说明书的连接",
            "createTime": "2019-12-17T05:58:17.000Z",
            "cmachineclass": 1,
            "name": "咖啡机1122",
            "commodityName": "咖啡机",
            "value": "白色",
            "weight": "5kg",
            "capacity": "500ml",
            "size": "15*70*20",
            "pressure": "50pa",
            "auto_shoutD": "0",
            "water_tank": "1",
            "height_pressure_extraction": "1",
            "origin": "中国",
            "app_connection": "1",
            "milk_form_system": "1",
            "cupAmount": 1,
            "preheatTime": "70s"
        }
    ],
    "message": "获取咖啡机列表成功"
}
```




### 21.  添加咖啡机接口：http://192.168.97.240:3000/addCoffeeMachine

### 	 类型： ==from-data==

==前端需要发送的字段==：

| Key              | Type   | Value 示例       | Description    |
| ---------------- | ------ | ---------------- | -------------- |
| npsCommodity     | int    | 1                | 商品分类 0-1   |
| color            | int    | 2                | 咖啡机颜色 1-8 |
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

### 22.  修改咖啡机接口：http://192.168.97.240:3000/updateCoffeeMachine

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

### 23.  删除咖啡机接口：http://192.168.97.240:3000/deleteCoffeeMachine

### 	 类型：==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key  | Type | Value 示例 | Description        |
| ---- | ---- | ---------- | ------------------ |
| id   | int  | 1          | 要删除的咖啡机的id |

​		==后台返回数据：==  

```javascript
{
    "status": 500,
    "message": "这个id的商品不存在"
}
```

### 24.  获取咖啡机规格：http://192.168.97.240:3000/getspecifications

### 	 		==后台返回数据：==  

```javascript
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "weight": "5kg",
            "capacity": "500ml",
            "size": "15*70*20",
            "pressure": "50pa",
            "auto_shoutD": "0",
            "water_tank": "1",
            "height_pressure_extraction": "1",
            "origin": "中国",
            "app_connection": "1",
            "milk_form_system": "1",
            "cupAmount": 1,
            "preheatTime": "70s"
        },
        {
            "id": 2,
            "weight": "5kg",
            "capacity": "500ml",
            "size": "15*70*20",
            "pressure": "50pa",
            "auto_shoutD": "0",
            "water_tank": "1",
            "height_pressure_extraction": "1",
            "origin": "中国",
            "app_connection": "1",
            "milk_form_system": "1",
            "cupAmount": 1,
            "preheatTime": "70s"
        },
        {
            "id": 3,
            "weight": "5kg",
            "capacity": "500ml",
            "size": "15*70*20",
            "pressure": "50pa",
            "auto_shoutD": "0",
            "water_tank": "1",
            "height_pressure_extraction": "1",
            "origin": "中国",
            "app_connection": "1",
            "milk_form_system": "1",
            "cupAmount": 1,
            "preheatTime": "70s"
        }
    ],
    "message": "获取咖啡机规格成功"
}
```

### 25.  获取咖啡机规格：http://192.168.97.240:3000/getcMachineClass

### 	 		==后台返回数据：==  

```javascript
{
    "status": 200,
    "data": [
        {
            "id": 1,
            "name": "牛奶和拿铁的咖啡机",
            "title": "牛奶和拿铁的咖啡机",
            "descript": "使用Basista一样的定制设置来创建各种咖啡和牛奶配方或通过一键触控系统，让自己沉醉在 Creatista or Lattissima制作的咖啡品享中。购买咖啡机"
        },
        {
            "id": 2,
            "name": "方便快捷的浓缩咖啡机",
            "title": "方便快捷的浓缩咖啡",
            "descript": "选择方便快捷简单操作直观的咖啡机。不妨了解下 Pixie, Pixie Clips, Essenza Mini, Inissia, Citiz "
        },
        {
            "id": 3,
            "name": "个性化的浓缩咖啡机机",
            "title": "个性化的浓缩咖啡机机",
            "descript": "想象自己是一个专业的咖啡师？用Creatista或者连接Nespresso Expert 咖啡机在家就可以制备一杯个性化的咖啡"
        }
    ],
    "message": "获取咖啡机分类成功"
}
```

### 26.  按颜色获取咖啡机：http://192.168.97.240:3000/getCoffeeMachineByColor

==前端需要发送的字段==：

| Key   | Type | Value 示例 | Description                                                  |
| ----- | ---- | ---------- | ------------------------------------------------------------ |
| color | int  | 1          | 颜色对应的数字<br />1 红色<br />2 白色<br />3 黑色<br />4 灰色<br />5 黄色<br />6 绿色<br />7 米黄色<br />8 深红色（红棕色） |

​		==后台返回数据：==  

```javascript
{
    "status": 500,
    "message": "该颜色无对应商品"
}
```

# 订单

### 27.  添加订单：http://192.168.97.240:3000/addUserOrder

### 类型：  ==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key    | Type   | Value 示例                                        | Description                                                  |
| ------ | ------ | ------------------------------------------------- | ------------------------------------------------------------ |
| userId | int    | 1                                                 | 用户id                                                       |
| status | int    | 1                                                 | 订单状态                                                     |
| goods  | string | [{"npscommodity":43,"commodity":2,"quantity":10}] | 传数组转成 的json字符串<br />对象中为一个商品，多个对象为多个商品，商品不能重复，<br />npscommodity：商品的id<br />commodity: 商品分类<br />quantity：商品数量 |

​		==后台返回数据：==  

```javascript
{
    "status": 200,
    "result": "https://openapi.alipaydev.com/gateway.do?method=alipay.trade.page.pay&app_id=2016101500692746&charset=utf-8&version=1.0&sign_type=RSA2&timestamp=2019-12-19%2012%3A12%3A51&return_url=http%3A%2F%2F192.168.97.240%3A3000%2Fpublic%2F&notify_url=http%3A%2F%2F192.168.97.240%3A3000%2Fpublic%2F&sign=c1uSdBCjt5FEKJ6i1mekHvvu%2FzWMQHg8TBFZwTTeRL%2FdIi%2BADAPw%2BcSSFwUiuITK3K2iQe1qC2P13VxHcaTXOHjDRg4X6QADauYfbzfxhE2Jh%2B0%2Bkv4AlqGQC7r65b55mlqlOzjvSaTwWiOtrQzwhRghjBeBxeObh5gbjcp%2BDWiRjo7C7fxTf4OVqjujVqCUcMy6Sh2ENo6mJwrveXbwBOhiZv%2FAO8DXxgbPZtxS8Byvn%2FWKZr5AwmQCxiajKvBGnUc3fOihSoeeXyWMTrSjtONkUOcpcDFH0SAytHlUNse22bsxAWiESlZEUmIqX6HDW%2BH9MP4Ae4hyhtGxWZcDIw%3D%3D&alipay_sdk=alipay-sdk-nodejs-3.0.8&biz_content=%7B%22out_trade_no%22%3A1576728771624%2C%22product_code%22%3A%22FAST_INSTANT_TRADE_PAY%22%2C%22total_amount%22%3A1200%2C%22subject%22%3A%22%E8%AE%A2%E5%8D%95%E5%90%8D%E7%A7%B0%22%2C%22timeout_express%22%3A%225m%22%2C%22passback_params%22%3A%22%7B%5C%22userId%5C%22%3A%5C%221%5C%22%2C%5C%22status%5C%22%3A%5C%221%5C%22%2C%5C%22goods%5C%22%3A%5C%22%5B%7B%5C%5C%5C%22npscommodity%5C%5C%5C%22%3A43%2C%5C%5C%5C%22commodity%5C%5C%5C%22%3A2%2C%5C%5C%5C%22quantity%5C%5C%5C%22%3A10%7D%5D%5C%22%7D%22%7D",
    "data": {
        "allTotal": 1200,
        "orderNumber": 1576728771624
    },
    "message": "添加订单成功"
}
```

跳转链接为==result==的值

### 28.  添加购物车：http://192.168.97.240:3000/addCart

### 类型：  ==x-www-form-urlencoded==

==前端需要发送的字段==：

| Key    | Type   | Value 示例                                                   | Description                                                  |
| ------ | ------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| userId | int    | 1                                                            | 用户id                                                       |
| status | int    | 0                                                            | 订单状态,0表示在购物车，1表示已经付款                        |
| goods  | string | [{"npscommodity":59,"commodity":2,"quantity":100},{"npscommodity":40,"commodity":1,"quantity":100}] | 传数组转成 的json字符串<br />对象中为一个商品，多个对象为多个商品，商品不能重复，<br />npscommodity：商品的id<br />commodity: 商品分类<br />quantity：商品数量 |

​		

### 29. 获取购物车：http://192.168.97.240:3000/getCart

### 类型：  ==x-www-form-urlencoded==

==前端需要发送的字段==：



| Key    | Type | Value 示例 | Description                              |
| ------ | ---- | ---------- | ---------------------------------------- |
| userId | int  | 1          | 用户id                                  
​ |
​		==后台返回数据：==  

```javascript
{
    "status": 200,
    "message": "获取购物车列表成功",
    "data": [
        {
            "addCartId": 3,
            "npscommodity": 1,
            "commodity": 40,
            "userId": 1,
            "quantity": 10,
            "totalPrice": 1320,
            "STATUS": "0",
            "commodityName": "咖啡机",
            "name": "咖啡机名",
            "price": 102.2,
            "discountPrice": 132,
            "createTime": "2019-12-20T10:25:24.000Z",
            "cmachineproductsId": 40,
            "npsCommodity": 1,
            "color": 4,
            "cMachineImg": "[\"coffeeMachine/coffeeMachineimg_1576837524893_lists7.png\"]",
            "specifications": 1,
            "manual": "书明书链接",
            "cmachineclass": 1
        },
        {
            "addCartId": 1,
            "npscommodity": 2,
            "commodity": 59,
            "userId": 1,
            "quantity": 10,
            "totalPrice": 1200,
            "STATUS": "0",
            "id": 59,
            "commodityName": "咖啡胶囊",
            "classification": 2,
            "title": "你去看人家的哇嘎也",
            "img": "[\"coffeeCap/img_1576661189875_002.jpg\",\"coffeeCap/img_1576661189876_007.jpg\",\"coffeeCap/img_1576661190209_008.jpg\"]",
            "description": "娃娃啊",
            "bakingDescription": "烘焙",
            "placefOrigin": "中国",
            "strength": 1,
            "capAmount": 1,
            "aroma": 12,
            "acidity": 3,
            "bitterness": 4,
            "alcohol": 1,
            "degreeofBaking": 3,
            "coffeeClassification": 6,
            "taste": "121211"
        }
    ]
}
```

### 30. 获取订单列表：http://192.168.97.240:3000/getOrderList

==后台返回数据：==  

```javascript
{
    "status": 200,
    "data": [
        {
            "id": 58,
            "npscommodity": 2,
            "commodity": 59,
            "userId": 1,
            "quantity": 10,
            "orderNumber": "1576738702885",
            "totalPrice": 1200,
            "status": "1",
            "createTime": "2019-12-19T06:58:22.000Z"
        }
    ],
    "message": "获取订单成功"
}
```

### 31. 获取购物车列表：http://192.168.97.240:3000/getCartList

==后台返回数据：==  

```javascript
{
    "status": 200,
    "data": [
        {
            "addCartId": 3,
            "npscommodity": 1,
            "commodity": 40,
            "userId": 1,
            "quantity": 10,
            "totalPrice": 1320,
            "STATUS": "0"
        },
        {
            "addCartId": 1,
            "npscommodity": 2,
            "commodity": 59,
            "userId": 1,
            "quantity": 10,
            "totalPrice": 1200,
            "STATUS": "0"
        }
    ],
    "message": "获取购物车列表成功"
}
```

### 31. 获取用户信息：http://192.168.97.240:3000/getinfor

==后台返回数据：==  

```javascript
{
    "status": 200,
    "message": "获取顾客信息成功",
    "data": [
        {
            "inforId": 50,
            "title": "小姐",
            "firstName": "小白",
            "lastName": "徐",
            "customerNumber": null,
            "chooseLocation": "中国香港 (Hong Kong)",
            "email": "2310171316@qq.com",
            "phone": "18334145203",
            "postCode": "561000",
            "MessageCategory": "订单信息与查询",
            "repliedLanguage": "中文",
            "capsuleType": "2",
            "subject": "今天是星期一",
            "message": "我是张三",
            "attachment": "infor/file_1576810287011_Desert.jpg",
            "createTime": "2019-12-21T07:36:09.000Z"
        },
        {
            "inforId": 51,
            "title": "小姐",
            "firstName": "小白",
            "lastName": "徐",
            "customerNumber": null,
            "chooseLocation": "中国香港 (Hong Kong)",
            "email": "2310171316@qq.com",
            "phone": "18334145203",
            "postCode": "561000",
            "MessageCategory": "订单信息与查询",
            "repliedLanguage": "中文",
            "capsuleType": "2",
            "subject": "今天是星期一",
            "message": "我是张三",
            "attachment": "infor/file_1576810287035_Desert.jpg",
            "createTime": "2019-12-21T07:36:09.000Z"
        },
        {
            "inforId": 52,
            "title": "先生",
            "firstName": "西草佰",
            "lastName": "徐",
            "customerNumber": null,
            "chooseLocation": "中国",
            "email": "2310171316@qq.com",
            "phone": "18334145203",
            "postCode": "561000",
            "MessageCategory": "产品信息",
            "repliedLanguage": "中文",
            "capsuleType": "1",
            "subject": "飞得更高三个发",
            "message": "放给三个",
            "attachment": "infor/file_1576837176944_Koala.jpg",
            "createTime": "2019-12-21T07:36:09.000Z"
        }
    ]
}
```

