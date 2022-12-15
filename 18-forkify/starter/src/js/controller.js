import * as model from './model.js'; // model.state, model.loadRecipe ...
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'core-js/stable'; // polyfill all else
import 'regenerator-runtime/runtime'; // polyfilling async await
import { async } from 'regenerator-runtime';

// if (module.hot) {
//   module.hot.accept()
// };

const controlRecipes = async function () {
  try {
    // # recipe id
    const id = window.location.hash.slice(1);

    if (!id) return;
    // LOADING RECIPE
    recipeView.renderSpinner();
    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    // 1) Updating bookmarksView
    bookmarksView.update(model.state.bookmarks);
    // 2) Loading recipe
    await model.loadRecipe(id); // grab id as param, returns promise.. so we await
    // 3) Rendering Recipe
    recipeView.render(model.state.recipe)

  } catch (error) {
    recipeView.renderError();
    console.error(error);
  }
};
const constrolSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    //1) get search query
    const query = searchView.getQuery();
    if (!query) return;
    //2) load search results
    await model.loadSearchResults(query);
    //3) render results
    //console.log(model.getSearchResultsPage(1));
    resultsView.render(model.getSearchResultsPage());
    //4) Render initial pagination buttons
    paginationView.render(model.state.search)
  } catch (error) {
    console.error(error);
  }
};
const controlPagination = function (goToPage) {
  //1) render NEW results
  //console.log(model.getSearchResultsPage(1));
  resultsView.render(model.getSearchResultsPage(goToPage));
  //2) Render NEW initial pagination buttons
  paginationView.render(model.state.search)
};
const controlServings = function (newServings) {
  // Update the recipe servings (in the state)
  model.updateServings(newServings);
  // Update the recipe view
  recipeView.update(model.state.recipe)
};
const controlAddBookmark = function () {
  // 1) Add/Remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe)

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks)
};

const controlAddRecipe = async function (newRecipe) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();
    await model.uploadRecipe(newRecipe)
    console.log(model.state.recipe);
    // Render Recipe
    recipeView.render(model.state.recipe);
    // Success message
    addRecipeView.renderMessage()
    // Render Bookmark view
    bookmarksView.render(model.state.bookmarks);
    // Change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // close form window
    setTimeout(function () {
      addRecipeView.toggleWindow()
    }, MODAL_CLOSE_SEC * 1000)
  } catch (error) {
    console.error(error);
    addRecipeView.renderError(error.message)
  }
  // upload the new recipe data
};

// Publisher Subscriber Model
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(constrolSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};
init();
