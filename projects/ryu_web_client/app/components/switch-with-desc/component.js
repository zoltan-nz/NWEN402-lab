import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['panel'],
  classNameBindings: ['isMouseOver:panel-info:panel-default'],
  isMouseOver: false,

  mouseEnter() {
    this.set('isMouseOver', true);
  },

  mouseLeave() {
    this.set('isMouseOver', false);
  }
});
