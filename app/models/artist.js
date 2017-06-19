import Model from 'ember-data/model';

export default Model.extend({
  label: belongsTo('label'),
  name: DS.attr('string'),
  albums: DS.hasMany('album')
});
