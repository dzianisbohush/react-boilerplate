import { connect } from 'react-redux';
import CounterPage from '../components';
import {
  increaseCounter,
  decreaseCounter
} from '../../../store/actions/counter';

const mapStateToProps = state => ({
  counterValue: state.counter.value
});

const mapDispatchToProps = dispatch => ({
  increaseCounter: () => dispatch(increaseCounter()),
  decreaseCounter: () => dispatch(decreaseCounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterPage);
