import DS from 'ember-data';

export default DS.Model.extend({

  mfr_desc: DS.attr('string'),
  hw_desc: DS.attr('string'),
  sw_desc: DS.attr('string'),
  serial_num: DS.attr('string'),
  dp_desc: DS.attr('string'),

  s: DS.belongsTo('switch', {inverse: 'desc'})
});
