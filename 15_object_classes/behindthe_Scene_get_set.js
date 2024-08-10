function user(username,email){
    this._username = username;
    this._email = email;

    Object.defineProperty(this,'email',{
        get: function(){
            return this.email;
        },
        set:function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this,'username',{
        get: function(){
            return this._username;
        },
        set: function(value){
            this._username = value;
        }
    })
}

const us =new user("abdullah","abdullah@gmail.com");
console.log(us._email)
console.log(us._username)