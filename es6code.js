window.onload = function(){
    const pi = 3.142;

    function calcArea(r){
        const pi = 10; // Scope of pi is local
        console.log("the area is " + pi * r *r);
    }
    console.log(pi); // Still uses global value
    calcArea(5);

    var x = 10;

    if( x > 5 ) {
        let x = 5; // Create variable in local scope
        console.log("let " + x);
    }

    console.log("var " + x);

    var items = document.getElementsByTagName("li");

    for(let x = 0; x < items.length; x++)
    {
        items[x].onclick = function() {
            console.log(x);
        }
    }

    console.log(x); // var not let

    function logNinja(name = 'Ashwin', belt = 'red', age = 25){
        console.log(`My name is ${name}, my age is ${age}, my belt is ${belt}`); // String Template
    }

    logNinja();

    var meats = ['ham', 'chicken', 'pork'];

    console.log(...meats); // ... spread operator

    var nums1 = [1, 2, 3];

    var nums2 = [...nums1, 4, 5, 6]; //Spread nums1 into individual elements

    console.log(nums2);

    function addNums(a, b, c)
    {
        console.log(a+b+c);
    }

    var nums = [3, 5, 7];

    addNums(...nums);

    var temp = `hello 
    my name is ryu`; // Add line break without \n

    console.log(temp);

    function logInfo(name = 'Ashwin', age) {
        console.log(`My name is ${name} and my age is ${10 + 15}`);
    }
    
    logInfo();

    // Object literal enhancements
    // ES6 Implicitly grab name from variables

    var name = "crystal"
    var belt = "black"

    var ninja = { name, belt, 
        // ES5
        chop: function(x){
            console.log(`Chopped an enemy ${x} times`)
        },
        chopES6(x){
            console.log(`Chopped an enemy ${x} times`)
        }
    };

    console.log(ninja.name);
    ninja.chopES6(5);
}