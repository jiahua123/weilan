
/*
 购物车的js代码
 * */

	var mian_content=document.querySelector('#mian_content');//
	var not=document.querySelector('#not');
	var jiesuan=document.querySelector('#jiesuan');
	/*
	 找到购物车，渲染数据
	 * */
	
	fun();
	function fun(){
		var url='../api/05selectOrders.php';
		var data=`&time=${new Date()}`;
		ajax('GET',url,data,function(str){
			if(str=='no'){
				mian_content.style.display='none';
				not.style.display='block';
				jiesuan.style.display='none';
			}else{
				mian_content.style.display='block';
				not.style.display='none';
				jiesuan.style.display='block';
				var arr=JSON.parse(str);
			
			var res=arr.map(function(item){
				return `<li data-id="${item.id}">
							<a href="#">
								<img src="../img/liebiao/${item.shu_url}"/>
							</a>
							<p>${item.miaoshu}</p>
							<span>1</span>
							<p>￥<span>${item.price}</span></p>
							<p>￥<span>00.00</span></p>
							<p><input type="button" id="" value="-" class="cutnum"/><input type="text" id="" value="${item.shuliang}"  class="text1"/><input type="button" id="" value="+" class="addnum"/></p>
							<p class="good_del"><a href="javascript:;">删除</a></p>
				</li>`;
				
			}).join('');
			mian_content.innerHTML=res;
			}
		});
	}


/*
 	点击清空购物车
 */
	var tanchuang=document.querySelector('#tanchuang');//弹窗
	var qk=document.querySelector('#qk');
	var text1=document.querySelector('#text1');//内容
	var btn1=document.querySelector('#btn1');//确定
	var btn2=document.querySelector('#btn2');//取消
	var btn3=document.querySelector('#btn3');//取消
	
	qk.onclick=function(){
		tanchuang.style.display='block';
		text1.innerText="您确定要清空购物车？";
		btn2.onclick=function(){
			tanchuang.style.display='none';
		}
		btn3.onclick=function(){
			tanchuang.style.display='none';
		}
		btn1.onclick=function(){
			
			var url='../api/qingkongcat.php';
			var data=`&time=${new Date()}`;
			ajax('GET',url,data,function(str){
				fun();
		});
			
			tanchuang.style.display='none';
		}
		
	}

/*
	 需求：
	 	* 加数量
	 	* 减数量
	 	* 删除当行
	 	* 总数量和总价跟着变
	
	*/
	
	$(function(){
		
		//加数量
		$('#mian_content').on('click','.addnum',function(){
			
		
			//点击获取对应行的数量，加1在赋值
			var val=$(this).prev().val();
			val++;
			if(val>=100){ //库存数
				val=100;
			}
			$(this).prev().val(val);
			var val1=$(this).prev().val();
//			console.log(val1);
			var id=$(this).parent().parent().attr('data-id');
//			console.log(id);
			var url='../api/06updataOrders.php';
			var data=`&id=${id}&num=${val1}&time=${new Date()}`;
			ajax('GET',url,data,function(str){
					if(str=='0'){
						jisuanzongjia();
					}
			});
	
			
		});
		
		
		//减数量
		$('#mian_content').on('click','.cutnum',function(){
			//点击获取对应行的数量，加1在赋值
			var val=$(this).next().val();
			val--;
			if(val<=1){//库存量
				val=1;
				}
			//接口：更新数据库数量
			$(this).next().val(val);
			var val1=$(this).next().val();
			var id=$(this).parent().parent().attr('data-id');
			var url='../api/06updataOrders.php';
			var data=`&id=${id}&num=${val1}&time=${new Date()}`;
			ajax('GET',url,data,function(str){
					if(str=='0'){
						jisuanzongjia();
					}
			});
		
			
			});
		
		//删除当行
	$('#mian_content').on('click','.good_del',function(){
		
		tanchuang.style.display='block';
		text1.innerText="您确定不购买该商品？";
		var id=$(this).parent().attr('data-id');
		btn2.onclick=function(){
			tanchuang.style.display='none';
		}
		btn3.onclick=function(){
			tanchuang.style.display='none';
		}
		btn1.onclick=function(){
			
			
			var url='../api/07deleteOrders.php';
			var data=`&id=${id}&time=${new Date()}`;
			console.log(id);
			ajax('GET',url,data,function(str){
//				console.log(str);
				fun();
				jisuanzongjia();
		});
			
			tanchuang.style.display='none';
		}
		
		});
		
		//文本框失去焦点,更新数量
		$('#mian_content').on('blur','.text1',function(){
			
			
			     var val2=$(this).val();
			     if(0>=val2){
			     
			     	val2=1;
			  		$(this).val(val2);
			    	 }
			   
			     var id=$(this).parent().parent().attr('data-id');
			     var url='../api/06updataOrders.php';
				var data=`&id=${id}&num=${val2}&time=${new Date()}`;
				ajax('GET',url,data,function(str){
					if(str=='0'){
						jisuanzongjia();
					}
			});
		});
	
	});
		
	
	
	//更新计算总价
		
	var zongjia=document.querySelector("#zongjia");//总价
		jisuanzongjia();
	function jisuanzongjia(){
		var url='../api/05selectOrders.php';
		var data=`&time=${new Date()}`;
		ajax('GET',url,data,function(str){
			
			if(str=='no'){
				
			}else{
				var arr=JSON.parse(str);
				
				var num=0;
				
				for(var i=0;i<arr.length;i++){
					num+=arr[i].price*arr[i].shuliang;
				}
				num=num.toFixed(2);
				zongjia.innerText=num;
			}
		});
	}
