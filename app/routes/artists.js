import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('artist');
  },

  actions: {

    edit(artist) {
      artist.set('isEditing', true);
    },

    cancel(artist) {
      artist.set('isEditing', false);
      artist.rollbackAttributes();
    },

    delete(artist) {
      artist.destroyRecord();
    },

    saveEdit(artist) {
      artist.set('isEditing', false);
      artist.save();
    },

    saveNew() {
      let controller = this.get('controller');
      let newArtist = this.store.createRecord('artist', {
        name: controller.get('newArtist')
      });
      return newArtist.save().then(() => controller.set('newArtist', ''));
    }

  }
});
