function add(a,b) {  
    console.log(a,b);
    return a+b;
}

var add2 = (a,b) => { 
    return a+b 
};

var result = add(5,6);
var result2 = add2(5,6);

console.log("add with function" , result);
console.log("add with fat arrow" , result2);