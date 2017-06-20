import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    // artists: {serialize: 'records'}
    albums: {embedded: 'always'}
  }
});
