<?php
    /*
        点击加入购物车，把数据写入订单表
            get：
                num：商品数量,
                id：商品id
                id,shuming,miaoshu,zuozhe,yuanjia,price,shu_url,renqi,shuliang
            返回：
                订单表商品所有数据
                8从你的全世界路过8.jpg1天蚕土豆37.9992.88《从你的全世界路过》是微博上写故事的人张嘉佳献给你的心动故事。45
     */

    //加入购物车，把数据写入订单表
    include 'connect.php';

    $id=isset($_GET['id']) ? $_GET['id'] : '3';
    $shuming=isset($_GET['shuming']) ? $_GET['shuming'] : '从你的全世界路过';
    $miaoshu=isset($_GET['miaoshu']) ? $_GET['miaoshu'] : '1';
    $zuozhe=isset($_GET['zuozhe']) ? $_GET['zuozhe'] : '1';
    $yuanjia=isset($_GET['yuanjia']) ? $_GET['yuanjia'] : '2';
    $price=isset($_GET['price']) ? $_GET['price'] : '1';
    $shu_url=isset($_GET['shu_url']) ? $_GET['shu_url'] : '1';
    $renqi=isset($_GET['renqi']) ? $_GET['renqi'] : '45';
    $shuliang=isset($_GET['shuliang']) ? $_GET['shuliang'] : '1';
		
		
		
		//通过id查找购物车
		$sql1="SELECT * FROM  goodcat WHERE id=$id";
        $res1=$conn->query($sql1);
  
// 		var_dump($res1);
   		
   		
   		if($res1->num_rows>0){
   			//查找到id了,走这条分支
   			
   			$sql3="UPDATE goodcat SET shuliang=$shuliang WHERE id=$id";
   			 $res3=$conn->query($sql3);
   			if($res3){
   				echo '0';
   			}else{
   				echo '1';
   			}
		
			}else{
		//没有查到id,走这条分支
   			 $sql2="insert into goodcat (id,shuming,miaoshu,zuozhe,yuanjia,price,shu_url,renqi,shuliang) values  ($id,'$shuming','$miaoshu','$zuozhe',$yuanjia,$price,'$shu_url',$renqi,$shuliang)";
    
   			 $res2=$conn->query($sql2);
		    
		    		if($res2){
		    			echo 'yes';
		    		}else{
		    		echo 'no';
		   				 }
		}
   		
   			

			
?>