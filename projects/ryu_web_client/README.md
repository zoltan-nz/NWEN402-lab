# Ryu Web Client

Ryu Web Client is a frontend application to manage Ryu Open Flow Rest interface using a user friendly website. Built with Ember.js.

Ryu Rest API: http://ryu.readthedocs.org/en/latest/app/ofctl_rest.html

### Run this app

1. Launch Open Flow Controller Rest Server in the VM

    `ryu-manager ./vendor/ryu/ryu/app/ofctl_rest.py`

2. Launch Mininet

    `sudo mn --topo=tree,1,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13`

3. Open Chrome withou CORS support

(CORS support implementation WIP.)

    `open -a Google\ Chrome --args --disable-web-security`


### Namespace:

`/stats`

### Models:

```
Switch:
  dpid
  
  desc -> Desc

Desc:
  mfr_desc
  hw_desc
  sw_desc
  serial_num
  dp_desc  
  
  s -> Switch

### Endpoints

Without endpoints.


| URI | Model |
| ----- | ----- |
| GET `/switches` | `switch` |
| GET `/desc/{switch_id}` | `desc` |
| GET `/flow/{switch_id}` | `flow` |
| POST `/flow/{switch_id}` | filter `switch` |

# Original instructions for Ember Development

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

