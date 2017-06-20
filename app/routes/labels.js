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

    saveEdit(label) {
      label.set('isEditing', false);
      label.save();
    },

    saveNew() {
      let controller = this.get('controller');
      let newLabel = this.store.createRecord('label', {
        name: controller.get('newLabel')
      });
      return newLabel.save().then(() => controller.set('newLabel', ''));
    }

  }

});
