import React from 'react';
import {shallow, render, mount} from 'enzyme';
import {expect} from 'chai';
import GlyphButtonGroup from '../src/glyph-button-group';

describe('Testing <GlyphButtonGroup/>', function () {
  it(`<GlyphButtonGroup/> can't be instantiated w/o props glyphs/onClicks`,
  function () {
    expect(shallow.bind(undefined, <GlyphButtonGroup/>)).to.throw(
      'undefined is not an object');
  });

  it(`<GlyphButtonGroup/> can be instantiated with props glyphs/onClicks`,
  function () {
    shallow(
      <GlyphButtonGroup
        glyphs={['pencil']}
        onClicks={{
          pencil: () => {
            console.log('pencil button clicked');
          },
        }}
      />
    );
  });

  it(`<GlyphButtonGroup/> contains buttons and glyphs`, function () {
    const wrapper = render(
      <GlyphButtonGroup
        glyphs={['pencil', 'save']}
        onClicks={{
          pencil: () => {
            console.log('Hello pencil!');
          },
          save: () => {
            console.log('Hello save!');
          },
        }}
      />
    );

    const buttons = wrapper.find('button');
    const is = wrapper.find('i');

    expect(buttons).to.have.length(2);
    expect(is).to.have.length(2);

    expect(wrapper).to.have.className('btn-group');
  });

  it(`<GlyphButtonGroup/> can receive more class names`, function () {
    const wrapper = shallow(
      <GlyphButtonGroup
        glyphs={['pencil', 'save']}
        onClicks={{
          pencil: () => {
            console.log('Hello pencil!');
          },
          save: () => {
            console.log('Hello save!');
          },
        }}
        buttonGroupAddClass="btn-group-added"
        buttonAddClasses={{
          pencil: 'pencil-button-class-added',
          save: 'save-button-class-added',
        }}
        glyphAddClasses={{
          pencil: 'pencil-glyph-class-added',
          save: 'save-glyph-class-added',
        }}
      />
    );

    expect(wrapper).to.have.className('btn-group');
    expect(wrapper).to.have.className('btn-group-added');

    expect(wrapper.html()).to.match(
      /<button class="btn btn-secondary pencil-button-class-added"><i class="fa fa-pencil pencil-glyph-class-added"><\/i><\/button>/
    );
    expect(wrapper.html()).to.match(
      /<button class="btn btn-secondary save-button-class-added"><i class="fa fa-save save-glyph-class-added"><\/i><\/button>/
    );
  });

  it(`<GlyphButtonGroup/>'s default class names can be overridden`,
  function () {
    const wrapper = shallow(
      <GlyphButtonGroup
        glyphs={['pencil', 'save']}
        onClicks={{
          pencil: () => {
            console.log('Hello pencil!');
          },
          save: () => {
            console.log('Hello save!');
          },
        }}
        buttonGroupBaseClass="btn-group-replaced"
        buttonGroupAddClass="btn-group-added"
        buttonBaseClasses={{
          pencil: 'pencil-button-class-replaced',
          save: 'save-button-class-replaced',
        }}
        buttonAddClasses={{
          pencil: 'pencil-button-class-added',
          save: 'save-button-class-added',
        }}
        glyphBaseClasses={{
          pencil: 'pencil-glyph-class-replaced',
          save: 'save-glyph-class-replaced',
        }}
        glyphAddClasses={{
          pencil: 'pencil-glyph-class-added',
          save: 'save-glyph-class-added',
        }}
      />
    );

    expect(wrapper).to.have.className('btn-group-replaced');
    expect(wrapper).to.have.className('btn-group-added');
    expect(wrapper).not.to.have.className('btn-group');

    expect(wrapper.html()).to.match(
      /<button class="pencil-button-class-replaced pencil-button-class-added"><i class="pencil-glyph-class-replaced-pencil pencil-glyph-class-added"><\/i><\/button>/
    );
    expect(wrapper.html()).to.match(
      /<button class="save-button-class-replaced save-button-class-added"><i class="save-glyph-class-replaced-save save-glyph-class-added"><\/i><\/button>/
    );
  });

  it(`<GlyphButtonGroup/>'s buttons can be clicked`, function () {
    let nClicks = 0;
    const wrapper = mount(
      <GlyphButtonGroup
        glyphs={['pencil', 'save']}
        onClicks={{
          pencil: () => {
            nClicks++;
          },
          save: () => {
            nClicks--;
          },
        }}
        buttonAddClasses={{
          pencil: 'btn-pencil',
          save: 'btn-save',
        }}
      />
    );

    const pencilButton = wrapper.find('.btn-pencil');
    const saveButton = wrapper.find('.btn-save');

    expect(nClicks).to.equal(0);
    pencilButton.simulate('click');
    expect(nClicks).to.equal(1);
    pencilButton.simulate('click');
    expect(nClicks).to.equal(2);
    saveButton.simulate('click');
    expect(nClicks).to.equal(1);
    saveButton.simulate('click');
    expect(nClicks).to.equal(0);
  });
});
