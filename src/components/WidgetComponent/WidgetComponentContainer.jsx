import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WidgetComponent from './WidgetComponent';
import {
  setSelectedItemsAction, saveWidgetAction,
} from '../../redux/actions/widget';

const mapStateToProps = (state) => ({
  selectedItems: state.selectedItems.selected,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  setSelectedItemsAction,
  saveWidgetAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WidgetComponent);
