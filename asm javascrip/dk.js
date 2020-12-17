function check()
{
var hoten = document.getElementById('name');
if(hoten.value == "")
{
  alert("họ tên không được để trống");
  return false;
}
var gtnam = document.getElementById('Nam');
var gtnu = document.getElementById('Nu');
if((gtnam.checked==false && gtnu.checked==false)||(gtnam.checked==true && gtnu.checked==true))
{
alert("Bạn chọn lại giới tính");
return false;
}
var namsinh = document.getElementById('namsinh');
if(namsinh.value==""){
  alert("Năm sinh không được bỏ trống");
  return false;
}
var user = document.getElementById('username');
if(user.value==""){
alert ( "Username không được bỏ trống");
return false;
}
var pass = document.getElementById('pass');
if(pass.value !=""){
if(pass.value.length<6 || pass.value.length >20)
alert ("Password phải có độ dài từ 6-20 ký tự.");
}
else{
alert ("Password không được bỏ trống.")
return false;
}
var re_pass = document.getElementById('re-pass');
if(pass.value != re_pass.value){
alert ("Password không khớp.")
return false;
}
var reg_email =/^[A-Za-z0-9]+([_\.\-]?[A-Za-z0-9])*@[A-Za-z0-9]+([\.\-]?[A-Za-z0-9]+)*(\.[A-Za-z]+)+$/;
var email = document.getElementById('email');
if(email.value!=""){
if(reg_email.test(email.value)==false)
alert("Email không hợp lệ.");
}
else{
alert("Không được bỏ trống email.");
return false;
}
return true;
}