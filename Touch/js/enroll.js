window.onload=function(){
	function $(id){
		return document.querySelector(id);
	}
		var txt=$("#txt");
		var passw=$("#password");
		var btn=$("#btn");


		btn.onclick=function(){
			if(txt.value==""){
				alert("请输入账号或QQ号码");
			}
			else{
				if(/^[1-9]\d{4,9}$/.test(txt.value) || /^[1][5,3,,7,8]\d{9}$/.test(txt.value)){
					if(passw.value==""){
						alert("请输入您的密码");
					}
					else{
						alert("登录成功");
						open("index.html")
					}
				}
				else{
					alert("请输入正确格式的qq号码");
				}
				
			}
		}
		txt.onkeyup=function(){
			passw.value=="";
		}

}		