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
			if (this.get('isValid')) {
				this.get('model').save().then((friend) => {
					// if the http request succeeds

					// we are calling the save action passed down when rendering
					// the component: action=(action "save")
				 	return this.save(friend);
				}, (err) => {
					// if the http request fails
					this.set('errorMessage', 'there was something wrong saving the model')
				});
			} else {
				this.set('errorMessage', 'You have to fill all the fields');
			}
		},
		cancel() {
			console.log('+- cancel action in edit-form component');

			// Calling the cancel action passed down when rendering the component
			// action=(action "cancel")
			this.cancel();
		}
	}
});
