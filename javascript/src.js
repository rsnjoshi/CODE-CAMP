// Data types:

// var a = 'character roshanfajdsl fsd sadf 4sd5f4'
// console.log(typeof(a))
// a = 12
// console.log(typeof(a))
// a = true
// console.log(typeof(a))
// a= [1,2,3]
// console.log(typeof(a))

// var b = [1, 'hello', true, 1.0, [1, 2, 'world']]
// console.log(b)

// var c = {
//     name: ['roshan', 'prabin', 'sharad'],
//     surname: {
//         roshan: 'joshi',
//         prabin: 'silwal',
//         sharad: 'kafle',
//     },
//     age: '25',
//     nationality: 'nepali',
// }

// console.log(c['name'][0])

// const male = false

// if (!male) {
//     console.log('female')
// } else {
//     console.log('male')
// }



/*
    logical operators
    'or and not equals gt ge lt le'
    or => ||
    and => &&
    not => !
    equals => ==
    gt => >
    lt => <
    ge => >=
    le => <=
    not equal to => !=
*/

// var a = 1

// switch(a) {
//     case 'male':
//         console.log('hello sir')
//         break;
//     case 'female':
//         console.log('hello mam')
//         break;
//     default:
//         console.log('hello')
// }

// var a = 0

// while (a < 10) {
//     console.log(a)
//     a = a + 1;
// }

// var a = 0

// do {
//     console.log(a)
//     a = a + 1
// }
// while (a < 10);

// for(var i = 0; i < 10; i += 1) {
//     console.log(i)
// }


/* 
    function/method => block of code, that makes a block of code reusable and helps refactor the code

    types:
        1. Function with argument:
            function fxn_1(var1, var2, var3){}
        2. Function with argument and return type
            function fxn_2(a, b){ return 20 }
        3. Function with no argument and no-return type:
            function fxn_3(){}
        4. Function with no argument and return type:
            function fxn_4(){ return 'hello' }
*/
// function some_function(a, b) {
//     return a * b
// }

// const fxn_1 = function (var1, var2){
//     let result = 0
//     result = var1 + var2
//     return result
// }

// let result = fxn_1(1, '2')
// console.log(result)


// let variable = 0
// const increment = function() {
//     variable += 1
// }

// increment()
// increment()
// increment()
// increment()

// console.log(variable)

// let variable = 0

// let fxn_3 = function() {
//     variable = variable + 10
//     return variable
// }

// console.log(fxn_3())
// console.log(variable)

// const lamda = (a, b) => {
//     console.log(a+b)
// }

// const lamda = a => {
//     a += 20
//     return a
// }


// const result = lamda(2)
// console.log(result)

// var a = 40

// const lamda = () => a *30

// console.log(lamda())

// const evenOdd = number => {
//     if (number == 0) {
//         console.log('neither even nor odd')
//     } else {
//         if (number % 2 == 0) {
//             console.log('you number is even')
//         } else {
//             console.log('your number is odd')
//         }
//     }
// }

// var somenumer = 13
// evenOdd(somenumer)
// for(let i = 0; i < 10; i++) {
//     somenumer = somenumer + i
// }
// evenOdd(somenumer)


