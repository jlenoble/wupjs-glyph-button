'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _glyphButton = require('./glyph-button');

var _glyphButton2 = _interopRequireDefault(_glyphButton);

var _glyphButtonGroup = require('./glyph-button-group');

var _glyphButtonGroup2 = _interopRequireDefault(_glyphButtonGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  'div',
  null,
  _react2.default.createElement(
    'h5',
    null,
    'GlyphButton'
  ),
  _react2.default.createElement(_glyphButton2.default, {
    glyph: 'save',
    onClick: () => {
      console.log('click save');
    }
  }),
  _react2.default.createElement(
    'h5',
    null,
    'GlyphButtonGroup'
  ),
  _react2.default.createElement(_glyphButtonGroup2.default, {
    glyphs: ['pencil', 'trash-o', 'save'],
    onClicks: {
      'pencil': () => {
        console.log('pencil button clicked');
      },
      'trash-o': () => {
        console.log('trash-o button clicked');
      },
      'save': () => {
        console.log('save button clicked');
      }
    }
  }),
  _react2.default.createElement(_glyphButtonGroup2.default, {
    glyphs: [],
    onClicks: {}
  }),
  _react2.default.createElement(_glyphButtonGroup2.default, {
    glyphs: ['close'],
    onClicks: {
      'close': () => {
        console.log('close button clicked');
      }
    }
  })
), document.getElementById('app'));