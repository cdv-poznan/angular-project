// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    projectId: 'cdv-chat',
    appId: '1:776115517780:web:1ec55a5b6f8dab68e570c1',
    databaseURL: 'https://cdv-chat.firebaseio.com',
    storageBucket: 'cdv-chat.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyAOs33_DPNrtsGMNRM2cPqtn1BlcLDgQ2w',
    authDomain: 'cdv-chat.firebaseapp.com',
    messagingSenderId: '776115517780'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
