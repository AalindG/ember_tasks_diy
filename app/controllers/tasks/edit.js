import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		editTask: function(id){
			console.log('ID: ', id);
			let self = this;

			let title = this.get('model.title');
			let date = this.get('model.date');
			let describe = this.get('model.describe');

			// Update task
			this.store.findRecord('task', id)
				.then(function(task){
					task.set('title', title);
					task.set('date', date);
					task.set('describe', describe);

					// Save to DB
					task.save();

					// Route to home page
					self.transitionToRoute('/tasks');
				})
		}
	}
});
