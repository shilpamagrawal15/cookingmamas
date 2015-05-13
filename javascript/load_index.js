var player_level = null;

$(document).ready(function () {

	loadGameScreen();
});
$(window).load(function () {
	// here have the modal pop up with a description of the game 
	$("#myRecipe").text("Klopfer's Krazy Katering!");
	$("#feedback_modal_body").text(homeText);
	$("#feedback_modal").modal({show:true});
});

/* reset the recipes and input fields */
function loadGameScreen() {

	// TODO: @ava - here have the modal pop up with a description of the game 
	$("#shopping-copy").hide();
	$("#shopping").hide();

	/* reset all the fields */
	for (var i=0; i<recipes.length; i++) {
		var static_div_name = "#recipe_" + i + "_static";
		var input_div_name = "#recipe_" + i + "_input";
		$(static_div_name).html("");
		$(input_div_name).html("");
	}
}

/* load the level's objective and cabinet items */
function loadLevel(level) {
	// hide the shopping list - only to be loaded if needed
	$("#shopping").hide();
	// load modal with objective
	$("#myRecipe").text("Your Objective:");
	$("#feedback_modal_body").text(levels[level].objective);
	$("#feedback_modal").modal({show:true});
	loadGameScreen();
	// load objective
	$("#objective").empty();
	$("#objective").append(levels[level].objective);
	player_level = level;
	// write level number on screen
	$("#level-number").empty();
	$("#level-number").html(level);
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
		$(ingredient_well).append('<span>'+ingredients[levels[level].cabinet[i].type].name+':<br><b><span id=cabinet_quantity_'+levels[level].cabinet[i].type+' data-quantity-original='+levels[level].cabinet[i].quantity+' data-quantity='+levels[level].cabinet[i].quantity+'>'+levels[level].cabinet[i].quantity+"</span></b> "+unit+'</span>');
		$('#cabinet').append(ingredient_well);
	}
	/* load the recipes onto game screen */
	var level_recipes_list = levels[level].recipes;
	for (var i=0; i<levels[level].recipes.length; i++) {
		if (levels[level].recipes[i] == null) {
			$("#recipe_" + i + "_static").html("");
			$("#recipe_" + i + "_static").hide();
			$("#recipe_" + i + "_input").html("");
			$("#recipe_" + i + "_input").hide();
		}
		else {
			// static recipe header
			var static_div_name = "#recipe_" + i + "_static";
			$(static_div_name).show();
			$(static_div_name).html("");
			var static_recipe_header = $('<h4>'+ recipes[level_recipes_list[i]].dish + ' <b> (Serves ' + recipes[level_recipes_list[i]].serving + ') </b></h4>');
			$(static_div_name).append(static_recipe_header);
			// input recipe header 
			var input_div_name = "#recipe_" + i + "_input";
			$(input_div_name).show();
			$(input_div_name).html("");
			var input_recipe_header = $('<h4>'+ recipes[level_recipes_list[i]].dish + ' <b> (Serves ' + '<input type="text" id=recipe_' + i + '_serving class="input-item">' + ') </b></h4>');
			$(input_div_name).append(input_recipe_header);
			// loading ingredients onto recipe
			var ingredients_list = recipes[level_recipes_list[i]].ingredients;
			for (var j=0; j<ingredients_list.length;j++){
				var static_ingredient = recipes[level_recipes_list[i]].ingredients[j].quantity;
				var input_ingredient = '<input type="text" data-value="'+ recipes[level_recipes_list[i]].ingredients[j].type +'" data-quantity=0 id="rec_'+i+'_ing_'+j+'" class="input-item">';
				if (ingredients[recipes[level_recipes_list[i]].ingredients[j].type].unit != null) {
					input_ingredient = input_ingredient + " " + ingredients[recipes[level_recipes_list[i]].ingredients[j].type].unit;
					static_ingredient = static_ingredient + " " + ingredients[recipes[level_recipes_list[i]].ingredients[j].type].unit;
				} 
				static_ingredient = static_ingredient + " " + ingredients[recipes[level_recipes_list[i]].ingredients[j].type].name;
				input_ingredient = input_ingredient + " " + ingredients[recipes[level_recipes_list[i]].ingredients[j].type].name;
				$(static_div_name).append(static_ingredient + "<br>");
				$(input_div_name).append(input_ingredient + "<br>");
			}
		}
	}
	/* load shopping list onto game screen (if applicable) */
	console.log(levels[level].store);
	if (levels[level].store != null) {
		$("#shopping").show();
	}
	/* associate listeners onto each of the text inputs */
	for (var i=0; i<levels[level].recipes.length;i++) {
		if (levels[level].recipes[i] != null) {
			for (var j=0; j<recipes[levels[level].recipes[i]].ingredients.length; j++) {
				var input_id = "#rec_"+i+"_ing_"+j;
				$(input_id).keyup(function(){
					var ingredient = this.getAttribute('data-value');
					var cabinet_quantity_id = "#cabinet_quantity_" + ingredient;
					var recipe_quantity_current = Number(this.getAttribute('data-quantity'));
					var recipe_quantity_input = Number(this.value);
					var cabinet_quantity_current = Number($(cabinet_quantity_id).attr('data-quantity'));
					if (isNaN(recipe_quantity_input)){
						$(cabinet_quantity_id).html(cabinet_quantity_current + recipe_quantity_current);
						this.setAttribute("data-quantity", 0);
						$(this).css('background-color', 'red');
					}
					else {
						if (recipe_quantity_input > $(cabinet_quantity_id).attr('data-quantity-original')){
							$(cabinet_quantity_id).html(cabinet_quantity_current + recipe_quantity_current);
							this.setAttribute("data-quantity", 0);
							$(this).css('background-color', 'red');
						}
						else if ((cabinet_quantity_current - recipe_quantity_input + recipe_quantity_current) >= 0) {
							var cabinet_quantity_new = cabinet_quantity_current - recipe_quantity_input + recipe_quantity_current;
							$(cabinet_quantity_id).attr("data-quantity", cabinet_quantity_new);
							$(cabinet_quantity_id).html(cabinet_quantity_new);
							this.setAttribute("data-quantity", recipe_quantity_input);
							$(this).css('background-color', 'white');
						}
						else {
							$(this).css('background-color', 'red');
						}
					}
				});
			}
		}
	}
}