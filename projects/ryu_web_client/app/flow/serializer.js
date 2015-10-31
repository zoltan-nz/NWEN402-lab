import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({

  serialize(snapshot) {
    var json = {
      dpid: snapshot.attr('dpid'),
      length: snapshot.attr('length'),
      table_id: snapshot.attr('table_id'),
      cookie: snapshot.attr('cookie'),
      idle_timeout: snapshot.attr('idle_timeout'),
      hard_timeout: snapshot.attr('hard_timeout'),
      priority: snapshot.attr('priority'),
      flags: snapshot.attr('flags'),
      match: JSON.parse(snapshot.attr('match')),
      actions: JSON.parse(snapshot.attr('actions'))
    };
    return json;
  },

  normalizeResponse(store, primaryModelClass, payload, id) {
    var flows = payload[id];
    if (Ember.isEmpty(flows)) {
      return {
        data: {}
      };
    }

    var normalizedFlows = flows.map(function (f, index) {
      return {
        data: {
          type: 'flow',
          id: `s${id}-flow${index}`,
          attributes: {
            length: f.length,
            table_id: f.table_id,
            duration_nsec: f.duration_nsec,
            duration_sec: f.duration_sec,
            priority: f.priority,
            idle_timeout: f.idle_timeout,
            hard_timeout: f.hard_timeout,
            flags: f.flags,
            cookie: f.cookie,
            packet_count: f.packet_count,
            byte_count: f.byte_count,
            match: JSON.stringify(f.match),
            actions: String(f.actions)
          },
          relationships: {
            switch: {
              data: {
                type: 'switch',
                id: '`${id}`'
              }
            }
          }
        }
      };
    });
    normalizedFlows.forEach(function (f) {
      store.push(f);
    });

    return normalizedFlows.get('lastObject');
  }
});
