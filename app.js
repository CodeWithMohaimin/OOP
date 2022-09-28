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
// ---------practice
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

var obj = {
    height: 30,
    width: 20,
    func: function () {
        console.log('I am a Method');
        console.log(this.height + ' i am from this method');
        console.log(this.width + ' i am from this method');
    }
}
obj.func();

console.log(obj.height + ' is a height');
console.log(obj.width + ' is a width');

obj.height = 100;
obj.func()

console.log(obj.height);










//===================This===================//

//**this**
//1. Normal kono function e this use korle *window     object* k refer/mention korbe------------->

//2. Kono Object er vitor this use korle oi Object k refer/mention korbe------------------>










function myFunction() {
    console.log(this); //--> this is mention window function
    
}
myFunction()


function myFunction() {
    console.log(this); //--> this is window object
    
}
 new myFunction()  //---> this is empty object




//---------practice --->

var obj = {

    height: 30,
    width: 20,


    func: function () {
        console.log('I am a Method');
        this.printProperties()
        
    },


    printProperties: function () {
        console.log(this.height + ' i am from this method');
        console.log(this.width + ' i am from this method');
    }
}

obj.func();

var news = {
    height: 100,
    width: 200,

    methods: function () {
        console.log(this);
        
    }
}
news.methods()








//============Factory or Class Pattern ==============//
var createRect = function(height, width) {
    return {

        height: height,
        width: width,
    
    
        draw: function () {
            console.log('I am a Method');
            this.printProperties()
            console.log(this);
            
        },
    
    
        printProperties: function () {
            console.log(this.height + ' i am height');
            console.log(this.width + ' i am width');
            // console.log(this);

        }
    }
    
}

var rect1 = createRect(1,2);
rect1.draw();

var rect2 = createRect(5,6)
rect2.draw()







//===============Constructor Pattern==================//
var Rectangle = function (height,width) {
    
        this.height= height
        this.width = width
    
    
        this.draw = function () {
            console.log('I am a Method');
            this.printProperties()
            console.log(this);
            
        }
    
    
        this.printProperties = function () {
            console.log(this.height + ' i am height');
            console.log(this.width + ' i am width');

        }
    
}
    
var rect2 = new Rectangle(1,2)

rect2.draw()


//---------------blind practice--->

var Rect = function (height,width) {
    
    this.height = height;
    this.width = width;

    this.draw = function () {
        console.log('draw function');

        this.otherFunction()
        
    }

    this.otherFunction = function () {
        console.log(this.height + 'I am height');
        console.log(this.width + 'I am width');
        
    }
}

var rect2 = new Rect(5,6);
rect2.draw()


//====================constructor String

var str = new String('str')
console.log(' my string is '+str); //Nothing change in string






const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
];


const index2 = arr.find((item) => item.id === 4)
console.log(index2);



// Filter --> immutable

const arr1 = arr.filter((item) => item.id !== 4 )
console.log(arr1);


// Filter --> mutable

const index = arr.findIndex((item) => item.id === 4)
console.log(index);

const arr2 = arr.splice(index, 1)
console.log(arr);