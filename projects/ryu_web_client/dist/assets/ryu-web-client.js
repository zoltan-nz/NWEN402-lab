"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('ryu-web-client/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'ryu-web-client/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('ryu-web-client/application/adapter', ['exports', 'ember-data', 'ryu-web-client/config/environment'], function (exports, DS, config) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend({

    host: config['default'].HOST,
    namespace: 'api/stats'

  });

});
define('ryu-web-client/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "ryu-web-client/application/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["inline","partial",["navbar"],[],["loc",[null,[2,2],[2,22]]]],
        ["content","outlet",["loc",[null,[3,2],[3,12]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ryu-web-client/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'ryu-web-client/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('ryu-web-client/components/nav-link-to/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].LinkComponent.extend({
    tagName: 'li'
  });

});
define('ryu-web-client/components/nav-link-to/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 24
          }
        },
        "moduleName": "ryu-web-client/components/nav-link-to/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"href","");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),0,0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,11],[1,20]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ryu-web-client/components/switch-with-desc/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['panel'],
    classNameBindings: ['isMouseOver:panel-info:panel-default'],
    isMouseOver: false,

    mouseEnter: function mouseEnter() {
      this.set('isMouseOver', true);
    },

    mouseLeave: function mouseLeave() {
      this.set('isMouseOver', false);
    }
  });

});
define('ryu-web-client/components/switch-with-desc/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "ryu-web-client/components/switch-with-desc/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel-heading");
        var el2 = dom.createTextNode("\n    Datapath ID: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","list-group");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("Manufacturer description: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("Hardware description: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("Software description: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("Serial number: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2,"class","list-group-item");
        var el3 = dom.createTextNode("Human readable description of datapath: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]),1,1);
        morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]),1,1);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [9]),1,1);
        return morphs;
      },
      statements: [
        ["content","switch.dpid",["loc",[null,[2,17],[2,32]]]],
        ["content","desc.mfr_desc",["loc",[null,[5,58],[5,75]]]],
        ["content","desc.hw_desc",["loc",[null,[6,54],[6,70]]]],
        ["content","desc.sw_desc",["loc",[null,[7,54],[7,70]]]],
        ["content","desc.serial_num",["loc",[null,[8,47],[8,66]]]],
        ["content","desc.dp_desc",["loc",[null,[9,72],[9,88]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ryu-web-client/components/switch-with-flows/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    classNames: ['panel'],
    classNameBindings: ['isMouseOver:panel-info:panel-default'],
    isMouseOver: false,

    mouseEnter: function mouseEnter() {
      this.set('isMouseOver', true);
    },

    mouseLeave: function mouseLeave() {
      this.set('isMouseOver', false);
    }
  });

});
define('ryu-web-client/components/switch-with-flows/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 4
            },
            "end": {
              "line": 28,
              "column": 4
            }
          },
          "moduleName": "ryu-web-client/components/switch-with-flows/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(7);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [9]),0,0);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [11]),0,0);
          morphs[6] = dom.createMorphAt(dom.childAt(element0, [13]),0,0);
          return morphs;
        },
        statements: [
          ["content","flow.table_id",["loc",[null,[20,10],[20,27]]]],
          ["content","flow.duration_sec",["loc",[null,[21,10],[21,31]]]],
          ["content","flow.priority",["loc",[null,[22,10],[22,27]]]],
          ["content","flow.packet_count",["loc",[null,[23,10],[23,31]]]],
          ["content","flow.byte_count",["loc",[null,[24,10],[24,29]]]],
          ["content","flow.match",["loc",[null,[25,10],[25,24]]]],
          ["content","flow.actions",["loc",[null,[26,10],[26,26]]]]
        ],
        locals: ["flow"],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 8
          }
        },
        "moduleName": "ryu-web-client/components/switch-with-flows/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","panel-heading");
        var el2 = dom.createTextNode("\n    Datapath ID: ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","table");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Table ID");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Alive (seconds)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Priority");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Packets");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Bytes");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("In port");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Actions");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2, 3]),1,1);
        return morphs;
      },
      statements: [
        ["content","switch.dpid",["loc",[null,[2,17],[2,32]]]],
        ["block","each",[["get","flows",["loc",[null,[18,12],[18,17]]]]],[],0,null,["loc",[null,[18,4],[28,13]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('ryu-web-client/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('ryu-web-client/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('ryu-web-client/desc/adapter', ['exports', 'ember-data', 'ryu-web-client/config/environment'], function (exports, DS, config) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend({

    host: config['default'].HOST,
    namespace: 'api/stats/desc',

    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      return this.get('host') + '/' + this.get('namespace') + '/' + id;
    }
  });

});
define('ryu-web-client/desc/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({

    mfr_desc: DS['default'].attr('string'),
    hw_desc: DS['default'].attr('string'),
    sw_desc: DS['default'].attr('string'),
    serial_num: DS['default'].attr('string'),
    dp_desc: DS['default'].attr('string'),

    s: DS['default'].belongsTo('switch', { inverse: 'desc' })
  });

});
define('ryu-web-client/desc/serializer', ['exports', 'ember-data', 'lodash/lodash'], function (exports, DS, _) {

  'use strict';

  exports['default'] = DS['default'].JSONAPISerializer.extend({

    normalizeFindRecordResponse: function normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
      var desc = payload[id];
      return {
        data: {
          type: 'desc',
          id: id,
          attributes: {
            dp_desc: desc.dp_desc,
            sw_desc: desc.sw_desc,
            hw_desc: desc.hw_desc,
            serial_num: desc.serial_num,
            mfr_desc: desc.mfr_desc
          },
          relationships: {
            'switch': {
              data: {
                type: 'switch',
                id: id
              }
            }
          }
        }
      };
    }
  });

});
define('ryu-web-client/flow/adapter', ['exports', 'ember-data', 'ryu-web-client/config/environment'], function (exports, DS, config) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend({

    host: config['default'].HOST,
    namespace: 'api/stats/flow',

    urlForFindRecord: function urlForFindRecord(id, modelName, snapshot) {
      return this.get('host') + '/' + this.get('namespace') + '/' + id;
    }
  });

});
define('ryu-web-client/flow/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({

    length: DS['default'].attr('string'),
    table_id: DS['default'].attr('string'),
    duration_nse: DS['default'].attr('string'),
    duration_sec: DS['default'].attr('string'),
    priority: DS['default'].attr('string'),
    idle_timeout: DS['default'].attr('string'),
    hard_timeout: DS['default'].attr('string'),
    flag: DS['default'].attr('string'),
    cookie: DS['default'].attr('string'),
    packet_count: DS['default'].attr('string'),
    byte_count: DS['default'].attr('string'),
    match: DS['default'].attr('string'),
    actions: DS['default'].attr('string'),

    s: DS['default'].belongsTo('switch', { inverse: 'flows' })
  });

});
define('ryu-web-client/flow/serializer', ['exports', 'ember-data', 'lodash/lodash', 'ember'], function (exports, DS, _, Ember) {

  'use strict';

  exports['default'] = DS['default'].JSONAPISerializer.extend({

    normalizeResponse: function normalizeResponse(store, primaryModelClass, payload, id, requestType) {
      var flows = payload[id];
      if (Ember['default'].isEmpty(flows)) return { data: {} };

      var normalizedFlows = flows.map(function (f, index) {
        return {
          data: {
            type: 'flow',
            id: 's' + id + '-flow' + index,
            attributes: {
              length: f.length,
              table_id: f.table_id,
              duration_nse: f.duration_nse,
              duration_sec: f.duration_sec,
              priority: f.priority,
              idle_timeout: f.idle_timeout,
              hard_timeout: f.hard_timeout,
              flag: f.flag,
              cookie: f.cookie,
              packet_count: f.packet_count,
              byte_count: f.byte_count,
              match: JSON.stringify(f.match),
              actions: String(f.actions)
            },
            relationships: {
              'switch': {
                data: {
                  type: 'switch',
                  id: '`${id}`'
                }
              }
            }
          }
        };
      });
      normalizedFlows.forEach(function (f) {
        store.push(f);
      });

      return normalizedFlows.get('lastObject');

      //var dataArray = flows.map(function (f, index) {
      //  return {
      //    type: 'flow',
      //    id: `s${id}-flow${index}`,
      //    attributes: {
      //      length: f.length,
      //      table_id: f.table_id,
      //      duration_nse: f.duration_nse,
      //      duration_sec: f.duration_sec,
      //      priority: f.priority,
      //      idle_timeout: f.idle_timeout,
      //      hard_timeout: f.hard_timeout,
      //      flag: f.flag,
      //      cookie: f.cookie,
      //      packet_count: f.packet_count,
      //      byte_count: f.byte_count,
      //      match: f.match,
      //      action: f.action
      //    },
      //    relationships: {
      //      switch: {
      //        data: {
      //          type: 'switch',
      //          id: id
      //        }
      //      }
      //    }
      //  };
      //});

      //var normalizedFlowsFindAll = {data: dataArray};

      //return this._super(store, primaryModelClass, normalizedFlowsFindAll, null, 'findAll');
    }
  });

});
define('ryu-web-client/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 6
          }
        },
        "moduleName": "ryu-web-client/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("1. Launch Open Flow Controller Rest Server");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createTextNode("ryu-manager ./vendor/ryu/ryu/app/ofctl_rest.py");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("2. Launch Mininet");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createTextNode("sudo mn --topo=tree,1,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h4");
        var el4 = dom.createTextNode("3. Open Chrome without CORS check");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("pre");
        var el4 = dom.createTextNode("open -a Google\\ Chrome --args --disable-web-security");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ryu-web-client/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ryu-web-client/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('ryu-web-client/initializers/export-application-global', ['exports', 'ember', 'ryu-web-client/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('ryu-web-client/navbar/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 10
            },
            "end": {
              "line": 10,
              "column": 65
            }
          },
          "moduleName": "ryu-web-client/navbar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Ryu Web Client");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 14
            },
            "end": {
              "line": 15,
              "column": 42
            }
          },
          "moduleName": "ryu-web-client/navbar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 14
            },
            "end": {
              "line": 16,
              "column": 43
            }
          },
          "moduleName": "ryu-web-client/navbar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Stats");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 17,
              "column": 14
            },
            "end": {
              "line": 17,
              "column": 49
            }
          },
          "moduleName": "ryu-web-client/navbar/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Add Flow");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 6
          }
        },
        "moduleName": "ryu-web-client/navbar/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1,"class","navbar navbar-inverse");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","container-fluid");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","navbar-header");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("button");
        dom.setAttribute(el4,"type","button");
        dom.setAttribute(el4,"class","navbar-toggle collapsed");
        dom.setAttribute(el4,"data-toggle","collapse");
        dom.setAttribute(el4,"data-target","#main-navbar");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","sr-only");
        var el6 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","icon-bar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n          ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","collapse navbar-collapse");
        dom.setAttribute(el3,"id","main-navbar");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","nav navbar-nav");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.navbar-collapse ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.container-fluid ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [3, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),3,3);
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(element1,3,3);
        morphs[3] = dom.createMorphAt(element1,5,5);
        return morphs;
      },
      statements: [
        ["block","link-to",["index"],["class","navbar-brand"],0,null,["loc",[null,[10,10],[10,77]]]],
        ["block","nav-link-to",["index"],[],1,null,["loc",[null,[15,14],[15,58]]]],
        ["block","nav-link-to",["stats"],[],2,null,["loc",[null,[16,14],[16,59]]]],
        ["block","nav-link-to",["add-flow"],[],3,null,["loc",[null,[17,14],[17,65]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  }()));

});
define('ryu-web-client/router', ['exports', 'ember', 'ryu-web-client/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('stats', function () {
      this.route('switches');
      this.route('flows');
      this.route('ports');
      this.route('queues');
      this.route('groups');
      this.route('meters');
    });
    this.route('add-flow');
  });

  exports['default'] = Router;

});
define('ryu-web-client/stats/flows/route', ['exports', 'ember', 'ryu-web-client/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('switch');
    },

    afterModel: function afterModel(switches, transition) {

      var _that = this;

      var ids = switches.map(function (item, index) {
        return item.get('id');
      });

      return Ember['default'].RSVP.all(ids.map(function (switchId, index) {
        return Ember['default'].$.get(config['default'].HOST + '/api/stats/flow/' + switchId, function (payload) {
          var flows = payload[switchId];
          var flowsObjects = flows.map(function (f) {
            return Ember['default'].Object.create(_that._mapping(f));
          });
          return _that.store.peekRecord('switch', switchId).set('flowsFromAjax', flowsObjects);
        });
      }));
    },

    setupController: function setupController(controller, model) {
      this._super(controller, model);
    },

    _mapping: function _mapping(f) {
      return {
        length: f.length,
        table_id: f.table_id,
        duration_nse: f.duration_nse,
        duration_sec: f.duration_sec,
        priority: f.priority,
        idle_timeout: f.idle_timeout,
        hard_timeout: f.hard_timeout,
        flag: f.flag,
        cookie: f.cookie,
        packet_count: f.packet_count,
        byte_count: f.byte_count,
        match: JSON.stringify(f.match),
        actions: String(f.actions)
      };
    }
  });

});
define('ryu-web-client/stats/flows/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "ryu-web-client/stats/flows/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-md-10");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["inline","switch-with-flows",[],["switch",["subexpr","@mut",[["get","switch",["loc",[null,[6,33],[6,39]]]]],[],[]],"flows",["subexpr","@mut",[["get","switch.flowsFromAjax",["loc",[null,[6,46],[6,66]]]]],[],[]]],["loc",[null,[6,6],[6,68]]]]
        ],
        locals: ["switch"],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 6
          }
        },
        "moduleName": "ryu-web-client/stats/flows/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Get All Flows");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],0,null,["loc",[null,[4,2],[8,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('ryu-web-client/stats/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 22,
            "column": 6
          }
        },
        "moduleName": "ryu-web-client/stats/index/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-12");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("h2");
        var el4 = dom.createTextNode("Retrieve the switch stats");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get all switches");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get the desc stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get all flows stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get flows stats filtered by fields");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get aggregate flow stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get aggregate flow stats filtered by fields");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get ports stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get ports description");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get queues stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get groups stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get group description stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get group features stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get meters stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get meter config stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("Get meter features stats");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ryu-web-client/stats/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('ryu-web-client/stats/subnav/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 2
            },
            "end": {
              "line": 2,
              "column": 42
            }
          },
          "moduleName": "ryu-web-client/stats/subnav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Stats Home");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 3,
              "column": 43
            }
          },
          "moduleName": "ryu-web-client/stats/subnav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Switches");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 4,
              "column": 37
            }
          },
          "moduleName": "ryu-web-client/stats/subnav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Flows");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 2
            },
            "end": {
              "line": 5,
              "column": 37
            }
          },
          "moduleName": "ryu-web-client/stats/subnav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Ports");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 2
            },
            "end": {
              "line": 6,
              "column": 39
            }
          },
          "moduleName": "ryu-web-client/stats/subnav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Queues");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 7,
              "column": 39
            }
          },
          "moduleName": "ryu-web-client/stats/subnav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Groups");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 39
            }
          },
          "moduleName": "ryu-web-client/stats/subnav/template.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Meters");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": null,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 5
          }
        },
        "moduleName": "ryu-web-client/stats/subnav/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1,"class","nav nav-pills nav-stacked");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(element0,1,1);
        morphs[1] = dom.createMorphAt(element0,3,3);
        morphs[2] = dom.createMorphAt(element0,5,5);
        morphs[3] = dom.createMorphAt(element0,7,7);
        morphs[4] = dom.createMorphAt(element0,9,9);
        morphs[5] = dom.createMorphAt(element0,11,11);
        morphs[6] = dom.createMorphAt(element0,13,13);
        return morphs;
      },
      statements: [
        ["block","nav-link-to",["stats.index"],[],0,null,["loc",[null,[2,2],[2,58]]]],
        ["block","nav-link-to",["stats.switches"],[],1,null,["loc",[null,[3,2],[3,59]]]],
        ["block","nav-link-to",["stats.flows"],[],2,null,["loc",[null,[4,2],[4,53]]]],
        ["block","nav-link-to",["stats.ports"],[],3,null,["loc",[null,[5,2],[5,53]]]],
        ["block","nav-link-to",["stats.queues"],[],4,null,["loc",[null,[6,2],[6,55]]]],
        ["block","nav-link-to",["stats.groups"],[],5,null,["loc",[null,[7,2],[7,55]]]],
        ["block","nav-link-to",["stats.meters"],[],6,null,["loc",[null,[8,2],[8,55]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6]
    };
  }()));

});
define('ryu-web-client/stats/switches/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('switch');
    }
  });

});
define('ryu-web-client/stats/switches/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "topLevel": null,
          "revision": "Ember@2.1.0",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 2
            },
            "end": {
              "line": 8,
              "column": 2
            }
          },
          "moduleName": "ryu-web-client/stats/switches/template.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","col-md-5");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          return morphs;
        },
        statements: [
          ["inline","switch-with-desc",[],["switch",["subexpr","@mut",[["get","switch",["loc",[null,[6,32],[6,38]]]]],[],[]],"desc",["subexpr","@mut",[["get","switch.desc",["loc",[null,[6,44],[6,55]]]]],[],[]]],["loc",[null,[6,6],[6,57]]]]
        ],
        locals: ["switch"],
        templates: []
      };
    }());
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 6
          }
        },
        "moduleName": "ryu-web-client/stats/switches/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Get All Switches");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","model",["loc",[null,[4,10],[4,15]]]]],[],0,null,["loc",[null,[4,2],[8,11]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('ryu-web-client/stats/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "topLevel": false,
        "revision": "Ember@2.1.0",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "ryu-web-client/stats/template.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        dom.setAttribute(el1,"class","well well-sm");
        var el2 = dom.createTextNode("Stats");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","row");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-2");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","col-md-10");
        var el3 = dom.createTextNode("\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        return morphs;
      },
      statements: [
        ["inline","partial",["stats/subnav"],[],["loc",[null,[5,6],[5,32]]]],
        ["content","outlet",["loc",[null,[8,6],[8,16]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('ryu-web-client/switch/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  exports['default'] = DS['default'].Model.extend({
    dpid: DS['default'].attr('number'),

    desc: DS['default'].belongsTo('desc', { inverse: 's' }),
    flows: DS['default'].hasMany('flow', { inverse: 's' })
  });

});
define('ryu-web-client/switch/serializer', ['exports', 'ember-data', 'lodash/lodash'], function (exports, DS, _) {

  'use strict';

  exports['default'] = DS['default'].JSONAPISerializer.extend({

    normalizeFindAllResponse: function normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
      return {
        data: _['default'].map(payload, function (dpid) {
          return {
            type: 'switch',
            id: dpid,
            attributes: { dpid: dpid },
            relationships: {
              desc: {
                data: {
                  type: 'desc',
                  id: dpid
                }
              },
              flows: {
                data: [{
                  type: 'flow',
                  id: dpid
                }]
              }
            }
          };
        })
      };
    }
  });

});
define('ryu-web-client/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/application/adapter.jshint', function () {

  'use strict';

  QUnit.module('JSHint - application');
  QUnit.test('application/adapter.js should pass jshint', function(assert) { 
    assert.ok(true, 'application/adapter.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/components/nav-link-to/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/nav-link-to');
  QUnit.test('components/nav-link-to/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/nav-link-to/component.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/components/switch-with-desc/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/switch-with-desc');
  QUnit.test('components/switch-with-desc/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/switch-with-desc/component.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/components/switch-with-flows/component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components/switch-with-flows');
  QUnit.test('components/switch-with-flows/component.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/switch-with-flows/component.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/desc/adapter.jshint', function () {

  'use strict';

  QUnit.module('JSHint - desc');
  QUnit.test('desc/adapter.js should pass jshint', function(assert) { 
    assert.ok(false, 'desc/adapter.js should pass jshint.\ndesc/adapter.js: line 9, col 35, \'snapshot\' is defined but never used.\ndesc/adapter.js: line 9, col 24, \'modelName\' is defined but never used.\n\n2 errors'); 
  });

});
define('ryu-web-client/tests/desc/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - desc');
  QUnit.test('desc/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'desc/model.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/desc/serializer.jshint', function () {

  'use strict';

  QUnit.module('JSHint - desc');
  QUnit.test('desc/serializer.js should pass jshint', function(assert) { 
    assert.ok(false, 'desc/serializer.js should pass jshint.\ndesc/serializer.js: line 2, col 8, \'_\' is defined but never used.\ndesc/serializer.js: line 6, col 70, \'requestType\' is defined but never used.\n\n2 errors'); 
  });

});
define('ryu-web-client/tests/flow/adapter.jshint', function () {

  'use strict';

  QUnit.module('JSHint - flow');
  QUnit.test('flow/adapter.js should pass jshint', function(assert) { 
    assert.ok(false, 'flow/adapter.js should pass jshint.\nflow/adapter.js: line 9, col 35, \'snapshot\' is defined but never used.\nflow/adapter.js: line 9, col 24, \'modelName\' is defined but never used.\n\n2 errors'); 
  });

});
define('ryu-web-client/tests/flow/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - flow');
  QUnit.test('flow/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'flow/model.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/flow/serializer.jshint', function () {

  'use strict';

  QUnit.module('JSHint - flow');
  QUnit.test('flow/serializer.js should pass jshint', function(assert) { 
    assert.ok(false, 'flow/serializer.js should pass jshint.\nflow/serializer.js: line 9, col 31, Expected \'{\' and instead saw \'return\'.\nflow/serializer.js: line 43, col 20, Missing semicolon.\nflow/serializer.js: line 2, col 8, \'_\' is defined but never used.\nflow/serializer.js: line 7, col 60, \'requestType\' is defined but never used.\n\n4 errors'); 
  });

});
define('ryu-web-client/tests/helpers/resolver', ['exports', 'ember/resolver', 'ryu-web-client/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('ryu-web-client/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/helpers/start-app', ['exports', 'ember', 'ryu-web-client/app', 'ryu-web-client/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('ryu-web-client/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/integration/components/nav-link-to/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('nav-link-to', 'Integration | Component | nav link to', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 15
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'nav-link-to', ['loc', [null, [1, 0], [1, 15]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'nav-link-to', [], [], 0, null, ['loc', [null, [2, 4], [4, 20]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('ryu-web-client/tests/integration/components/nav-link-to/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components/nav-link-to');
  QUnit.test('integration/components/nav-link-to/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/nav-link-to/component-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/integration/components/switch-with-desc/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('switch-with-desc', 'Integration | Component | switch with desc', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'switch-with-desc', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'switch-with-desc', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('ryu-web-client/tests/integration/components/switch-with-desc/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components/switch-with-desc');
  QUnit.test('integration/components/switch-with-desc/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/switch-with-desc/component-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/integration/components/switch-with-flows/component-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent('switch-with-flow', 'Integration | Component | switch with flow', {
    integration: true
  });

  ember_qunit.test('it renders', function (assert) {
    assert.expect(2);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 20
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['content', 'switch-with-flow', ['loc', [null, [1, 0], [1, 20]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template((function () {
      var child0 = (function () {
        return {
          meta: {
            'topLevel': null,
            'revision': 'Ember@2.1.0',
            'loc': {
              'source': null,
              'start': {
                'line': 2,
                'column': 4
              },
              'end': {
                'line': 4,
                'column': 4
              }
            }
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode('      template block text\n');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();

      return {
        meta: {
          'topLevel': null,
          'revision': 'Ember@2.1.0',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 5,
              'column': 2
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode('\n');
          dom.appendChild(el0, el1);
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode('  ');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [['block', 'switch-with-flow', [], [], 0, null, ['loc', [null, [2, 4], [4, 25]]]]],
        locals: [],
        templates: [child0]
      };
    })()));

    assert.equal(this.$().text().trim(), 'template block text');
  });

});
define('ryu-web-client/tests/integration/components/switch-with-flows/component-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration/components/switch-with-flows');
  QUnit.test('integration/components/switch-with-flows/component-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/components/switch-with-flows/component-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 17, col 25, Missing semicolon.\n\n1 error'); 
  });

});
define('ryu-web-client/tests/stats/flows/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - stats/flows');
  QUnit.test('stats/flows/route.js should pass jshint', function(assert) { 
    assert.ok(false, 'stats/flows/route.js should pass jshint.\nstats/flows/route.js: line 20, col 96, Missing semicolon.\nstats/flows/route.js: line 45, col 6, Missing semicolon.\nstats/flows/route.js: line 9, col 24, \'transition\' is defined but never used.\nstats/flows/route.js: line 13, col 43, \'index\' is defined but never used.\nstats/flows/route.js: line 17, col 54, \'index\' is defined but never used.\n\n5 errors'); 
  });

});
define('ryu-web-client/tests/stats/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - stats');
  QUnit.test('stats/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'stats/route.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/stats/switches/route.jshint', function () {

  'use strict';

  QUnit.module('JSHint - stats/switches');
  QUnit.test('stats/switches/route.js should pass jshint', function(assert) { 
    assert.ok(true, 'stats/switches/route.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/switch/model.jshint', function () {

  'use strict';

  QUnit.module('JSHint - switch');
  QUnit.test('switch/model.js should pass jshint', function(assert) { 
    assert.ok(true, 'switch/model.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/switch/serializer.jshint', function () {

  'use strict';

  QUnit.module('JSHint - switch');
  QUnit.test('switch/serializer.js should pass jshint', function(assert) { 
    assert.ok(false, 'switch/serializer.js should pass jshint.\nswitch/serializer.js: line 30, col 10, Missing semicolon.\nswitch/serializer.js: line 6, col 67, \'requestType\' is defined but never used.\nswitch/serializer.js: line 6, col 63, \'id\' is defined but never used.\n\n3 errors'); 
  });

});
define('ryu-web-client/tests/test-helper', ['ryu-web-client/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('ryu-web-client/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/application/adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:application', 'Unit | Adapter | application', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('ryu-web-client/tests/unit/application/adapter-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/adapter-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/application/adapter-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/application/serializer-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('application', 'Unit | Serializer | application', {
    // Specify the other units that are required for this test.
    needs: ['serializer:application']
  });

  // Replace this with your real tests.
  ember_qunit.test('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });

});
define('ryu-web-client/tests/unit/application/serializer-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/application');
  QUnit.test('unit/application/serializer-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/application/serializer-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/desc/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('desc', 'Unit | Model | desc', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('ryu-web-client/tests/unit/desc/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/desc');
  QUnit.test('unit/desc/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/desc/model-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/desc/serializer-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('desc', 'Unit | Serializer | desc', {
    // Specify the other units that are required for this test.
    needs: ['serializer:desc']
  });

  // Replace this with your real tests.
  ember_qunit.test('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });

});
define('ryu-web-client/tests/unit/desc/serializer-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/desc');
  QUnit.test('unit/desc/serializer-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/desc/serializer-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/flow/adapter-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('adapter:flow', 'Unit | Adapter | flow', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  });

  // Replace this with your real tests.
  ember_qunit.test('it exists', function (assert) {
    var adapter = this.subject();
    assert.ok(adapter);
  });

});
define('ryu-web-client/tests/unit/flow/adapter-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/flow');
  QUnit.test('unit/flow/adapter-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/flow/adapter-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/flow/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('flow', 'Unit | Model | flow', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('ryu-web-client/tests/unit/flow/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/flow');
  QUnit.test('unit/flow/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/flow/model-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/flow/serializer-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('flow', 'Unit | Serializer | flow', {
    // Specify the other units that are required for this test.
    needs: ['serializer:flow']
  });

  // Replace this with your real tests.
  ember_qunit.test('it serializes records', function (assert) {
    var record = this.subject();

    var serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });

});
define('ryu-web-client/tests/unit/flow/serializer-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/flow');
  QUnit.test('unit/flow/serializer-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/flow/serializer-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/stats/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:stats', 'Unit | Route | stats', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('ryu-web-client/tests/unit/stats/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/stats');
  QUnit.test('unit/stats/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/stats/route-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/stats/switch/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('stats/switch', 'Unit | Model | stats/switch', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('ryu-web-client/tests/unit/stats/switch/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/stats/switch');
  QUnit.test('unit/stats/switch/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/stats/switch/model-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/stats/switches/route-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor('route:stats/switches', 'Unit | Route | stats/switches', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  ember_qunit.test('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });

});
define('ryu-web-client/tests/unit/stats/switches/route-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/stats/switches');
  QUnit.test('unit/stats/switches/route-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/stats/switches/route-test.js should pass jshint.'); 
  });

});
define('ryu-web-client/tests/unit/switch/model-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForModel('switch', 'Unit | Model | switch', {
    // Specify the other units that are required for this test.
    needs: []
  });

  ember_qunit.test('it exists', function (assert) {
    var model = this.subject();
    // var store = this.store();
    assert.ok(!!model);
  });

});
define('ryu-web-client/tests/unit/switch/model-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit/switch');
  QUnit.test('unit/switch/model-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/switch/model-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('ryu-web-client/config/environment', ['ember'], function(Ember) {
  var prefix = 'ryu-web-client';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("ryu-web-client/tests/test-helper");
} else {
  require("ryu-web-client/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"ryu-web-client","version":"0.0.0+c531742d"});
}

/* jshint ignore:end */
//# sourceMappingURL=ryu-web-client.map