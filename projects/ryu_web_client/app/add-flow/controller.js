import Ember from 'ember';

export default Ember.Controller.extend({

  selectedSwitch: null,

  isFormValid: Ember.computed.and('isMatchValid', 'isActionsValid'),

  isMatchValid: Ember.computed('model.match', function() {
    return this._isValidJson(this.get('model.match'));
  }),

  isActionsValid: Ember.computed('model.actions', function() {
    return this._isValidJson(this.get('model.actions'));
  }),

  actions: {
    selectSwitch(sw) {
      this.set('selectedSwitch', sw);

      this.get('switches').forEach(function(s) {
        s.set('isSelected', false);
      });

      sw.set('isSelected', true);

      this.set('model.match', '{"in_port":1}');
      this.set('model.actions', '[{"type":"OUTPUT","port": 4}]');

      this.set('successResponseMessage', false);
      this.set('errorResponseMessage', false);
    }
  },

  _isValidJson(value) {
    try {
      JSON.parse(value);
    } catch(e) {
      return false
    }

    return true;
  }

});
