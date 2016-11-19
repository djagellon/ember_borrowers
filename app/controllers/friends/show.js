import Ember from 'ember';
export default Ember.Route.extend({
	actions: {
		delete(friend) {
			friend.destroyRecord().then(() => {
				this.transitionToRoute('friends.index');
			});
		}
	}
});