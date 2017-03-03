import React from 'react';
import TestUtils from 'react-addons-test-utils';
import {expect} from 'chai';
import WupjsGlyphButton from '../src/wupjs-glyph-button';

describe('Testing <WupjsGlyphButton/>', function () {
  it(`Component <WupjsGlyphButton/> says 'Hello!'`, function () {
    const component = TestUtils.renderIntoDocument(<WupjsGlyphButton/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(
      component, 'h1');
    expect(h1.textContent).to.equal('Hello!');
  });
});
