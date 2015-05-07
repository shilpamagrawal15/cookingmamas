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
			var input_ingredient = '<input type="text" data-value="'+ recipes[i].ingredients[j].type +'" data-quantity=0 id="rec_'+i+'_ing_'+j+'" class="input-item">';
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
				var cabinet_quantity_id = "#cabinet_quantity_" + ingredient;
				var recipe_quantity_current = Number(this.getAttribute('data-quantity'));
				var recipe_quantity_input = Number(this.value);
				var cabinet_quantity_current = Number($(cabinet_quantity_id).attr('data-quantity'));
				if ((cabinet_quantity_current - recipe_quantity_input) >= 0) {
					var cabinet_quantity_new = cabinet_quantity_current - recipe_quantity_input + recipe_quantity_current;
					$(cabinet_quantity_id).attr("data-quantity", cabinet_quantity_new);
					$(cabinet_quantity_id).html(cabinet_quantity_new);
					this.setAttribute("data-quantity", recipe_quantity_input);
				}
			});
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
		$(ingredient_well).append('<span>'+ingredients[levels[level].cabinet[i].type].name+':<br><b><span id=cabinet_quantity_'+levels[level].cabinet[i].type+' data-quantity='+levels[level].cabinet[i].quantity+'>'+levels[level].cabinet[i].quantity+"</span></b> "+unit+'</span>');
		$('#cabinet').append(ingredient_well);
	}

}