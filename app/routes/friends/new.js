import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('friend');
	},
	resetController(controller, isExisting) {
		if (isExisting) {
			// grab the model from the controller
			var model = controller.get('model');

			// Because we are leaving the Route we verify if the model is in
			// 'isNew' state, which means it wasn't saved to the backend.
			if (model.get('isNew')) {
				// Call DS.destroyRecord() which remove it from the store 
				model.destroyRecord();
			}
		}
	}
});
