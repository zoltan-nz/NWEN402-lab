import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('switch-with-desc', 'Integration | Component | switch with desc', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{switch-with-desc}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#switch-with-desc}}
      template block text
    {{/switch-with-desc}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
