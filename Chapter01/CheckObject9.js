Function.prototype.addMethod = function(name,fn){
    this[name] = fn;
}

var methods = function(){};

methods.addMethod('checkName',function(){
    console.log('Check Name!');
})

methods.checkName();


var method = function(){};

method.checkName();

