import React from 'react';

export default class Tab extends React.Component {
  constructor ({title, content}) {
    super();
    this.state = {
      title: title,
      content: content,
      selected: 0
    }
  }

  setSelected(num){
    return () => this.setState({ selected: num })
  }

  render () {
    const headers = this.state.title.map((t, idx)=> {
    return <li onClick={this.setSelected(idx)}>{t}</li>
    })
    const current = this.state.content[this.state.selected]
    return (
      <div className="tab">
        <ul className="tab-header">
          {headers}
        </ul>
        <div className="tab-content">
          {current}
        </div>
      </div>
    );
  }
}