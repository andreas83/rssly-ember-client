import Ember from 'ember';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import PagedRemoteArray from 'ember-cli-pagination/remote/paged-remote-array';

export default Ember.Route.extend({
	 model: function(params) {
    // possible params are params.page and params.per_page
    // Ember's query param logic converts perPage to per_page at some point, for now just dealing with it.

    return PagedRemoteArray.create({modelName: 'rsssource',
                                    store: this.store,
                                    page: params.page || 1,
                                    perPage: params.per_page || 10});
  }
});
