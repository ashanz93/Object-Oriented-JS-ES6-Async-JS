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
}

var user = User.prototype;

user.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

user.logout = CUser_logout;

function CUser_logout() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

// args is an array
// this -> bound to admin
// apply -> inherits User prototype properties and assigns passed args to properties of User prototype
function Admin(...args) {
    User.apply(this, args);
    this.role = 'administrator';
}

Admin.prototype = Object.create(user);

var admin = Admin.prototype;

admin.deleteUser = CAdmin_deleteUser;

function CAdmin_deleteUser(u) {
    users = users.filter(user => {
        return user.email != u.email
    })
}

var userOne = new User('ryu@ninjas.com', 'Ryu');

var userTwo = new User('a@u.com', 'a');

var admin = new Admin('ashwin@gmail.com', 'ashwin');

var users = [userOne, userTwo, admin];

/*var admin = new Admin('ashwin@gmail.com', 'ashwin');

userOne.login().updateScore().updateScore();

var users = [userOne, userTwo, admin];

admin.deleteUser(userOne);

console.log(users);*/

userOne.login();

userOne.logout();

console.log(admin);

admin.deleteUser(users[1]);




