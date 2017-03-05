'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _glyphButton = require('./glyph-button');

var _glyphButton2 = _interopRequireDefault(_glyphButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphButtonGroup = function GlyphButtonGroup(_ref) {
  var glyphs = _ref.glyphs,
      onClicks = _ref.onClicks,
      buttonGroupBaseClass = _ref.buttonGroupBaseClass,
      buttonGroupAddClass = _ref.buttonGroupAddClass,
      buttonBaseClasses = _ref.buttonBaseClasses,
      buttonAddClasses = _ref.buttonAddClasses,
      glyphBaseClasses = _ref.glyphBaseClasses,
      glyphAddClasses = _ref.glyphAddClasses;

  return _react2.default.createElement(
    'div',
    {
      className: (0, _classnames2.default)(buttonGroupBaseClass, buttonGroupAddClass),
      role: 'group'
    },
    glyphs.map(function (glyph) {
      return _react2.default.createElement(_glyphButton2.default, {
        key: glyph,
        glyph: glyph,
        onClick: onClicks[glyph],
        buttonBaseClass: buttonBaseClasses[glyph],
        buttonAddClass: buttonAddClasses[glyph],
        glyphBaseClass: glyphBaseClasses[glyph],
        glyphAddClass: glyphAddClasses[glyph]
      });
    })
  );
};

GlyphButtonGroup.propTypes = {
  glyphs: _react.PropTypes.array.isRequired,
  onClicks: _react.PropTypes.object.isRequired,
  buttonGroupBaseClass: _react.PropTypes.string,
  buttonGroupAddClass: _react.PropTypes.string,
  buttonBaseClasses: _react.PropTypes.object,
  buttonAddClasses: _react.PropTypes.object,
  glyphBaseClasses: _react.PropTypes.object,
  glyphAddClasses: _react.PropTypes.object
};

GlyphButtonGroup.defaultProps = {
  buttonGroupBaseClass: 'btn-group',
  buttonBaseClasses: {},
  buttonAddClasses: {},
  glyphBaseClasses: {},
  glyphAddClasses: {}
};

exports.default = GlyphButtonGroup;
module.exports = exports['default'];