var years = [1960, 1970, 1980, 1990, 2000, 2010, 2015];
var years2 = [1965, 1975, 1985, 1995, 2005, 2015, 2017];

function printFullAge(yearsArray){
    var auxArray = [];
    var agesVector = [];

    for (var counter = 0; counter < yearsArray.length; counter++){
        auxArray.push(2018 - yearsArray[counter]);
    }

    for (var i = 0; i < auxArray.length; i++){
        if (auxArray[i] >= 18){
            agesVector.push(true);
        } else {
            agesVector.push(false);
        }
    }

    return agesVector;
}

var f1 = printFullAge(years);
var f2 = printFullAge(years2);

console.log(f1);
console.log(f2);