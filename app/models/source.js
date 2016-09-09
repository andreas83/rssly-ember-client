import DS from 'ember-data';

export default DS.Model.extend({
  name : DS.attr('string'),
  description : DS.attr('string'),
  image : DS.attr('string'),
  language : DS.attr('string'),
  link : DS.attr('string'),
  items: DS.hasMany('item')
});
