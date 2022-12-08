// const arr = Array(4);

// const letters = ['a', 'b', 'c', 'g', 'e', 'f', 'g',]

// console.log(letters.length);

// let firstItem = letters[0]; let middleItem = letters[3]; let lastItem = letters[letters.length - 1]

const mixedDataTypes = [
    80,
    'Ada',
    {
        name: "Chioma",
        height: 175,
    },
    {skills :['cooking', 'singing', 'skipping']},
    'peanut butter',
    3000,
]

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// console.log(`${itcompanies[0]}, ${itcompanies[1]}, ${itcompanies[2]}, ${itcompanies[3]}, ${itcompanies[4]}, ${itcompanies[5]} and ${itcompanies[6]} are big IT companies`)
// console.log(itcompanies[1])
// console.log(itcompanies[2])
// console.log(itcompanies[3])
// console.log(itcompanies[4])
// console.log(itcompanies[5])
// console.log(itcompanies[6])


// let index = itcompanies.indexOf('Facebook') 

// if (index == -1) {
//     console.log('This array does not contain Facebook')
// } else {
//     console.log('It contains Facebook')
// }


// let sortedItCompanies = itCompanies.sort()
// let reversedItCompanies = itCompanies.reverse()

// console.log(itCompanies);

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let aa = text.replaceAll(",", "").replaceAll(".", "")

// let array3 = aa.split(' ')
// console.log(array3)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey',]

// shoppingCart.unshift('Meat')
// shoppingCart.push('Egg')
// console.log(shoppingCart)

// shoppingCart.push('Egg')

// shoppingCart.pop()
// shoppingCart.splice(2, 3, "Green Tea")
// console.log(shoppingCart)

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


ages.sort((a, b) => a - b)
// console.log(Math.min(...ages))

// console.log(ages)

// let mid = ages.length / 2
// let middle = (ages.length - 1) / 2 

// ages.length % 2 !== 0 ? console.log(ages[middle]) : console.log((ages[mid - 1] + ages[mid]) / 2 )

// let sumOfNum = ages.reduce((sum, current) => sum + current, 0)

// console.log(sumOfNum / ages.length)

// console.log(Math.max(...ages) - Math.min(...ages))

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Uruguay'
  ]

//   function split(arr){
//     let mid = arr.length / 2
//     if (arr.length % 2 === 0){
//         return arr.slice(mid)
//     } else {
//         return arr.slice(mid + 1)
//     }
//   }

//   let array = split(ages)
//   console.log(array)

