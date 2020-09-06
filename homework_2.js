// pls make at least 5 persons
const people = [{
    id: 0,
    name: 'Bob',
    age: 19,
    moneyAmount: 500,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 2,
}, {
    id: 1,
    name: 'Katherine',
    age: 30,
    moneyAmount: 500,
    desiredAlcoholName: 'wine',
    desiredAlcoholAmount: 2,
}, {
    id: 2,
    name: 'Peter',
    age: 16,
    moneyAmount: 10,
    desiredAlcoholName: 'beer',
    desiredAlcoholAmount: 1,
}, {
    id: 3,
    name: 'Julian',
    age: 25,
    moneyAmount: 59,
    desiredAlcoholName: 'rum',
    desiredAlcoholAmount: 2,
}, {
    id: 4,
    name: 'Andrew',
    age: 55,
    moneyAmount: 750,
    desiredAlcoholName: 'vodka',
    desiredAlcoholAmount: 3,
}];

// pls make at least 5 alcohol
const alcoholPriceForOneItem = {
    whisky: 23, // don't change this one
    wine: 15,
    beer: 5,
    rum: 30,
    vodka: 12,
};

const LEGAL_AGE = 18; // don't change this

/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */

function getLegalAgePeople(arr, ageParamName) {
    let arrOfAdults = arr.filter(person => person.age >= LEGAL_AGE);
    return arrOfAdults;
}

console.log('People who are old enough to buy alcohol: ');
console.log(getLegalAgePeople(people, people.age));

/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method or for()
 */
function getPeopleWhoHaveMoneyForAlcohol(arr) {
    let arrOfPeopleWhoHaveEnoughMoney = getLegalAgePeople(arr).filter(person => person.moneyAmount >= person.desiredAlcoholAmount * alcoholPriceForOneItem[person.desiredAlcoholName]);
    return arrOfPeopleWhoHaveEnoughMoney;
}

console.log('People who have enough money to buy desired alcohol: ');
console.log(getPeopleWhoHaveMoneyForAlcohol(people));

/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method or for()
 */

function buyAlcohol(arr) {
    let resultArray = getPeopleWhoHaveMoneyForAlcohol(arr).map(person => {
        return person.name + " bought " + person.desiredAlcoholAmount + " bottles of " + person.desiredAlcoholName + " for " + person.desiredAlcoholAmount * alcoholPriceForOneItem[person.desiredAlcoholName] + " rubles";
    })
    return resultArray;
}

console.log('Result array: ');
console.log(buyAlcohol(people));









// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}