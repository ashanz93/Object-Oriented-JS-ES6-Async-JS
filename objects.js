var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login(){
        console.log(this.email, 'has logged in');
    },
    logout(){
        console.log(this.email, 'has logged out');
    }
};

// Two ways to update properties
var prop = 'name';

userOne.name = "ashwin";
//Dynamic properties
console.log(userOne[prop]);
userOne['email'] = "a@u.com";

// Set properties on Object
userOne.age = 25;

userOne.login();
userOne.logout();