import React from 'react';
import {shallow} from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import {expect} from 'chai';
import WupjsGlyphButton from '../src/wupjs-glyph-button';

chai.use(chaiEnzyme());

describe('Testing <WupjsGlyphButton/>', function () {
  it(`Component <WupjsGlyphButton/> says 'Hello!'`, function () {
    const wrapper = shallow(
      <WupjsGlyphButton/>
    );

    expect(wrapper.find('h1').text()).to.equal('Hello!');
  });
});
