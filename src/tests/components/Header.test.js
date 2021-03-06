import React from 'react';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

let wrapper, startLogout;

beforeEach(() => {
    startLogout=jest.fn();
    wrapper = shallow(<Header startLogout={startLogout}/>);
});

test('should render Header correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});

