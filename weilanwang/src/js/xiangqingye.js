
/*
 商品详情页
 * */


document.addEventListener('DOMContentLoaded',function(){
		var box=document.querySelector('#box');
		var res = (location.search).slice(1);
		var id = res.split('=')[1];
		
		//获取到商品id，发送ajax查询数据
		
		chaxun();
		function chaxun(){
			var url='../api/03idSelectGoodlist.php';
			var data=`&id=${id}&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
//				console.log(arr);
				var arrs=arr.list;
				
				xunran(arrs);
			});
		}
		
		//数据渲染
	
		var box1=document.querySelector('#box1');
		var box2=document.querySelector('#box2');
		function xunran(arrs){
			      var html1=`	<h1>${arrs[0].shuming}</h1>
					<div class="box_r_l">
						
					
						
						
						 <div class="imgpart">
           
				            <div class="pic">
				                	<img src="../img/liebiao/${arrs[0].shu_url}" alt="">
				              
				                	<div class="magnify"></div>
				            </div>
           
		            <div class="bigpic">
		                <img src="../img/liebiao/${arrs[0].shu_url}" alt="">
		            </div>
       					 </div>
						
						
						<p> 顾客评分： 已有<span>0</span>人评论</p>
						<span>分享到：</span>
					</div>`;
			
					
					var html2=`<li>
							<p>蔚蓝价： <span>${arrs[0].price}</span></p>
							<p>定 &nbsp;&nbsp;&nbsp;价：<del>${arrs[0].yuanjia} </del> 折扣： <span>50</span></p>
							<p>vip(2-3星)： <span class="a">${arrs[0].price}</span> svip(4-5星): <span>${arrs[0].price}</span></p>
						</li>
						<li>
							<p>作 者：<span>${arrs[0].zuozhe}</span> 著</p>
							<p>出 版 社：<span> 宁波</span></p>
							<p>出版时间：<span>2014-04</span></p>
							<p>I S B N ： 9787552612783</p>
						</li>`;
						
						box1.innerHTML=html1;
						box2.innerHTML=html2;

		}
		
		/*
		 * 点击添加购物车
		    get：
               
             id,shuming,miaoshu,zuozhe,yuanjia,price,shu_url,renqi,shuliang
		 */
		var val=document.querySelector('#val');
		var btn=document.querySelector('#btn');
		var tanchuang=document.querySelector('#tanchuang');
		var btn1=document.querySelector('#btn1');
		var btn2=document.querySelector('#btn2');
		var btn3=document.querySelector('#btn3');
		var text1=document.querySelector('#text1');
		
		btn.onclick=function(){
			
			var val1=val.value.trim();
			if(val1){
				
				var url='../api/03idSelectGoodlist.php';
				var data=`&id=${id}&time=${new Date()}`;
				ajax('GET',url,data,function(str){
				var arr=JSON.parse(str);
				var arrs=arr.list;
				var a=arrs[0].shuming;
				var b=arrs[0].miaoshu;
				var c=arrs[0].zuozhe;
				var d=arrs[0].yuanjia;
				var e=arrs[0].price;
				var f=arrs[0].shu_url;
				var g=arrs[0].renqi;
				
				
				var url1='../api/04insertOrders.php';
				var data1=`&shuming=${a}&miaoshu=${b}&zuozhe=${c}&yuanjia=${d}&price=${e}&shu_url=${f}&renqi=${g}&shuliang=${val1}&id=${id}&time=${new Date()}`;
				ajax('GET',url1,data1,function(str1){
//					console.log(str1);
					if(str1=='yes'){
						tanchuang.style.display='block';
						text1.innerText='该商品成功加入购物车';
						btn1.onclick=function(){
							tanchuang.style.display='none';
						}
						btn3.onclick=function(){
							tanchuang.style.display='none';
						}
						btn2.onclick=function(){
							location.href='goodcat.html';
						}
					}
					if(str1=='0'){
						
						tanchuang.style.display='block';
						text1.innerText='该商品购买的数量已更新';
						btn1.onclick=function(){
							tanchuang.style.display='none';
						}
						btn3.onclick=function(){
							tanchuang.style.display='none';
						}
						btn2.onclick=function(){
							location.href='goodcat.html';
						}
						
						
					}
					
				});	
			});
			}
		}
	
	
	/*
	 
	 	吸顶与跳层
	 */
	
		var f2=document.querySelector('#f2');
		var spans=document.querySelectorAll('#f2>span');
		var t1=document.querySelector('#t1');
		var t2=document.querySelector('#t2');
		var t3=document.querySelector('#t3');
		tiaoceng();
		function tiaoceng(){
			for(var i=0;i<spans.length;i++){
				
				spans[i].index=i;
				spans[i].onclick=function(){
					for(var j=0;j<spans.length;j++){
						spans[j].className='';
						
					}
					this.className='ac';
//					spans[this.index].className='ac';
					var num=this.index;
					if(num==0){
						window.scrollTo(0,1040);
					}
					if(num==1){
						window.scrollTo(0,2940);
					}
					if(num==2){
						window.scrollTo(0,3040);
					}
					
				}
			}
			
			//吸顶
				
				var top=f2.offsetTop;//盒子距离顶部的距离
				
			
				
				window.onscroll=function(){
					//获取滚动距离
					var scrollTop=window.scrollY;
					if(scrollTop>=top){
						f2.className='menu';
					}else{
						f2.className='';
					}
				}
		
		}
	
	
	/*
	 热销推荐,数据渲染
	 */
	var rexiao_1=document.querySelector('#rexiao_1');
		rexiao();
		
	function rexiao(){
		var url = '../api/01selectGoodlist.php';
		var data = `page=3&qty=10&time=${new Date()}`;
		ajax('GET',url,data,function(str){
			var arr=JSON.parse(str).datalist;
			console.log(arr);
			
			var res=arr.map(function(item){
				return `<li>
						<a href="#"><img src="../img/liebiao/${item.shu_url}" /></a>
						<p>${item.shuming}</p>
						<p>￥<span>${item.price}</span></p>
					</li>`;
			}).join('');
			
			rexiao_1.innerHTML=res;
		});
		
	}
	
	
				
		/*
		 放大镜
		 */
	
	
	
	
	
	
	
});