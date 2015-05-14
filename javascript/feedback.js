// Takes information from player's submitted recipes and compares their solution to the optimal solution.
// Generates and outputs feedback reflecting the player's submission. 
//
// @param submission: JavaScript object containing information from player's submitted recipes, 
//     where ingredients & proportions used in a given recipe are specified within another JavaScript object


$(document).ready(function () {
	//submitting the answer and converting it into an object
	$("#cookBtn").click(function(){
		var input_obj = {};
		// TODO: @shilpa
		// some object from the store 
		// var store_obj = {} 

		for (var i=0; i<level_recipes.length; i++) {
			var current_dish = level_recipes[i];
			var input_ingredients = {};
			for (var j=0; j<recipes[current_dish].ingredients.length;j++) {
				var input_id = "#rec_"+i+"_ing_"+j;
				var num_ingredients = $(input_id).val();
				console.log(num_ingredients);
				if (num_ingredients == "") { num_ingredients = 0; }
				input_ingredients[recipes[current_dish].ingredients[j].type] = num_ingredients;
			}
			// input_ingredients is a javascript object that has ingredient_name --> quantity 
			var num_servings = $("#recipe_"+i+"_serving").val();
			if (num_servings == "") { num_servings = 0; }
			input_obj[current_dish] = {ingredients: input_ingredients, servings: num_servings};
		}
		console.log(input_obj);
		feedback_display = generateFeedback(input_obj);
		$("#myRecipe").text("From Chef Klopfer:");
		$("#feedback_modal_body").text(feedback_display);	
	});
});
// $('#feedback_modal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget); // Button that triggered the modal
//   //var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this);
//   console.log(feedback_display);
//   modal.find('.modal-body').text(feedback_display);
// });

