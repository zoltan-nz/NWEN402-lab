import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({

  host: config.HOST,
  namespace: 'api/stats/flow',

  urlForFindRecord(id, modelName, snapshot) {
    return `${this.get('host')}/${this.get('namespace')}/${id}`;
  }
});
