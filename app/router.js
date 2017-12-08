import config from './config/environment';
import EmberRouter from '@ember/routing/router';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('tasks', {resetNamespace: true}, function() {
    this.route('add');
    // this second parameter is defined since edit will be applied to a
    // particular task only. Think about it.
    this.route('edit', {path: '/edit/:task_id'});
  });
});

export default Router;
