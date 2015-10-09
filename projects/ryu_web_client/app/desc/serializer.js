import DS from 'ember-data';
import _ from 'lodash/lodash';

export default DS.JSONAPISerializer.extend({

  normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
    var desc = payload[id];
    return {
      data: {
          type: 'desc',
          id: id,
          attributes: {
            dp_desc: desc.dp_desc,
            sw_desc: desc.sw_desc,
            hw_desc: desc.hw_desc,
            serial_num: desc.serial_num,
            mfr_desc: desc.mfr_desc
          },
          relationships: {
            switch: {
              data:
              {
                type: 'switch',
                id: id
              }
            }
          }
        }
    };
  }
});
