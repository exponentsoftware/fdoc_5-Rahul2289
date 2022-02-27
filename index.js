const numberOfLanguages = async () => {
  const API_URL = 'https://restcountries.eu/rest/v2/all'
  const langSet = new Set()
  const response = await fetch(API_URL)
  const data = await response.json()

  for (const { languages } of data) {
    for (const { name } of languages) {
      langSet.add(name)
    }
  }

  console.log(Array.from(langSet).sort())
  console.log(
    'Total number of langauges in the countries API:',
    Array.from(langSet).length
  )
}
numberOfLanguages()

const largestCountries = async (n = 10) => {
  const API_URL = 'https://restcountries.eu/rest/v2/all'
  const countriesArea = []
  const response = await fetch(API_URL)
  const data = await response.json()

  for (const { name, area } of data) {
    countriesArea.push({ country: name, area })
  }

  const countriesSortedByArea = sortItems(countriesArea, 'area').slice(0, n)
  console.log(`${n} most largest countries`, countriesSortedByArea)
}
largestCountries(10)


const mostSpokenLanguages = async (n = 10) => {
  const API_URL = 'https://restcountries.eu/rest/v2/all'
  const langSet = new Set()
  const allLangArr = []
  const languageFrequency = []

  try {
    const response = await fetch(API_URL)
    const data = await response.json()

    for (const { languages } of data) {
      for (const { name } of languages) {
        allLangArr.push(name)
        langSet.add(name)
      }
    }

    for (l of langSet) {
      const x = allLangArr.filter(ln => l == ln)
      languageFrequency.push({
        lang: l,
        count: x.length
      })
    }

    const sortedLanguages = sortItems(languageFrequency, 'count').slice(0, n)
    console.log(`${n} most spoken languages`, sortedLanguages)
  } catch {
    console.log('Something goes wrong')
  }

console.log('Most spoken languages', mostSpokenLanguages(15))




/*What is the difference between forEach, map, filter and reduce ? */


// .forEach() to execute a particular function for each element in an array.
// .map() when you want to transform elements in an array.
// .filter() when we want to filter multiple elements from an array.
// .reduce() to get a single value from multiple elements in an array.

/*Explain these using your own words Explain the difference between function declaration and arrow function ?*/ 
// Functions created through function declarations are both constructable and callable. Arrow function are only callable
// Arrow functions do not have their own this value. The value of this inside an arrow function is always inherited from the enclosing scope.
// arrow functions do not have their own binding to a arguments object.

/*Explain the difference between find and findIndex ? */


// The method find() is very similar to findIndex() . 
// The only difference is that the find method returns the element value, but the findIndex method returns the element index

/*If you like to filter out one object element in an array which method do you like to use: filter or find ? */


// .find() it returns the element value

// Explain Explain the difference of var, let and const when we declare a variable ?*/
// var declarations are globally scoped or function scoped while let and const are block scoped.
// var variables can be updated and re-declared within its scope. 
// let variables can be updated but not re-declared. 
// const variables can neither be updated nor re-declared.