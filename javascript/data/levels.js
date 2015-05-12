/*	object containing all the levels */
// solution parameters are:
	// equal --> exactly equal to
	// greater --> greater than
	// less --> less than
	// total --> all entrees/desserts combined

var levels = 
	{
		1: 
			{
				objective: "Make enough entrees for 25 people. Make enough dessert for 40 people. If you choose to make cake, you must make the entire cake (that serves 10). You cannot prepare part of a cake",
				cabinet:
					[
						{type: "peanut_butter", quantity: 5},
						{type: "sugar", quantity: 5},
						{type: "eggs", quantity: 12},
						{type: "baking_soda", quantity: 10},
						{type: "vanilla_extract", quantity: 10},
						{type: "butter", quantity: 64},
						{type: "flour", quantity: 6},
						{type: "baking_powder", quantity: 4},
						{type: "lemon_juice", quantity: 30},
						{type: "asparagus", quantity: 120},
						{type: "linguine", quantity: 5},
						{type: "garlic", quantity: 10},
						{type: "shrimp", quantity: 50}
					],
				solution: 
					{
						"Peanut Butter Cookies":
							{
								servings: 40,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Lemon Pound Cake":
							{
								servings: 40,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Sauteed Asparagus":
							{
								servings: 25,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Shrimp Linguini":
							{
								servings: 25,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							}
					}
			},
		2: 
			{
				objective: "Make enough entrees for 20 people. Make enough dessert for 20 people. If you choose to make cake, you must make the entire cake (that serves 10). You cannot prepare part of a cake",
				cabinet:
					[
						{type: "peanut_butter", quantity: 5},
						{type: "sugar", quantity: 5},
						{type: "eggs", quantity: 12},
						{type: "baking_soda", quantity: 10},
						{type: "vanilla_extract", quantity: 1},
						{type: "butter", quantity: 16},
						{type: "flour", quantity: 6},
						{type: "baking_powder", quantity: 4},
						{type: "lemon_juice", quantity: 30},
						{type: "asparagus", quantity: 120},
						{type: "linguine", quantity: 5},
						{type: "garlic", quantity: 10},
						{type: "shrimp", quantity: 50}
					],
				solution:
					{
						"Peanut Butter Cookies":
							{
								servings: 20,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Lemon Pound Cake":
							{
								servings: 20,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Sauteed Asparagus":
							{
								servings: 20,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Shrimp Linguini":
							{
								servings: 20,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							}
					}
			},
		3: 
			{
				objective: "Make enough entrees for 27 people. Make enough dessert for 27 people. 12 of the 27 people are vegetarian. 2 of the 27 are allergic to peanuts. If you choose to make cake, you must make the entire cake (that serves 10). You cannot prepare part of a cake",
				cabinet:
					[
						{type: "peanut_butter", quantity: 5},
						{type: "sugar", quantity: 5},
						{type: "eggs", quantity: 12},
						{type: "baking_soda", quantity: 10},
						{type: "vanilla_extract", quantity: 10},
						{type: "butter", quantity: 64},
						{type: "flour", quantity: 6},
						{type: "baking_powder", quantity: 4},
						{type: "lemon_juice", quantity: 19},
						{type: "asparagus", quantity: 120},
						{type: "linguine", quantity: 5},
						{type: "garlic", quantity: 10},
						{type: "shrimp", quantity: 50}
					],
				solution: 
					{
						"Peanut Butter Cookies":
							{
								servings: 17,
								comparator: "greater",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Lemon Pound Cake":
							{
								servings: 10,
								comparator: "equal",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Sauteed Asparagus":
							{
								servings: 12,
								comparator: "equal",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Shrimp Linguini":
							{
								servings: 15,
								comparator: "equal",
								ingredients: 
									{
										// do you need this?
									}
							}
					}
			},
		4: 
			{
				objective: "Your catering manager has taught you that it’s very important to bring in profit for the company. You’ve learned to think about the business’ potential profit when considering client requests. Impress the boss by bringing in as much profit as you can! You receive two client requests but only have time to fulfill one. Shrimp-loving Shelly requests Cocunt Shrimp for 40 people. You'll charge her $30/person. Lemon-fanatic Larissa requests enough lemon bars to feed 60 of her dessert-craving friends. You'll charge her $18/person. Make the recipe that maximizes the profit! Notice that you may need to buy some things at the grocery store, which could bring down your profit.",
				cabinet:
					[
						{type: "peanut_butter", quantity: 0},
						{type: "sugar", quantity: 7},
						{type: "eggs", quantity: 9},
						{type: "baking_soda", quantity: 0},
						{type: "vanilla_extract", quantity: 0},
						{type: "butter", quantity: 48},
						{type: "flour", quantity: 4},
						{type: "baking_powder", quantity: 15},
						{type: "lemon_juice", quantity: 3.5},
						{type: "asparagus", quantity: 0},
						{type: "linguine", quantity: 0},
						{type: "garlic", quantity: 0},
						{type: "shrimp", quantity: 80},
						{type: "coconut", quantity: 10},
						{type: "vegetable oil", quantity: 15},
						{type: "beer", quantity: 4.33}
					],
				store:
					[
					{type: "shrimp", cost_per_unit: 15, amount_per_unit: 16},
					{type: "cocunut", cost_per_unit: 18, amount_per_unit: 6},
					{type: "eggs", cost_per_unit: 4, amount_per_unit: 6},
					{type: "flour", cost_per_unit: 3, amount_per_unit: 4},
					{type: "vegetable oil", cost_per_unit: 7, amount_per_unit: 16},
					{type: "beer", cost_per_unit: 5, amount_per_unit: 1.5}
					],
				solution: 
					{
						"Lemon Bars":
							{
								servings: 60,
								comparator: "greater",
								ingredients: 
									{
										// do you need this?
									}
							},
					}
			}
	}