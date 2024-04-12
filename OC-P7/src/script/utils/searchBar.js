export const searchBar = (recipes, searchValue, $searchButton, cardsContainer) => {
  cardsContainer.classList.add("grid-cols-3");
  const results = []

  $searchButton.classList.remove("bg-black");
  $searchButton.classList.add("bg-[#FFD15B]");

  let exitWhile = 0;
  while (exitWhile < recipes.length) {
    const recipe = recipes[i];
    const recipeFields = {
      name: recipe.name.toLowerCase(),
      description: recipe.description.toLowerCase(),
      ingredients: [],
    };

    for (let i = 0; i < recipe.ingredientsList.length; i++) {
      recipeFields.ingredients.push(recipe.ingredientsList[i].ingredient.toLowerCase());
    }

    const isRecipeName = recipeFields.name.includes(searchValue);
    const isRecipeDescription = recipeFields.description.includes(searchValue);
    let isRecipeIngredient = false;

    for (let i = 0; i < recipeFields.ingredientsList.length; i++) {
      if (recipeFields.ingredientsList[i].includes(searchValue)) {
        isRecipeIngredient = true;
      };
    }

    if (isRecipeName || isRecipeDescription || isRecipeIngredient) {
      results.push(recipe);
    }
    exitWhile++;
  }

  console.log(results);
  return results;
};