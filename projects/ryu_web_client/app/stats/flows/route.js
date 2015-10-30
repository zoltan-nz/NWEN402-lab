import Ember from 'ember';
import config from '../../config/environment';

export default Ember.Route.extend({
    model() {
            return this.store.findAll('switch');
        },

        afterModel(switches) {

            var _that = this;

            var ids = switches.map(function(item) {
                return item.get('id');
            });

            return Ember.RSVP.all(ids.map(function(switchId) {
                return Ember.$.get(`${config.HOST}/api/stats/flow/${switchId}`, function(payload) {
                    var flows = payload[switchId];
                    var flowsObjects = flows.map(function(f) {
                        return Ember.Object.create(_that._mapping(f));
                    });
                    return _that.store.peekRecord('switch', switchId).set('flowsFromAjax', flowsObjects);
                });
            }));
        },

        setupController(controller, model) {
            this._super(controller, model);
        },

        _mapping: function(f) {
            return {
                length: f.length,
                table_id: f.table_id,
                duration_nse: f.duration_nse,
                duration_sec: f.duration_sec,
                priority: f.priority,
                idle_timeout: f.idle_timeout,
                hard_timeout: f.hard_timeout,
                flag: f.flag,
                cookie: f.cookie,
                packet_count: f.packet_count,
                byte_count: f.byte_count,
                match: JSON.stringify(f.match),
                actions: String(f.actions)
            };
        }
});
