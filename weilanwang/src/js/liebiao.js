document.addEventListener('DOMContentLoaded', function() {
	var odiv = document.querySelector('#content_r4'); //数据总节点

	var onum = document.querySelector('#num'); //页码节点
	var up = document.querySelector('#up'); //上一页
	var next = document.querySelector('#next'); //下一页
	var bage_num = document.querySelector("#bage_num"); //总页数
	var val = document.querySelector('#val'); //到第几页
	var btn = document.querySelector('#btn');
	/*		
	 * 
	 * 初始化数据页面渲染、
	 * 
	 * 数据渲染封装函数
	 * 
	 */

	var rows = 0;
	//数据渲染函数封装
	function creat(arrs) {
		var res = arrs.map(function(item) {
			return `<div data-id="${item.id}">
								<a href="#">
									<img src="../img/liebiao/${item.shu_url}"/>
								</a>
								<p class="ys">${item.shuming}</p>
								<p class="qian">￥<span>${item.price}</span></p>
								<p class="renqi">热度:<span>${item.renqi}</span></p>
								<p>
									<input type="image" src="../img/buy-btn.gif" />
									<input type="image" src="../img/save-btn.gif" />
								</p>
							</div>`;
		}).join('');
		odiv.innerHTML = res;
		
		fz();
		pass();//鼠标经过
		
	}

	init();

	function init() {
		var url = '../api/01selectGoodlist.php';
		var data = `page=1&qty=8&time=${new Date()}`;
		ajax('GET', url, data, function(str) {

			var arr = JSON.parse(str);

			var arrs = arr.datalist;
			creat(arrs);

			//根据数据总长度,创建页码
			var num = Math.ceil(arr.total / arr.qty);
			rows = num; //总页数
			bage_num.innerText = rows;
			for(var i = 0; i < num; i++) {
				onum.innerHTML += `<span>${i+1}</span>`;
			}
			onum.children[0].className = 'ac2';
			
		});
	}

	/*
	 	鼠标经过鼠标高亮
	 */
		function pass(){
			
				var odiv = document.querySelector('#content_r4'); //数据总节点
				var divs = odiv.querySelectorAll('#content_r4>div'); //数据条节点
				console.log(divs.length);

			
			for(var i=0;i<divs.length;i++){
				divs[i].onmouseover=function(){
					
					this.className='active';
				}
				divs[i].onmouseout=function(){
					
					this.className='';
				}
			}
		}
			



	//利用委托事件绑定事件
	var now = 1;
	onum.onclick = function(ev) {
		var ev = ev || window.event;

		//点那个是那个
		if(ev.target.tagName.toLowerCase() == 'span') {
			now = ev.target.innerText; //获取页码
			//				console.log(now);
			var url = '../api/01selectGoodlist.php';
			data = `page=${now}&qty=8&time=${new Date()}`;
			ajax('GET', url, data, function(str) {

				var arr = JSON.parse(str);
				//					console.log(arr);
				var arrs = arr.datalist;
				creat(arrs);
			});
			for(var i = 0; i < onum.children.length; i++) {
				onum.children[i].className = '';
			}
			onum.children[now - 1].className = 'ac2';
		}
	}

	/*
	 * 上一页,下一页功能
	 */
	up.onclick = function() {
		now--;
		if(now < 1) {
			now = 1;
		}
		var url = '../api/01selectGoodlist.php';
		data = `page=${now}&qty=8&time=${new Date()}`;
		ajax('GET', url, data, function(str) {
			var arr = JSON.parse(str);
			//					console.log(arr);
			var arrs = arr.datalist;
			creat(arrs);
		});
		for(var i = 0; i < onum.children.length; i++) {
			onum.children[i].className = '';
		}
		onum.children[now - 1].className = 'ac2';

	}

	next.onclick = function() {
		now++;
		if(now > onum.children.length) {
			now = onum.children.length;
		}
		var url = '../api/01selectGoodlist.php';
		data = `page=${now}&qty=8&time=${new Date()}`;
		ajax('GET', url, data, function(str) {
			var arr = JSON.parse(str);
			//					console.log(arr);
			var arrs = arr.datalist;
			creat(arrs);
		});
		for(var i = 0; i < onum.children.length; i++) {
			onum.children[i].className = '';
		}
		onum.children[now - 1].className = 'ac2';

	}

	//点击按钮,调到第几页
	btn.onclick = function() {
		var val1 = val.value.trim();
		now = val1;
		if(val1) {
			var url = '../api/01selectGoodlist.php';
			data = `page=${val1}&qty=8&time=${new Date()}`;
			ajax('GET', url, data, function(str) {
				var arr = JSON.parse(str);
				//					console.log(arr);
				var arrs = arr.datalist;
				creat(arrs);
			});
			for(var i = 0; i < onum.children.length; i++) {
				onum.children[i].className = '';
			}
			onum.children[val1 - 1].className = 'ac2';
		}
	}

	/*
		人气的升序,降序
	 	 get:
                desc：默认为升序，传desc为降序，
                inf：默认为id，需要进行排序的字段，
                page：默认为1，需要渲染的页码,
                qty：默认为10，每页显示多少条
	 */
	var renqi = document.querySelector('#renqi'); //人气
	var isok2 = true; //人气开关
	renqi.onclick = function() {
		var r = 'renqi';
		var desc = 'desc';
		var asc = 'asc';
		if(isok2) {
			var url = '../api/02sortGoodlist.php';
			data = `page=1&qty=8&inf=${r}&desc=${desc}&time=${new Date()}`;
			ajax('GET', url, data, function(str) {
				var arr = JSON.parse(str);
				console.log(arr);
				var arrs = arr.datalist;
				creat(arrs);
			});
			jiage.className = '';
			renqi.className = '';
			renqi.className = 'shengxu';
			for(var i = 0; i < onum.children.length; i++) {
				onum.children[i].className = '';
			}
			onum.children[0].className = 'ac2';
			isok2 = !isok2;
		} else {
			var url = '../api/02sortGoodlist.php';
			data = `page=1&qty=8&inf=${r}&desc=${asc}&time=${new Date()}`;
			ajax('GET', url, data, function(str) {
				var arr = JSON.parse(str);
				console.log(arr);
				var arrs = arr.datalist;
				creat(arrs);
			});

			isok2 = !isok2;
			renqi.className = '';
			renqi.className = 'jiangxu';
			for(var i = 0; i < onum.children.length; i++) {
				onum.children[i].className = '';
			}
			onum.children[0].className = 'ac2';
		}

		if(renqi.className == 'shengxu') {
			//利用委托事件绑定事件
			var renqi_now = 1;
			onum.onclick = function(ev) {
				var ev = ev || window.event;

				//点那个是那个
				if(ev.target.tagName.toLowerCase() == 'span') {
					renqi_now = ev.target.innerText; //获取页码
					var url = '../api/02sortGoodlist.php';
					data = `page=${renqi_now}&qty=8&inf=${r}&desc=${desc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {

						var arr = JSON.parse(str);
						//console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);
					});

					for(var j = 0; j < onum.children.length; j++) {
						onum.children[j].className = '';
						console.log(1);
					}
					onum.children[renqi_now - 1].className = 'ac2';
				}
			}

			//上一页
			up.onclick = function() {
				renqi_now--;
				if(renqi_now < 1) {
					renqi_now = 1;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${renqi_now}&qty=8&inf=${r}&desc=${desc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);
				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[renqi_now - 1].className = 'ac2';

			}

			//点击下一页
			next.onclick = function() {
				renqi_now++;
				if(renqi_now > onum.children.length) {
					renqi_now = onum.children.length;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${renqi_now}&qty=8&inf=${r}&desc=${desc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);
				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[renqi_now - 1].className = 'ac2';

			}

			//点击按钮,调到第几页
			btn.onclick = function() {
				var val1 = val.value.trim();
				if(val1) {
					renqi_now = val1;
					var url = '../api/02sortGoodlist.php';
					data = `page=${renqi_now}&qty=8&inf=${r}&desc=${desc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {
						var arr = JSON.parse(str);
						//	console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);

					});
					for(var i = 0; i < onum.children.length; i++) {
						onum.children[i].className = '';
					}
					onum.children[val1 - 1].className = 'ac2';

				}
			}

		}
		if(renqi.className == 'jiangxu') {
			//利用委托事件绑定事件
			var renqi_now = 1;
			onum.onclick = function(ev) {
				var ev = ev || window.event;

				//点那个是那个
				if(ev.target.tagName.toLowerCase() == 'span') {
					renqi_now = ev.target.innerText; //获取页码
					var url = '../api/02sortGoodlist.php';
					data = `page=${renqi_now}&qty=8&inf=${r}&desc=${asc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {

						var arr = JSON.parse(str);
						//console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);
					});

					for(var j = 0; j < onum.children.length; j++) {
						onum.children[j].className = '';
						console.log(1);
					}
					onum.children[renqi_now - 1].className = 'ac2';
				}
			}

			//上一页
			up.onclick = function() {
				renqi_now--;
				if(renqi_now_now < 1) {
					renqi_now = 1;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${renqi_now}&qty=8&inf=${r}&desc=${asc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);
				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[renqi_now - 1].className = 'ac2';

			}

			//点击下一页
			next.onclick = function() {
				renqi_now++;
				if(renqi_now > onum.children.length) {
					renqi_now = onum.children.length;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${renqi_now}&qty=8&inf=${r}&desc=${asc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);

				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[renqi_now - 1].className = 'ac2';

			}

			//点击按钮,调到第几页
			btn.onclick = function() {
				var val1 = val.value.trim();
				if(val1) {
					renqi_now = val1;
					var url = '../api/02sortGoodlist.php';
					data = `page=${renqi_now}&qty=8&inf=${r}&desc=${asc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {
						var arr = JSON.parse(str);
						//	console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);

					});
					for(var i = 0; i < onum.children.length; i++) {
						onum.children[i].className = '';
					}
					onum.children[val1 - 1].className = 'ac2';

				}
			}

		}
	}

	/*
		价格的升序,降序
	 	 get:
                desc：默认为升序，传desc为降序，
                inf：默认为id，需要进行排序的字段，
                page：默认为1，需要渲染的页码,
                qty：默认为10，每页显示多少条
	 */

	var jiage = document.querySelector('#jiage'); //价格

	var isok1 = true; //价格开关

	jiage.onclick = function() {
		var price = 'price';
		var desc = 'desc';
		var asc = 'asc';
		if(isok1) {
			var url = '../api/02sortGoodlist.php';
			data = `page=1&qty=8&inf=${price}&desc=${desc}&time=${new Date()}`;
			ajax('GET', url, data, function(str) {
				var arr = JSON.parse(str);
				//				console.log(arr);
				var arrs = arr.datalist;
				creat(arrs);
			});
			renqi.className = '';
			jiage.className = '';
			jiage.className = 'shengxu';
			for(var i = 0; i < onum.children.length; i++) {
				onum.children[i].className = '';
			}
			onum.children[0].className = 'ac2';
			isok1 = !isok1;
		} else {
			var url = '../api/02sortGoodlist.php';
			data = `page=1&qty=8&inf=${price}&desc=${asc}&time=${new Date()}`;
			ajax('GET', url, data, function(str) {
				var arr = JSON.parse(str);
				console.log(arr);
				var arrs = arr.datalist;
				creat(arrs);
			});

			isok1 = !isok1;
			jiage.className = '';
			jiage.className = 'jiangxu';
			for(var i = 0; i < onum.children.length; i++) {
				onum.children[i].className = '';
			}
			onum.children[0].className = 'ac2';
		}

		if(jiage.className == 'shengxu') {
			//利用委托事件绑定事件
			var jiage_now = 1;
			onum.onclick = function(ev) {
				var ev = ev || window.event;

				//点那个是那个
				if(ev.target.tagName.toLowerCase() == 'span') {
					jiage_now = ev.target.innerText; //获取页码
					var url = '../api/02sortGoodlist.php';
					data = `page=${jiage_now}&qty=8&inf=${price}&desc=${desc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {

						var arr = JSON.parse(str);
						//console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);
					});

					for(var j = 0; j < onum.children.length; j++) {
						onum.children[j].className = '';
						//						console.log(1);
					}
					onum.children[jiage_now - 1].className = 'ac2';
				}
			}

			//上一页
			up.onclick = function() {
				jiage_now--;
				if(jiage_now < 1) {
					jiage_now = 1;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${jiage_now}&qty=8&inf=${price}&desc=${desc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);
				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[jiage_now - 1].className = 'ac2';

			}

			//点击下一页
			next.onclick = function() {
				jiage_now++;
				if(jiage_now > onum.children.length) {
					jiage_now = onum.children.length;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${jiage_now}&qty=8&inf=${price}&desc=${desc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);
				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[jiage_now - 1].className = 'ac2';

			}

			//点击按钮,调到第几页
			btn.onclick = function() {
				var val1 = val.value.trim();
				if(val1) {
					jiage_now = val1;
					var url = '../api/02sortGoodlist.php';
					data = `page=${jiage_now}&qty=8&inf=${price}&desc=${desc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {
						var arr = JSON.parse(str);
						//	console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);

					});
					for(var i = 0; i < onum.children.length; i++) {
						onum.children[i].className = '';
					}
					onum.children[val1 - 1].className = 'ac2';

				}
			}

		}
		if(jiage.className == 'jiangxu') {
			//利用委托事件绑定事件
			var jiage_now = 1;
			onum.onclick = function(ev) {
				var ev = ev || window.event;

				//点那个是那个
				if(ev.target.tagName.toLowerCase() == 'span') {
					jiage_now = ev.target.innerText; //获取页码
					var url = '../api/02sortGoodlist.php';
					data = `page=${jiage_now}&qty=8&inf=${price}&desc=${asc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {

						var arr = JSON.parse(str);
						//console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);
					});

					for(var j = 0; j < onum.children.length; j++) {
						onum.children[j].className = '';
						//						console.log(1);
					}
					onum.children[jiage_now - 1].className = 'ac2';
				}
			}

			//上一页
			up.onclick = function() {
				jiage_now--;
				if(jiage_now < 1) {
					jiage_now = 1;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${jiage_now}&qty=8&inf=${price}&desc=${asc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);
				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[jiage_now - 1].className = 'ac2';

			}

			//点击下一页
			next.onclick = function() {
				jiage_now++;
				if(jiage_now > onum.children.length) {
					jiage_now = onum.children.length;
				}
				var url = '../api/02sortGoodlist.php';
				data = `page=${jiage_now}&qty=8&inf=${price}&desc=${asc}&time=${new Date()}`;
				ajax('GET', url, data, function(str) {
					var arr = JSON.parse(str);
					//					console.log(arr);
					var arrs = arr.datalist;
					creat(arrs);

				});
				for(var i = 0; i < onum.children.length; i++) {
					onum.children[i].className = '';
				}
				onum.children[jiage_now - 1].className = 'ac2';

			}

			//点击按钮,调到第几页
			btn.onclick = function() {
				var val1 = val.value.trim();
				if(val1) {
					jiage_now = val1;
					var url = '../api/02sortGoodlist.php';
					data = `page=${jiage_now}&qty=8&inf=${price}&desc=${asc}&time=${new Date()}`;
					ajax('GET', url, data, function(str) {
						var arr = JSON.parse(str);
						//	console.log(arr);
						var arrs = arr.datalist;
						creat(arrs);

					});
					for(var i = 0; i < onum.children.length; i++) {
						onum.children[i].className = '';
					}
					onum.children[val1 - 1].className = 'ac2';

				}
			}

		}
	}

	/*
	 价格,点击高亮
	 */
	var jg = document.querySelector('#jg'); //价格
	var zk = document.querySelector('#zk'); //折扣

	var jgs = jg.querySelectorAll('#jg span');
	var zks = zk.querySelectorAll('#zk span');
	//		console.log(jgs.length);
	for(var a = 0; a < jgs.length; a++) {
		jgs[a].onclick = function() {
			for(var b = 0; b < jgs.length; b++) {
				jgs[b].style.background = '';
			}

			this.style.background = '#367CB4';
		}
		zks[a].onclick = function() {
			for(var b = 0; b < jgs.length; b++) {
				zks[b].style.background = '';
			}

			this.style.background = '#367CB4';
		}
	}

	/**
	 * 
	 下拉菜单
	 */
	var tushu = document.querySelector('#tushu');
	var fenlei = document.querySelector('#fenlei');
	var uls = document.querySelector('#uls');
	var uls2 = document.querySelector('#uls2');
	var timer1 = null;
	var timer2 = null;
	var isok3 = true;
	var isok4 = true;
	var fenleih = fenlei.offsetHeight; //uls2的高
	var ulsh2 = uls2.offsetHeight; //uls2的高

	var ulsh = uls.offsetHeight; //ulsh的高
	tushu.onclick = function() {
		if(isok3) {
			tushu.className = '';
			tushu.className = 'active1';

			clearInterval(timer1);
			clearInterval(timer2);

			if(isok4) {
				timer1 = setInterval(function() {
					var b = -50; //速度
					var ih = ulsh2.offsetHeight; //盒子的高度		
					var h = ih + b;

					if(h > 0) {
						ulsh2.style.height = h + 'px';
					} else {

						h = 0;
						clearInterval(timer1);
						clearInterval(timer2);
					}
				}, 30);
			} else {
				timer1 = setInterval(function() {
					var b = -50; //速度
					var ih = ulsh2.offsetHeight; //盒子的高度		
					var h = ih + b;

					if(h > 0) {
						ulsh2.style.height = h + 'px';
					} else {

						h = 0;
						clearInterval(timer1);
						clearInterval(timer2);
					}
				}, 30);
			}

			isok3 = !isok3;
		} else {
			tushu.className = '';
			clearInterval(timer1);
			clearInterval(timer2);
			if(isok4) {
				timer1 = setInterval(function() {

					var b = 50; //速度
					var ih = uls2.offsetHeight; //盒子的高度		
					var h = ih + b;

					if(h < ulsh) {
						uls2.style.height = h + 'px';
					} else {

						h = ulsh;
						clearInterval(timer1);
						clearInterval(timer2);
					}
				}, 30);
			} else {

				timer1 = setInterval(function() {

					var b = 30; //速度
					var ih = uls2.offsetHeight; //盒子的高度		
					var h = ih + b;

					if(h < fenleih) {
						uls2.style.height = h + 'px';
					} else {

						h = fenleih;
						clearInterval(timer1);
						clearInterval(timer2);
					}
				}, 30);
			}

			isok3 = !isok3;
		}

	}

	fenlei.onclick = function() {

		if(isok4) {
			fenlei.className = '';
			fenlei.className = 'active2';

			clearInterval(timer1);
			clearInterval(timer2);

			timer2 = setInterval(function() {
				var b = -50; //速度
				var ih = uls.offsetHeight; //盒子的高度		
				var h = ih + b;

				if(h > 0) {
					uls.style.height = h + 'px';
				} else {

					h = 0;
					clearInterval(timer1);
					clearInterval(timer2);
				}
			}, 30);
			isok4 = !isok4;
		} else {
			fenlei.className = '';
			clearInterval(timer1);
			clearInterval(timer2);
			timer2 = setInterval(function() {
				var b = 50; //速度
				var ih = uls.offsetHeight; //盒子的高度		
				var h = ih + b;

				if(h < ulsh) {
					uls.style.height = h + 'px';
				} else {
					h = ulsh;
					clearInterval(timer1);
					clearInterval(timer2);
				}
			}, 30);

			isok4 = !isok4;
		}

	}

	/*
	 点击传参,详情页
	 */

	function fz() {

		var odiv = document.querySelector('#content_r4'); //数据总节点
		var divs = odiv.querySelectorAll('#content_r4>div'); //数据条节点
		console.log(divs.length);

		var imgs = document.querySelectorAll('#content_r4 div');
	

		for(var i = 0; i < imgs.length; i++) {
			imgs[i].index = i;
			imgs[i].onclick = function() {
				location.href = 'xiangqingye.html?id=' + divs[this.index].getAttribute('data-id');
				
			}
		}
	}


	/*
		 蔚蓝热卖数据渲染
	
	
		 * */

	var remai = document.querySelector('#remai');
	remai_fun();
	function remai_fun() {
		
		var url = '../api/remai.php';
		var data = `&page=1&qty=10&time=${new Date()}`;
		ajax('GET', url, data, function(str) {
		
			var arr = JSON.parse(str);
			var arrs = arr.datalist;
			var res = arrs.map(function(item) {
				
				return `<li data-id="${item.id}"><a href="#"><img src="../img/remai/${item.shu_url}"/></a><p>${item.shuming}</p>
								<p class="jiage"><del>￥<span class="yuanjia">34.34</span></del>￥<span class="xianjia">33.22</span></p>
							</li>`;
			}).join('');
			remai.innerHTML = res;

			
		});

	}

	

});