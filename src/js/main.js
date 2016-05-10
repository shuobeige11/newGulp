var validate = require('./validate.js');
var $ = require('./zepto.js');

$('.lm_btn').click(function() {
   var name1 = validate.userName({ele: 'name1',message: '投保人信息'});
   var IDcard = validate.cardId({ele: 'IDcard',message: '身份证号码'});
   var phone = validate.mobile({ele: 'phone',message: '手机号码'});
   var name2 = validate.userName({ele: 'name2',message: '被保人信息'});
   var birthday = validate.birthday({ele: 'birthday',message: '被保人'});  
   if(!name1 || !IDcard || !phone || !name2 || !birthday) return; 

});
