import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import WidgetComponent from './WidgetComponent';
import {
  setSelectedItemsAction, resetWidgetAction, saveWidgetAction,
} from '../../redux/actions/widget';

const mapStateToProps = state => ({
  selectedItems: state.selectedItems.selected,
  savedItems: state.savedItems.saved,
  previousSavedItems: state.previousSaveItems.previousSaved,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setSelectedItemsAction,
  resetWidgetAction,
  saveWidgetAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WidgetComponent);
