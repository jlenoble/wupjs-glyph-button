'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

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
  glyphs: _propTypes2.default.array.isRequired,
  onClicks: _propTypes2.default.object.isRequired,
  buttonGroupBaseClass: _propTypes2.default.string,
  buttonGroupAddClass: _propTypes2.default.string,
  buttonBaseClasses: _propTypes2.default.object,
  buttonAddClasses: _propTypes2.default.object,
  glyphBaseClasses: _propTypes2.default.object,
  glyphAddClasses: _propTypes2.default.object
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