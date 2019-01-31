var checkObject = function(){
    return{
        checkName :function(){
            console.log('Check Name!');
        },

        checkEmail :function(){
            console.log('Check Email!');
        },

        checkPassword :function(){
            console.log('Check Password!');
        }


    }
}

var checkObject = checkObject();

checkObject.checkName();
checkObject.checkEmail();
checkObject.checkPassword();