/*	object containing all the recipes
	- ingredients must be in lowercase
	- dish must be in uppercase first-letter
	- unit must be plural or null if no unit applies
*/
var recipes = 
	{
		"Peanut Butter Cookies":
			{
				dish: "Peanut Butter Cookies",
				serving: 20,
				course: "dessert",
				ingredients: [
					{type: "peanut_butter", quantity: 2},
					{type: "sugar", quantity: 2},
					{type: "eggs", quantity: 2},
					{type: "baking_soda", quantity: 2},
					{type: "vanilla_extract", quantity: 1},
					{type: "butter", quantity: 4}
				]
			},
		"Lemon Pound Cake":
			{
				dish: "Lemon Pound Cake",
				serving: 10,
				course: "dessert",
				ingredients: [
					{type: "flour", quantity: 1.5},
					{type: "baking_powder", quantity: 1},
					{type: "butter", quantity: 8},
					{type: "sugar", quantity: 1},
					{type: "eggs", quantity: 4},
					{type: "vanilla_extract", quantity: 2},
					{type: "lemon_juice", quantity: 4}
				]
			},
		"Sauteed Asparagus":
			{
				dish: "Sauteed Asparagus",
				serving: 5,
				course: "entree",
				ingredients: [
					{type: "asparagus", quantity: 30},
					{type: "lemon_juice", quantity: 5},
					{type: "butter", quantity: 5}
				]
			},
		"Shrimp Linguini":
			{
				dish: "Shrimp Linguini",
				serving: 5,
				course: "entree",
				ingredients: [
					{type: "linguine", quantity: 1},
					{type: "butter", quantity: 3},
					{type: "lemon_juice", quantity: 1},
					{type: "garlic", quantity: 2},
					{type: "shrimp", quantity: 8}
				]
			},
		"Lemon Bars":
			{
				dish: "Lemon Bars",
				serving: 16,
				course: "dessert",
				ingredients: [
					{type: "butter", quantity: 8},
					{type: "lemon_juice", quantity: 0.5},
					{type: "eggs", quantity: 2},
					{type: "flour", quantity: 0.67},
					{type: "sugar", quantity: 1},
					{type: "baking_powder", quantity: 0.25}
				]
			},
		"Coconut Shrimp":
			{
				dish: "Coconut Shrimp",
				serving: 4,
				course: "entree",
				ingredients: [
					{type: "shrimp", quantity: 16},
					{type: "coconut", quantity: 2},
					{type: "eggs", quantity: 1},
					{type: "flour", quantity: 0.5},
					{type: "baking_powder", quantity: 1.5},
					{type: "vegetable_oil", quantity: 3},
					{type: "beer", quantity: 0.67}
				]
			}

	};