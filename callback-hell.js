const axios =  require('axios');


function getUsersData() {

    // Fetch all users
    return axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
        
        getUsersData = [];
    
        // Fetch all users details
        res.data.forEach((user) => {
            getUsersData.push(axios.get('https://jsonplaceholder.typicode.com/users/'+user.id))
        });
    
        return axios.all(getUsersData).then(users => {
            getTodosData = [];
            users.map(user => {
                // Fetch all users- todos
                getTodosData.push(axios.get('https://jsonplaceholder.typicode.com/todos?userId='+user.data.id).then(todos => {
                    user.data['todos'] = todos.data;
                    return user.data;
                }
                ));
            });

            return axios.all(getTodosData).then(result => {
                return result;
            });
        });
    
    })
}

getUsersData().then(users => console.log(users));