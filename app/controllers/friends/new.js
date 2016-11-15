import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		save(model) {
			console.log('+- save action in edit-form component');
		},
		cancel() {
			console.log('+- cancel action in edit-form component');
		}
	}
});
