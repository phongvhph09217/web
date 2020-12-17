function check()
{
 var hoten = document.getElementById('name');
if(hoten.value == "")
{
  alert("họ tên không được để trống");
  return false;
}
var dienThoai = document.forms["myForm"]['dienThoai'].value;
var kiemTraDT = isNaN(dienThoai);
if (dienThoai =="") {
alert("Điện thoại không được để trống");
return false;
}
if (kiemTraDT == true) {
alert("Điện thoại phải để ở định dạng số");
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
var ghichu = document.getElementById('ghichu');
if(ghichu.value !=""){
if(ghichu.value.length >100)
    alert("ghi chú không quá 100 từ");
    
}
else
    alert ("ghi chú không được bỏ trống.")
  return false;
}
