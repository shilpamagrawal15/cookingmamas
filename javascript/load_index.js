$(document).ready(function () {
	/* load the recipes onto game screen */
	for (var i=0; i<recipes.length; i++) {
		// static recipe header
		var static_div_name = "#recipe_" + i + "_static";
		var static_recipe_header = $('<h4>'+ recipes[i].dish + ' <b> (Serves ' + recipes[i].serving + ') </b></h4>');
		$(static_div_name).append(static_recipe_header);
		// input recipe header 
		var input_div_name = "#recipe_" + i + "_input";
		var input_recipe_header = $('<h4>'+ recipes[i].dish + ' <b> (Serves ' + '<input type="text" id=recipe_' + i + '_serving class="input-item">' + ') </b></h4>');
		$(input_div_name).append(input_recipe_header);
		// loading ingredients onto recipe
		var ingredients_list = recipes[i].ingredients;
		for (var j=0; j<ingredients_list.length;j++){
			var static_ingredient = recipes[i].ingredients[j].quantity;
			var input_ingredient = '<input type="text" data-value="'+ recipes[i].ingredients[j].type +'" id="rec_'+i+'_ing_'+j+'" class="input-item">';
			if (ingredients[recipes[i].ingredients[j].type].unit != null) {
				input_ingredient = input_ingredient + " " + ingredients[recipes[i].ingredients[j].type].unit;
				static_ingredient = static_ingredient + " " + ingredients[recipes[i].ingredients[j].type].unit;
			} 
			static_ingredient = static_ingredient + " " + recipes[i].ingredients[j].type;
			input_ingredient = input_ingredient + " " + recipes[i].ingredients[j].type;
			$(static_div_name).append(static_ingredient + "<br>");
			$(input_div_name).append(input_ingredient + "<br>");
		}
	}
});

/* load the level's objective and cabinet items */
function loadLevel(level) {
	// load objective
	$("#objective").empty();
	$("#objective").append(levels[level].objective);

	//load kitchen cabinet items
	$('#cabinet').empty();
	for (var i=0; i<levels[level].cabinet.length; i++) {
		var ingredient_well = $('<div class="well well-sm cabinet-item" style="display:inline-block;">');
		var ingredient_image = '<a class="thumbnail cabinet-img""><img src="'+ingredients[levels[level].cabinet[i].type].image+'"></a>';
		$(ingredient_well).append(ingredient_image);
		var unit = "";
		if (ingredients[levels[level].cabinet[i].type].unit !== null) {
			unit = ingredients[levels[level].cabinet[i].type].unit;
		}
		$(ingredient_well).append('<span>'+levels[level].cabinet[i].type+':<br>'+levels[level].cabinet[i].quantity +" "+unit+'</span>');
		$('#cabinet').append(ingredient_well);
	}
}