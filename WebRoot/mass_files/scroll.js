jQuery(function($){
	/*滚动*/
	function Scroll(cfg){
		var default_cfg={
			'div':null,
			'ul':null,
			'li':null,
			'pre_btn':null,
			'next_btn':null,
			'auto':false,
			'direct':'top',
			'type':0,//0:按屏滚，1：按条滚
			'each':4,//按条滚的时候，每次移动的条数
			'pos':3000,//滚动时间间隔（毫秒）
			'timer':null,
			'cur_page':0,
			'page_num':0,
			'btn_on':{'cursor':'pointer'},
			'btn_off':{'cursor':'default'}
		};
		this.cfg = this.getConf(cfg,default_cfg);
		if(!this.init()){
			return false;
		}
		if(this.cfg.pre_btn && this.cfg.next_btn){
			this.initBtnEvt();
		}
		if(this.cfg.auto){
			this.loop(type);
		}
		
		return true;
	}
	Scroll.prototype.loop=function(type){
		this.cfg.timer=null;
		this.cfg.timer = setTimeout(function(){
				arguments.callee(type);
		},this.cfg.pos)
		this.scroll(type);
	}
	Scroll.prototype.getConf=function(cfg,dft_cfg){
		for(var key in dft_cfg){
			if(typeof(cfg[key])=='undefined'){
				cfg[key] = dft_cfg[key];
			}
		}
		return cfg;
	}
	Scroll.prototype.getSize=function(el,type){
		var o={'w':0,'h':0},mg=0;
		el = $(el);
		if(!type || type =='w'){
			o['w'] = el.outerWidth();
			if('auto'!=(mg=el.css('margin-left'))){
				o['w'] +=parseFloat(mg);
			}
			if('auto'!=(mg=el.css('margin-right'))){
				o['w'] +=parseFloat(mg);
			}
		}
		if(!type || type =='h'){
			o['h'] = el.outerHeight();
			if('auto'!=(mg=el.css('margin-top'))){
				o['h'] +=parseFloat(mg);
			}
			if('auto'!=(mg=el.css('margin-bottom'))){
				o['h'] +=parseFloat(mg);
			}
		}
		return o;
	}
	Scroll.prototype.init=function(){
	
		var conf = this.cfg;
		if(!conf.div || !conf.ul){
			return false;
		}
		var div = conf.div,ul = conf.ul;
		
		div.css({'overflow':'hidden','position':'relative'});
		
		ul.css({'position':'absolute','top':'0px','left':'0px;'});
		
		if(conf.type==0){
			//按屏滚动
			var w=0;
			if(conf.direct=="top"){
				conf.span= div.height();
				w = ul.height();
			}else{
				conf.span= div.weigth();
				w = ul.width();
			}
			conf.span = conf.span * conf.each;
			conf.page_num = Math.ceil( w/conf.span)-1;
		}else if(conf.type==1){
			//按照条滚动
			var size = conf.li.size();
			if(!conf.li){return false;};
			if(conf.direct=="top"){
				conf.span= (this.getSize(conf.li[0],'h'))['h'];
				ul.css({'height':(conf.span*size)+'px'});
				conf.span  *= conf.each;
				div.css({'height':conf.span+"px"})
			}else{
				conf.span= (this.getSize(conf.li[0],'w'))['w'];
			
				ul.css({'width':(conf.span*size)+'px'});
					conf.span  *= conf.each;
				div.css({'weight':conf.span+"px"})
			}
			conf.page_num =Math.ceil( size/ conf.each)-1;
		}
		return true;
	}
	Scroll.prototype.initBtnEvt=function(){
		var _this = this;
		var btn_pre = this.cfg.pre_btn;
		var btn_next = this.cfg.next_btn;
		
		if(!btn_pre || !btn_next){
			return false;
		}
		function initBtn(){
			if(_this.cfg.cur_page <_this.cfg.page_num){
				btn_next.css(_this.cfg.btn_on);
			}else{
				btn_next.css(_this.cfg.btn_off);
			}
			if(_this.cfg.cur_page>0){
				btn_pre.css(_this.cfg.btn_on);
			}else{
				btn_pre.css(_this.cfg.btn_off);
			}
		}
		
		initBtn();
		
		btn_pre.unbind('click').bind('click',function(){
			if(_this.cfg.cur_page >0){
				_this.cfg.cur_page--;
				_this.scroll(-1);
			}
			initBtn();
		})
		btn_next.unbind('click').bind('click',function(){
			if(_this.cfg.cur_page < _this.cfg.page_num){
			
				_this.cfg.cur_page++;
				_this.scroll(1);
			}
			initBtn();
		})
	}
	Scroll.prototype.scroll=function(type){
		var n = this.cfg.cur_page* this.cfg.span;
		var o={};
		o[this.cfg.direct] = "-" + n+'px';
		this.cfg.ul.animate(o, "slow",null,function(){
		});
	}
	
	
	function initPageScroll(){
		var btns=null;
		var map=[
			{'div':'cms_fragment_24','btn':'cms_control_265','type':1,'each':5},
			{'div':'cms_fragment_44','btn':'cms_control_300','type':1,'each':3},
			{'div':'cms_fragment_87','btn':'cms_control_301','type':1,'each':4}
		];
		for(var i=0,l=map.length;i<l;i++){
			btns = $("#"+map[i]['btn']+" li");
			var o={
				'div':$("#"+map[i]['div']+" .bd"),
				'ul':$("#"+map[i]['div']+" ul"),
				'li':$("#"+map[i]['div']+" li"),
				'pre_btn':$(btns.get(1)),
				'next_btn':$(btns.get(0)),
				'auto':false,
				'direct':'top',
				'type':map[i]['type']||0,//0:按屏滚，1：按条滚
				'each':map[i]['each']||1,//按条滚的时候，每次移动的条数
				'timer':3000//滚动时间间隔（毫秒）
			}
			
			map[i]['scroll'] = new Scroll(o);
		}
		btns = $("#cms_control_302 li");
		map[i]={};
		map[i]['scroll'] = new Scroll({
			'div':$("#cms_control_773 .bd"),
			'ul':$("#qiye_div"),
			'li':$("#qiye_div li"),
			'pre_btn':$(btns.get(1)),
			'next_btn':$(btns.get(0)),
			'auto':false,
			'direct':'top',
			'type':1,//0:按屏滚，1：按条滚
			'each':4,//按条滚的时候，每次移动的条数
			'timer':3000//滚动时间间隔（毫秒）
		});
	};
	
	
	/*排序*/
	function SortByKeys(conf){
		var ul = conf.ul,lis = conf.lis,keys = conf.keys,num = conf.num;
		if(!ul || !lis ||!keys || keys.length!=lis.length){return false;}
		
		//将数组list 按照filed字段排序
		function sortByField(list, filed) {
			var v1,	v2;
			function compare(val1, val2) {
				v1 = val1[filed];
				v2 = val2[filed];
				if (v1 < v2) {
					return 1
				} else if (v1 > v2) {
					return -1;
				} else {
					return 0;
				}
			}
			list.sort(compare);
		};
		
		var arr=[],tmp;
		for(var i=0,l=keys.length;i<l;i++){
			tmp =parseInt(keys[i].innerHTML||0,10);
			if(isNaN(tmp)){
				tmp=0;
			}
			arr.push({'i':i,'key':tmp});
		}
		num  = num || l;
		sortByField(arr,'key');
		var html=[];
		//按照 key字段重新排序
		for(i=0;i<l;i++){
			html.push(lis[arr[i]['i']].outerHTML)
		}
		ul.html(html.slice(0,num).join(""));
	}
	function initSort(){
		//需要排序的dom结构
		var sort_ul=$("#cms_fragment_30_ul");
		var sortPanKuai =  new SortByKeys(
			{'ul':sort_ul,
			'lis':sort_ul.find('li'),//需要重新排序的元素
			'keys':sort_ul.find('li .normal_txtlist_author a'),//按照a标签的内容排序
			'num':15
		});
	}
	
	/*随机*/
	function Random(conf){
		var ul = conf.ul,lis = conf.lis,num=conf.num,ext=conf.ext;
		if(!ul || !lis){return false;}
		var html=[],h=0;
		if(ext){
			html.push(ext);
			h=1;
		}
		
		var len = lis.length,r=0;
		num = (num && num<=len) ? num :len;
		if(!num){return false;}
		
		len = len-1;
		
		for(var i=0;html.length-h<num-1;i++){
			r = (parseInt(Math.random()*100000,10))%len;
			html.push(lis[r].outerHTML);
			lis.splice(r,1);
			len--;
		}
		html.push(lis[lis.length-1].outerHTML);
		ul.html(html.join(""));
		
	}
	
	function initPageRandom(){
		var map=[
			/*{'ul':'cms_fragment_24_ul','lis':'li','num':15},//论坛*/
			{'ul':'cms_fragment_44_ul','lis':'li','num':9},//部落
			{'ul':'cms_fragment_89_ul','lis':'li','num':12},//居民
			{'ul':'cms_fragment_774_ul','lis':'li','num':8},//企业
			{'ul':'cms_fragment_148_ul','lis':'li','num':4},//企业品牌
			{'ul':'cms_Location_6 .tui-right','lis':'.tui-topnews','num':5,'ext':$("#cms_control_46")[0].outerHTML}//推荐部落
		]
		for(var i=0,l=map.length;i<l;i++){
			var ul=  $("#"+map[i]['ul']);
			map[i]['random']= new Random({
				'ul':ul,
				'lis':ul.find(map[i]['lis']) || 'li',
				'num':map[i]['num'] || 12,
				'ext':map[i]['ext'] ||""
			})
		}
		
	}
	
	/*加入分社区*/
	String.prototype.zk_format = function () {
		var a = arguments;
		var data = (a.length == 1 && typeof(a[0]) == 'object') ? a[0] : a;
		return this.replace(/\{([\d\w]+)\}/g, function (m, n) {
			return data[n] != undefined ? data[n].toString() : m;
		});
	};
	function JoinBBS(conf){
		conf = conf ||{};
		var url ='http://content.tianya.cn/joinbbs/joinbbsadd.jsp?',
			args={'add':'serviceType=joinbbsAdd&sectionId={s_id}&userId={u_id}&userName={name}','check':'serviceType=checkJoinbbs&sectionId={s_id}&userId={u_id}'},
			btn = conf['btn']|| null,
			no_join=conf['join_ok']||"no-join",
			had_join=conf['join_no']||"had-join",
			s_id =conf['id']||"",
			cookie_ok=conf['cookie'] || false,
			num_span=conf['num_span'] ||null,
			cookie_name="hn_s_id",
			cookie_days=365;
		
		if(!s_id || !btn){
			return false;
		}
		
		function getUserId(){
			return __global.getUserId();
		}

		var cookie={
			'get': function(){
						if(!cookie_ok){return;}
						return __global.getCookie(cookie_name);
					},
			'set':function(val){
						if(!cookie_ok){return;}
						val = val ||"";
						__global.setCookie(cookie_name,val,cookie_days);
					}
		};
		function apiChecker(){
			
		};
		function check(){
			var login=false;
			if(cookie_ok){
				var s = cookie.get();
				if(s && s== s_id){
					login=true;
				}
				initLogin(login);
			}else{
				var u = url+args['check'].zk_format({'u_id':user_id,'s_id':s_id});
				$.getScript(u,
					function(){
						if(typeof(g_addbbs_checkJoinbbs)!='undefined' && g_addbbs_checkJoinbbs===true){
							//login=true;
						}
						initLogin(login);
					}
				);
			}
		}
		function showModul(mid){
			
			$.ajax("listModulUser",{
				async:false,
				data:{
					pid:mid
				},
				success:function(data){
					var m;
					if(+data.resultCode == 1001){
						alert(data.msg);
					}else{
						var d=data.data||[];
						var p="当前没有任何部门你可以加入";
						
						if(d.length>0){
							p="";
							var n=mid+ (new Date).getTime();
							for(var i=0;i<d.length;i++){
								p=p+d[i].name+"<input type='radio' name='"+n+"' value='"+d[i].id+"'/>";
							}
						}
						
						buttons = [{
							id: "submitBtn",
							text: "加入",
							handler: function() {
								g()
							}
						},
						{
							id: "cancelBtn",
							text: "取消",
							handler: function() {
								m && m.remove();
							}
						}];
						
						var title="选择加入的社团";
						m = new TY.ui.pop({
							headTxt: title,
							isShowCloseIco: !0,
							body: p,
							type: "window",
							Buttons: buttons,
							modZindex: 12E3
						});
					}
				}
			});
			
		}
		function add(){
			var u = url + args['add'].zk_format({'u_id':user_id,'s_id':s_id,'name':__global.getUserName()});
			showModul(s_id);
			/*
			$.getScript(u,
					function(){
						var login=false;
						if(typeof(g_addbbs_info)!="undefined"){
							if(g_addbbs_info['result']===1){
								login=true;
								if(num_span){
									var n = parseInt(num_span.html(),10)+parseInt(Math.random()*9,10);
									num_span.html(n+1);
								}
							}else{
								alert(g_addbbs_info['message']);
							}
						}
						cookie.set(s_id);
						initLogin(login);
					}
				);*/
		}
		
		function initLogin(f){
			if(f){
				btn.attr('class',had_join).css({'pointer':'default'});
			}else{
				btn.attr('class',no_join);
			}
		}
		
		user_id = getUserId();
		if(!user_id){//未登录
			initLogin(false);
		}else{//已登录
			check();
		}
		
		btn.unbind('click').bind('click',function(){
			if(!user_id){
				alert("请您登录后，再加入社区");
				return;
			}
			if(btn.attr('class')==no_join){
				add();
			}
		});
		
	}
	/*a 标签页面跳转之前处理事件*/
	function modLink(links,func){
		func = func || function(){};
		links.click(function(){
			func(this);
		})
		
	}
	function initModLink(){
		var map=[
			'#cms_fragment_598_ul .subject a',//左1
			'#cms_fragment_598_ul .pic a',//左1
			'#cms_fragment_627_ul .subject a',//左2
			'#cms_fragment_627_ul .pic a',//左2
			'#cms_fragment_628_ul .subject a',//左3
			'#cms_fragment_628_ul .pic a',//左3
			'#cms_fragment_629_ul .subject a',//左4
			'#cms_fragment_629_ul .pic a',//左4
			'#cms_fragment_566_ul .subject a',//左51
			'#cms_fragment_566_ul .pic a',//左51
			'#cms_fragment_534_ul h3 a',//左52
			'#cms_fragment_24_ul .subject a',//论坛
			'#cms_fragment_24_ul .pic a',//论坛
			'#cms_fragment_1283_ul .subject a',//列表左
			'#cms_fragment_1283_ul .pic a',//列表左
			'#cms_fragment_1284_ul .subject a',//列表右1
			'#cms_fragment_1284_ul .pic a',//列表右1
			'#cms_fragment_1291_ul h3 a',//列表右2
			'#cms_fragment_1289_ul .subject a',//列表右3
			'#cms_fragment_1289_ul .pic a',//列表右3
			'#cms_fragment_1292_ul h3 a'//列表右4
		];
		function mod(el){
			var rp1="http://bbs.tianya.cn/",rp2='.shtml';
			var href=el.getAttribute('href'),t=el.getAttribute('t')||null ;
			var pos = href.indexOf('?');
			if(!t){
				if(pos!=-1 && href.indexOf(rp1)!=-1 && href.indexOf(rp2)!=-1){
					href=href.replace(/(Articleid=)http:\/\/bbs.tianya.cn\/([^.]*).shtml/,
					'$1$2');
				}else{
					href=href.substr(pos+1);
					href=href.replace('Articleid=','');
				}
				el.setAttribute('t','1');
				el.setAttribute('href',href);
			}
		}
		for(var i=0,l=map.length;i<l;i++){
			modLink($(map[i]),mod);
		}
	}	
	$("body").ready(function(){
		var url=location.href;
		if(url.indexOf('/template/')==-1 && url.indexOf('/cms_fragments/')==-1){
			/*页面初始化*/
			try{
				initSort();//排序
				initPageRandom();//随机
				initPageScroll();//滚动
			}catch(e){}
			
			
			//加入社区
			var btn = $("#join-btn");
			JoinBBS(
				{
					'btn':btn,//加入按钮对象
					'id':btn.attr("sid"),//社区id
					'cookie':false,//是否启用cookie记录
					'num_span':$("#bbs_num_span")//需要改变人数的对象
					
			});
			//修改bbs页连接
			initModLink();
			setTimeout(function(){
				//去掉排行榜链接
				$("#cms_fragment_30_ul li .detail a").attr({"href":'javascript:void(0);','target':"_self"}).css({'cursor':'default'});
			});
			
		}
	})
	
	
})
