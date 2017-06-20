import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('label');
  },

  actions: {

    edit(label) {
      label.set('isEditing', true);
    },

    cancel(label) {
      label.set('isEditing', false);
      label.rollbackAttributes();
    },

    delete(label) {
      label.destroyRecord();
    },

    save(label) {
      label.set('isEditing', false);
      label.save();
    }

  }

});
