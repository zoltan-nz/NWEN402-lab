import DS from 'ember-data';
import _ from 'lodash/lodash';

export default DS.JSONAPISerializer.extend({

  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    return {
      data: _.map(payload, (dpid) => {
        return {
          type: 'switch',
          id: dpid,
          attributes: {dpid: dpid},
          relationships: {
            desc: {
              data:
                {
                  type: 'desc',
                  id: dpid
                }
            },
            flows: {
              data: [
                {
                  type: 'flow',
                  id: dpid
                }
              ]
            }
          }
        }
      })
    };
  }
});
