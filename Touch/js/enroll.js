window.onload=function(){
	function $(id){
		return document.querySelector(id);
	}
		var txt=$("#txt");
		var passw=$("#password");
		var btn=$("#btn");
		var zhuc=$("#zhuc");
		var reg=$("#register");
		var dl=$("#denglu");
		var sub=$("#submit");
		var phone=$("#phone");
		var zcword=$("#zcword");
		var fsub=$("#firstsub");
		
//		btn.onclick=function(){
//			if(txt.value==""){
//				alert("请输入账号或QQ号码");
//			}
//			else{
//				if(/^[1-9]\d{4,9}$/.test(txt.value) || /^[1][5,3,,7,8]\d{9}$/.test(txt.value)){
//					if(passw.value==""){
//						alert("请输入您的密码");
//					}
//					else{
//						alert("登录成功");
//						open("index.html")
//					}
//				}
//				else{
//					alert("请输入正确格式的qq号码");
//				}
//				
//			}
//		}
		
			db=openDatabase("mydb","2.0","test a command",2*1024*1024);
				
				db.transaction(function(tx){
					tx.executeSql("create table if not exists zhh (zh unique,pass integer)");
				})
			
				fsub.onclick=function(){
						 
					db.transaction(function(tx){
						tx.executeSql("insert into zhh (zh,pass) values(?,?)",[phone.value,zcword.value],function(){
							if(phone.value!=""&&zcword.value!=""){
								if(/^[1][5,3,,7,8]\d{9}$/.test(phone.value)){
									if(/^[a-zA-Z0-9]{6,12}$/.test(zcword.value)){
										alert("注册成功");
									}
								}
								else{
									alert("请输入正确的电话号码");
								}
							}
							  
						});
					})
				}
				
		    	
			btn.onclick=function(){
				
		        db.transaction(function(tx){
		    	 	
		    	 	   tx.executeSql("select * from email where zh=? and pass=?",[phone.value,passw.value],function(tx,rs){
			    	 	   	if(phone.value!="" && zcword.value!=""){
		    	 	   		   if(rs.rows.length>0){
		    	 	   	       		alert("登录成功");
		    	 	   	       }
		    	 	   	       else{
		    	 	   	       	alert("请输入正确的用户名或密码");
		    	 	   	       }
			    	 	   	}
		    	 	   	      
		    	 	   })
		    	})
		
			}
		
		
		txt.onkeyup=function(){
			passw.value=="";
		}
		zhuc.onclick=function(){
			reg.style.top=0;
		}
		dl.onclick=function(){
			reg.style.top=3000+"px";
		}
	
}		