import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({
  adapter: new Adapter(),
});

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';

import './glyph-button.test';
import './glyph-button-group.test';

chai.use(chaiEnzyme());
