import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({adapter: new Adapter()});

describe('<App />', () =>{
    it('check to do list', ()=>{
      localStorage.setItem('todos', JSON.stringify([
        {text:'hello', completed: true},
        {text:'hi', completed:true}
      ]));
        const wrapper = mount(<App />);
        expect(wrapper.find('.task-status').text()).toBe('Total todos remaining: 2 out of 2');
        expect(wrapper.find('.list-item')).toHaveLength(2);
    });
});