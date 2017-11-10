const axios = require('axios');

cGen(function *(){
    var userData = yield axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log('userData' , userData);
    var userData2 = yield axios.get('https://jsonplaceholder.typicode.com/users/1');
    console.log('userData' , userData2);
})

setTimeout(() => {
    [1,2,3,4,5].forEach(e => {
        console.log(e);
    })    
},10);


setTimeout(() => {
    [6,7,8,9].forEach(e => {
        console.log(e);
    })    
},1000);

function cGen(generator){
    const Iterator = generator();
    const rIterator = Iterator.next();
    resolveAll(rIterator);
    
    function resolveAll(rIterator) {
        if(!rIterator.done) {
            const promise = rIterator.value;
            promise.then(res => {
                resolveAll(Iterator.next(res.data));
            });
        }
    }
}