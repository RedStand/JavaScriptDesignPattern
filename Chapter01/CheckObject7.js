var checkobject = {
    checkName : function(){
        console.log('Check Name!');
        return this;
    },
    checkEmail : function(){
        console.log('Check Email!');
        return this;
    },
    checkPassword : function(){
        console.log('Check Password!');
        return this;
    }


}

console.log('CheckObject7');
checkobject.checkName().checkEmail().checkPassword();