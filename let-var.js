function checkVar() {
    console.log(i);
    for(var i = 0; i < 10 ; i++) {

    }
    console.log(i);
}

function checkLet() {
    // var name2 = "nik";
    for(let i = 0; i < 10 ; i++) {
        console.log(i);
    }
    // console.log(i);
    
    {
        let name = "vivek";
        var name2 = "vivek";
        console.log("let" , name);
    }
    console.log("var" , name2);
}



checkVar();
checkLet();