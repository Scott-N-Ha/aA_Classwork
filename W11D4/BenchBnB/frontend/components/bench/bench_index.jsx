import React from 'react';

export default class BenchIndex extends React.Component {
  componentDidMount(){
    this.props.fetchBenches();
  }

  render(){
    if (this.props.benches === undefined) return null;

    const benches = this.props.benches.map(bench => {

      return (
        <li key={bench.id}>
          {bench.description} <br/>
          {bench.lat} <br/>
          {bench.lng}
        </li>
      );
    });

    return (
      <div className="bench-index">
        <ul>
        {benches}
        </ul>
      </div>
    );
  }
}