/**
 * @description 表单验证类 验证规则配置对象，与validator.js配合实现表单验证
 * @author 
 */
var return_flag=false;
(function(){
	var g_userName="";
	var g_userName_error="";
	var flag="ing";
	var g_psuserName="";
	var g_psuserName_error="";
	var g_psanswer="";
	var g_psanswer_error="";
	var g_answerlen="";
	var g_answerlen_error="";
	var g_email="";
	var g_email_error="";
	var g_freeEmail="";
	var g_freeEmail_error="";
	var g_tyEmail="";
	var g_tyEmail_error="";
	var g_mobile="";
	var g_mobile_error="";
	var g_password="";
	var g_password_error="";
	var g_vEmail="";
	var g_vEmail_error="";
	var g_tianyaCode="";
	var g_tianyaCode_error="";
	var g_psquestion="";
	var g_psquestion_error="";
	
	var CHECK_URL = 'checkUserName';
	
	/**
	 * 用户名的AJAX请求服务端检查
	 */	
	function checkUsername(e, v) {
		if(g_userName!=e.value) {
			g_userName=e.value;
			return_flag=false;
		}else {	
			return g_userName_error;
		}
		g_userName_error="";
		var result = '';
		var obj={};
		obj['_r']=new Date().getTime();
		obj['model.username']=e.value;
		jQuery.post(CHECK_URL,obj,function(data){
			//data = jQuery.trim(data);		
			if(data) {
				if (data.resultCode == "1001") {
					g_userName_error=data;
					v.showMsg(e, data.msg,'');
				}/* else if (data == 2) {
					v.showMsg(e, '含有特殊字符，请换用户名','');
				} else if (isNaN(data)) {
					g_userName_error=data;
					v.showMsg(e, data,'');
				}*/
			} else {
				v.showMsg(e, 'error','');
			}
		},'json');
	}
	
	/**根据用户名检验用户是否有密码提示问题
	 * 用户名的AJAX请求服务端检查
	 */	
	function checkPsUsername(e, v) {
		if(g_psuserName!=e.value) {
			g_psuserName=e.value;
		}else {
			return g_psuserName_error;
		}
		g_psuserName_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'psname',userName:e.value,onlyname: jQuery(e).attr('onlyname'),_r:new Date().getTime()},function(data){
			data = jQuery.trim(data);
			if(data) {
				if(data==-1) {
					v.showMsg(e, 'correct','');
				} else if (data == 3) {
					v.showMsg(e, '含有系统保留字符，请换用户名','');
				} else if (isNaN(data)) {
					g_psuserName_error=data;
					v.showMsg(e, data,'');
				}
			} else {
				v.showMsg(e, 'error','');
			}
		});
	}
	/**检查密码提示问题是否和用户输入的一致
	 * 用户名的AJAX请求服务端检查
	 */	
	function checkPsQuestion(e, v) {
		if(g_psquestion!=e.value) {
			g_psquestion=e.value;
		}else {
			return g_psquestion_error;
		}
		g_psquestion_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'psquestion',question:e.value,uname: jQuery(e).attr('uname'),_r:new Date().getTime()},function(data){
			data = jQuery.trim(data);
			if(data) {
				if(data==-1) {
					v.showMsg(e, 'correct','');
				} else if (data == 3) {
					v.showMsg(e, '含有系统保留字符，请换用户名','');
				} else if (isNaN(data)) {
					g_psquestion_error=data;
					v.showMsg(e, data,'');
				}
			} else {
				v.showMsg(e, 'error','');
			}
		});
	}
	/**检查用户的密码提示问题的回答是否正确
	 * 用户名的AJAX请求服务端检查
	 */	
	function checkPsAnswer(e, v) {
		if(g_psanswer!=e.value) {
			g_psanswer=e.value;
		}else {
			return g_psanswer_error;
		}
		g_psanswer_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'psanswer',uname: jQuery(e).attr('uname'),ulen:jQuery(e).attr('ulen'),answer:e.value,_r:new Date().getTime()},function(data){
			data = jQuery.trim(data);
			if(data) {
				if(data==-1) {
					v.showMsg(e, 'correct','');
				} else if (data == 3) {
					v.showMsg(e, '含有系统保留字符，请换用户名','');
				} else if (isNaN(data)) {
					g_psanswer_error=data;
					v.showMsg(e, data,'');
				}
			} else {
				v.showMsg(e, 'error','');
			}
		});
	}
	/**检查密码提示问题答案检查：检查长度、回答是否和问题一样
	 * 用户名的AJAX请求服务端检查
	 */	
	function checkAnswerLen(e, v) {
		if(g_answerlen!=e.value) {
			g_answerlen=e.value;
		}else {
			return g_answerlen_error;
		}
		g_answerlen_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'answerlen',uquestion: jQuery(e).attr('uquestion'),ulen: jQuery(e).attr('ulen'),answer:e.value,_r:new Date().getTime()},function(data){
			data = jQuery.trim(data);
			if(data) {
				if(data==-1) {
					v.showMsg(e, 'correct','');
				} else if (data == 3) {
					v.showMsg(e, '含有系统保留字符，请换用户名','');
				} else if (isNaN(data)) {
					g_answerlen_error=data;
					v.showMsg(e, data,'');
				}
			} else {
				v.showMsg(e, 'error','');
			}
		});
	}
	/**
	 * 用户名的AJAX请求服务端检查
	 */	
	function checkPsEmail(e, v) {
		if(g_email!=e.value) {
			g_email=e.value;
		}else {
			return g_email_error;
		}
		g_email_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'psemail',email:e.value,_r:new Date().getTime()},function(data){
			data = jQuery.trim(data);
			if(data) {
				if(data==-1) {
					v.showMsg(e, 'correct','');
				} else if (data == 3) {
					v.showMsg(e, '含有系统保留字符，请换用户名','');
				} else if (isNaN(data)) {
					g_email_error=data;
					v.showMsg(e, data,'');
				}
			} else {
				v.showMsg(e, 'error','');
			}
		});
	}
	/**
	 * 用户名的AJAX请求服务端检查
	 */	
	function checkPsMobile(e, v) {
		if(g_mobile!=e.value) {
			g_mobile=e.value;
		}else {
			return g_mobile_error;
		}
		g_mobile_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'psmobile',uid: jQuery(e).attr('uid'),mobile:e.value,_r:new Date().getTime()},function(data){
			data = jQuery.trim(data);
			if(data) {
				if(data==-1) {
					v.showMsg(e, 'correct','');
				} else if (isNaN(data)) {
					g_mobile_error=data;
					v.showMsg(e, data,'');
				}
			} else {
				v.showMsg(e, 'error','');
			}
		});
	}
	

	/**
	 * 邮箱地址的AJAX请求服务端检查
	 */	
	function checkFreemail(e, v) {
		if(g_freeEmail!=e.value) {
			g_freeEmail=e.value;
		}else {
			return g_freeEmail_error;
		}
		g_freeEmail_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'email',email:e.value, _r:new Date().getTime()}, function(data){
			data = jQuery.trim(data);
			if(data && !isNaN(data) && data==-1) {
				v.showMsg(e,'correct','');
			} else {
				var info='此邮箱已经注册过,请重新输入';
				g_freeEmail_error=info;
				v.showMsg(e, info,'');
			}
		});
	}
	/**
	 * 邮箱地址的AJAX请求服务端检查
	 */	
	function checkValidateEmail(e, v) {
		if(g_vEmail!=e.value) {
			g_vEmail=e.value;
		}else {
			return g_vEmail_error;
		}
		g_vEmail_error="";
		var result = '';
		jQuery.post(CHECK_URL,{t:'validateemail',uid: jQuery(e).attr('uid'),email:e.value, _r:new Date().getTime()}, function(data){
			data = jQuery.trim(data);
			if(data && !isNaN(data) && data==-1) {
				v.showMsg(e,'correct','');
			} else {
				var info='该用户对应的邮箱地址不正确';
				g_vEmail_error=info;
				v.showMsg(e, info,'');
			}
		});
	}

	/**
	 * 天涯邮箱注册检查
	 */
	function checkTyMail(e, v) {
		if(g_tyEmail!=e.value) {
			g_tyEmail=e.value;
		}else {
			return g_tyEmail_error;
		}
		g_tyEmail_error="";
		jQuery.post(CHECK_URL,{t:'tymail',email:e.value, _r:new Date().getTime()}, function(data){
			data = jQuery.trim(data);
			if(data && !isNaN(data) && data==-1) {
				v.showMsg(e,'correct','');
			} else {
				g_tyEmail_error="已被使用";
				v.showMsg(e, '已被使用','');
			}
		});
	}
	
	
	/**
	 * 天涯用户密码检查
	 */
	function checkUserPassword(e, v) {
		if(g_password!=e.value) {
			g_password=e.value;
		}else {
			return g_password_error;
		}
		g_password_error="";
		jQuery.post(CHECK_URL,{t:'oldpassword',oldpassword:e.value,userId: jQuery(e).attr('userId'), _r:new Date().getTime()}, function(data){
			data = jQuery.trim(data);
			if(data && !isNaN(data) && data==-1) {
				v.showMsg(e,'correct','');
			} else {
				g_password_error="输入的密码不正确";
				v.showMsg(e, g_password_error,'');
			}
		});
	}
	
	/**
	 * 天涯用户密码检查
	 */
	function checkUserPassword1(e, v) {
		if(g_password!=e.value) {
			return_flag=false;
			g_password=e.value;
		}else {
			return g_password_error;
		}
		g_password_error="";
		var userName=document.getElementById("userName");
		jQuery.post(CHECK_URL,{t:'oldpassword1',oldpassword:e.value,userName: userName.value, _r:new Date().getTime()}, function(data){
			data = jQuery.trim(data);
			if(data && !isNaN(data) && data==-1) {
				v.showMsg(e,'correct','');
				return_flag=true;
			} else {
				g_password_error="输入的密码不正确";
				v.showMsg(e, g_password_error,'');
			}
		});
		
	}
	/**
	 * 天涯用户手机码检查
	 */
	function checkTianyaCode(e, v) {
		if(g_tianyaCode!=e.value) {
			g_tianyaCode=e.value;
		}else {
			return g_tianyaCode_error;
		}
		g_tianyaCode_error="";
		jQuery.post(CHECK_URL,{t:'checktianyacode',activeNo:e.value, _r:new Date().getTime()}, function(data){
			data = jQuery.trim(data);
			if(data && !isNaN(data) && data==-1) {
				v.showMsg(e,'correct','');
			} else {
				g_tianyaCode_error=data;
				v.showMsg(e, data,'');
			}
		});
	}
	
	/**
	* 简单密码
	*/
	function simplePassword(e,v){
		//重复字符
		var p=e.value;
		var f=p.charAt(0);
		var re=new RegExp("^["+f+"]+$","ig");
		if(re.test(p)){return "密码不能为重复的字符";}
		
		//连续字符
		var l=p.charCodeAt(0);
		var len=p.length-1;
		while(len>=0 && p.charCodeAt(len)==l+len--);
		if(len==-1){return "密码不能为连续的字符";}
		
		//容易被破解的密码
		 var lowPasswords = ['1234qwer','5201314'];
		  for (var i in lowPasswords) {
		    if(lowPasswords[i]==e.value){
		     //v.showMsg(e, '密码不能为连续或重复的字符','');
		     return '该密码过于简单';
		    }
		  }
	}
	
	/**
	 * 表单验证类 验证规则配置对象
	 */
	var conf = {
		/**
		 *  获取焦点时执行的函数
		 */
		'focusFn': function(el, v){
			var alt = el.alt;
			var arg = /focusFn{([^}].+?)}/.exec(alt);
			arg = (arg == null) ? false : arg[1];
			v.showMsg(e, arg,'');
		},
		'长度': {						
			msg: '{name}长度应为{range}位字符'
		},
		'minlength': {						
			msg: '{name}不能小于{minlength}位',
			fn:  function(e, v){
				var alt = (e.alt || e.getAttribute("alt"));
				var minlength =  /minlength{(\d+?)}/.exec(alt)[1];
				var val = e.value;
				return val.length < minlength ? this.msg.replace('{minlength}', minlength) : '';
			}
		},
		'相同': {						
			msg: '{name}不一致'
		},
		'输入一样': {						
			msg: '{name}与上输入一致'
		},
		'用户密码': {
			msg: '含有不允许字符',
			reg: /^[\w`~!@#$%^&*()+-=\\\]\[|\}{'";:/?.>,<]*$/
		},
		'新旧密码重复': {						
			msg: '新密码与旧密码不能一样'
		},
		"无内容": {
			msg: '请输入{name}',
			reg: /./
		},
		"天涯码无内容": {
			msg: '请输入短信中的12位数字',
			reg: /./
		},
		"无内容sel": {
			msg: '请选择{name}',
			reg: /./
		},
		"全数字": {
			msg: '{name}不能为全数字',
			reg: /[^\d]+/
		},
		"只为数字": {
			msg: '{name}只能为数字',
			reg: /^[0-9]*$/
		},
		"有数字": {
			msg: '{name}不能有数字',
			reg: /^[^\d]+$/
		},
		"有空格": {
			msg: '{name}不能包含空格符',
			reg: /^[^ 　]+$/
		},
		"邮箱地址": {
			msg: '邮箱地址格式不正确',
			reg: /^[0-9a-zA-Z][_.0-9a-zA-Z-]{0,31}@([0-9a-zA-Z][0-9a-zA-Z-]{0,30}\.){1,4}[a-zA-Z]{2,4}$/
		},
		"MSN帐号": {
			msg: 'MSN帐号格式不正确',
			reg: /^[0-9a-z][_.0-9a-z-]{0,31}@([0-9a-z][0-9a-z-]{0,30}\.){1,4}[a-z]{2,4}$/
		},
		"天涯邮箱地址": {
			msg: '邮箱地址格式不正确',
			reg: /^[0-9a-z][_.0-9a-z-]{0,31}$/
		},
		"手机号码": {
			msg: '{name}不正确',
			reg: /^1(3\d{1}|5[0-9])|(8[0,2,5-9])|(4[7])\d{8}$/
		},
		"证件号码": {
			msg: '{name}不正确',
			reg: /^(d){5,18}$/
		},
		"有大写": {
			msg: '{name}不能有大写字母',
			reg: /[A-Z]/,
			regFlag: true
		},
		"有全角": {
			msg: '{name}不能包含全角字符',
			reg: /[\uFF00-\uFFFF]/,
			regFlag: true
		},
		"首尾不能是空格": {
			msg: '首尾不能是空格',
			reg: /(^\s+)|(\s+$)/,
			regFlag: true
		},
		"怪字符": {
			msg: '{name}不能包含特殊字符',
			reg: />|<|,|\[|\]|\{|\}|\?|\/|\+|=|\||\'|\\|\"|:|;|\~|\!|\@|\#|\*|\$|\%|\^|\&|\(|\)|`/i ,
			regFlag : true
		},
		"怪字符pwd": {
			msg: '密码请勿使用特殊字符',
			reg: />|<|\+|,|\[|\]|\{|\}|\/|=|\||\'|\\|\"|:|;|\~|\!|\@|\#|\*|\$|\%|\^|\&|\(|\)|`/i,
			regFlag : true
		},
		"部分怪字符pwd": {
			msg: '密码请勿使用特殊字符',
			reg: />|<|\+|,|\[|\]|\{|\}|\/|=|\||\'|\\|\"|:|;|\~|`/i,
			regFlag : true
		},
		"全部怪字符": {
			msg: '{name}不能包含特殊字符',
			reg: />|<|,|\[|\]|\{|\}|\?|\/|\+|=|\||\'|\\|\"|:|;|\~|\!|\@|\#|\*|\$|\%|\^|\&|\(|\)|\-|\—|\.|`/i ,
			regFlag : true
		},
		"有中文": {
			msg: '{name}不支持中文',
			reg: /[\u4E00-\u9FA5]/i,
			regFlag : true
		},
		"特殊字符": {
			msg: '{name}不支持特殊字符',
			reg: /[^a-zA-Z\.·\u4E00-\u9FA5\uFE30-\uFFA0]/i,
			regFlag : true
		},
		"下划线": {
			msg: '下划线不能在最后',
			fn:  function(e, v){
				var val = e.value;
				return (val.slice(val.length-1)=="_") ? this.msg : '';
			}
		},
		"首尾不能是下划线": {
			msg: '首尾不能是下划线',
			reg: /(^_+)|(_+$)/,
			regFlag: true
		},
		"开始是字母数字": {
			msg: '开始必须是字母数字',
			reg: /^[0-9a-zA-z]/,
			regFlag: false
		},
		"有下划线": {
			msg: '不能包含下划线',
			fn:  function(e, v){
				var val = e.value;
				return (val.search("_") >= 0) ? this.msg : '';
			}
		},
		"可为空": {
			fn:  function(e, v){
				if(!e.value){
					e.style.background = '';
					return 'custom';
				}else { 
					return ''; 
				}
			}
		},
		"数字字母": {
			msg: '不能包含数字和英文字母以外的字符',
			reg: /[^0-9a-zA-Z]/i,
			regFlag : true
		},
		"数字并字母": {
			msg: '密码必须是字母和数字的组合',
			reg: /([0-9][a-zA-Z])|([a-zA-Z][0-9])/,
			regFlag : false
		},
		"数字字母中文": {
			msg: '不能包含数字、英文字母和汉字以外的字符',
			reg: /[^0-9a-zA-Z\u4E00-\u9FA5]/,
			regFlag : true
		},
		"数字字母中文下划线": {
			msg: '使用数字、字母、汉字或下划线字符',
			reg: /[^0-9a-zA-Z\u4E00-\u9FA5\_]/,
			regFlag : true
		},
		"数字字母中文空格下划线": {
			msg: '不能包含全角字符',
			reg: /[^0-9a-zA-Z\u4E00-\u9FA5\_\ ]/,
			regFlag : true
		},
		"无选中": {
			msg: '请选择{name}',
			fn: function(e,v) {
				switch (e.type.toLowerCase()) {
					case 'checkbox':
						return e.checked ? 'clear' : this.msg;
					case 'radio':
						var radioes = document.getElementsByName(e.name);
						for(var i=0; i<radioes.length; i++) {
							if(radioes[i].checked) return 'clear';
						}
						return this.msg;
					default:
						return 'clear';
				}
			}
		},
			"无选择": {
			msg: '请选择{name}',
			fn: function(e,v) {
				switch (e.type.toLowerCase()) {
					case 'select-one':
							return e.value ? 'clear': this.msg;
					default:
						return 'clear';
				}
			}
		},
		"条款": {
			msg: '{name}',
			fn: function(e,v) {
				switch (e.type.toLowerCase()) {
					case 'checkbox':
						return e.checked ? 'clear' : this.msg;
					case 'radio':
						var radioes = document.getElementsByName(e.name);
						for(var i=0; i<radioes.length; i++) {
							if(radioes[i].checked) return 'clear';
						}
						return this.msg;
					default:
						return 'clear';
				}
			}
		},
		"判断验证码": {
			fn: function(e,v) {
				if (/^[0-9a-zA-Z]/.test(e.value)) {
					if (/[^0-9a-zA-Z]/.test(e.value)) return "验证码错误";
				}else if (/^[\u4E00-\u9FA5]/.test(e.value)) {
					if (/[^\u4E00-\u9FA5]/.test(e.value)) return "验证码错误";
				}
				return "";
			}
		},
		"排重": { fn: checkUsername },
		"密码提示": { fn: checkPsUsername },
		"密码提示问题": { fn: checkPsQuestion },
		"密码提示回答": { fn: checkPsAnswer },
		"回答检查": { fn: checkAnswerLen },
		"密码手机": { fn: checkPsMobile },
		"密码邮箱地址": { fn: checkPsEmail },
		"检验邮箱地址": { fn: checkValidateEmail },
		"检验天涯码": { fn: checkTianyaCode},
		"邮箱注册排重": { fn: checkFreemail },
		"原密码检查": { fn: checkUserPassword },
		"原密码检查1": { fn: checkUserPassword1 },
		"天涯邮箱注册排重": { fn: checkTyMail },
		"简单密码":{fn:simplePassword}
	}
	
	//注册全局conf对象
	if (window.vconf == null) window.vconf = conf;
})();
/**
 * @description 表单验证类
 * @author 
 */
