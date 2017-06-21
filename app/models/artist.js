import DS from 'ember-data';

export default DS.Model.extend({
  label: DS.belongsTo('label'),
  name: DS.attr('string'),
  albums: DS.hasMany('album')
});
