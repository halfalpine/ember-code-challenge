// import ApplicationSerializer from './application';
//
// export default ApplicationSerializer.extend({
// });

import ApplicationSerializer from './application';

export default ApplicationSerializer.extend(DS.EmbeddedRecordsMixin, {
    attrs: {
        artists: {
          // embedded: 'always'
            serialize: 'records'
            // deserialize: 'ids'
        }
     }
});

// import DS from 'ember-data';
// import { LSSerializer } from 'ember-localstorage-adapter';
//
// export default LSSerializer.extend(DS.EmbeddedRecordsMixin, {
//     attrs: {
//       artists: {
//         embedded: 'always'
//       }
//     }
// });