(function(){
	var TIP_CSS = 'box_div_right';

	var RIGHT_IMG = '<img src="image/icon_ok.gif" style="margin-right:5px;" />';
	
	var RIGHT_CSS = 'box_div_right2';
	
	var WRONG_IMG = '<img src="image/wrong.gif" style="margin-right:5px;" />';
	
	var WRONG_CSS = 'box_div_wrong';
	
    /**
     * @constructor
     * @param {Object} 表单验证类 构造函数
     */
    var $vdt = function(config){
		/**
		* 类指针，当前类
		* @type {Object}
		*/	
        var me = this;
		
		/**
		* 验证码规则配置对象
		* @type {Object}
		*/			
        this.opt = config;

        /**
         * 清除CSS
         */
        this.clearCss = function(id){
        	jQuery('#'+id).removeClass(jQuery('#'+id).attr('class'));
        	jQuery('#'+id).html('');
        	jQuery('#'+id).hide();
        };
        
		/**
		* 对象获得焦点时的样式处理
		* @type {String}
		*/		
		this.focCss = function(id) {
			me.clearCss(id);
			jQuery('#'+id).addClass(TIP_CSS);
		};
		/**
		* 验证出错时的样式处理
		* @type {String}
		*/			
        this.errCss = function(id) {
			me.clearCss(id);
			jQuery('#'+id).addClass(WRONG_CSS);
		};
		/**
		* 验证正确时的样式处理
		* @type {String}
		*/
        this.crtCss = function(id) {
			me.clearCss(id);
			jQuery('#'+id).addClass(RIGHT_CSS);
		};

		/**
		* 分隔符号
		* @type {String}
		*/
		var splitSign = ':';
		
	   /**
		 * 默认验证函数(正则验证模式)
         * @param {Object} 表单对象
         * @param {Object} Validator 引用实例
		 */
		this.defaultRegFn = function(e, v){
			if(this.regFlag) {
				return this.reg.test(e.value) ? this.msg : '';
			}else {
				return !this.reg.test(e.value) ? this.msg : '';
			}
        };

	   /**
		 * 默认验证函数(范围验证模式)
         * @param {Object} 表单对象
         * @param {Object} Validator 引用实例
		 */
		this.defaultRangeFn = function(e, v){
			var reg = /[^\x00-\xff]/ig;
			var len = e.value.replace(reg,'oo').length;
			if(!len) return '';
			var alt = (e.alt || e.getAttribute("alt"));
			var range =  /长度{(.+?)}/.exec(alt)[1];
			var l = range.split('-')[0];
			var r = range.split('-')[1];
			if(len < l || len > r) return this.msg.replace('{range}', range);
			return '';
        };

	   /**
		 * 默认验证函数(验证是否与目标值相同[一般用于确认密码])
         * @param {Object} 表单对象
         * @param {Object} Validator 引用实例
		 */
        this.defaultSameFn = function(e, v){
        	var val = e.value;
        	if(!val) return '';
        	var alt = (e.alt || e.getAttribute("alt"));
        	var id =  /相同{(.+?)}/.exec(alt)[1];
        	if(!document.getElementById(id)) return '';
        	return (document.getElementById(id).value != val)?this.msg:'';
        };
        
		this.doubleSameFn = function(e, v){
			var val = e.value;
			if(!val) return '';
			var alt = (e.alt || e.getAttribute("alt"));
			var id =  /输入一样{(.+?)}/.exec(alt)[1];
			if(!document.getElementById(id)) return '';
			return (document.getElementById(id).value == val)?this.msg:'';
        };
        
        this.doubleSameFn2 = function(e, v){
			var val = e.value;
			if(!val) return '';
			var alt = (e.alt || e.getAttribute("alt"));
			var id =  /新旧密码重复{(.+?)}/.exec(alt)[1];
			if(!document.getElementById(id)) return '';
			return (document.getElementById(id).value == val)?this.msg:'';
        };
        
        /**
         * 类初始化，根据表单名为表单下需要验证的对象添加事件
         * @param {String} 表单id
         */
        this.init = function(id){
			var fm = document.getElementById(id);
			if(!fm) {
				alert('表单 [' + id + '] 未找到！');
				return;
			}
            var fe = fm.elements;
            var fl = fe.length;
            for (var i = 0; i < fl; i++) {
                var cur = fe[i];
                var alt = ((cur.alt || cur.getAttribute("alt")) + '');
                if (alt.indexOf(splitSign) != -1) {
                    cur.onfocus = this.chkFocus;
                    cur.onblur = this.check;
					/**
					 * 当前类指针传递给表单域对象，以便调用
					 * @type {Object}
					 */
                    cur.v = this;
                }
            }
			fm.v = this;
            fm.onsubmit = this.checkSubmit;
        };


        /**
         * 判断当前需要使用规则的对象
         * @param {String} alt值中当前规则名
         * @param {Object} 当前规则配置对象
         */
		this.getCur = function(c, conf){
			var cur = conf[c];
			if (c.indexOf('长度')!=-1){
				cur = conf['长度'];
				cur.fn = this.defaultRangeFn;
			}
			if (c.indexOf('minlength')!=-1){
				cur = conf['minlength'];
			}
			if (c.indexOf('相同')!=-1){
				cur = conf['相同'];
				cur.fn = this.defaultSameFn;
			}
			if (c.indexOf('输入一样')!=-1){
				cur = conf['输入一样'];
				cur.fn = this.doubleSameFn;
			}
			if (c.indexOf('新旧密码重复')!=-1){
				cur = conf['新旧密码重复'];
				cur.fn = this.doubleSameFn2;
			}
			if(!cur) return null;
			if (!cur.fn) cur.fn = this.defaultRegFn;
			return cur;
		};
        
        /**
         * 根据对象alt属性参数设置及config的配置进行表单元素验证
         * @param {Object} fireFox 的事件源(暂时没用到)
         * @param {Object} 检查指定的表单对象
         */		
		var tv="";
		var submitflag="";
        this.check = function(e, el){
            var el = el || this;
            var v = el.v;
            var o = v.opt;
            var flag=false;
            var alt = el.alt || el.getAttribute('alt');
            var args = alt.split(splitSign)[1].split('/');
            var heads=alt.split(splitSign)[0];
            if(submitflag=="") {
            	var sflag=jQuery(el).attr('flag');
	            if(sflag=="1") {
	            	flag=true;
	            	if(tv!=el.value) {
	                	tv=el.value;
	                }else {
	                	flag=false;
	                }
	            }
            }
            var l = args.length;
            for (var i = 0; i < l; i++) {
                var c = args[i];
				var cur = v.getCur(c, o);
                if (cur) {
					try {
						var result = cur.fn(el, v);
						if(el.value=='hide')continue;
						if(result == 'custom'){
							break;
						}		
						var s=!flag?'':'ing';
						s=submitflag==''?s:'';
						submitflag='';
						if(result){
							v.showMsg(el, result,s);
							if(result == 'clear') continue;
							return false;
						} else {
							v.showMsg(el, 'correct',s);
						}
					}catch (e) {
						return false;
					}
                }
            }
			return true;
        };
        
       

        /**
         * 对象获取焦点时执行的事件
         */
        this.chkFocus = function(){
            var el = this;
            var v = el.v;
			var cur = v.opt;
            alt = el.alt || el.getAttribute('alt');
			try{
				if(alt.indexOf('focusFn')!= -1){
					if(cur.focusFn) cur.focusFn(el, v);
				}
				try {
					if(alt.indexOf('tips') != -1) {
						if(alt.indexOf('msgArea')!=-1){
							var mid = /msgArea{(.+?)}/.exec(alt)[1];
							var arg = /tips{([^}].+?)}/.exec(alt);
							arg = (arg == null) ? false : arg[1];
							me.focCss(mid);
							jQuery('#'+mid).html(arg);
							jQuery('#'+mid).show();
						}
					}
				}catch (e) {}
			}catch(e){ alert(e.description);}
        };
		
		/**
         * 对象键盘输入时执行的事件
         */
		this.chkKeyboard = function(){
            var el = this;
            var v = el.v;
			var cur = v.opt;
            alt = el.alt || el.getAttribute('alt');
			try{
				if(alt.indexOf('keyFn') != -1) {
					var arg = /keyFn{([^}].+?)}/.exec(alt);
					arg = (arg == null) ? false : arg[1];
					var args = arg.split('/');
					var l = args.length;
					for (var i = 0; i < l; i++) {
						var c = args[i];
						var cur = v.getCur(c, cur);
						if (cur) {
							try {
								trace(cur.fn);
								if(cur.fn) cur.fn(el, v);
							}catch (e) {
								return false;
							}
						}
					}
				}
			}catch(e){ alert(e.description);}
        };

        /**
         * 提交时将表单下所有需要验证的元素都检查一遍，以保证数据全部合格
         */
        this.checkSubmit = function(e){
			var fm = this;
			var v = fm.v;
			var fe = fm.elements;
			var fl = fe.length;
			var flag = true;
			try{
				for (var i = 0; i < fl; i++) {
						var cur = fe[i];
						var alt = ((cur.alt || cur.getAttribute("alt")) + '');
						if (alt.indexOf(splitSign) != -1){
							if (v.opt.submitFn){
								if(v.opt.submitFn(cur)){
									flag = true;
									continue;
								}
							}
							submitflag="submit";
							if (!v.check(e, cur)) {
								flag = false;
							}
						}
				}
			}catch(e){ 
				flag = false;
			};
			if(!flag){
				//alert("您填写的信息有误，请根据页面提示更改！");
				flag = false;
			}
			return flag;
        };
		
        /**
         * 根据错误类型显示相应的错误提示
         */					
        this.showMsg = function(e, msg,flag){
			var alt	= (e.alt || e.getAttribute("alt")).split(splitSign);
			var name = alt[0];
			var args   = alt[1];
			var msg = msg.replace('{name}', name);
			var redhook=jQuery(e).attr('redhook');
			/**
	         *  根据alt参数，判断错误提示输出在哪
	         */
			if(args.indexOf('msgArea')!=-1) var mid = /msgArea{(.+?)}/.exec(alt)[1];
	        /**
	         *  根据msg判断是否显示错误提示
	         */
			switch(msg) {
				case "correct":
					if(e.type == 'password' || e.type == 'text' || e.id=='question') {
						this.crtCss(mid);
						if(e.id=='vcode') {
							jQuery('#'+mid).html;
						}else {
							if(flag=='') {
								jQuery('#'+mid).html(RIGHT_IMG);
							}else {
								if(redhook=="1") {
									jQuery('#'+mid).html(RIGHT_IMG);
								}else {
									jQuery('#'+mid).html;
								}
							}
						}
						jQuery('#'+mid).show();
					}
					return;
				case "custom":
					return;
				case "clear":
					this.clearCss(mid);
					return;
				case "markC":
					this.crtCss(mid);
					jQuery('#'+mid).show();
					return;
				case "markW":
					this.errCss(mid);
					jQuery('#'+mid).show();
					return;
				default:
					if(e.type == 'password' || e.type == 'text' || e.id=='question') {
						this.errCss(mid);
						jQuery('#'+mid).html(WRONG_IMG+msg);
						jQuery('#'+mid).show();
					}
					return;
			}
        };
    };

	/**
	 *  注册全局对象
	 */	
    if (window.Validator == null) window.Validator = $vdt;
})();