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
				{type: "peanut butter", quantity: 2, unit: "cups"},
				{type: "sugar", quantity: 2, unit: "cups"},
				{type: "eggs", quantity: 2, unit: null},
				{type: "baking soda", quantity: 2, unit: "tsp"},
				{type: "vanilla extract", quantity: 1, unit: "tsp"},
				{type: "butter", quantity: 4, unit: "tbsp"}
			]
		},
		{
			dish: "Lemon Pound Cake",
			serving: 10,
			ingredients: [
				{type: "all-purpose flour", quantity: 1.5, unit: "cups"},
				{type: "baking powder", quantity: 1, unit: "tbsp"},
				{type: "butter", quantity: 8, unit: "tbsp"},
				{type: "sugar", quantity: 1, unit: "cups"},
				{type: "eggs", quantity: 4, unit: null},
				{type: "vanilla extract", quantity: 2, unit: "tsp"},
				{type: "lemon juice", quantity: 4, unit: "tbsp"}
			]
		},
		{
			dish: "Sauteed Asparagus",
			serving: 5,
			ingredients: [
				{type: "thin asparagus spears", quantity: 30, unit: null},
				{type: "lemon juice", quantity: 5, unit: "tbsp"},
				{type: "butter", quantity: 5, unit: "tbsp"}
			]
		},
		{
			dish: "Shrimp Linguini",
			serving: 5,
			ingredients: [
				{type: "linguine", quantity: 1, unit: "lbs"},
				{type: "butter", quantity: 3, unit: "tsp"},
				{type: "lemon juice", quantity: 1, unit: "tbsp"},
				{type: "garlic", quantity: 2, unit: "cloves"},
				{type: "shrimp", quantity: 8, unit: "oz"}
			]
		}

	];