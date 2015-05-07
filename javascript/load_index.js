var player_level = null;

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
			static_ingredient = static_ingredient + " " + ingredients[recipes[i].ingredients[j].type].name;
			input_ingredient = input_ingredient + " " + ingredients[recipes[i].ingredients[j].type].name;
			$(static_div_name).append(static_ingredient + "<br>");
			$(input_div_name).append(input_ingredient + "<br>");
		}
	}
	/* associate listeners onto each of the text inputs */
	for (var i=0; i<recipes.length;i++) {
		for (var j=0; j<recipes[i].ingredients.length; j++) {
			var input_id = "#rec_"+i+"_ing_"+j;
			$(input_id).keyup(function(){
				var ingredient = this.getAttribute('data-value');
				//TODO: @jane - this is where you should write your code to handle events on each input
				//	use the ingredient variable defined above to associate it with the cabinet quantity
				//	note: cabinet quanitity ids are cabinet_quanitity_ingredient where _ingredient is the variable above
			});
		}
	}
});

/* load the level's objective and cabinet items */
function loadLevel(level) {
	// load objective
	$("#objective").empty();
	$("#objective").append(levels[level].objective);
	player_level = level;
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
		$(ingredient_well).append('<span>'+ingredients[levels[level].cabinet[i].type].name+':<br><span id=cabinet_quantity_'+levels[level].cabinet[i].type+'><b>'+levels[level].cabinet[i].quantity +"</b></span> "+unit+'</span>');
		$('#cabinet').append(ingredient_well);
	}
}