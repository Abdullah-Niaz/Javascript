// this is used to refer current context

const globalObjects= {
    a:20,
    b:30,
    c:40,
}


const values = {
    a : 20,
    b : 39,
    c : 50,
    wellcome : function(){
        console.log(this.a)
        console.log(this.b)
        console.log(this.c)
        console.log(this)
    }
}

// values.wellcome();
// console.log(this);


function chai(){
    let username = "hello";
    console.log(username);
    console.log(this); 
    console.log(globalObjects);
};

// chai();


// Function Expression
const chaii = function(){
    let username = "hello";
    console.log(this.username)
    console.log(this)
}
// chaii();


const chaiiarrow = () => {
    let username = "hello";
    console.log(this.username)
    console.log(this)
}

chaiiarrow();