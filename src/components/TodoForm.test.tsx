import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TodoForm} from './TodoForm';

configure({adapter: new Adapter()});

describe('<TodoForm />', () =>{
    it('check adding todo on button click', ()=>{
        const addTodo = jest.fn();
         
        const wrapper = mount(<TodoForm addTodo={addTodo}/>);
        expect(wrapper.find('.todo-text').length).toBe(1);
        expect(wrapper.find('.add-btn').length).toBe(1);
        wrapper.find('.todo-text').simulate('change', {target: {value: 'abc'} });

        wrapper.find('.add-btn').simulate('click');
        expect(addTodo).toBeCalledWith('abc'); 
 
    });
});