var axios = require('axios');

function consoleLog(value,func){
    console.log(value);
    func();
}

function logged(){
    console.log("Logged");
}

consoleLog("Hi Vivek" , () => {
    console.log("are wah");
});

var call =  (name = 'Vivek') => {
                return new Promise((resolve , reject ) => {
                    setTimeout(() => {
                        console.log(name);
                        resolve(name);
                    },3000);
                    // reject('finished error');
                })
            }

call();
call();
call();
call();


call('1st').then((data) => {

    call('2nd').then((data) => {

        call('3rd').then((data) => {

        })

    })

})

const getUserNames = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users').then(data => {
        var users = data.data;
        return users.map(user => ({
            id : user.id,
            name : user.name
        }));

    }).catch(err => {
        console.log(err);
    });
}

getUserNames().then(userNames => console.log(userNames));

function* genrtrs(){
    console.log('----------->',id)
    axios.get('https://jsonplaceholder.typicode.com/users/'+id , function* (data){
        console.log("------------>" ,data.data);
        yield data.data;
    });
}

var gn =  genrtrs();

console.log(gn.next().value);
