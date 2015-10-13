import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('flow');
  },

  setupController(controller, model) {

    this._super(controller, model);

    this.store.findAll('switch').then((switches) => {
      controller.set('switches', switches);
    })
  },

  actions: {
    addFlow() {
      var url = `${config.HOST}/api/stats/flowentry/add`;
      var type = 'POST';
      var data = JSON.parse(this.mapped());
      var dataType = 'json';
      var headers = {'Access-Control-Allow-Origin': '*'};

      Ember.$.post(url, data)
      .done(() => {
        this.controller.set('responseMessage', 'New flow entry added');
      })
    }
  },

  mapped() {

    var model = this.controller.get('model');
    var dpid = this.controller.get('selectedSwitch').get('dpid');

    return {
      dpid: dpid,
      cookie: model.get('cookie'),
      cookie_mask: model.get('cookie_mask'),
      table_id: model.get('table_id'),
      idle_timeout: model.get('idle_timeout'),
      hard_timeout: model.get('hard_timeout'),
      priority: model.get('priority'),
      flags: model.get('flags'),
      match: JSON.parse(model.get('match')),
      actions: JSON.parse(model.get('actions'))
    }
  }

})
