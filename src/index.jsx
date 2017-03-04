import React from 'react';
import {render} from 'react-dom';
import GlyphButton from './glyph-button';

render(<GlyphButton
  glyph="save"
  onClick={() => {
    console.log('Hello!');
  }}
/>, document.getElementById('app'));
