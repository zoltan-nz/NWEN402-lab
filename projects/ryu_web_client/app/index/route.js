import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({

  activate() {
    this.checkStatus();
  },

  checkStatus() {
    Ember.$.get(`${config.HOST}/api/stats/switches`).done(() => {
      this.get('controller').set('serverOnline', true);
    }).fail(() => {
      this.get('controller').set('serverOnline', false);
    });
  }

});
