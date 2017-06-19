import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('label');
  },

  actions: {
    createLabel() {
      let route = this;
      let controller = this.get('controller');
      let band = this.store.createRecord('label', {
        name: controller.get('newLabel')
      });

      return band.save().then(function(){
        controller.set('newName', '');
        route.transitionTo('labels.label.artists', label);
      })
    }
  }

});
