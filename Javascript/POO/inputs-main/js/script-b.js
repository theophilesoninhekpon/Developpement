'use strict';

import { z as zScriptA} from './script-a.js';

let y = 10;

let z = 20 + zScriptA;

console.log({zScriptA, z})