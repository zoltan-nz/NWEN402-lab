import DS from 'ember-data';

export default DS.Model.extend({

  dpid:         DS.attr('string'),
  length:       DS.attr('string'),
  table_id:     DS.attr('string'),
  duration_nse: DS.attr('string'),
  duration_sec: DS.attr('string'),
  priority:     DS.attr('string'),
  idle_timeout: DS.attr('string'),
  hard_timeout: DS.attr('string'),
  flags:        DS.attr('string'),
  cookie:       DS.attr('string'),
  packet_count: DS.attr('string'),
  byte_count:   DS.attr('string'),
  match:        DS.attr('string'),
  actions:      DS.attr('string'),

  s: DS.belongsTo('switch', {inverse: 'flows'})
});
