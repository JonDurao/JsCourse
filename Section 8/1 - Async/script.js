/**
 * Lecture 111 (Async Example)
const syncOne = () => {
    console.log('Hello There');
    asyncTwo();
    console.log('The End');
};

const syncTwo = () => {
    console.log('Alive Second');
};

const asyncTwo = () => {
    // Timer in JS
    setTimeout(() => {
        console.log("Sloooooooooooooooooooooow code")
    }, 2000);
};

syncOne();*/
/**
 * Lecture 112 (Event loop)
 * We can use callback functions to create async
 * Runtime -> exec stack, web APIs and message queue
 * setTimeout lives in the API, outside the JS engine
 * Async timeout is created in the API context while is async
 * When timeout ends API sends function to the message queue
 * This message is taken by the Event Loop (constantly monitors the queue)
 */
/**
 * Lecture 113 (Async with callbacks "The old way")
function getRecipe() {
    setTimeout(() => {
        const recipeIDS = [1,2,3,4,5,6,7];
        console.log(recipeIDS);

        setTimeout(ID => {
            const recipe = {
                title: 'Pasta',
                publisher: 'Jon'
            };

            console.log(`ID ${ID}: ${recipe.title} by ${recipe.publisher}`);

            setTimeout(publisher => {
                const recipe = {
                    title: 'Pizza',
                    publisher: publisher
                };

                console.log(recipe);
            }, 3000, recipe.publisher);
        }, 1000, recipeIDS[2]);
    }, 1500);
}

getRecipe();*/
/**
 * Lecture 114 (Async with Promises "The ES6 way")
 *
 * Keeps track whether a certain event has happened
 * Determines what happened after the event
 * Implements concept of future value that we're expecting
 *
 * STATES => PENDING || SETTLED OR RESOLVED || (FULFILLED || REJECTED)
 *
 * We can produce and consume promises


// function executor immediately called when created
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        const val = Math.floor(Math.random() * Math.floor(2));
        if (val === 1)
            resolve([1,2,3,4,5,6,7]);
        else
            reject();
    }, 3000);
});

// THEN => when successful
// CATCH => when error
// FINALLY => Always at the end
getIDs.then(() => console.log('SUCCESS!'))
    .catch(() => console.log('ERROR!'))
    .finally(() => console.log('THE END'));

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3,4,5,6,7]);
    }, 3000);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipe = {title: 'Pasta', author: 'Jon'};
            resolve(recipe);
        }, 3000, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => setTimeout(pub => {
        const recipe2 = {title: 'Pineapple pizza', author: 'JonTwo'};
        reject(`${recipe2.title}, ${pub}`);
    }, 1500, publisher));
};

// One catch works for every promise
getIDs.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[4]);
})
    .then(recipe => {
        console.log(recipe);
        return getRelated(recipe.author);
    })
        .then(recipe => {
            console.log(recipe);
        })
.catch(recipe => console.log(`${recipe}, is a mistake`));*/
/**
 * Lecture 115 (Async/Await ES8)

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([1,2,3,4,5,6,7]);
    }, 3000);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            const recipe = {title: 'Pasta', author: 'Jon'};
            resolve(recipe);
        }, 3000, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => setTimeout(pub => {
        const recipe2 = {title: 'Pineapple pizza', author: 'JonTwo'};
        resolve(`${recipe2.title}, ${pub}`);
    }, 1500, publisher));
};

// async functions always run in the background
// await stops the function and wait for the event in the promise to return
// assigns the return value of the recipe to the variable
async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[4]);
    console.log(recipe);
    const related = await getRelated(recipe.author);
    console.log(related);

    return related;
}

// logs the promise as pending
// const rec = getRecipesAW();
// console.log(rec);

getRecipesAW().then(result => console.log(result + ', Is the Best'));*/
/**
 * Lecture 116 (AJAX - Async Js and Xml - and APIs - App Programming Interface -)
 * AJAX allows to communicate with a server in an async way
 * JS app => server without reloading whole page
 * AJAX makes a HTTP GET request async in the background
 * Also can send data to the server
 *
 * API allow apps to talk to each other
 * It's part of the server
 * Own APIs or External APIs (GMaps, Weather, Movies...)
 */
