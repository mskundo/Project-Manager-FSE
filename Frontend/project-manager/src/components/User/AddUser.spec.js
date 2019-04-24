import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddUser from './AddUser';
import axios from 'axios';

jest.mock('axios');

describe('AddUser', () => {
  let wrapper;
  beforeEach(() => wrapper = shallow(<AddUser />));

  it('should render a <input /> in add user', () => {
    expect(wrapper.find('input').length).toEqual(3);
  });

  it('should render a <div /> in add user', () => {
    expect(wrapper.find('div').length).toEqual(23);
  });

  // it('a post request should be made', () => {
  //   const postSpy = jest.spyOn(axios, 'post');
  //   const newTask = 'new task name';
  //   const taskInput = wrapper.find('input');
  //   taskInput.simulate('change', { target: { value: newTask } });
  //   const button = wrapper.find('submit');
  //   button.simulate('click');

  //   expect(postSpy).toBeCalled();

  // });

  it('should call onChange prop', () => {
  const onSearchMock = jest.fn();
  const event = {
    preventDefault() {},
    target: { value: 'the-value' }
  };
  const component = shallow(<input onChange={onSearchMock} />);
  component.find('input').simulate('change', event);
  expect(onSearchMock).toBeCalledWith('the-value');
});

});