var cabinet_img_list = ['milk_carton.png', 'flour.jpg'];

$(document).ready(function () {
	/* dynamically generate cabinet based on cabinet_img_list */
	$('#kitchen_cabinet').append('<div></div>').addClass('row');
	for (i=0; i<cabinet_img_list.length; i++) {
		var col = $('<div class="col-xs-6 col-md-3">');
		var thumbnail = $('<a href="#" class="thumbnail" style="height:100px"><img class="cabinet-item" src="./images/'+cabinet_img_list[i]+'"></a>');
		col.append(thumbnail);
		$('#kitchen_cabinet').append(col);
	}	
});