import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchBenches } from '../../actions/bench_actions.js';
import { allBenches } from '../../reducers/selectors.js';
import BenchIndex from './bench_index.jsx';

const mapStateToProps = (state) => ({
  benches: allBenches(state.entities.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BenchIndex));