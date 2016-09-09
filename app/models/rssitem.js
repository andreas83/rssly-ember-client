import DS from 'ember-data';

export default DS.Model.extend({
  title : DS.attr('string'),
  description : DS.attr('string'),
  author: DS.attr('string'),
  link : DS.attr('string'),
  RSSSource: DS.belongsTo('RSSSource')
});
