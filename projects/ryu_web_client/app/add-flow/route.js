import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('flow');
  },

  setupController(controller, model) {

    this._super(controller, model);

    this.store.findAll('switch').then((switches) => {
      controller.set('switches', switches);
    });
  },

  actions: {
    addFlow() {

      this.controller.set('successResponseMessage', false);
      this.controller.set('errorResponseMessage', false);

      var newFlow = this.controller.get('model');
      var dpid = this.controller.get('selectedSwitch').get('dpid');

      newFlow.set('dpid', dpid);

      var _that = this;
      newFlow.save().then(function () {
        _that.controller.set('successResponseMessage', true);
      }, function (...args) {
        try {
          // Validation error from the server.
          if (args[0].errors[0].status === '500') {
            _that.controller.set('errorResponseMessage', true);
          }
        } catch (e) {
          // Need this hack, because we get error from JSON parser. Ryu REST API responses an empty string,
          // which is not a valid JSON response. It raises an error in jQuery.POST, however
          // the POST request was successful.
          _that.controller.set('successResponseMessage', true);
        }
      });
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
    };
  }

});
