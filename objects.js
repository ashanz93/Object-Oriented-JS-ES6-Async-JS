// Move to class paradigm
/* class User {
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

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}*/

// new -> 1. Create Empty object {}
// 2. sets this to point to the new empty object
// call contructor method

// Prototype model (non ES6 syntax)
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;

    this.login = function() {
        console.log(this.email, 'has logged in');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');

var userTwo = new User('a@u.com', 'a');

/*var admin = new Admin('ashwin@gmail.com', 'ashwin');

userOne.login().updateScore().updateScore();

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);*/

userOne.login();




