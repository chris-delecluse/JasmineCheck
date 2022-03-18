
let tailleString = (texte) => {
    return texte.length;
}
let remplaceECar = (texte) => {
    let a = texte.indexOf("e")
    let text =  texte.substr(" ", a) + " " + texte.substr(a + 1 , texte.length);
    return text;
}
let concatString = (texte1, texte2) => {
    return `${texte1}` + `${texte2}`
}
let afficherCar5 =  (texte) => {
    return texte.charAt(4)
}
let afficher9Car =  (texte) => {
    return texte.substring(0, 9)
}
let majusculeString =  (texte) => {
    return texte.toUpperCase()
}
let minusculeString =  (texte) => {
    return texte.toLowerCase()
}
let SupprEspaceString =  (texte) => {
    return texte.trim()
}
let IsString =  (texte) => {
     if (typeof(texte) === 'string') {
        return true
    }
}
let AfficherExtensionString =  (texte) => {
    let myTextSplit = texte.split('.')
    return myTextSplit[1]
}
let NombreEspaceString =  (texte) => {
    return (texte.split(' ').length -1)
}
let InverseString =  (texte) => {
    let newString = ''

    for (let i = texte.length -1; i >= 0; i--) {
        newString += texte[i]
    }

    return newString
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
let calculPuissance =  (x, y) => {
    return Math.pow(x, y)
}
let valeurAbsolue =  (nombre) => {
    return Math.abs(nombre)
}
let valeurAbsolueArray =  (array) => {
    array.forEach((el , k) => {
        array[k] = Math.abs(el)
    })

    return array
}
let sufaceCercle =  (rayon) => {
    return Math.round(Math.PI * Math.pow(rayon, 2))
}
let hypothenuse =  (ab, ac) => {
    return Math.sqrt((ab * ab) + (ac * ac))
}
let calculIMC =  (poids, taille) => {
     let bmi = (poids / (taille * taille))
     return parseFloat(bmi.toFixed(2))
}