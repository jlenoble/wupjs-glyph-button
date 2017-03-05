'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GlyphButton = function GlyphButton(_ref) {
  var glyph = _ref.glyph,
      onClick = _ref.onClick,
      buttonBaseClass = _ref.buttonBaseClass,
      buttonAddClass = _ref.buttonAddClass,
      glyphBaseClass = _ref.glyphBaseClass,
      glyphAddClass = _ref.glyphAddClass;

  var _glyphBaseClass = glyphBaseClass && glyphBaseClass + '-' + glyph || 'fa fa-' + glyph;

  return _react2.default.createElement(
    'button',
    {
      className: (0, _classnames2.default)(buttonBaseClass, buttonAddClass),
      onClick: onClick
    },
    _react2.default.createElement('i', { className: (0, _classnames2.default)(_glyphBaseClass, glyphAddClass) })
  );
};

GlyphButton.propTypes = {
  glyph: _react.PropTypes.string.isRequired,
  onClick: _react.PropTypes.func.isRequired,
  buttonBaseClass: _react.PropTypes.string,
  buttonAddClass: _react.PropTypes.string,
  glyphBaseClass: _react.PropTypes.string,
  glyphAddClass: _react.PropTypes.string
};

GlyphButton.defaultProps = {
  buttonBaseClass: 'btn btn-secondary'
};

exports.default = GlyphButton;
module.exports = exports['default'];