import Ember from 'ember';

export default Ember.Controller.extend({

  selectedSwitch: null,

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
  }

});
