/**
 * You are in charge of
 * 1. Parks
 * 2. Streets
 *
 * Now only 3 parks and 4 streets, all with name and build year
 *
 * Report with:
 *  1. Tree density (nº trees / park area)
 *  2. Average age of parks (sum all ages / nº parks)
 *  3. Name of park with more than 1000 trees
 *  4. Total and average length of town streets
 *  5. Size classification of all streets (Tiny / Small / normal / Big / Huge), Default is normal
 */

const parks = new Map();
const streets = new Map();
const reducer = (accumulator, currentValue) => accumulator + currentValue;

class Town {
    constructor (name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Town {
    constructor (name, buildYear, numberTrees, parkArea){
        super(name, buildYear);
        this.numberTrees = numberTrees;
        this.parkArea = parkArea;
    }

    calculateTreeDensity () {
        return (this.numberTrees / this.parkArea);
    }
}

class Street extends Town {
    constructor (name, buildYear, lengthStreet){
        super(name, buildYear);
        this.lengthStreet = lengthStreet;
    }

    streetClassification () {
        return this.lengthStreet == null ? 'Normal' : ((this.lengthStreet < 10 ) ? 'Tiny' :
            (this.lengthStreet < 20 ? 'Small' :
                (this.lengthStreet < 30 ? 'Normal' :
                    (this.lengthStreet < 40 ? 'Big' : 'Huge'))));
    }
}

{
    parks.set(1, new Park('Park1', 1999, 500, 1100));
    parks.set(2, new Park('Park2', 1991, 600, 1200));
    parks.set(3, new Park('Park3', 1992, 700, 1300));
    parks.set(4, new Park('Park4', 1993, 800, 1400));
    parks.set(5, new Park('Park5', 1994, 900, 1500));
    parks.set(6, new Park('Park6', 1995, 1000, 1600));
    parks.set(7, new Park('Park7', 1996, 1100, 1700));

    streets.set(1, new Street('Street1', 2000, 5));
    streets.set(2, new Street('Street2', 2001, 15));
    streets.set(3, new Street('Street3', 2002, 25));
    streets.set(4, new Street('Street4', 2003, 35));
    streets.set(5, new Street('Street5', 2004, 45));
    streets.set(6, new Street('Street6', 2005, 10));
    streets.set(7, new Street('Street7', 2006, 20));
    streets.set(8, new Street('Street8', 2007, null));
}

function getParksAverageAge(parksAges) {
    return parksAges.reduce(reducer) / parksAges.length;
}

function getParksAge(parques) {
    let arrParks = [];
    parques.forEach((value) => arrParks.push(new Date().getFullYear() - value.buildYear));

    return arrParks;
}

function getStreetsLengths(calles) {
    let arrStreets = [];
    calles.forEach((value) => arrStreets.push(value.lengthStreet));
    return arrStreets;
}

function getStreetsTotalLength(streetsLength) {
    return streetsLength.reduce(reducer);
}

function getStreetsAverageLength(streetsTotalLength, numberStreets) {
    return streetsTotalLength / numberStreets;
}

function parkReport() {
    console.log('----------------------PARKS REPORT-------------------------');
    console.log(`Our ${parks.size} parks have an average age of ${getParksAverageAge(getParksAge(parks))} years.`);
    parks.forEach((value) => console.log(`Park ${value.name} have a tree density of ${value.calculateTreeDensity()} trees per km^2.`));
    parks.forEach(value => value.numberTrees>1000 ? console.log(`Park ${value.name} has ${value.numberTrees} trees.`) : '');
}

function streetReport(){
    console.log('----------------------STREETS REPORT-------------------------');
    console.log(`Our ${streets.size} streets have a total length of ${getStreetsTotalLength(getStreetsLengths(streets))} Km. and an average of ${getStreetsAverageLength(getStreetsTotalLength(getStreetsLengths(streets)), streets.size)} Km.`);
    streets.forEach((value) => console.log(`Street ${value.name}, built in ${value.buildYear}, is a ${value.streetClassification()} street.`));
}

parkReport();
streetReport();