/**
 * Lecture 117 (AJAX calls with FETCH and PROMISES)
 * Fetch data from server (Modern)
 * XML Http request (Better support but more complicated)
 *
 * No 'Access-Control-Allow-Origin' header caused by SAME ORIGIN policy of JS
 * prevents making request to a domain different than our own domain
 *
 * For avoiding this CORS (Cross Origin Resource Sharing) was created
 * API need to implement CORS
 *
 * If CORS is not implemented in the API we proxy the request through our own server

let city = '', cityWoeid;
const URL_CORS_ENABLER = 'https://cors-anywhere.herokuapp.com/';
const DOM_VARS = {
    ID_INPUT_CITY: '#input-city',
    ID_BUTTON_CITY_SEARCH:'#button_city_search'
};

function functionCity (input) {
    fetch(`${URL_CORS_ENABLER}https://www.metaweather.com/api/location/search/?query=${input}`).then(result => {
        //console.log(result.body);
        return result.json();
    })
        .then(result => {
            console.log(`${result[0].title}: ${result[0].woeid}`);
            cityWoeid = result[0].woeid;
            return result[0].woeid;
        })
        .then(result => {
            console.log(result);
            functionWeather(result);
        })
        .catch(error => console.log(error));
};

function functionWeather (input) {
    fetch(`${URL_CORS_ENABLER}https://www.metaweather.com/api/location/${input}`)
        .then(result => {
            //console.log(result.json());
            return result.json();
        })
        .then(result => {
            const today = result.consolidated_weather[0];
            console.log(`Max temperature in ${city.replace(/\b\w/g, l => l.toUpperCase())} today is ${today.max_temp}`);
        })
};

document.querySelector(DOM_VARS.ID_BUTTON_CITY_SEARCH).addEventListener('click', () => {
    city = document.querySelector(DOM_VARS.ID_INPUT_CITY).value;
    functionCity(city);
});

document.addEventListener('keypress', event => {
    if (event.key === 'Enter'){
        city = document.querySelector(DOM_VARS.ID_INPUT_CITY).value;
        functionCity(city);
    }
});*/
/**
 * Lecture 118 (AJAX calls with FETCH and ASYNC/AWAIT)


let city = '', weatherData;
const URL_CORS_ENABLER = 'https://cors-anywhere.herokuapp.com/';

const DOM_VARS = {
    ID_INPUT_CITY: '#input-city',
    ID_BUTTON_CITY_SEARCH:'#button_city_search'
};

async function functionCity (input) {
    try{
        const result = await fetch(`${URL_CORS_ENABLER}https://www.metaweather.com/api/location/search/?query=${input}`);
        //console.log(result);
        const data = await result.json();
        //console.log(data);

        // store return value of the async function
        functionWeather(data[0]).then(result => {
            weatherData = result;
            console.log(weatherData);
        });
    } catch (e) {
        alert('Error!!');
    } finally {
        console.log('The End');
    }
}

async function functionWeather (input) {
    try {
        const result = await fetch(`${URL_CORS_ENABLER}https://www.metaweather.com/api/location/${input.woeid}`);
        const data = await result.json();
        //console.log(data.consolidated_weather[1]);
        console.log(`Max temperature in ${input.title.replace(/\b\w/g, l => l.toUpperCase())} tomorrow will be ${data.consolidated_weather[1].max_temp}`);
        return data;
    } catch (e) {
        alert('Error!!');
    } finally {
        console.log('The End');
    }
}

document.querySelector(DOM_VARS.ID_BUTTON_CITY_SEARCH).addEventListener('click', () => {
    city = document.querySelector(DOM_VARS.ID_INPUT_CITY).value;
    functionCity(city);
});

document.addEventListener('keypress', event => {
    if (event.key === 'Enter'){
        city = document.querySelector(DOM_VARS.ID_INPUT_CITY).value;
        functionCity(city);
    }
});*/