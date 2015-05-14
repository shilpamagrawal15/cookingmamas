/* List of objects containing the feedback that should be given in gameplay scenarios for a given level. Objects are ordered by increasing levels
	- keys are of the form boolean, boolean where the first boolean reflects proportions, the second boolean reflects level objective
	- for levels 1 and 2 third boolean reflects whether they added/subtracted a constant amount
	- for level 4 third boolean reflects whether they cooked both Lemon Bars/Coconut Shrimp
*/

var feedbackText = 
	[

		// {
		// 	"true, true": "Way to go! You met your client's request and pleased Chef Klopfer by executing your dishes perfectly! Continue to hone your skills by trying a higher level.",
		// 	"true, false" : "You're on your way! Chef Klopfer is pleased that you cooked your dishes using the right ingredient amounts, but you didn't meet Mr. Richards’ request. Remember that you need to make at least as many entrees and desserts as he requested!",
		// 	"false, true" : "Chef Klopfer noticed that your dishes taste a bit off, even though you tried to make at least as many entrees and desserts as Richard Richards requested. Keep in mind that you have information about how each dish should be cooked!",
		// 	"false, false" : "Chef Klopfer noticed that your dishes taste a bit off, and Mr. Richards is not pleased that you did not prepare enough food as requested. Keep in mind that you have information about how each dish should be cooked!",
		// },

		{
			"true, true, true": "Way to go! You met your client's request and pleased Chef Klopfer by executing your dishes perfectly! Continue to hone your skills by trying a higher level.",
			"true, false, true" : "You're on your way! Chef Klopfer is pleased that you cooked your dishes using the right ingredient amounts, but you didn't meet Richard Richards' request. Keep the objective in mind when deciding what to cook. You need to have enough entrees and desserts to satisfy his request!",
			"false, true, false" : "Chef Klopfer noticed that your dishes taste a bit off, even though you tried to make the number of desserts and entrees that Mr. Richards requested. Keep in mind that you have information about how each dish should be cooked! Remember to scale ingredient amounts rather than just adding or subtracting a constant amount. Check your recipes for:",
			"false, true, true" : "Chef Klopfer noticed that your dishes taste a bit off, even though you tried to make the number of desserts and entrees that Mr. Richards requested. Keep in mind that you have information about how each dish should be cooked! Check your recipes for:",
			"false, false, true" : "Chef Klopfer noticed that your dishes taste a bit off, and Mr. Richards is not pleased that you were unable to meet his request. Remember that you need to have enough food for Mr. Richards guests, and keep in mind that you have information about how each dish should be cooked! Check your recipes for:",
			"false, false, false" : "Chef Klopfer noticed that your dishes taste a bit off, and Mr. Richards is not pleased that you were unable to meet his request. Remember that you need to have enough food for Mr. Richards guests, and keep in mind that you have information about how each dish should be cooked! Remember to scale ingredient amounts rather than just adding or subtracting a constant amount. Check your recipes for:",
		},

		{
			"true, true, true": "Way to go! You met your client's request and pleased Chef Klopfer by executing your dishes perfectly! Continue to hone your skills by trying a higher level.",
			"true, false, true" : "You're on your way! Chef Klopfer is pleased that you cooked your dishes using the right ingredient amounts, but you didn't meet Maria Mark’s request. Her daughter expected you to make at least as many entrees and desserts as she requested. Keep the objective in mind when deciding what to cook!",
			"false, true, false" : "Chef Klopfer noticed that your dishes taste a bit off, even though you tried to make the number of desserts and entrees that Ms. Marks requested. Keep in mind that you have information about how each dish should be cooked! Remember to scale ingredient amounts rather than just adding or subtracting a constant amount. Check your recipes for:",
			"false, true, true" : "Chef Klopfer noticed that your dishes taste a bit off, even though you tried to make the number of desserts and entrees that Ms. Marks requested. Keep in mind that you have information about how each dish should be cooked! Check your recipes for:",
			"false, false, true" : "Chef Klopfer noticed that your dishes taste a bit off, and Ms. Marks is not pleased that you were unable to meet the request. Keep in mind that you have information about how each dish should be cooked! Check your recipes for:",
			"false, false, false" : "Chef Klopfer noticed that your dishes taste a bit off, and Ms. Marks is not pleased that you were unable to meet the request. Keep in mind that you have information about how each dish should be cooked! Remember to scale ingredient amounts rather than just adding or subtracting a constant amount. Check your recipes for:",
		},

		{
			"true, true": "Way to go! You met Lisa Li's request and pleased Chef Klopfer by executing your dishes perfectly! Continue to hone your skills by trying a higher level.",
			"true, false" : "You're on your way! Chef Klopfer is pleased that you cooked your dishes using the right ingredient amounts, but you didn't meet Ms. Li's request. Keep the objective in mind when deciding what to cook!",
			"false, true" : "Chef Klopfer noticed that your dishes taste a bit off, even though you met Lisa Li's request. Keep in mind that you have information about how each dish should be cooked!",
			"false, false" : "Chef Klopfer noticed that your dishes taste a bit off, and Ms. Li is not pleased that you were unable to meet the request. Keep in mind that you have information about how each dish should be cooked!",
		},

		{
			"true, true, false": "Way to go! You correctly chose to take Larissa’s request and pleased Chef Klopfer by executing your dishes perfectly, and he’s very happy that you were able to maximize the profit! A promotion is likely in your future!" , 
			"true, false, true": "Remember that you are only able to fulfill one of the two requests from Shelly and Larissa!", 
			"true, false, false": "You’re on your way! Your cooking meets Chef Klopfer’s standards, but he knows that you could have pulled in more profit than you did. Remember that shopping will bring down your net revenue, the exact request, and exactly which ingredients are needed to cook the Coconut Shrimp versus the Lemon Bars.", 
			"false, true, true": "Chef Klopfer noticed that your dishes taste a bit off. Keep in mind that you have information about how each dish should be cooked!", 
			"false, false, true": "Chef Klopfer noticed that your dishes taste a bit off. Keep in mind that you have information about how each dish should be cooked!", 
			"false, true, false": "Chef Klopfer noticed that your dishes taste a bit off. Keep in mind that you have information about how each dish should be cooked!", 
			"false, false, false": "Chef Klopfer noticed that your dishes taste a bit off. Keep in mind that you have information about how each dish should be cooked!", 
			 
		}

		
	]

