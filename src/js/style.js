	var navdata= [
	{
		name: '社交',
		id: '#friends',
		on: true,
		list: [
		{
			name: '微信',
			url: 'http://kf.qq.com/faq/120322fu63YV130422iqMNZn.html'
		},
		{
			name: 'QQ',
			url: 'https://aq.qq.com/cn2/index'
		},
		{
			name: '新浪微博',
			url: 'https://security.weibo.com/account/confirmoldphone'
		}
		]
	}, 
	{
		name: '金融',
		id: '#financial',
		on: false,
		list: [
		{
			name: '银行卡',
			url: 'http://jingyan.baidu.com/article/8065f87fcabd1a23312498ef.html'
		},
		{
			name: '支付宝',
			url: 'https://custweb.alipay.com/account/index.htm'
		}
		]
	},
	{
		name: '购物',
		id: '#shopping',
		on: false,
		list: [
		{
			name: '淘宝',
			url: 'https://member1.taobao.com/member/fresh/account_security.htm'
		},
		{
			name: '美团',
			url: 'http://www.meituan.com/account/settings'
		},
		{
			name: '百度糯米',
			url: 'https://www.nuomi.com/uc/user/userinfo'
		},
		{
			name: '大众点评',
			url: 'https://www.dianping.com/account/setup'
		}
		]
	},
	{
		name: '视频',
		id: '#tv',
		on: false,
		list: [
		{
			name: '优酷土豆',
			url: 'https://id.youku.com/'
		},
		{
			name: '爱奇艺',
			url: 'http://passport.iqiyi.com/pages/secure/index.action'
		},
		{
			name: 'AcFun',
			url: 'http://www.acfun.cn/member/#area=profile'
		},
		{
			name: 'Bilibili',
			url: 'https://passport.bilibili.com/site/site.html'
		}
		]
	},
	{
		name: '求职',
		id: '#job',
		on: false,
		list: [
		{
			name: '拉钩网',
			url: 'https://account.lagou.com/account/accountBind.html'
		},
		{
			name: '58同城',
			url: 'https://my.58.com/pro/userdata'
		},
		{
			name: '前程无忧',
			url: 'http://i.51job.com/userset/security_center.php?lang=c'
		},
		{
			name: '智联招聘',
			url: 'https://i.zhaopin.com/ResumeCenter/AccountSet/Index?tab=2'
		}
		]
	}, 
	{
		name: '旅游',
		id: '#tourism',
		on: false,
		list: [
		{
			name: '12306',
			url: 'https://kyfw.12306.cn/otn/modifyUser/initQueryUserInfo'
		},
		{
			name: '途牛旅游',
			url: 'https://i.tuniu.com/userinfoconfirm'
		},
		{
			name: '携程旅游',
			url: 'https://sinfo.ctrip.com/MyInfo/AccountCenter/UserInfoUpdate.aspx'
		},	
		{
			name: '同城旅游',
			url: 'http://member.ly.com/center/information'
		},
		{
			name: '去哪儿',
			url: 'http://user.qunar.com/userinfo/account.jsp#/modify/email'
		}
		]
	},
	{
		name: '其他',
		id: '#other',
		on: false,
		list: [
		{
			name: '网易',
			url: 'https://reg.163.com/mibao/controller/mob/index.jsp'
		},
		{
			name: '百度',
			url: 'http://passport.baidu.com/center'
		},
		{
			name: '360',
			url: 'http://i.360.cn/profile/accountsecurity'
		}
		]
	},
	];
	document.body.addEventListener("touchmove",function(a){a.preventDefault()},!1);
	document.querySelector(".main").addEventListener("touchmove",function(a){a.stopPropagation()},!1);
	var clickEvent = (document.ontouchstart!==null) ? 'click' : 'touchstart';
	var _nav={
		c:!0,
		click:function(){
			this.c&&($(".main").css("overflow",""),$(".nav").css("height",""));
		}
	};
	$(".nav-s").on(clickEvent,function(){
		if (_nav.c) {
			$(".main").css("overflow","hidden"),
			$(".nav").css("height","407px"),
			_nav.c=!1;
		}
		else{
			_nav.c=!0;_nav.click()
		}
	});
	var vm = new Vue({
		el: '#app',
		data: {
			nav:{}
		},
		ready:function(){
			this.nav = navdata;
		},
		methods:{
			navli:function(index){
				_nav.c=!0,_nav.click();
				var e=event.target;
				var nava = document.querySelectorAll('.nav-s~li a');
				for (var i = 0; i < nava.length; i++) {
					nava[i].className="";
				}
				e.className="on";

				var main=document.querySelectorAll('.main ul');
				for (var i = 0; i < main.length; i++) {
					var _li=main[i].childNodes;
					for (var b = 0; b < _li.length; b++) {
						_li[b].className="";
					}
				}
				var _main=main[index];
				for (var i = 0; i < _main.childNodes.length; i++) {
					_main.childNodes[i].className="on";
				}

				var vt = _main.offsetTop;
				var vh = _main.scrollHeight;
				document.querySelector('.main').scrollTop =vt-vh;
			},
			mainli:function(){
				var e=event.target;
				e.className?e.className="":e.className="on";
			}
		}
	})