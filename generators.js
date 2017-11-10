const axios = require('axios');
const co = require('co');

customCo(function *(){
    var users = yield axios.get('https://jsonplaceholder.typicode.com/users');
    // var posts = yield axios.get('https://jsonplaceholder.typicode.com/posts');

    for(let i=0 ; i< users.length ; i++) {
        var user_detail =  yield axios.get('https://jsonplaceholder.typicode.com/users/'+users[i].id);
        console.log(user_detail);
    }
})

function customCo(generator) {
    var iterator = generator();
    var rIteration = iterator.next();
    iterate(rIteration);
    function iterate(rIteration) {
        if(!rIteration.done) {
            let rpromise = rIteration.value;
            rpromise.then(data => iterate(iterator.next(data.data)));
        }
    }
}

