import React,{ Component} from 'react';

export default class TodoItem extends Component{
    rebder(){
        return <div>{this.props.todo.title}</div>
    }
}