/*
 	注册页面
 * */

document.addEventListener('DOMContentLoaded',function(){
	
	/*
	 * 注册选项卡
	 * 
	 * */
	var reg1=document.querySelector('#reg1');
	var reg2=document.querySelector('#reg2');
	var form1=document.querySelector('#form1');	//表单1
	var form2=document.querySelector('#form2');	//表单2
		
		reg1.onclick=function(){
			reg2.className='';
			reg1.className='active';
			form2.style.display='none';
			form1.style.display='block';
		}
		reg2.onclick=function(){
			reg1.className='';
			reg2.className='active';
			form1.style.display='none';
			form2.style.display='block';
		}
		
		
		$(function(){
					/*
				 注册验证
				 * */
			//输入邮箱名
			//键盘弹起事件
			//邮箱失去焦点	
			var isok=false;//邮箱可以注册开关
			var isok1=false;//邮箱格式正确开关
			var isok2=false;//密码开关
			var isok3=false;//二次密码开关
			
			//验证邮箱
			/*
			     get：
                username：待验证用户名
          	  返回：
                0 || 1 //0代表用户名已存在，1代表用户名不存在
			 * */
			$('#mall').on('blur',function(){
				var val=$(this).val().trim();
				youxiang(val);
				if(isok1){
					var url='../api/08checkName.php';
					var data=`&username=${val}&time=${new Date()}`;
					ajax('GET',url,data,function(str){
						if(str=='1'){
							$('#inf_mall').text('');
							$('#ok1').addClass('act1');
							isok=true;
						}else{
						$('#inf_mall').text('该用户名已被注册');
						$('#inf_mall').css('color','red');
						$('#ok1').removeClass('act1');
						isok=false;
						}
					});
				}
			});
				
				//邮箱判断方法
				function youxiang(val){
					if(val){
					var res=checkReg.email(val);
					if(res){
						
						isok1=true;
					}else{
						$('#inf_mall').text('输入的email地址格式不正确');
						$('#inf_mall').css('color','red');
						$('#ok1').removeClass('act1');
						isok1=false;
					}
					
				}else{
					$('#inf_mall').text('输入的email地址格式不不能为空');
					$('#inf_mall').css('color','red');
					$('#ok1').removeClass('act1');
					isok1=false;
					}
				}
			
			//密码
			$('#password1').on('blur',function(){
				var val2=$(this).val().trim();
				psw1(val2);
			});
				//密码1判断方法
				function psw1(val2){
					if(val2){
					var res=checkReg.psweasy(val2);
					if(res){
						$('#inf_psw1').text('');
						$('#ok2').addClass('act1');
						isok2=true;
					}else{
						$('#inf_psw1').text('请输入6-18位首字母开头的密码');
						$('#inf_psw1').css('color','red');
						$('#ok2').removeClass('act1');
						isok2=false;
					}
					
				}else{
					$('#inf_psw1').text('密码不能为空');
					$('#inf_psw1').css('color','red');
					$('#ok2').removeClass('act1');
					isok2=false;
				}
				}
				
			//确认密码
			$('#password2').on('blur',function(){
				var val3=$(this).val().trim();
			
				
				psw2(val3);
			});
			
			function psw2(val3){
				if(val3){
						var val2=$('#password2').val().trim();
					if(val2==val3){
						
						$('#inf_psw2').text('');
						$('#ok3').addClass('act1');
						isok3=true;
					}else{
					$('#inf_psw2').text('两次输入密码不匹配');
					$('#inf_psw2').css('color','red');
					$('#ok3').removeClass('act1');
					isok3=false;
					
					}
				}else{
					$('#inf_psw2').text('确认密码不能为空');
					$('#inf_psw2').css('color','red');
					$('#ok3').removeClass('act1');
					isok3=false;
				}
			}
			/*
			 * 
			 注册
			 post：
                username：新用户名
                psw：新密码
			 */
			$('#reg_bnt1').on('click',function(){
				var val1=$('#mall').val().trim();
				var val2=$('#password1').val().trim();
				var val3=$('#password2').val().trim();
				youxiang(val1);
				psw1(val2);
				psw2(val3);
				
				if(isok&&isok2&&isok3){
					var url='../api/09reg.php';
					var data=`&username=${val1}&psw=${val2}&time=${new Date()}`;
					ajax('POST',url,data,function(str){
					if(str=='yes'){
						location.href='login.html';
					}
					$('#mall').val('');
					$('#password1').val('');
					$('#password2').val('');
				});
					
				}
			});
			
			//点击登录,跳转
			
			$('#login_user').on('click',function(){
				location.href='login.html';
			});
			
			
			
		});
			
			
			
			
			
			
});