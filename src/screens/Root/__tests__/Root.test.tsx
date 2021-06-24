import React from 'react';
import renderer from 'react-test-renderer';
import { Root } from '../Root';

describe('<Root />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Root />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
