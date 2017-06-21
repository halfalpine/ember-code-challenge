import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.findAll('artist');
  },

  actions: {

    // createEntry() {
    //   let route = this;
    //   let controller = this.get('controller');
    //   let label = this.store.createRecord('label', {
    //     name: controller.get('newLabel'),
    //     artist: {
    //       name: 'foo',
    //       album: {
    //         name: controller.get('newAlbum'),
    //         song: {
    //           name: controller.get('newSong')
    //         }
    //       }
    //     }
    //   });
    //
    //   return label.save().then(function() {
    //     controller.set('newLabel', '');
    //     controller.set('newArtist', '');
    //     controller.set('newAlbum', '');
    //     controller.set('newSong', '');
    //     // route.transitionTo('artists')
    //   });
    //
    // }

    createEntry() {
      let route = this;
      let controller = this.get('controller');
      let label = this.store.createRecord('label', {
        name: controller.get('newLabel'),
        artists: [this.store.createRecord('artist', {
          name: controller.get('newArtist'),
          album: [this.store.createRecord('album', {
            name: controller.get('newAlbum'),
            song: [this.store.createRecord('song', {
              name: controller.get('newSong')
            })]
          })]
        })]
      });

      return label.save().then(function() {
        controller.set('newLabel', '');
        controller.set('newArtist', '');
        controller.set('newAlbum', '');
        controller.set('newSong', '');
        // route.transitionTo('artists')
      });

    }
  }
});
