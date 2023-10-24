const Passwordbox =document.getElementById('password');

const length = 10;
const Uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const Lowecase = "abcdefghijklmnopqrstuvwxyz";
const Number = "0123456789";
const special = "!@#$%^&*()_+}{[]/><-"

const allcharset = Uppercase + Lowecase + Number + special;

function createpassword(){
    let password ='';
    password += Uppercase[Math.floor(Math.random()*Uppercase.length)];
    password += Lowecase[Math.floor(Math.random()*Lowecase.length)];
    password += Number[Math.floor(Math.random()*Number.length)];
    password += special[Math.floor(Math.random()*special.length)];

    while(length > password.length){
        password += allcharset[Math.floor(Math.random()*allcharset.length)];
 }
  Passwordbox.value = password;
    }
function copypassword(){
        Passwordbox.select();
        Document.execCommand("copy");
    }

 
 