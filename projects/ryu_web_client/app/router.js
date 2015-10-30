import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('stats', function() {
        this.route('switches');
        this.route('flows');
        this.route('ports');
        this.route('queues');
        this.route('groups');
        this.route('meters');
    });
    this.route('add-flow');
});

export default Router;
