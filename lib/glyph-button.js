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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GlyphButton = ({
  glyph, onClick, buttonBaseClass, buttonAddClass,
  glyphBaseClass, glyphAddClass
}) => {
  const _glyphBaseClass = glyphBaseClass && glyphBaseClass + '-' + glyph || `fa fa-${glyph}`;

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
  glyph: _propTypes2.default.string.isRequired,
  onClick: _propTypes2.default.func.isRequired,
  buttonBaseClass: _propTypes2.default.string,
  buttonAddClass: _propTypes2.default.string,
  glyphBaseClass: _propTypes2.default.string,
  glyphAddClass: _propTypes2.default.string
};

GlyphButton.defaultProps = {
  buttonBaseClass: 'btn btn-secondary'
};

exports.default = GlyphButton;
module.exports = exports.default;