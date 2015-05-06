/*	object containing all the recipes
	- ingredients must be in lowercase
	- dish must be in uppercase first-letter
	- unit must be plural or null if no unit applies
*/
var recipes = 
	[
		{
			dish: "Peanut Butter Cookies",
			serving: 20,
			ingredients: [
				{type: "peanut butter", quantity: 2},
				{type: "sugar", quantity: 2},
				{type: "eggs", quantity: 2},
				{type: "baking soda", quantity: 2},
				{type: "vanilla extract", quantity: 1},
				{type: "butter", quantity: 4}
			]
		},
		{
			dish: "Lemon Pound Cake",
			serving: 10,
			ingredients: [
				{type: "flour", quantity: 1.5},
				{type: "baking powder", quantity: 1},
				{type: "butter", quantity: 8},
				{type: "sugar", quantity: 1},
				{type: "eggs", quantity: 4},
				{type: "vanilla extract", quantity: 2},
				{type: "lemon juice", quantity: 4}
			]
		},
		{
			dish: "Sauteed Asparagus",
			serving: 5,
			ingredients: [
				{type: "asparagus", quantity: 30},
				{type: "lemon juice", quantity: 5},
				{type: "butter", quantity: 5}
			]
		},
		{
			dish: "Shrimp Linguini",
			serving: 5,
			ingredients: [
				{type: "linguine", quantity: 1},
				{type: "butter", quantity: 3},
				{type: "lemon juice", quantity: 1},
				{type: "garlic", quantity: 2},
				{type: "shrimp", quantity: 8}
			]
		}

	];