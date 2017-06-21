import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('album');
  },

  actions: {

    edit(album) {
      album.set('isEditing', true);
    },

    cancel(album) {
      album.set('isEditing', false);
      album.rollbackAttributes();
    },

    delete(album) {
      album.destroyRecord();
    },

    saveEdit(album) {
      album.set('isEditing', false);
      album.save();
    },

    saveNew() {
      let controller = this.get('controller');
      let newAlbum = this.store.createRecord('album', {
        name: controller.get('newAlbum')
      });
      return newAlbum.save().then(() => controller.set('newAlbum', ''));
    }

  }

});
