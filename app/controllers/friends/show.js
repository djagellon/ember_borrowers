import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		delete(friend) {
			console.log("ATTEMPT")
			friend.destroyRecord().then(() => {
				console.log("DELETED")
				this.transitionToRoute('friends.index');
			});
		}
	}
});
