//==============Object literal =================//


// var react = {
//     height: 30,
//     width: 60,
    
//     func: function () {
//         console.log('my height is ' + this.height);
//         console.log('my width is ' + this.width);
//         console.log('I am Programmer Mohaimin');
//     }
// }
// react.func();
// react.height = 50;
// react.func()
//---------practice
// var react = {

//     color: 'red',
//     background: 'blue',

//     body: function () {
//         console.log('my color is ' + this.color);
//         console.log('my background is ' + this.background);
//     }
// }

// react.body()

//---------practice --->

// var obj = {
//     height: 30,
//     width: 20,
//     func: function () {
//         console.log('I am a Method');
//         console.log(this.height + ' i am from this method');
//         console.log(this.width + ' i am from this method');
//     }
// }
// obj.func();

// console.log(obj.height + ' is a height');
// console.log(obj.width + ' is a width');

// obj.height = 100;
// obj.func()

// console.log(obj.height);










//===================This===================//

//**this**
//1. Normal kono function e this use korle *window     object* k refer/mention korbe------------->

//2. Kono Object er vitor this use korle oi Object k refer/mention korbe------------------>










// function myFunction() {
//     console.log(this); //--> this is mention window function
    
// }
// myFunction()


// function myFunction() {
//     console.log(this); //--> this is window object
    
// }
//  new myFunction()  //---> this is empty object




//---------practice --->

var obj = {

    height: 30,
    width: 20,


    func: function () {
        console.log('I am a Method');
        this.printProperties()
        console.log(this);
        
    },


    printProperties: function () {
        console.log(this.height + ' i am from this method');
        console.log(this.width + ' i am from this method');
    }
}

obj.func();


