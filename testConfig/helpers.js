import { mount, shallow, configure } from 'enzyme';
import sinon from 'sinon';
import { assert, expect } from 'chai';
import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Adapter from 'enzyme-adapter-react-16';
import perf_hooks from 'perf_hooks';
import mochaSnapshots from 'mocha-snapshots';
import 'styled-components-test-utils/lib/chai';

// ------------------
// React
// ------------------
global.React = React;
global.ReactDOM = ReactDOM;
global.PropTypes = PropTypes;

// ------------------
// Mocha Snapshots
// ------------------
global.mochaSnapshots = mochaSnapshots;
mochaSnapshots.setup({ sanitizeClassNames: false });

// ------------------
// Sinon
// ------------------
global.sinon = sinon;

// ------------------
// Chai
// ------------------
global.expect = expect;
global.assert = assert;

// ------------------
// Enzyme
// ------------------
configure({ adapter: new Adapter() });
global.mount = mount;
global.shallow = shallow;

// Render Styled Component
global.getTreeSC = StyledComponent => renderer.create(StyledComponent).toJSON();

// ------------------
// Styled components
// ------------------
global.renderSC = StyledComponent => renderer.create(StyledComponent).toJSON();

// Performance
global.performance = perf_hooks.performance;

// ------------------
// Helpers
// ------------------
global.createSnapshot = Component => {
    const wrapper = shallow(Component);
    expect(wrapper).to.matchSnapshot();
};
global.shallowRender = Component => {
    return shallow(Component);
};

global.mountRender = Component => {
    return mount(Component);
};

