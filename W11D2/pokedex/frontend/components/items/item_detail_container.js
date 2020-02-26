import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => {
  return {
    item: state.entities.items[ownProps.match.params.itemId]
  };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//   };
// };

export default withRouter(connect(
  mapStateToProps
)(ItemDetail));