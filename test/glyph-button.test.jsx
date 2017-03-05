import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import GlyphButton from '../src/glyph-button';

describe('Testing <GlyphButton/>', function () {
  it(`<GlyphButton/> can be instantiated with no props`, function () {
    shallow(
      <GlyphButton/>
    );
  });

  it(`<GlyphButton/> can be instantiated with props`, function () {
    shallow(
      <GlyphButton
        glyph="pencil"
        onClick={() => {
          console.log('Hello!');
        }}
      />
    );
  });

  it(`<GlyphButton/> contains a button and a glyph`, function () {
    const wrapper = shallow(
      <GlyphButton
        glyph="pencil"
        onClick={() => {
          console.log('Hello!');
        }}
      />
    );

    const button = wrapper.find('button');
    const i = wrapper.find('i');

    expect(button).to.have.length(1);
    expect(i).to.have.length(1);

    expect(button).to.have.className('btn');
    expect(button).to.have.className('btn-secondary');

    expect(i).to.have.className('fa');
    expect(i).to.have.className('fa-pencil');
  });

  it(`<GlyphButton/> can receive more class names`, function () {
    const wrapper = shallow(
      <GlyphButton
        glyph="pencil"
        onClick={() => {
          console.log('Hello!');
        }}
        buttonAddClass="btn-added"
        glyphAddClass="glyph-added"
      />
    );

    const button = wrapper.find('button');
    const i = wrapper.find('i');

    expect(button).to.have.length(1);
    expect(i).to.have.length(1);

    expect(button).to.have.className('btn');
    expect(button).to.have.className('btn-secondary');
    expect(button).to.have.className('btn-added');

    expect(i).to.have.className('fa');
    expect(i).to.have.className('fa-pencil');
    expect(i).to.have.className('glyph-added');
  });

  it(`<GlyphButton/>'s default class names can be overridden`, function () {
    const wrapper = shallow(
      <GlyphButton
        glyph="pencil"
        onClick={() => {
          console.log('Hello!');
        }}
        buttonBaseClass="btn-replaced"
        glyphBaseClass="glyph-replaced"
        buttonAddClass="btn-added"
        glyphAddClass="glyph-added"
      />
    );

    const button = wrapper.find('button');
    const i = wrapper.find('i');

    expect(button).to.have.length(1);
    expect(i).to.have.length(1);

    expect(button).not.to.have.className('btn');
    expect(button).not.to.have.className('btn-secondary');
    expect(button).to.have.className('btn-replaced');
    expect(button).to.have.className('btn-added');

    expect(i).not.to.have.className('fa');
    expect(i).not.to.have.className('fa-pencil');
    expect(i).to.have.className('glyph-replaced-pencil');
    expect(i).to.have.className('glyph-added');
  });

  it(`<GlyphButton/> can be clicked`, function () {
    let nClicks = 0;
    const wrapper = shallow(
      <GlyphButton
        glyph="pencil"
        onClick={() => {
          nClicks++;
        }}
      />
    );

    expect(nClicks).to.equal(0);
    wrapper.simulate('click');
    expect(nClicks).to.equal(1);
    wrapper.simulate('click');
    expect(nClicks).to.equal(2);
  });

  it(`<GlyphButton/> with no onClick prop does nothing`, function () {
    const wrapper = shallow(
      <GlyphButton
        glyph="pencil"
      />
    );

    expect(wrapper.simulate.bind(wrapper, 'click')).not.to.throw();
  });
});
