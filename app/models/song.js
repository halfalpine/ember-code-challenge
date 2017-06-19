import Model from 'ember-data/model';

export default Model.extend({
  album: DS.belongsTo('album'),
  name: DS.attr('string')
});
