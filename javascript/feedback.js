// Takes information from player's submitted recipes and compares their solution to the optimal solution.
// Generates and outputs feedback reflecting the player's submission. 
//
// @param submission: JavaScript object containing information from player's submitted recipes, 
//     where ingredients & proportions used in a given recipe are specified within another JavaScript object

var feedback_display = null;
$(document).ready(function () {
	//submitting the answer and converting it into an object
	$("#cookBtn").click(function(){
		var input_obj = {};
		for (var i=0; i<recipes.length; i++) {
			var input_ingredients = {};
			for (var j=0; j<recipes[i].ingredients.length;j++) {
				var input_id = "#rec_"+i+"_ing_"+j;
				var num_ingredients = $(input_id).val();
				if (num_ingredients == "") { num_ingredients = 0; }
				input_ingredients[recipes[i].ingredients[j].type] = num_ingredients;
			}
			// input_ingredients is a javascript object that has ingredient_name --> quantity 
			var num_servings = $("#recipe_"+i+"_serving").val();
			if (num_servings == "") { num_servings = 0; }
			input_obj[recipes[i].dish] = {ingredients: input_ingredients, servings: num_servings};
		}
		console.log(input_obj);
		feedback_display = generateFeedback(input_obj);	
		$(".modal-body").text(feedback_display);	
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
	// insert comparator and generating feedback function

	// determine if correct proportions. inherently determines if ingredient amounts match the number of servings 
	//		i.e., incorrect # of servings but correct ingredient amounts is an example of incorrect ratio
	
	// track whether user has proportions correct for all recipes
	var correct_proportions = true;
	for (var i=0; i<recipes.length; i++){
		// track whether user has proportions correct for this recipe
		var correct_proportions_recipe = true;
		var current_dish = recipes[i].dish;
		var dish_serving = recipes[i].serving;
		var user_serving = submission[current_dish].servings;
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
	console.log(player_level);
	var level_solution = levels[player_level].solution;
	var met_objective = true;
	var entree_count_solution = 0;
	var entree_count = 0;
	var dessert_count_solution = 0;
	var dessert_count = 0;
	for (var i=0; i<recipes.length; i++){
		// var correct_dish = true;
		var current_dish = recipes[i].dish;
		var dish_type = recipes[i].course;
		var user_serving = Number(submission[current_dish].servings);
		var serving_solution = level_solution[current_dish].servings;
		var solution_comparator = level_solution[current_dish].comparator;
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
				} break;

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

	// failed to meet objective
	if (! met_objective){
		console.log("failed to meet objective!");
	} else {
		console.log("congrats on cooking!");
	}

	var feedback_scenario = correct_proportions.toString() + ", " + met_objective.toString();
	var feedback_display = feedbackText[feedback_scenario];
	return feedback_display;


}