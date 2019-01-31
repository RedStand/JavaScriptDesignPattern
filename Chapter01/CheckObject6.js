var checkObject = function(){};

checkObject.prototype = {
    checkName : function(){
        console.log('Check Name!');
    },
    checkEmail : function(){
        console.log('Check Email!');
    },
    checkPassword :function(){
        console.log('Check Password!');
    }    
}
console.log('CheckObject6!');
var a  = new checkObject();
a.checkName();
a.checkEmail();
a.checkPassword();