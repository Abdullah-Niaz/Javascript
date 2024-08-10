class User{
    constructor(username,email){
        this.username = username;
        this.email = email;

    }
    set username(value){
        this._username = value;
    }
    get username(){
        return `Here is the Name: ${this._username}`
    }

    set email(value){
        this._email = value;
    }
    get email(){
        return `Here is mail: ${this._email}`
    }
}

const us = new User('abdullah','abdullah@gmail.com')
console.log(us.username);
