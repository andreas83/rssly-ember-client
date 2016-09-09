import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Ember.Route.extend(RouteMixin, {
  
   model(params) {
      return this.findPaged('rssitem', params);
   }
});
