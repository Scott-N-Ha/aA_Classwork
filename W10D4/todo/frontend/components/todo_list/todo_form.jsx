import React from 'react';

class TodoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: -1,
      title: "",
      body: "",
      done: false
    };

    this.updateBody = this.updateBody.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDone = this.updateDone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e){
    this.setState({
      title: e.target.value
    });
  }

  updateBody(e){
    this.setState({
      body: e.target.value
    });
  }

  updateDone(e){
    this.setState({
      done: e.target.value ? true : false
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      title: this.state.title,
      body: this.state.body,
      done: this.state.done
    };

    this.props.receiveTodo(newItem);
  }

  render(){
    return (
      <div id="todo-form">
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" onChange={this.updateTitle} value={this.state.title}/>
          </label><br/>
          <label>Body:
            <input type="text" onChange={this.updateBody} value={this.state.body}/>
          </label><br/>
          <label>Done:
            True: <input type="radio" name="todo-done-radio" id="" value="true" onChange={this.updateDone}/>
            False: <input type="radio" name="todo-done-radio" id="" value="false" onChange={this.updateDone}/>
          </label><br/>
          <input type="submit"/>
        </form>
      </div>
    );}
}

export default TodoForm;