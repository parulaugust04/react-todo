import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {TodoList} from './TodoList'

configure({adapter: new Adapter()});

describe('<TodoList />', () =>{
    it('check to do list', ()=>{
        const toggleTodo = jest.fn();
        const todos = [{text:'list item 1', complete: true}, {text:'list item 2', complete: false}];
        const wrapper = mount(<TodoList todos={todos} toggleTodo={toggleTodo}/>);
        expect(wrapper.find('.list-item')).toHaveLength(2);
    });
    it('check toggle function', ()=>{
        
        const todos = [{text:'list item 1', complete: true}, {text:'list item 2', complete: false}];
        const toggleTodo = jest.fn();
        const wrapper = mount(<TodoList todos={todos} toggleTodo={toggleTodo}/>);
        wrapper.find('.list-item').first().simulate('click');
        expect(toggleTodo).toBeCalledWith(todos[0]);
    });
});