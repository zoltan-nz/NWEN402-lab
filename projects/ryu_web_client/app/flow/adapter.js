import DS from 'ember-data';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend({

  host: config.HOST,
  namespace: 'api/stats/flow',
  namespaceForSave: 'api/stats/flowentry/add',

  urlForFindRecord(id, modelName, snapshot) {
    return `${this.get('host')}/${this.get('namespace')}/${id}`;
  },

  urlForCreateRecord(id, modelName, snapshot) {
    return `${this.get('host')}/${this.get('namespaceForSave')}`;
  }
});
