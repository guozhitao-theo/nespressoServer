let nodemailer = require('nodemailer')
let config = require('../config/config')
// 创建smtp对象 
var transporter = nodemailer.createTransport(config.emailConfig);
// 发送邮件
function send(mail){
  return new Promise((resolve,reject) => {
    transporter.sendMail(mail, function(error, info){
      if(error) {
        reject(error)
          return console.log(error);
      } else {
      }
      console.log('mail sent:', info.response);
    })
  })
};

let recipient = (recipient, text) => {
  // 创建一个邮件对象
  var mail = {
    // 发件人
    from: '2622353599@qq.com',
    // 主题
    subject: '注册',
    // 收件人
    to: recipient,
    // 邮件内容，HTML格式
    text: text //可以是链接，也可以是验证码
    
  };
  send(mail);
}
module.exports = recipient
