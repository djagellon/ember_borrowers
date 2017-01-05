import Ember from 'ember';

export default Ember.Controller.extend({
	save(model) {
		console.log("save in articles new")
		this.transitionToRoute('articles.show', model);
	},
	cancel(model) {
		console.log("cancel in articles new")
		this.transitionToRoute('articles.show', model);
	}
});
