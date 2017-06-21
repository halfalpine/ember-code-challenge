import DS from 'ember-data';

export default DS.Model.extend({
  artist: DS.belongsTo('artist'),
  name: DS.attr('string'),
  songs: DS.hasMany('song')

});
