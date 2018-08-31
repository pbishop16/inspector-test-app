import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('one', function() {
    this.route('two', function() {
      this.route('five');
    });
    this.route('three', { resetNamespace: true }, function() {
      this.route('four', { resetNamespace: true });
    });
  });
  this.route('six', function() {
    this.route('five', { resetNamespace: true });
  });
  this.route('seven', function() {
    this.route('eight', function() {
      this.route('nine', { resetNamespace: true });
    });
  });
});

export default Router;
