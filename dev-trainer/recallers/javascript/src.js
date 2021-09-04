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

// (() => {
//     console.log('hello world')
// })()


// const a = 12
// const b = '12'

// if (a === b) console.log('true')


// function a() {
//     var x = 20
//     function b() {
//         var y = 30
//         console.log('x from b => ', x)
//         console.log('y from b=> ', y)
//         console.log('z from b => ', z)

//         function c() {
//             var z = 40
//             console.log('x from c => ', x)
//             console.log('y from c=> ', y)
//             console.log('z from c => ', z)
//         }
//         c()
//     }
//     b()
//     console.log('x from a => ', x)
//     console.log('y from a => ', y)
//     console.log('z from a => ', z)

// }

// a()
// b()

// var primeCount = 0

// function primeNumber(n) {
//     if (n == 0) return false
//     if ( n == 1 || n ==2 ) return true
//     for(let i = 2; i < n; i++) {
//         if (n % i == 0) return false
//     }
//     return true
// }

// function findPrime(n) {
//     if (n == 0) return primeCount
//     const isPrime = primeNumber(n)
//     if (isPrime) primeCount += 1
//     return findPrime(n-1)
// }

// console.log(findPrime(1000))
// findPrime(1000) findPrime(999) findPrime(998) ........ findPrime(0)


// Array

// const array1 = []
// array1.push(12)
// array1.push(13)
// array1.push(1)
// array1.push(129)
// console.log(array1)
// var pop
// pop = array1.pop()
// pop = array1.pop()

// console.log(pop)
// console.log(array1)

// const array2 = ['carrot', 'cauli', 'tomato', 'tomato', 'potato', 'pumpkin']

// console.log(array2.indexOf('tomato'))
// console.log(array2.lastIndexOf('tomato'))
// console.log(array2.length)
// console.log(array2.join(''))
// // array2.shift()
// array2.unshift('brinjal')
// console.log(array2.shift())
// console.log(array2)
// console.log(array2.toString())

// const st = 'i am roshan joshi'
// console.log(st.split(' '))

// array2.splice(1, 0, 'ladies finger')
// console.log(array2)
// console.log(array2[3])

// for(i in array2) {
//     console.log(i)
// }

// array2.forEach((item) => {
//     console.log(item)
// })


// for(let i = 0; i < array2.length; i++) {
//     console.log(array2[i])
// }



// objects are containers for named values and methods or properties with respective

// const array1 = {}

// array1.name = 'roshan'
// array1.age = 25
// array1.lastName = 'joshi'
// array1['gender'] = 'male'

// console.log(array1)


// const car1 = {
//     name: 'ferrari',
//     price: '10M',
//     colors: ['red', 'green', 'white', 'wineRed'],
//     manufactureInfo: {
//         manufatureDate: '2017',
//         batchId: '12AFV8',
//         engine: 'V8',
//     },
//     collectData: function() {
//         return this.name + ' ' + this.price + ' ' + this.manufactureInfo.engine
//     },
//     display: function() {
//         console.log(this)
//     }
// }

// console.log(car1.colors)
// console.log(car1.price)
// console.log(car1.manufactureInfo.batchId)

// const information = car1.collectData()
// console.log(information)
// car1.display()


// console.log(Object.keys(car1.manufactureInfo))
// console.log(Object.values(car1))
// // Object.freeze(car1)
// car1.seats = 2
// // console.log(car1)

// const electronics = {
//     headlights: 'led',
//     transmission: 7,
//     powerStaring: true,
//     price: '222220M',
// }

// Object.assign(car1, electronics)
// console.log(car1)


// const Phone = function(name, color, resolution, price) {
//     this.name = name
//     this.color = color
//     this.resolution = resolution
//     this.price = price
// }

// Phone.prototype.isSmart = true

// const phone1 = new Phone('galaxy', 'black', '4k', 10000)
// const phone2 = new Phone('y8', 'red', '1080', 100000)
// const phone3 = new Phone('s9', 'white', '8k', 45000)
// const phone4 = new Phone('XR', 'ceramic', '4k', 120000)
// const phone5 = new Phone('op7', 'pink', '4k', 90000)

// console.log(phone1)
// console.log(phone2)
// console.log(phone3)
// console.log(phone4)
// console.log(phone5)

// console.log(phone3.isSmart)
// Array.prototype.reverse = function() {
//     console.log('hacked')
// }
// const a = [1,2,3,4]
// a.reverse()
// console.log(a)

// function reverse(item) {
//     item.reverse()
// }

// const array4 = [1,2,3,4,5]

// reverse(array4)

// console.log(array4)


// const arr = [{
//     name: 'nameA',
//     score1: 12,
//     score2: 13,
// },{
//     name: 'nameB',
//     score1: 45,
//     score2: 13,
// },{
//     name: 'nameC',
//     score1: 455,
//     score2: 213,
// }]

// let result = 0

// arr.forEach((item)=>{
//     result += item.score1
// })

// const mapped = arr.map((item)=>{
//     const buffer_obj = {...item}
//     const sum = item.score1 + item.score2
//     buffer_obj.sum = sum
//     return buffer_obj
// })

// console.log(mapped)
// console.log(arr)



// setTimeout(()=>{
//     console.log('i am time consuming task')
// }, 2000)

// setInterval(()=>{
//     console.log('i run in certain interval')
// }, 1000)

// console.log('hello')

// let function1 = function(var1, var2, cb) {
//     setTimeout(()=>{
//         if(typeof(var1) === 'number' && typeof(var2) === 'number') {
//             const result = var1 + var2
//             cb(false, result)
//         } else {
//             cb('something went wrong', false)
//         }
        
//     }, 4000)
// }


// function1(32, 42, (err, data) => {
//     if (err){
//         console.log(err)
//         console.log(data)
//     } else {
//         console.log(data)
//     }
// })

// console.log('i am running')


//license process story

function applyForm(name, age, callback) {
    setTimeout(()=>{
        const applicant_form = {}
        applicant_form.name = name
        applicant_form.age = age
        applicant_form.accepted = true
        callback(false, applicant_form)
    }, 5000)
}

function giveWrittenExam(callback) {
    setTimeout(() => {
        callback(false, 'passed written exam')
    }, 3000)
}

function trialExam(attempt, callback){
    setTimeout(() => {
        if(attempt.length < 3) {
            attempt.push(1)
            callback('trial exam failed', false, attempt)
        } else {
            callback(false, 'trial exam passed', attempt)
        }
    }, 3000)
}

function trialCallBack(err, data, attempt) {
    if(err) {
        console.log(err)
        trialExam(attempt, trialCallBack)
    } else {
        console.log(data)
        clearInterval(timer)
    }
}

applyForm('sharad kafle', 25, (err, data) => {
    if(err) {
        console.log(err)
    } else {
        console.log(data)
        console.log('form approved getting ready for written exam')
        giveWrittenExam((err, data) => {
            if(err) {
                console.log(err)
            } else {
                console.log(data)
                console.log('written exam complete, getting ready for trial')
                const attempt = [1]
                trialExam(attempt, trialCallBack)
            }
        })

    }
})

var count = 0
var timer = setInterval(() => {
    count += 1
    console.log('trial practice ', count)
}, 200)
