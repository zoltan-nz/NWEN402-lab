import DS from 'ember-data';
import _ from 'lodash/lodash';
import Ember from 'ember';

export default DS.JSONAPISerializer.extend({

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    var flows = payload[id];
    if (Ember.isEmpty(flows)) return {data:{}};

    var normalizedFlows = flows.map(function (f, index) {
      return {
        data: {
          type: 'flow',
          id: `s${id}-flow${index}`,
          attributes: {
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
      store.push(f)
    });

    return normalizedFlows.get('lastObject');

    //var dataArray = flows.map(function (f, index) {
    //  return {
    //    type: 'flow',
    //    id: `s${id}-flow${index}`,
    //    attributes: {
    //      length: f.length,
    //      table_id: f.table_id,
    //      duration_nse: f.duration_nse,
    //      duration_sec: f.duration_sec,
    //      priority: f.priority,
    //      idle_timeout: f.idle_timeout,
    //      hard_timeout: f.hard_timeout,
    //      flag: f.flag,
    //      cookie: f.cookie,
    //      packet_count: f.packet_count,
    //      byte_count: f.byte_count,
    //      match: f.match,
    //      action: f.action
    //    },
    //    relationships: {
    //      switch: {
    //        data: {
    //          type: 'switch',
    //          id: id
    //        }
    //      }
    //    }
    //  };
    //});

    //var normalizedFlowsFindAll = {data: dataArray};


    //return this._super(store, primaryModelClass, normalizedFlowsFindAll, null, 'findAll');
    }
  });
