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
// Lecture 114 (Async with Promises "The ES6 way")
