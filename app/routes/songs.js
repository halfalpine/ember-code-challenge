import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('song');
  },

  actions: {

    edit(song) {
      song.set('isEditing', true);
    },

    cancel(song) {
      song.set('isEditing', false);
      song.rollbackAttributes();
    },

    delete(song) {
      song.destroyRecord();
    },

    saveEdit(song) {
      song.set('isEditing', false);
      song.save();
    },

    saveNew() {
      let controller = this.get('controller');
      let newSong = this.store.createRecord('song', {
        name: controller.get('newSong')
      });
      return newSong.save().then(() => controller.set('newSong', ''));
    }

  }

});
