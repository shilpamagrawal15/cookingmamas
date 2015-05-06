var cabinet_img_list = ['milk_carton.png', 'flour.jpg'];

$(document).ready(function () {
	/* load the recipes onto game screen */
	for (var i=0; i<recipes.length; i++) {
		// static recipe header
		var static_div_name = "#recipe_" + i + "_static";
		var static_recipe_header = $('<h4>'+ recipes[i].dish + ' <b> (Serves ' + recipes[i].serving + ') </b></h4>');
		$(static_div_name).append(static_recipe_header);
		// input recipe header 
		var input_div_name = "#recipe_" + i + "_input";
		var input_recipe_header = $('<h4>'+ recipes[i].dish + ' <b> (Serves ' + '<input type="text" name=recipe_' + i + '_serving class="input-item">' + ') </b></h4>');
		$(input_div_name).append(input_recipe_header);
		// loading ingredients onto recipe
		var ingredients_list = recipes[i].ingredients;
		for (var j=0; j<ingredients_list.length;j++){
			var static_ingredient = recipes[i].ingredients[j].quantity;
			var input_ingredient = '<input type="text" name="rec_'+i+'_ing_'+j+'" class="input-item">';
			if (recipes[i].ingredients[j].unit != null) {
				input_ingredient = input_ingredient + " " + recipes[i].ingredients[j].unit;
				static_ingredient = static_ingredient + " " + recipes[i].ingredients[j].unit;
			} 
			input_ingredient = input_ingredient + " " + recipes[i].ingredients[j].type;
			static_ingredient = static_ingredient + " " + recipes[i].ingredients[j].type;
			$(input_div_name).append(input_ingredient + "<br>");
			$(static_div_name).append(static_ingredient + "<br>");
		}
	}
});

/* load the level's objective and cabinet items */
function loadLevel(level) {
	$("#objective").empty();
	$("#objective").append(levels[level].objective);

	//@sagrawal TODO: load kitchen cabinet items

	/* dynamically generate cabinet based on cabinet_img_list */
	// $('#kitchen_cabinet').append('<div></div>').addClass('row');
	// for (var i=0; i<cabinet_img_list.length; i++) {
	// 	var col = $('<div class="col-xs-6 col-md-3">');
	// 	var thumbnail = $('<a href="#" class="thumbnail" style="height:100px"><img class="cabinet-item" src="./images/'+cabinet_img_list[i]+'"></a>');
	// 	col.append(thumbnail);
	// 	$('#kitchen_cabinet').append(col);
	// }
}