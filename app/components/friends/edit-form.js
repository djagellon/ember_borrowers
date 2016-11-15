import Ember from 'ember';

export default Ember.Component.extend({
	isValid: Ember.computed(
		'model.email',
		'model.firstName',
		'model.lastName',
		'model.twitter',
		{
		get() {
			return !Ember.isEmpty(this.get('model.email')) &&
				!Ember.isEmpty(this.get('model.firstName')) &&
				!Ember.isEmpty(this.get('model.lastName')) &&
				!Ember.isEmpty(this.get('model.twitter'));
			}
		}
	),
	actions: {
		save() {
			console.log('+- save action in edit-form component');

			// Calling the save action passed down when rendering the component
			// action=(action "save")
			this.save(this.get('model'));
		},
		cancel() {
			console.log('+- cancel action in edit-form component');
			// Calling the cancel action passed down when rendering the component
			// action=(action "cancel")
			this.cancel();
		}
	}
});
