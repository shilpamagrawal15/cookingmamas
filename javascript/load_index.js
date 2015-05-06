var cabinet_img_list = ['milk_carton.png', 'flour.jpg'];

$(document).ready(function () {
	/* dynamically generate cabinet based on cabinet_img_list */
	
	// $('#kitchen_cabinet').append('<div></div>').addClass('row');
	// for (var i=0; i<cabinet_img_list.length; i++) {
	// 	var col = $('<div class="col-xs-6 col-md-3">');
	// 	var thumbnail = $('<a href="#" class="thumbnail" style="height:100px"><img class="cabinet-item" src="./images/'+cabinet_img_list[i]+'"></a>');
	// 	col.append(thumbnail);
	// 	$('#kitchen_cabinet').append(col);
	// }

	console.log("about to load recipes");

	/* load the recipes onto game screen */
	for (var i=0; i<recipes.length; i++) {
		var static_div_name = "#recipe_" + i + "_static";
		var static_recipe_header = $('<h4>'+ recipes[i].dish + ' <b> (Serves ' + recipes[i].serving + ') </b></h4>');
		$(static_div_name).append(static_recipe_header);
		var ingredients_list = recipes[i].ingredients;
		for (var j=0; j<ingredients_list.length;j++){
			var ingredient = recipes[i].ingredients[j].quantity + " " + recipes[i].ingredients[j].unit + " " + recipes[i].ingredients[j].type;
			$(static_div_name).append(ingredient + "<br>");
		}
	}
});