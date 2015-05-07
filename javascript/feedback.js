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
			input_obj[recipes[i].dish] = {ingredients: input_ingredients, servings: $("#recipe_"+i+"_serving").val()};
		}
		console.log(input_obj);
		// TODO: @ava - call generateFeedback(input_obj)
	});
});

// TODO: @ava
function generateFeedback(submission) {
	// insert comparator and generating feedback function
}