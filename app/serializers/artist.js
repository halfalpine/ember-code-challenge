import DS from 'ember-data';
import { LSSerializer } from 'ember-localstorage-adapter';

export default LSSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs: {
    albums: {serialize: 'records'}
  }
});
