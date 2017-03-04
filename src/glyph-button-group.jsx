import React, {PropTypes} from 'react';
import classnames from 'classnames';
import GlyphButton from './glyph-button';

const GlyphButtonGroup = ({
  glyphs, onClicks,
  buttonGroupBaseClass, buttonGroupAddClass,
  buttonBaseClasses, buttonAddClasses,
  glyphBaseClasses, glyphAddClasses,
}) => {
  return (
    <div
      className={classnames(buttonGroupBaseClass, buttonGroupAddClass)}
      role="group"
    >
      {glyphs.map(glyph => (
        <GlyphButton
          key={glyph}
          glyph={glyph}
          onClick={onClicks[glyph]}
          buttonBaseClass={buttonBaseClasses[glyph]}
          buttonAddClass={buttonAddClasses[glyph]}
          glyphBaseClass={glyphBaseClasses[glyph]}
          glyphAddClass={glyphAddClasses[glyph]}
        />
      ))}
    </div>
  );
};

GlyphButtonGroup.propTypes = {
  glyphs: PropTypes.array.isRequired,
  onClicks: PropTypes.object.isRequired,
  buttonGroupBaseClass: PropTypes.string,
  buttonGroupAddClass: PropTypes.string,
  buttonBaseClasses: PropTypes.object,
  buttonAddClasses: PropTypes.object,
  glyphBaseClasses: PropTypes.object,
  glyphAddClasses: PropTypes.object,
};

GlyphButtonGroup.defaultProps = {
  buttonGroupBaseClass: 'btn-group',
  buttonBaseClasses: {},
  buttonAddClasses: {},
  glyphBaseClasses: {},
  glyphAddClasses: {},
};

export default GlyphButtonGroup;
