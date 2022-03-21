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
    return array
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
    return array
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
    return array.filter(el => { return el <= 5 })

}

let convertArrayToObject = (array) => {
    let newObj = {}
    for (let i = 0; i < array.length; i += 2) {
            newObj[array[i]] = array[i + 1]
    }
    return newObj
}

let getAllLetters = (array) => {
    return array
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
}
