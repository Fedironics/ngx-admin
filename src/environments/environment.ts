/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import * as firebase from "firebase";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,

// Initialize Firebase
    firebase : {
        apiKey: 'AIzaSyC7vMQtivuhGuMsa_slBRt6zVpbcWLku9M',
        authDomain: 'imeter-f2c7a.firebaseapp.com',
        databaseURL: 'https://imeter-f2c7a.firebaseio.com',
        projectId: 'imeter-f2c7a',
        storageBucket: 'imeter-f2c7a.appspot.com',
        messagingSenderId: '640201853896'
    },
};
