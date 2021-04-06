import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';

import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

/**
 * Require
 *
 * This file is required by karma.conf.js and loads recursively all the .spec and framework files
 */
declare const require: {
    context(path: string, deep?: boolean, filter?: RegExp): {
        keys(): string[];
        <T>(id: string): T;
    };
};

/**
 * First, initialize the Angular testing environment
 */
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

/**
 * Context
 *
 * Then we find all the tests
 */
const context = require.context('./', true, /\.spec\.ts$/);

/**
 * Load the modules
 */
context.keys().map(context);
