// xữ lý ẫn hiện form
var btnlogin = document.getElementById("login");
var btnreg = document.getElementById("reg");
var formLogin = document.getElementById("form-login");
var formReg = document.getElementById("form-reg");

btnlogin.onclick = function(){
    
        formReg.style.display="block";
   
        formLogin.style.display="none";
    
    
}
btnreg.onclick = function(){
    
        formLogin.style.display="block";
    
        formReg.style.display="none";
    
    

}
// xét điều kiện cho numberphone
// var dknum = document.getElementById("num");
// var btnnumreg = document.getElementById("reg");
// var btnrumlogin = document.getElementById("login");
//  if(dknum == 8 ){
//     btnnumreg.style.display="block";

//  }
//  else{
//         btnrumlogin.style.display="none";
//  }




