import React, {PropTypes} from 'react';
import classnames from 'classnames';

const GlyphButton = ({
  glyph, onClick, buttonBaseClass, buttonAddClass,
  glyphBaseClass, glyphAddClass,
}) => {
  const _glyphBaseClass = glyphBaseClass || `fa fa-${glyph}`;

  return (
    <button
      className={classnames(buttonBaseClass, buttonAddClass)}
      onClick={onClick}
    >
      <i className={classnames(_glyphBaseClass, glyphAddClass)}></i>
    </button>
  );
};

GlyphButton.propTypes = {
  glyph: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonBaseClass: PropTypes.string,
  buttonAddClass: PropTypes.string,
  glyphBaseClass: PropTypes.string,
  glyphAddClass: PropTypes.string,
};

GlyphButton.defaultProps = {
  buttonBaseClass: 'btn btn-secondary',
};

export default GlyphButton;
