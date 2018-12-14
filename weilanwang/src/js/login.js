/*
 	登录用户
 * 
 * */

document.addEventListener('DOMContentLoaded', function() {
	var reg_username = document.querySelector('#reg_username');
	//还没注册点击注册
	reg_username.onclick = function() {
		location.href = 'reg.html';
	}

});

$(function() {
	/*
	 		登录用户名失去焦点
			 * */
	$('#J_userName').on('blur', function() {
		var val = $(this).val().trim();

		if(val) {

			$('#tishi1').hide();
			$('#error').text('');

		} else {

			$('#tishi1').show();
			$('#error').text('用户名不能为空');
		}
	});

	/*
	 			密码失去焦点
			 * */
	$('#J_userpassword').on('blur', function() {
		var val2 = $(this).val().trim();
		if(val2) {
			$('#tishi1').hide();
			$('#error').text('');
		} else {
			$('#tishi1').show();
			$('#error').text('密码不能为空');
		}
	});

	/*
			 登录
			  post:
                username：用户名
                psw：密码
			 * */

	$('#login_btn').on('click', function() {
		var val1 = $('#J_userName').val().trim();
		var val2 = $('#J_userpassword').val().trim();
		if(val1 && val2) {
			
		$.ajax({
					type:"POST",//请求方式
					url: "../api/10login.php",
					async:true,//异步
					data:{//传输数据
						'username':val1,
						'psw':val2
					},
					success:function(str){//成功回调
						console.log(str);
						if(str=='yes'){
							
						location.href='../main.html?name='+val1;
							Cookie.set('username',val1,{'path':'/php/weilanwang/src/'});
						}else{
					$('#tishi1').show();
					$('#error').text('用户名不存在或密码有误，请确认输入');
						}
					}
				});

		} else {
			$('#tishi1').show();
			$('#error').text('用户名或密码格式有问题，请确认输入');
		}
	});

});