import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE, KEY } from "./config";
import { AJAX } from "./helpers";

export const state = {
    recipe: {}, // manipulated by loadRecipe state.recipe / model.loadRecipe in controller
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE
    },
    bookmarks: [],
};
/**
 * we moved the below code from controller. The code calls id,
 * therefore we use it as a param in our function
 * @param {*} id
 */
const createRecipeObject = function (data) {
    const { recipe } = data.data; // this is #data in recipeView
    return {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients,
        ...(recipe.key && { key: recipe.key }) // conditionally add properties to object
    };
};

export const loadRecipe = async function (id) {
    try {
        const data = await AJAX(`${API_URL}${id}?key=${KEY}`)
        // console.log(res, data);
        state.recipe = createRecipeObject(data)
        if (state.bookmarks.some(bookmark => bookmark.id === id))
            state.recipe.bookmarked = true;
        else state.recipe.bookmarked = false;
        //console.log(state.recipe);
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const loadSearchResults = async function (query) {
    try {
        state.search.query = query;
        const data = await AJAX(`${API_URL}?search=${query}&key=${KEY}`)
        state.search.results = data.data.recipes.map(recipe => {
            return {
                id: recipe.id,
                title: recipe.title,
                publisher: recipe.publisher,
                image: recipe.image_url,
                ...(recipe.key && { key: recipe.key }),
            };
        });
        state.search.page = 1;
    } catch (error) {
        throw error;
    }
};

export const getSearchResultsPage = function (page = state.search.page) { // not async because everything is already loaded
    state.search.page = page;
    const start = (page - 1) * state.search.resultsPerPage //0; page = 1 -1 * 0 = 0
    const end = page * state.search.resultsPerPage //9; page = 1 * 10 = 10
    return state.search.results.slice(start, end)
};

export const updateServings = function (newServings) {
    state.recipe.ingredients.forEach(ing => {
        ing.quantity = ing.quantity * newServings / state.recipe.servings;
        // newQt = oldQt * newServings / oldServings
    });
    state.recipe.servings = newServings;
};

const persistBookmarks = function () {
    localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
    console.log(recipe);
    // Add bookmark
    state.bookmarks.push(recipe);
    console.log(state.bookmarks);
    // Mark current recipe as bookmark
    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
    persistBookmarks();
};

export const deleteBookmark = function (id) {
    // Delete bookmark
    const index = state.bookmarks.findIndex(el => el.id === id);
    state.bookmarks.splice(index, 1);
    // Mark current recipe as not bookmark
    if (id === state.recipe.id) state.recipe.bookmarked = false;
    persistBookmarks();
};

const init = function () {
    const storage = localStorage.getItem('bookmarks');
    if (storage) state.bookmarks = JSON.parse(storage);
};
init();

// delete bookmarks from storage
const clearBookmarks = function () {
    localStorage.clear('bookmarks');
};

// clearBookmarks()

export const uploadRecipe = async function (newRecipe) { // api request, so its async
    try {
        //console.log(Object.entries(newRecipe));
        const ingredients = Object.entries(newRecipe)
            .filter(entry =>
                entry[0]
                    .startsWith('ingredient')
                && entry[1] !== ''
            ).map(ing => {
                // const ingArr = ing[1].replaceAll(' ', '').split(',');
                const ingArr = ing[1].split(',').map(el => el.trim());
                console.log(ingArr);
                if (ingArr.length !== 3) throw new Error('Wrong ingredient format! Please use the correct format.')
                const [quantity, unit, description] = ingArr;
                return { quantity: quantity ? +quantity : null, unit, description }
            });
        const recipe = {
            title: newRecipe.title,
            source_url: newRecipe.sourceUrl,
            image_url: newRecipe.image,
            publisher: newRecipe.publisher,
            cooking_time: +newRecipe.cookingTime,
            servings: +newRecipe.servings,
            ingredients,
        };
        //console.log(recipe);
        const data = await AJAX(`${API_URL}?key=${KEY}`, recipe);
        state.recipe = createRecipeObject(data);
        addBookmark(state.recipe);
    } catch (error) {
        throw error;
    }
};

console.log("state.bookmarks", state.bookmarks);

function duplicateCount(text) {
    const init = ([...text.toLowerCase()]).sort()
    const count = init.reduce((prev, next) => ({
        ...prev,
        [next]: (prev[next] || 0) + 1
    }), 0
    )

    const final = Object.values(count).filter(x => x > 1).length;
    console.log((text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length);
}

duplicateCount("")
duplicateCount("abcde")
duplicateCount("aabbcde")
duplicateCount("aabBcde")
duplicateCount("Indivisibility")
duplicateCount("Indivisibilities")
duplicateCount("aA11")

const myArray = ["a", "b", "a", "b", "c", "e", "e", "c", "d", "d", "d", "d"];
const myArrayWithNoDuplicates = myArray.reduce(
    (previousValue, currentValue) => {
        if (!previousValue.includes(currentValue)) {
            return [...previousValue, currentValue];
        }
        return previousValue;
    },
    [],
);

console.log(myArrayWithNoDuplicates);