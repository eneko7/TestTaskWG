import { combineReducers } from 'redux';
import * as widget from './widget';

const rootReducer = combineReducers({
  selectedItems: widget.setSelectedElements,
  savedItems: widget.setSavedElements,
  previousSaveItems: widget.setPreviousSavedElements,
});

export default rootReducer;
