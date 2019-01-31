var checkobject = function(){};
checkobject.prototype.checkName = function(){
    console.log('Check Name!');
}

checkobject.prototype.checkEmail = function(){
    console.log('Check Email!');
}

checkobject.prototype.checkPassword = function(){
    console.log('check Password!');
}

console.log('CheckObject5!');
var a = new checkobject();
a.checkName();
a.checkEmail();
a.checkPassword();