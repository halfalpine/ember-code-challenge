import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('label');
  },

  actions: {

    saveEntry(newEntry) {
      console.log('hello')
    }

  }
});
