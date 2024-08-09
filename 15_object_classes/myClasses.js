class user{
        constructor(username,email,password){
            this.username = username;
            this.email = email;
            this.password = password
        }

        encrpytPassword(){
            let encryptedPassword = this.password;
            encryptedPassword =`${this.password}abcdec`
            console.log(`Your password Has been encrypted: ${encryptedPassword}`);
            
        }
}
const chai = new user("chai","chai@gmail.com",1232)
chai.encrpytPassword()