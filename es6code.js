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
}