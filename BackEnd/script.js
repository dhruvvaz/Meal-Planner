document.getElementById('ingredient-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission default behavior

    const ingredientInput = document.getElementById('ingredient-input').value.trim();
    if (ingredientInput) {
        // Add ingredient to the visible list
        addIngredientToList(ingredientInput);

        // Clear the input field
        document.getElementById('ingredient-input').value = '';

        // Simulate fetching recipes (can update this later with real API calls)
        fetchRecipes(ingredientInput);
    }
});

// Function to add the entered ingredient to the list
function addIngredientToList(ingredient) {
    const ingredientList = document.getElementById('ingredient-list');
    if (ingredientList) {
        const listItem = document.createElement('li'); // Create a new list item
        listItem.textContent = ingredient; // Set the ingredient text
        ingredientList.appendChild(listItem); // Add it to the ingredient list
    } else {
        console.error("Ingredient list element not found!");
    }
}

// Simulate fetching recipes
function fetchRecipes(ingredients) {
    console.log(`Fetching recipes with ingredients: ${ingredients}`);

    // Mock recipe data
    const recipes = [
        { name: "Chicken Stir Fry", link: "#" },
        { name: "Chicken Salad", link: "#" },
        { name: "Grilled Chicken with Rice", link: "#" }
    ];

    displayRecipes(recipes);
}

// Display fetched recipes
function displayRecipes(recipes) {
    const recipeList = document.getElementById('recipe-list');

    if (!recipeList) {
        console.error('Recipe list element not found!');
        return;
    }

    recipeList.innerHTML = ''; // Clear previous recipes

    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.innerHTML = `<p><a href="${recipe.link}" target="_blank">${recipe.name}</a></p>`;
        recipeList.appendChild(recipeElement);
    });
}