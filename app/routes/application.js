import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    this.get('store').push({
      data: [{
        id: 1,
        type: 'label',
        attributes: {
          name: 'Dischord',
          artists: [{
            id: 2,
            type: 'label',
            attributes: {
              name: 'Fugazi'
            }
          }]
        }
      }]
    })
  }

});
