import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Search from './search.jsx';
import { fetchBenches } from '../../actions/bench_actions.js';
import { updateBounds } from '../../actions/filter_actions.js';
import { allBenches } from '../../reducers/selectors.js';

const mapStateToProps = (state) => ({
  benches: allBenches(state.entities.benches)
});

const mapDispatchToProps = dispatch => ({
  fetchBenches: (bounds) => dispatch(fetchBenches(bounds)),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));