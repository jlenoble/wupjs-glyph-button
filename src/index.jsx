import React from 'react';
import {render} from 'react-dom';
import GlyphButton from './glyph-button';
import GlyphButtonGroup from './glyph-button-group';

render(<div>
  <h5>GlyphButton</h5>
  <GlyphButton
    glyph="save"
    onClick={() => {
      console.log('click save');
    }}
  />
  <h5>GlyphButtonGroup</h5>
  <GlyphButtonGroup
    glyphs={['pencil', 'trash-o', 'save']}
    onClicks={{
      'pencil': () => {
        console.log('pencil button clicked');
      },
      'trash-o': () => {
        console.log('trash-o button clicked');
      },
      'save': () =>{
        console.log('save button clicked');
      },
    }}
  />
  <GlyphButtonGroup
    glyphs={[]}
    onClicks={{}}
  />
  <GlyphButtonGroup
    glyphs={['close']}
    onClicks={{
      'close': () => {
        console.log('close button clicked');
      },
    }}
  />
</div>, document.getElementById('app'));
