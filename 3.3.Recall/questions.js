let selectElementsStartingWithA = (array) => {
    return array.filter(el => {
        return (el.indexOf('a') === 0)
    })
}

let selectElementsStartingWithVowel = (array) => {
    const regex = new RegExp(/[aeiou]/)
    return array.filter(el => { return (el.indexOf(el.match(regex)) === 0) })
}

let removeNullElements = (array) => {
    return array.filter(el => { return el != null })
}

let removeNullAndFalseElements = (array) => {
    return array.filter(el => { return (el != null && el !== false) })
}

let reverseWordsInArray = (array) => {
    let newArr = []
    array.forEach(el => {
        newArr.push(el.split('').reverse().join(''))
    })
    return newArr
}

let everyPossiblePair = (array) => {
    const result = []

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const temp = []
            temp.push(array[j], array[i])
            temp.sort()
            result.push(temp)
        }
    }

    return result.sort()
}

let allElementsExceptFirstThree = (array) => {
    return array.slice(3);
}

let addElementToBeginning = (array, element) => {
    let newArr = array
    newArr.unshift(element)
    return newArr
}

let sortByLastLetter = (array) => {
    return array.sort((a, b) => a.charCodeAt(a.length -1) - b.charCodeAt(b.length - 1))
}

let getFirstHalf = (string) => {
    return string.slice(0, 3)
}

let makeNegative = (number) => {
    return -Math.abs(number) // '-' devant math returnera toujours une valeur negative.
}

let numberOfPalindromes = (array) => {
    let count = 0
    array.forEach(el => {
        if (el.split('').reverse().join('') === el) {
            count++
        }
    })
    return count
}

let shortestWord = (array) => {
    return array.sort((a, b) => a.length - b.length)[0]
}

let longestWord = (array) => {
    return array.sort((a, b) => b.length -  a.length)[0]
}

let sumNumbers = (array) => {
    return array.reduce((previous, current) => previous + current, 0)
}


let repeatElements = (array) => {
    let tempArr = [...array]
    tempArr.forEach(el => {
        array.push(el)
    })
    return array
}

let stringToNumber = (string) => {
    return parseInt(string)
}

let calculateAverage = (array) => {
    let tempArr = array.reduce((prev, curr) => prev + curr, 0)
    return tempArr / array.length
}

let getElementsUntilGreaterThanFive = (array) => {
    return array.filter(el => { return el <= 5 }).splice(0, 6)
}

let convertArrayToObject = (array) => {
    let newObj = {}
    for (let i = 0; i < array.length; i += 2) {
            newObj[array[i]] = array[i + 1]
    }
    return newObj
}

let getAllLetters = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const newArr = []
    array.forEach(el => {
        alphabet.forEach(elem => {
            if (el.includes(elem)) {
                newArr.push(elem)
            }
        })
    })
    return [...new Set(newArr)].sort()
}

let swapKeysAndValues = (object) => {
    let ret = {};
    for(let el in object){
        ret[object[el]] = el;
    }
    return ret;
}

let sumKeysAndValues = (object) => {
        let sum = 0
        for(let el in object) {
            if(object.hasOwnProperty(el)) {
                sum += parseFloat(object[el]) + parseInt(el)
            }
        }
        return sum
}

let removeCapitals = (string) => {
    const regex = new RegExp(/[A-Z]+/g)
    return string.replace(regex, '')
}

let roundUp = (number) => {
    return Math.ceil(number)
}

let formatDateNicely = (date) => {
    return date.toLocaleDateString()
}

let getDomainName = (string) => {
    return string.substring(string.indexOf('@') + 1, string.indexOf('.com'))
}

let titleize = (string) => {
    // let splitString = string.split('.')
    // splitString.forEach(el => {
    //     if (el.length > 3 ) {
    //         el.charAt(0).toUpperCase()
    //     }
    // })
    //
    // return splitString
}

let checkForSpecialCharacters = (string) => {
    const regex = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)
    return regex.test(string)
}

let squareRoot = (number) => {
    return Math.sqrt(number)
}

let factorial = (number) => {
    for (let i = number - 1; i >= 1; i--) {
        number *= i;
    }
    return number
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return Math.ceil((number - 32) / 1.8)
}

let letterPosition = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const newArr = []
    array.forEach(el => {
        alphabet.forEach(elem => {
            if (elem === el || elem.toUpperCase() === el) {
                newArr.push(alphabet.indexOf(elem) + 1)
            }
        })
    })
    return newArr
}
