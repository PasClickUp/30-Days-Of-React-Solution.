// Exercise Level 1

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
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

//1. Declare an empty array;
const emptyArray = []
//2. Declare an array with more than 5 number of elements
let arrayThan5Elements = ['Ibn', 'Ibraahim', 'Islamic', 'Institute', 'Nigeria', 'Africa', 'Earth']
//3. Find the length of your array
arrayThan5Elements.length //7
//4. Get the first item, the middle item and the last item of the array
let firstItem = arrayThan5Elements.shift() //Ibn
let lastItem = arrayThan5Elements.pop() //Earth
let middleItem = arrayThan5Elements.splice(2, 1) //Institute

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array.The array size should be greater than 5
let mixedDataTypes = [
    'Food',
    1,
    { Name: 'Abdussomad' },
    true,
    ['Muslim', 'Developer', 'Marries'],
    'Blessed',
    { Wife: 'Zainab' },
]
mixedDataTypes.length //7
//6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//7. Print the array using console.log()
console.log(itCompanies) //['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

//8. Print the number of companies in the array
itCompanies.length //7
//9. Print the first company, middle and last company
let firstCompany = itCompanies.slice(0, 1) //Facebook
let middleCompany = itCompanies.slice(3, 4)//Apple
let lastCompany = itCompanies.slice(6)//Amazon
//10. Print out each company
itCompanies.forEach(company => console.log(company))
//11. Change each company name to uppercase one by one and print them out
itCompanies.forEach(company => console.log(company.toUpperCase()))
//12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]}, ${itCompanies[4]}, ${itCompanies[5]}, and ${itCompanies[6]}, are big IT companies.`)
//13. Check if a certain company exists in the itCompanies array.If it exist return the company else return a company is not found
let companyToCheck = 'Amazon'
let CheckCompany = itCompanies.indexOf(companyToCheck)
CheckCompany != -1 ? console.log(companyToCheck) : console.log('company is not found')
//14. Filter out companies which have more than one 'o' without the filter method
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].split('o').length - 1 >= 2) {
        console.log(itCompanies[i])
    }
}
//15. Sort the array using sort() method
let sortedCompanies = itCompanies.sort()
//16. Reverse the array using reverse() method
let reversedCompanies = itCompanies.reverse()
//17. Slice out the first 3 companies from the array
let firstThree = itCompanies.slice(0, 3)
//18. Slice out the last 3 companies from the array
let lastThree = itCompanies.slice(4)
//19. Slice out the middle IT company or companies from the array
let middleIt = itCompanies.slice(3, 4)
//20. Remove the first IT company from the array
let removeFirstIt = itCompanies.shift()
//21. Remove the middle IT company or companies from the array
let removeMiddleIt = itCompanies.splice(2, 1)
//22. Remove the last IT company from the array
let removeLastIt = itCompanies.pop()
//23. Remove all IT companies
let removeAllIt = itCompanies.splice(0, itCompanies.length)
console.log(itCompanies) // []

// Exercise: Level 2
//1. Create a separate countries.js file and store the countries array into this file, create a separate file web_techs.js and store the webTechs array into this file. Access both file in main.js file

import countriesArray from "./countries.js"
import web_tech from "./web_tech.js"
// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

console.log(text.replace(/[.,\s]/g, " "))
/*

3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
add 'Meat' in the beginning of your shopping cart if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea'
In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

console.log(fullStack)
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
*/