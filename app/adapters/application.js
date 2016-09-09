import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/1',
  host: 'http://rssly.codejungle.org',
  pathForType: function(type) {
   if(type=="rssitem")
      type="items";
   return Ember.String.underscore(type);
 }
});
