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
				objective: "Your client, Richard Richards, is hosting a dinner party for his neighborhood book club. He wants enough entrees for 25 guests (you can make more than 25 and still be correct) and enough dessert for 40 guests. Keep in mind that if you make cake for dessert, you have to make entire cakes. Serve up amazing food for Richard Richards, please Chef Klopfer with delectable recipes, and you'll be well on your way!",
				recipes: ["Peanut Butter Cookies", "Lemon Pound Cake", "Sauteed Asparagus", "Shrimp Linguini"],
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
				store: null,
				solution: 
					{
						"Peanut Butter Cookies":
							{
								servings: 40,
								comparator: "total"
							},
						"Lemon Pound Cake":
							{
								servings: 40,
								comparator: "total"
							},
						"Sauteed Asparagus":
							{
								servings: 25,
								comparator: "total"
							},
						"Shrimp Linguini":
							{
								servings: 25,
								comparator: "total"
							}
					}
			},
		2: 
			{
				objective: "Your client, Maria Marks, is throwing a graduation party for her daughter, Melissa Marks. She wants enough entrees for 20 guests and enough dessert for 20 guests. Keep in mind that your pantry has changed, and that if you make cake for dessert, you have to make entire cakes. Chef Klopfer still demands delectable dishes!",
				recipes: ["Peanut Butter Cookies", "Lemon Pound Cake", "Sauteed Asparagus", "Shrimp Linguini"],
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
				store: null,
				solution:
					{
						"Peanut Butter Cookies":
							{
								servings: 20,
								comparator: "total"
							},
						"Lemon Pound Cake":
							{
								servings: 20,
								comparator: "total"
							},
						"Sauteed Asparagus":
							{
								servings: 20,
								comparator: "total"
							},
						"Shrimp Linguini":
							{
								servings: 20,
								comparator: "total"
							}
					}
			},
		3: 
			{
				objective: "You client, Lisa Li, is hosting a get-together for her office. She wants enough entrees for 27 guests and enough dessert for 27 guests, but 12 out of the 27 guests are vegetarians and 2 of the 27 are allergic to peanuts. You must make sure that the vegetarians have vegetarian options and the peanut allergy guest have peanut-free options. Keep in mind that your pantry has changed, and that if you make cake for dessert, you have to make entire cakes. Ms. Li is one of our best clients, so your dishes should be delightful as always!",
				recipes: ["Peanut Butter Cookies", "Lemon Pound Cake", "Sauteed Asparagus", "Shrimp Linguini"],
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
				store: null,
				solution: 
					{
						"Peanut Butter Cookies":
							{
								servings: 17,
								comparator: "greater"
							},
						"Lemon Pound Cake":
							{
								servings: 10,
								comparator: "equal"
							},
						"Sauteed Asparagus":
							{
								servings: 12,
								comparator: "equal"
							},
						"Shrimp Linguini":
							{
								servings: 15,
								comparator: "equal"
							}
					}
			},
		4: 
			{
				objective: "Chef Klopfer has taught you that it is very important to bring in profit for the company. You have learned to think about the potential profit when considering client requests. Impress the boss by bringing in as much profit as you can! You receive two client requests but only have time to fulfill one. Shrimp-loving Shelly requests Cocunt Shrimp for 40 people. You will charge her $30/person. Lemon-fanatic Larissa requests enough lemon bars to feed 60 of her dessert-craving friends. You will charge her $18/person. Make the recipe that maximizes the profit! Notice that you may need to buy some things at the grocery store, which could bring down your profit.",
				recipes: ["Lemon Bars", "Coconut Shrimp", null, null],
				cabinet:
					[
						{type: "sugar", quantity: 7},
						{type: "eggs", quantity: 9},
						{type: "butter", quantity: 48},
						{type: "flour", quantity: 4},
						{type: "baking_powder", quantity: 15},
						{type: "lemon_juice", quantity: 3.5},
						{type: "shrimp", quantity: 80},
						{type: "coconut", quantity: 10},
						{type: "vegetable_oil", quantity: 15},
						{type: "beer", quantity: 4.33}
					],
				store:
					[
						{type: "shrimp", cost_per_unit: 15, amount_per_unit: 16}, // $15/16 oz. shrimp
						{type: "coconut", cost_per_unit: 18, amount_per_unit: 6},
						{type: "eggs", cost_per_unit: 4, amount_per_unit: 6},
						{type: "flour", cost_per_unit: 3, amount_per_unit: 4},
						{type: "vegetable_oil", cost_per_unit: 7, amount_per_unit: 16},
						{type: "beer", cost_per_unit: 5, amount_per_unit: 1.5}
					],
				solution: 
					{
						"Lemon Bars":
							{
								servings: 60,
								comparator: "greater"
							},
					}
			}
	}