module.exports = {
    errClass: 'error',
    selectDom: function(dom) {
        var domArr = document.getElementsByTagName('input');
        var ele = '';
        domArr = [].slice.apply(domArr);
        for (var i = 0; i < domArr.length; i++) {
            var name = domArr[i].getAttribute('name');
            if (name == dom) {
                ele = domArr[i];
                break
            }
        }
        return ele;
    },
    events: function(dom) {
        var err = this.errClass;
        dom.addEventListener('focus', this.removeClass, false);
    },
    removeClass: function() {
        var names = this.getAttribute('class'),
            err = validate.errClass;
        this.value = "";
        if (names.match(err)) {
            var s = this.getAttribute('class').split(err);
            this.setAttribute('class', s[0]);
        }
    },
    errClassFun: function(dom) {
    	var names=dom.getAttribute('class').match(this.errClass) ;
    	if(!names){
        	var err = dom.getAttribute('class') + ' ' + this.errClass;
        	dom.setAttribute('class', err);
        }
    },
    errMes:function(dom,option){
    	this.errClassFun(dom);
        dom.value = '请输入正确的' + option.message;
        return false;
    },
    userName: function(option) {
        var dom = this.selectDom(option.ele);
        this.events(dom);
        if (!this.empty(option, dom)) {
            return false;
        }
        if (/\.|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\-|\+\{|\}|\<|\>|\?|\/|\\/g.test(dom.value)) {
            return this.errMes(dom,option);
        }
        return true;
    },
    cardId: function(option) {
        var dom = this.selectDom(option.ele);
        var val = dom.value;
        this.events(dom);
        if (!this.empty(option, dom)) {
            return false
        }
        if (!(/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(val))) {
            return this.errMes(dom,option);
        }
        if (val.length == 18) {
            val = val.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            //校验位
            var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
            var sum = 0,ai = 0,wi = 0;
            for (var i = 0; i < 17; i++) {
                ai = val[i];
                wi = factor[i];
                sum += ai * wi;
            }
            var last = parity[sum % 11];
            if (parity[sum % 11] != val[17]) {
              	return this.errMes(dom,option);
            }
        }
        return true;
    },
    mobile: function(option) {
        var dom = this.selectDom(option.ele);
        this.events(dom);
        if (!this.empty(option, dom)) {
            return false
        }
        if (!(/^1(3|5|7|8)\d{9}/g.test(dom.value))) {
            return this.errMes(dom,option);
        }
        return true;
    },
    email: function(option) {
        var dom = this.selectDom(option.ele);
        this.events(dom);
        if (!this.empty(option, dom)) {
        	return false
        }
        if (!(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(dom.value))) {
            return this.errMes(dom,option);
        }
        return true;
    },
    birthday:function(option){
    	var dom = this.selectDom(option.ele);
        this.events(dom);
        if (!this.empty(option, dom)) {
            return false
        }
    },
    empty: function(option, dom) {
        var val = dom.value;
        if (!val) {
            this.errClassFun(dom);
            dom.value = option.message + '不能为空';
            option.required = false;
            return false
        }
        return true;
    }
}
