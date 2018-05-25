import { expect } from 'chai';
import { describe } from 'mocha';

import { add } from '../src/index';

describe('Environement Class', () => {

    it('add(21, 21) shoud return 42', () => {
        expect(add(21,21)).to.equal(42);
    });

});