// Move to class paradigm
class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'Score now: ', this.score);
        return this; // Facilitate method chaining
    }
}

// new -> 1. Create Empty object {}
// 2. sets this to point to the new empty object
// call contructor method
var userOne = new User('ryu@ninjas.com', 'Ryu');

var userTwo = new User('a@u.com', 'a');

userOne.login().updateScore().updateScore();


