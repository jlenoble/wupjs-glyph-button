# wupjs-glyph-button
Generic button using React

## Content

* [Usage](#usage)
* [Required properties](#required-properties)
  * [glyph](#glyph)
  * [onClick](#onclick)
* [Theming GlyphButton](#theming-glyphbutton)
* [Overriding GlyphButton defaults](#overriding-glyphbutton-defaults)
* [GlyphButtonGroup](#glyphbuttongroup)

## Usage

A glyph button is a purely representational React component. It has as text a single symbol character. By default, we use [Bootstrap 4](http://getbootstrap.com/) and [Font Awesome](http://fontawesome.io/) classes to theme the component. But these settings can be overridden.

```js
import React from 'react';
import {render} from 'react-dom';
import {GlyphButton} from 'wupjs-glyph-button';

render(<div>
  <h5>GlyphButton</h5>
  <GlyphButton
    glyph="save"
    onClick={() => {
      console.log('click save');
    }}
  />
</div>, document.getElementById('app'));
```

## Required properties

### `glyph`

By default, `glyph` is the name of a character as defined by [Font Awesome](http://fontawesome.io/icons/). You could use it in combination with property `glyphBaseClass` to use a totally different character set, but that may be a lot of work. See [Overriding GlyphButton defaults](#overriding-glyphbutton-defaults).

### `onClick`

`onClick` property must be a function which will be called whenever the button is clicked. As the component is purely representational, the function knows nothing of its state or props. Therefore it must be bound upstream by the parent of the component.

## Theming GlyphButton

There are two props provided to help theme the component: `buttonAddClass` and `glyphAddClass`. The first one helps with the placement, sizing, etc. of the underlying button HTML tag. The second one helps theme the symbol within the button. But they come on top of the Bootstrap and Font Awesome defaults. See below to override them.

## Overriding GlyphButton defaults

To override Bootstrap classes, use property `buttonBaseClass`.

To change the fonts, you have to use `glyphBaseClass`. By default, the classes used to theme them are formed by concatenating the string `"fa fa-"` with the value of the `glyph` prop. This works well with the CSS of Font Awesome. Now you can use your own CSS and own naming scheme.

```css
.my-question-mark::before {
  content: '?';
}
.my-ellipsis::before {
  content: '...';
}
```

```js
import React from 'react';
import {render} from 'react-dom';
import {GlyphButton} from 'wupjs-glyph-button';

render(<div>
  <h5>Themed GlyphButtons</h5>
  <GlyphButton
    glyph="question-mark"
    onClick={() => {
      console.log('click ?');
    }}
    glyphBaseClass='my'
  />
  <GlyphButton
    glyph="ellipsis"
    onClick={() => {
      console.log('click ...');
    }}
    glyphBaseClass='my'
  />
</div>, document.getElementById('app'));
```

## GlyphButtonGroup

This React component helps deal with several buttons in association, that is they should be displayed together and share a common theme.

```js
import React from 'react';
import {render} from 'react-dom';
import GlyphButtonGroup from './glyph-button-group';

render(<div>
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
</div>, document.getElementById('app'));
```

GlyphButtonGroup has the same properties as GlyphButton, but with the plural mark (`s` appended, yielding `glyphs`, `onClicks`, `buttonBaseClasses`, `buttonAddClasses`, `glyphBaseClasses`, `glyphAddClasses`).

`glyphs` is an array of strings, the five others are objects mapping to the strings in `glyphs`.

Moreover two props are provided to theme the group itself: `buttonGroupBaseClass` and `buttonGroupAddClass`.

## License

wupjs-glyph-button is [MIT licensed](./LICENSE).

© 2017 [Jason Lenoble](mailto:jason.lenoble@gmail.com)
