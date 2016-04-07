Meteor.startup(function(){

	// check to see whether exercise database is empty
	if (Exercises.find().count() == 0){

		// create a variable that contains exercises in object form
		var baseExercises = [

			// exercises in object form
			{
				name: 'Bench Press',
				tags: [
					{text: 'chest'},
					{text: 'upper push'}
				]
			},
			{
				name: 'Squat',
				tags: [
					{text: 'legs'},
					{text: 'lower push'}
				]
			}

		];

		// use the each iterator to insert each exercise object into Exercises collection
		_.each(baseExercises, function(exercise){
			Exercises.insert(exercise);
		});


	}

});