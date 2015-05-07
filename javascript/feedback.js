// Takes information from player's submitted recipes and compares their solution to the optimal solution.
// Generates and outputs feedback reflecting the player's submission. 
//
// @param submission: JavaScript object containing information from player's submitted recipes, 
//     where ingredients & proportions used in a given recipe are specified within another JavaScript object

$(document).ready(function () {
	//submitting the answer and converting it into an object
	$("#cookBtn").click(function(){
		var input_obj = {};
		for (var i=0; i<recipes.length; i++) {
			var input_ingredients = {};
			for (var j=0; j<recipes[i].ingredients.length;j++) {
				var input_id = "#rec_"+i+"_ing_"+j;
				input_ingredients[recipes[i].ingredients[j].type] = $(input_id).val();
			}
			// input_ingredients is a javascript object that has ingredient_name --> quantity 
			input_obj[recipes[i].dish] = {ingredients: input_ingredients, servings: $("#recipe_"+i+"_serving").val()};
		}
		// TODO: @ava - call generateFeedback(input_obj)
		console.log(input_obj);
		generateFeedback(input_obj);
	});
});

// TODO: @ava
function generateFeedback(submission) {
	// insert comparator and generating feedback function

	// determine if correct proportions. inherently determines if ingredient amounts match the number of servings 
	//		i.e., incorrect # of servings but correct ingredient amounts is an example of incorrect ratio
	
	// track whether user has proportions correct for all recipes
	var correct_proportions = true
	for (var i=0; i<recipes.length; i++){
		// track whether user has proportions correct for this recipe
		var correct_proportions_recipe = true;
		var current_dish = recipes[i].dish;
		var dish_serving = recipes[i].serving;
		var user_serving =submission[current_dish].servings;
		// only applies to dishes where the user has submitted something for the number of servings
		if (user_serving !== ""){
			for (var j=0; j<recipes[i].ingredients.length; j++){
				// the reference amount and correct ratio
				var ingredient = recipes[i].ingredients[j].type;
				var ingredient_amount = recipes[i].ingredients[j].quantity;
				var correct_ratio = dish_serving / ingredient_amount;
				// amount of an ingredient the user entered, with ingredient proportion determined by the # of servings user entered
				var user_amount = submission[current_dish].ingredients[ingredient];
				if (user_serving != 0 && user_amount != 0){
					var user_ratio = user_serving / user_amount;
					// check if serving/amount ratio for this ingredient matches the correct proportion
					if (user_ratio !== correct_ratio){
						console.log("Incorrect proportions for: " + ingredient);
						correct_proportions = false;
						correct_proportions_recipe = false;
					}
				} else if ((user_serving != 0 && user_amount == 0) || (user_serving == 0 && user_amount != 0)){
					console.log("Incorrect proportions for: " + ingredient);
					correct_proportions = false;
					correct_proportions_recipe = false;
				}
			}

			// correct ratios for all ingredients in this dish? log to console
			if (correct_proportions_recipe){
				console.log("correct proportions for: " + current_dish);
			}
		}

	} 
	// correct ratios for all dishes? log to console
	if (correct_proportions) {
		console.log("correct proportions!");
	}

	// determine if servings meet objectives

}