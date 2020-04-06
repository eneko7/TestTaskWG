import { createAction } from 'redux-actions';
import { actionTypes } from './index';

export const setSelectedItems = createAction(actionTypes.SET_SELECTED_ELEMENTS);
export const setSelectedItemsAction = items => (dispatch) => {
  dispatch(setSelectedItems(items));
};

export const setSavedItems = createAction(actionTypes.SET_SAVED_ELEMENTS);
export const setSavedItemsAction = items => (dispatch) => {
  dispatch(setSavedItems(items));
};

export const setPreviousSavedItems = createAction(actionTypes.SET_PREVIOUS_SAVED_ELEMENTS);
export const setPreviousSavedItemsAction = items => (dispatch) => {
  dispatch(setPreviousSavedItems(items));
};

export const resetWidget = createAction(actionTypes.RESET_WIDGET_VALUE);
export const resetWidgetAction = () => (dispatch, getState) => {
  const store = getState();
  const { savedItems: { saved } } = store;
  console.log(saved);
  // setSelectedItemsAction(saved);
  // setSavedItemsAction(saved);
  // setPreviousSavedItemsAction(saved);
};

export const saveWidget = createAction(actionTypes.SAVE_WIDGET_VALUE);
export const saveWidgetAction = () => (dispatch, getState) => {
  const store = getState();
  const {
    selectedItems: { selected }, savedItems: { saved },
  } = store;
  dispatch(setSelectedItemsAction(selected));
  dispatch(setSavedItemsAction(selected));
  dispatch(setPreviousSavedItemsAction(saved));
};
