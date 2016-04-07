Template.allExerciseList.helpers({
	'exercise': function(){
		return Exercises.find().fetch();
	}, 

	'count': function(){
		return Exercises.find().count();	
	}
});