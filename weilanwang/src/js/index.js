
//首页的js

document.addEventListener("DOMContentLoaded",function(){
	
		
		/*
		 cookie取用户名
		 * */
			var loginf=document.querySelector('#loginf');
			var longint=document.querySelector('#longint');
			var username=document.querySelector('#username');
			var tuichu=document.querySelector('#tuichu');
			
			
			user();
			function user(){
				var user=Cookie.get('username');
				var str=document.cookie;
				if(str){
					var arr=str.split('=')[1];
					loginf.style.display='none';
					longint.style.display='block';
					username.innerText=arr;
				}
				
			
			}
			
			//点击退出登录
			tuichu.onclick=function(){
				Cookie.remove('username','/php/weilanwang/src/');
				loginf.style.display='block';
				longint.style.display='none';
			}
	
		/*
		 导航条的选项卡
		 * */
		var nav=document.querySelector('#nav');
		var navlis=nav.querySelectorAll('li');
		var control=document.querySelector('#control');
		var controls=control.querySelectorAll('#control>div');
//		console.log(controls.length);

		nav_fun();
		function nav_fun(){
			for(var i=0;i<navlis.length;i++){
				navlis[i].index=i;
				navlis[i].onclick=function(){
					
					for(var j=0;j<navlis.length;j++){
						navlis[j].style.background='';
						controls[j].style.display='none';
					}
					this.style.background='#357CB4';	
					
					controls[this.index].style.display='block';
				}
			}
		}
		////////////////////////////////
		
		/*
		 点击文学小说进入列表页
		 * */
		var wenxue=document.querySelector('#wenxue');
		wenxue.onclick=function(){
			location.href='html/liebiao.html';
		}
		
		
	
		
		////////////////////////////////
			/*第一个轮播图*/
		$(function(){
			//1.把所有的图片放在右侧，第一个图片放到可视区
			//获取图片的宽度
			var iW=$('#box1 li').eq(0).outerWidth();
			$('#box1 li').css('left',iW);
			$('#box1 li').eq(0).css('left',0);
			//2.开启定时器，每次轮播一个图
			var timer=null;
			clearInterval(timer);
			var now=0;
			timer=setInterval(next,2000);//每隔2秒钟切换一个图
			
			function next(){
				//旧的挪走
				$('#box1 li').eq(now).animate({'left':-iW},1000);
				
				now=++now>=$('#box1 li').size()?0:now;
				//新的快速放在右侧，在挪进可视区
				$('#box1 li').eq(now).css('left',iW);
				$('#box1 li').eq(now).animate({'left':0},1000);
				focus();
			}
			//3.焦点跟随
			function focus(){
				$('#box1 span').removeClass('active');
				$('#box1 span').eq(now).addClass('active');
			}
			
		
			//4.鼠标经过焦点可以跳转
			$('#box1 span').click(function(){
				//旧：now
				//新：index()
				var index=$(this).index();
				if(index>now){
					//从右边切入
					//旧 now:挪到左边
					$('#box1 li').eq(now).animate({'left':-iW},1000);
					//新的
					$('#box1 li').eq(index).css('left',iW);
					$('#box1 li').eq(index).animate({'left':0},1000);
					now=index;
				}
				if(index<now){
					//从左边切入
					//旧图挪到右边
					$('#box1 li').eq(now).animate({'left':iW},1000);
					$('#box1 li').eq(index).css('left',-iW);
					$('#box1 li').eq(index).animate({'left':0},1000);
					now=index;
				}
				focus();
			});
			
			$('#box1').hover(function(){
				clearInterval(timer);
			},function(){
				clearInterval(timer);
				timer=setInterval(next,2000);
			});
			
		});
		
		////////////////////////////////////////
			/*第二个轮播图*/
		$(function(){
			//1.把所有的图片放在右侧，第一个图片放到可视区
			//获取图片的宽度
			var iW=$('#box2 li').eq(0).outerWidth();
			$('#box2 li').css('left',iW);
			$('#box2 li').eq(0).css('left',0);
			//2.开启定时器，每次轮播一个图
			var timer=null;
			clearInterval(timer);
			var now=0;
			timer=setInterval(next,2000);//每隔2秒钟切换一个图
			
			function next(){
				//旧的挪走
				$('#box2 li').eq(now).animate({'left':-iW},1000);
				
				now=++now>=$('#box2 li').size()?0:now;
				//新的快速放在右侧，在挪进可视区
				$('#box2 li').eq(now).css('left',iW);
				$('#box2 li').eq(now).animate({'left':0},1000);
				focus();
			}
			//3.焦点跟随
			function focus(){
				$('#box2 span').removeClass('active');
				$('#box2 span').eq(now).addClass('active');
			}
			
		
			//4.鼠标经过焦点可以跳转
			$('#box2 span').click(function(){
				//旧：now
				//新：index()
				var index=$(this).index();
				if(index>now){
					//从右边切入
					//旧 now:挪到左边
					$('#box2 li').eq(now).animate({'left':-iW},1000);
					//新的
					$('#box2 li').eq(index).css('left',iW);
					$('#box2 li').eq(index).animate({'left':0},1000);
					now=index;
				}
				if(index<now){
					//从左边切入
					//旧图挪到右边
					$('#box2 li').eq(now).animate({'left':iW},1000);
					$('#box2 li').eq(index).css('left',-iW);
					$('#box2 li').eq(index).animate({'left':0},1000);
					now=index;
				}
				focus();
			});
			
			$('#box2').hover(function(){
				clearInterval(timer);
			},function(){
				clearInterval(timer);
				timer=setInterval(next,2000);
			});
			
		});
		
		////////////////////////////////////////
			/*第三个轮播图*/
		$(function(){
			//1.把所有的图片放在右侧，第一个图片放到可视区
			//获取图片的宽度
			var iW=$('#box3 li').eq(0).outerWidth();
			$('#box3 li').css('left',iW);
			$('#box3 li').eq(0).css('left',0);
			//2.开启定时器，每次轮播一个图
			var timer=null;
			clearInterval(timer);
			var now=0;
			timer=setInterval(next,2000);//每隔2秒钟切换一个图
			
			function next(){
				//旧的挪走
				$('#box3 li').eq(now).animate({'left':-iW},1000);
				
				now=++now>=$('#box3 li').size()?0:now;
				//新的快速放在右侧，在挪进可视区
				$('#box3 li').eq(now).css('left',iW);
				$('#box3 li').eq(now).animate({'left':0},1000);
				focus();
			}
			//3.焦点跟随
			function focus(){
				$('#box3 span').removeClass('active');
				$('#box3 span').eq(now).addClass('active');
			}
			
		
			//4.鼠标经过焦点可以跳转
			$('#box3 span').click(function(){
				//旧：now
				//新：index()
				var index=$(this).index();
				if(index>now){
					//从右边切入
					//旧 now:挪到左边
					$('#box3 li').eq(now).animate({'left':-iW},1000);
					//新的
					$('#box3 li').eq(index).css('left',iW);
					$('#box3 li').eq(index).animate({'left':0},1000);
					now=index;
				}
				if(index<now){
					//从左边切入
					//旧图挪到右边
					$('#box3 li').eq(now).animate({'left':iW},1000);
					$('#box3 li').eq(index).css('left',-iW);
					$('#box3 li').eq(index).animate({'left':0},1000);
					now=index;
				}
				focus();
			});
			
			$('#box3').hover(function(){
				clearInterval(timer);
			},function(){
				clearInterval(timer);
				timer=setInterval(next,2000);
			});
			
		});
		
		/*
		 f1数据渲染
		 
		 * */
		
		var f1=document.querySelector('#f1');
		f1_fun();
		function f1_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=1&qty=8&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f1.innerHTML=res;
				
				fz1();
			});
			
		}
		
		/*
	 		f1 点击传参,详情页
		 */
	
		
	function fz1(){
		var f1s = f1.querySelectorAll('#f1>li'); //数据条节点
			
		
				var lis=document.querySelectorAll('#f1>li'); 
				
					
				
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f1s[this.index].getAttribute('data-id');
							console.log(f1s[this.index].getAttribute('data-id'));
						}
					
					}
		}
		
		
		/*
		 f2数据渲染
		 
		 * */
		
		var f2=document.querySelector('#f2');
		f2_fun();
		function f2_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=2&qty=8&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f2.innerHTML=res;
				
				fz2();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f2
		 */
	
		
	function fz2(){
		var f2s = f2.querySelectorAll('#f2>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f2>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f2s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
		
		
		
		
		/*
		 f3数据渲染
		 
		 * */
		
		var f3=document.querySelector('#f3');
		f3_fun();
		function f3_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=3&qty=8&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f3.innerHTML=res;
				
				fz3();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f3
		 */
	
		
	function fz3(){
		var f3s = f3.querySelectorAll('#f3>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f3>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f3s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
	
	
	
		/*
		 f4数据渲染
		 
		 * */
		
		var f4=document.querySelector('#f4');
		f4_fun();
		function f4_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=4&qty=8&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f4.innerHTML=res;
				
				fz4();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f4
		 */
	
		
	function fz4(){
		var f4s = f4.querySelectorAll('#f4>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f4>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f4s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
		
		
		
		
		
			/*
		 f5数据渲染
		 
		 * */
		
		var f5=document.querySelector('#f5');
		f5_fun();
		function f5_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=9&qty=4&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f5.innerHTML=res;
				
				fz5();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f5
		 */
	
		
	function fz5(){
		var f5s = f5.querySelectorAll('#f5>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f5>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f5s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
		
		
			
			/*
		 f6数据渲染
		 
		 * */
		
		var f6=document.querySelector('#f6');
		f6_fun();
		function f6_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=10&qty=4&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f6.innerHTML=res;
				
				fz6();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f6
		 */
	
		
	function fz6(){
		var f6s = f6.querySelectorAll('#f6>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f6>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f6s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
		
		
		
			/*
		 f7数据渲染
		 
		 * */
		
		var f7=document.querySelector('#f7');
		f7_fun();
		function f7_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=6&qty=8&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f7.innerHTML=res;
				
				fz7();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f7
		 */
	
		
	function fz7(){
		var f7s = f7.querySelectorAll('#f7>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f7>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f7s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
		
		
		
		
			/*
		 f8数据渲染
		 
		 * */
		
		var f8=document.querySelector('#f8');
		f8_fun();
		function f8_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=14&qty=4&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f8.innerHTML=res;
				
				fz8();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f8
		 */
		
	function fz8(){
		var f8s = f8.querySelectorAll('#f8>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f8>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f8s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
		
			/*
		 f9数据渲染
		 
		 * */
		
		var f9=document.querySelector('#f9');
		f9_fun();
		function f9_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=15&qty=4&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f9.innerHTML=res;
				
				fz9();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f9
		 */
	
		
	function fz9(){
		var f9s = f9.querySelectorAll('#f9>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f9>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f9s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
			/*
		 f10数据渲染
		 
		 * */
		
		var f10=document.querySelector('#f10');
		f10_fun();
		function f10_fun(){
			
			var url='api/01selectGoodlist.php';
			var data=`&page=16&qty=4&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.datalist;
				var res=arrs.map(function(item){
					return `<li data-id="${item.id}"><img src="img/liebiao/${item.shu_url}" />
								<p class='shu'>${item.shuming}</p>
								<p class="price">￥<span>${item.price}</span></p>
							</li>`;
				}).join('');
				f10.innerHTML=res;
				
				fz10();
			});
			
		}
		
		/* 
			 点击传参,详情页,
			 今日热卖
			 f10
		 */
	
		
		
		
		
		
		
		
		
	function fz10(){
		var f10s = f10.querySelectorAll('#f10>li'); //数据条节点
			
				var lis=document.querySelectorAll('#f10>li'); 
					for(var i=0;i<lis.length;i++){
						lis[i].index=i;
						lis[i].onclick=function(){
							location.href='html/xiangqingye.html?id='+f10s[this.index].getAttribute('data-id');
							
						}
					
					}
		}
		
		
		/*
		 限时促销,点击换页
		 */
		var shang=document.querySelector('#shang');//上一页
		var xia=document.querySelector('#xia');	//下一页
		var huanye=document.querySelector('#huanye');	//
		var dians=huanye.querySelectorAll('span');	//1,2,3页
		var cuxiao_2=document.querySelector('#cuxiao_2');	//
		var ulss=document.querySelectorAll('#cuxiao_2 ul');	//
		var f8=document.querySelector('#f8');	//
		var f9=document.querySelector('#f9');	//
		var f10=document.querySelector('#f10');	//
		
		console.log(ulss.length);
		huanye_fun();
		function huanye_fun(){
			var num=0;
			xia.onclick=function(){
				num++;
				for(var i=0;i<dians.length;i++){
					dians[i].className='';
					ulss[i].style.display='none';
				}
				if(num>=2){
					num=2;
				}
				dians[num].className='acon';
				ulss[num].style.display='block';
			}
			shang.onclick=function(){
				num--;
				for(var i=0;i<dians.length;i++){
					dians[i].className='';
					ulss[i].style.display='none';
				}
				if(num<=0){
					num=0;
				}
				dians[num].className='acon';
				ulss[num].style.display='block';
			}
			
		}
		
		
		
		/*
		 客服服务菜单
		 */
		
		var fuwu=document.querySelector('#fuwu');
		var fuwu_z=document.querySelector('#fuwu_z');
		fuwu.onmouseover=function(){
			fuwu_z.style.display='block';
		}
		fuwu.onmouseout=function(){
			fuwu_z.style.display='none';
		}
		
		var spans=fuwu_z.querySelectorAll('span');
		
		for(var j=0;j<spans.length;j++){
			spans[j].onmouseover=function(){
				this.style.color='red';
			}
			spans[j].onmouseout=function(){
				this.style.color='';
			}
		}
		
		
		/*
		 购物车下拉,跳转
		 */
		var li_cat=document.querySelector('#li_cat');
		var cat=document.querySelector('#cat');
			var catisok=true;
			
			li_cat.onclick=function(){
				if(catisok){
					cat.style.display='block';
					catisok=!catisok;
				}else{
					cat.style.display='none';
					catisok=!catisok;
				}
			}
		
		
		var btn_cat=document.querySelector('#btn_cat');
		btn_cat.onclick=function(){
			location.href='html/goodcat.html';
		}
});