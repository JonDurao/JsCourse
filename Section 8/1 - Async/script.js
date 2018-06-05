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
