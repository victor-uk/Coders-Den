let lastName = "Ukaegbu"
let firstName = "Victor" 
let country = "Germany"
let city = "Hamburg"
let age = 18
let isMarried = true 
let year = 2022

// console.log(
//     typeof lastName,
//     typeof firstName,
//     typeof country,
//     typeof city,
//     typeof age ,
//     typeof isMarried,
//     typeof year,
// )

// console.log('10' === 10)

// console.log(parseInt('9.8') == 10)

// console.log(4 == 4)
// console.log('4'== 4)
// console.log('46'!= 4)

// console.log('bread'.length == 'butter'.length)
// console.log('a' === 'A')
// console.log('A' > 'a')

// console.log('python'.length == 'javascript'.length)

// console.log(
//     4 > 3 && 10 < 12,
//     4 > 3 && 10 > 12,
//     4 > 3 || 10 < 12,
//     4 > 3 || 10 > 12,
//     !(4 > 3),
//     !(4 < 3),
//     !(false),
//     !(4 > 3 && 10 < 12),
//     !(4 > 3 && 10 > 12),
//     !(4 === '4'),
// )

// console.log(!('python'.includes('on') == 'dragon'.includes('on')))

// let now = new Date()

// console.log(
//         now.getFullYear(),
//         now.getMonth() + 1,
//         now.getDate(),
//         now.getDay() + 1,
//         now.getHours(),
//         now.getMinutes(),
//         now.getTime()
//     )

    /* level 2 */

    // let length1 = window.prompt("Enter the length of the triangle");
    // let breadth1 = window.prompt("Enter the breadth of the triangle");

    // const area = (l * b)/ 2

    // console.log(area)
    // window.alert(area)

    // let side1 = window.prompt("Enter the length of side1")
    // let side2 = window.prompt("Enter the length of side2")
    // let side3 = window.prompt("Enter the length of side3")

    // const PERIMETER = side1 + side2 + side3;

    // let length2 = window.prompt("Enter the length of the rectangle");
    // let breadth2 = window.prompt("Enter the breadth of the rectangle");

    // const PERIMETER_OF_RECT = 2 * (length2 + breadth2)

    // const AREA_OF_RECT = length2 * breadth2

    // let radius1 = window.prompt("Enter your radius")
    
    // const AREA_OF_CIRCLE = PI * radius1 ^ 2
    // const PERIMETER_OF_CIRCLE = PI * radius1 * 2

    
    // let x = 3
    // let y = 4
    // let pointOfInterception = 7
    
    // let slope = (y - pointOfInterception) / x;
    // console.log(slope)

    // let x1 = 2
    // let x2 = 6
    // let y1 = 2
    // let y2 = 10

    // let slope2 = (y2-y1)/(x2-x1)
    // console.log(slope2)
    
    

    // let a = 1, b = 6, c = 9;

    // let u = (+b * Math.sqrt(b^2 + 4 * a * c )) / 2 * a

    // console.log(u)
    
    // let hours = window.prompt("Enter the hours")
    // let payPerHour = window.prompt("Enter the payPerHour")

    // let weeklyEarning = hours * payPerHour

    // console.log(`Your weekly pay is ${weeklyEarning}`)

    // let myName = 'Victor'

    // myName.length > 7 ? console.log(`${myName} is too long`) : console.log("Your name is perfect")

    // firstName.length > lastName.length ? console.log(`${firstName} is longer than ${lastName}`) : console.log(`${lastName} is longer than ${firstName}`)

    // let myAge = 250
    // let yourAge = 25

    // console.log(`I am ${myAge - yourAge} older than you`)

    // let birthYear = window.prompt('Enter your birth year')

    // birthYear > 18 ? console.log('you are eligible to drive') : console.log(`You are ${birthYear}, you will be eligible to drive in the next ${18 - birthYear} years`)

    // let numberOfyears = 18.5
    // console.log(`You have lived for ${numberOfyears * 365.25 * 24 * 3600}`)

    

let current = new Date()
let currentYear = current.getFullYear()
let currentMonth = current.getMonth()
let currentDate = current.getDate()
let currentHour = current.getHours()
let currentMinute = current.getMinutes()
 
let currentTime = console.log(`The time is
${currentMonth.toString().length < 2 ? console.log(`${0}${current.getMonth()}`) : console.log(current.getMonth())}
${currentDate.toString().length < 2 ? console.log(`${0}${current.getDate()}`) : console.log(current.getDate())}
${currentHour.toString().length < 2 ? console.log(`${0}${current.getHours()}`) : console.log(current.getHours())}
${currentMinute.toString().length < 2 ? console.log(`${0}${current.getMinutes()}`) : console.log(current.getMinutes())}`
)