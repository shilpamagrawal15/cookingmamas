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
				objective: "Make enough entrees for 23 people. Make enough dessert for 40 people. If you choose to make cake, you must make the entire cake (that serves 10). You cannot prepare part of a cake",
				cabinet:
					[
						{type: "peanut butter", quantity: 5},
						{type: "sugar", quantity: 5},
						{type: "eggs", quantity: 12},
						{type: "baking soda", quantity: 10},
						{type: "vanilla extract", quantity: 10},
						{type: "butter", quantity: 64},
						{type: "flour", quantity: 6},
						{type: "baking powder", quantity: 4},
						{type: "lemon juice", quantity: 30},
						{type: "asparagus", quantity: 120},
						{type: "linguine", quantity: 5},
						{type: "garlic", quantity: 10},
						{type: "shrimp", quantity: 50}
					],
				solution: 
					{
						"Peanut Butter Cookies":
							{
								servings: 23,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Lemon Pound Cake":
							{
								servings: 23,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Sauteed Asparagus":
							{
								servings: 40,
								comparator: "total",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Shrimp Linguini":
							{
								servings: 40,
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
						{type: "peanut butter", quantity: 5},
						{type: "sugar", quantity: 5},
						{type: "eggs", quantity: 12},
						{type: "baking soda", quantity: 10},
						{type: "vanilla extract", quantity: 1},
						{type: "butter", quantity: 16},
						{type: "flour", quantity: 6},
						{type: "baking powder", quantity: 4},
						{type: "lemon juice", quantity: 30},
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
								comparator: "equal",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Lemon Pound Cake":
							{
								servings: 0,
								comparator: "equal",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Sauteed Asparagus":
							{
								servings: 0,
								comparator: "equal",
								ingredients: 
									{
										// do you need this?
									}
							},
						"Shrimp Linguini":
							{
								servings: 20,
								comparator: "equal",
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
						{type: "peanut butter", quantity: 5},
						{type: "sugar", quantity: 5},
						{type: "eggs", quantity: 12},
						{type: "baking soda", quantity: 10},
						{type: "vanilla extract", quantity: 1},
						{type: "butter", quantity: 16},
						{type: "flour", quantity: 6},
						{type: "baking powder", quantity: 4},
						{type: "lemon juice", quantity: 19},
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
			}
	}