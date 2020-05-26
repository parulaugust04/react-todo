import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TodoItem} from './TodoItem';

configure({adapter: new Adapter()});

describe('<TodoItem />', () =>{
    it('check to do item text', ()=>{
        const toggleTodo = jest.fn();
        const todo = {text:'list item', complete: true};
        const wrapper = mount(<TodoItem todo={todo} toggleTodo={toggleTodo}/>);
        expect(wrapper.find('.list-item').text()).toBe('list item');
    });
    it('check to do item is clicked', ()=>{
        
        const todo = {text:'list item', complete: true};
        const toggleTodo = jest.fn();
        const wrapper = mount(<TodoItem todo={todo} toggleTodo={toggleTodo}/>);
        wrapper.find('.list-item').simulate('click');
        expect(toggleTodo).toBeCalledWith(todo);
    });
});