// TODO: @ava
function generateFeedback(submission) {
	var feedback_display = null;
	var incorrect_dishes = []
	// insert comparator and generating feedback function

	// determine if correct proportions. inherently determines if ingredient amounts match the number of servings 
	//		i.e., incorrect # of servings but correct ingredient amounts is an example of incorrect ratio
	
	// track whether user has proportions correct for all recipes
	var correct_proportions = true;
	var no_constant_add = true;
	var both_level_four = false;
	var level_four_cooked = 0;
	var level_recipes = levels[player_level].recipes;
	for (var i=0; i<level_recipes.length; i++){
		// track whether user has proportions correct for this recipe
		var correct_proportions_recipe = true;
		var difference = null;
		var dish = level_recipes[i];
		var dish_serving = recipes[dish].serving;
		var user_serving = submission[dish].servings;
		// only applies to dishes where the user has submitted something for the number of servings
		if (user_serving !== ""){
			for (var j=0; j<recipes[dish].ingredients.length; j++){
				// the reference amount and correct ratio
				var ingredient = recipes[dish].ingredients[j].type;
				var ingredient_amount = recipes[dish].ingredients[j].quantity;
				var correct_ratio = (dish_serving / ingredient_amount).toFixed(14);
				// amount of an ingredient the user entered, with ingredient proportion determined by the # of servings user entered
				var user_amount = submission[dish].ingredients[ingredient];
				if (user_serving != 0 && user_amount != 0 && user_serving != undefined && user_amount != undefined){
					var current_difference = user_amount - ingredient_amount;
					var user_ratio = (user_serving / user_amount).toFixed(14);
					if (difference == null){
						difference = user_amount - ingredient_amount;
					} else {
						if (current_difference == difference && difference != 0 && user_ratio != correct_ratio){
							no_constant_add = false;
						} else if (current_difference != difference && difference != 0 && user_ratio != correct_ratio){
							no_constant_add = true;
						}
					}

					// check if serving/amount ratio for this ingredient matches the correct proportion
					if (user_ratio !== correct_ratio){
						correct_proportions = false;
						correct_proportions_recipe = false;
						console.log("Incorrect proportions for:" + ingredient + " in " + current_dish);
						console.log(user_ratio);
						console.log(correct_ratio);
						console.log(user_amount);
						console.log(ingredient_amount);
					}
					if (player_level == 4){
						level_four_cooked += 1;
					}
				} else if (((user_serving != 0 && user_amount == 0) || (user_serving == 0 && user_amount != 0)) && user_serving != undefined && user_amount != undefined){
					correct_proportions = false;
					correct_proportions_recipe = false;
				}
			}

			// incorrect proportions for ingredients in dish
			if (! correct_proportions_recipe){
				incorrect_dishes.push(current_dish);
			} 
		}

	} 
	// correct ratios for all dishes? log to console
	if (correct_proportions) {
		console.log("correct proportions!");
	}

	// in level four player cooked both dishes
	if (level_four_cooked == 2){
		both_level_four = true;
	}

	// determine if servings meet objectives
	console.log(player_level);
	var level_solution = levels[player_level].solution;
	var met_objective = true;
	var entree_count_solution = 0;
	var entree_count = 0;
	var dessert_count_solution = 0;
	var dessert_count = 0;
	var level_recipes = levels[player_level].recipes;
	for (var i=0; i<level_recipes.length; i++){
		// var correct_dish = true;
		var dish = level_recipes[i];
		var dish_type = recipes[dish].course;
		if (submission[dish].servings != undefined && level_solution[dish].servings != undefined){
			var user_serving = Number(submission[dish].servings);
			var serving_solution = level_solution[dish].servings;
			var solution_comparator = level_solution[dish].comparator;
		}

		// the different comparators for a solution to a level's objective
		switch (solution_comparator){
			case "equal":
				if (user_serving == ""){
					if (serving_solution != 0){
						met_objective = false;
					}
				} else {
					if (user_serving != serving_solution){
						met_objective = false;
					}
				} break;
			case "greater":
				if (user_serving == ""){
					if (serving_solution != 0){
						met_objective = false;
					}
				} else {
					if (user_serving < serving_solution){
						met_objective = false;
					}
				} break;
			case "less":
				if (user_serving == ""){
					if (serving_solution != 0){
						met_objective = false;
					}
				} else {
					if (user_serving > serving_solution){
						met_objective = false;
					}
				} break;
			case "total":
				if (dish_type == "entree"){
					if (entree_count_solution == 0){
						entree_count_solution = serving_solution;
					}
					entree_count += user_serving;
				} else if (dish_type == "dessert"){
					if (dessert_count_solution == 0){
						dessert_count_solution = serving_solution;
					}
					dessert_count += user_serving;
				} 
				console.log(entree_count_solution);
				console.log(entree_count);
				break;

		}
	}
	// for the total case 
	if (dessert_count_solution != 0) {
		if (dessert_count < dessert_count_solution){
			met_objective = false;
		}
	} 
	if (entree_count_solution != 0) {
		if (entree_count < entree_count_solution){
			met_objective = false;
		}
	}


	// // handle cost input object for level four
	// if (player_level == 4){
	// 	for (var i=0; i<store_obj.length; i++){
	// 		if (store_obj[i] != 0){
	// 			met_objective = false;
	// 		}
	// 	}
	// }


	// failed to meet objective
	if (! met_objective){
		console.log("failed to meet objective!");
	} else {
		console.log("congrats on cooking!");
	}

	var feedback_scenario = correct_proportions.toString() + ", " + met_objective.toString();
	if (player_level == 2 || player_level == 1){
		feedback_scenario += ", " + no_constant_add.toString();
		console.log(feedback_scenario);
	}
	// if (player_level == 4){
	// 	feedback_scenario += ", " + both_level_four.toString();
	// }
	
	var feedback_display = feedbackText[player_level-1][feedback_scenario];
	if ((player_level == 2 || player_level == 1) && ! correct_proportions){
		for (var i=0; i<incorrect_dishes.length - 1; i++){
			feedback_display += " " + incorrect_dishes[i] + ",";
		} feedback_display += " " + incorrect_dishes[incorrect_dishes.length - 1];
	}
	
	// if (! did_scale){
	//	feedback_display += "remember to scale!"
	// }
	return feedback_display;
}



// {
// 	"Lemon Pound Cake": 
// 		{
// 			Servings: ,
// 			Total Bill: ,
// 			Ingredients: 
// 				{
// 					"flour": ,
// 					...
// 				}
// 		},
// 	"Extravagant Entree":  // what is this called?
// 		{
// 			Servings: ,
// 			Total Bill: ,
// 			Ingredients:
// 				{
// 					"flour": ,
// 					...
// 				}
// 		},
// 	"Store":
// 		{
// 			Total Cost: ,
// 			Items:
// 				{
// 					"flour": ,
// 					...
// 				}
// 		}
// }
