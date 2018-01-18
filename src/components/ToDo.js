import React, { Component } from 'react';

class ToDo extends Component {
//change the a tag to somthings nice. 
  render() {
     return (
       <li>
         <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
         <a href="javascript:void(O);" onClick = { this.props.handleRemove }>Remove</a>
         <span>{ this.props.description }</span>
       </li>
     );
   }
}

export default ToDo;
