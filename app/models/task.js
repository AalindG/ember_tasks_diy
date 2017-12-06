import DS from 'ember-data';

export default DS.Model.extend({
	// this is like DB schema
	title: DS.attr('string'),
	date: DS.attr('date'),
	describe: DS.attr('string'),
	// This is to add the date when the task was created
	created: DS.attr('string', {
		defaultValue: function(){
			return new Date();
		}
	})

});
