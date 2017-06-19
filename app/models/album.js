import Model from 'ember-data/model';

export default Model.extend({
  artist: DS.belongsTo('artist'),
  name: DS.attr('string'),
  songs: DS.hasMany('song')

});
