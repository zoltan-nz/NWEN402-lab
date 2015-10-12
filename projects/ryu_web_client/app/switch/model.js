import DS from 'ember-data';

export default DS.Model.extend({
  dpid: DS.attr('number'),

  desc: DS.belongsTo('desc', {inverse: 's'}),
  flows: DS.hasMany('flow', {inverse: 's'})
});
