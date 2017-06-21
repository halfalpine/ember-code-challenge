import DS from 'ember-data';

export default DS.Model.extend({
  album: DS.belongsTo('album'),
  name: DS.attr('string')
});
