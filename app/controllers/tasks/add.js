import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addTask: function(){
			let title = this.get('title');
			let date = this.get('date');
			let describe = this.get('describe');

			// Create a new Task
			let newTask = this.store.createRecord('task', {
				title: title,
				date: new Date(date),
				describe: describe
			})

			// Save to Database
			newTask.save();

			// Clear Form
			this.setProperties({
				title: '',
				date: '',
				describe: ''
			})
		}
	}
});
