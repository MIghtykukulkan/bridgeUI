import Ember from 'ember';

export default Ember.Route.extend({
	
	Model(){
	
	},
	
	afterModel(){
		this.transitionTo('home');
	}
});
