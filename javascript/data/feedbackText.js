/* Object containing the feedback that should be given in gameplay scenarios.
	- keys are of the form [boolean, boolean] where the first boolean reflects proportions, the second boolean reflects level objective
*/

var feedbackText = 
	{
		[true, true] : "All correct",
		[true, false] : "Didn't meet objective",
		[false, true] : "Incorrect proportions",
		[false, false] : "Incorrect proportions and objective",

	};

