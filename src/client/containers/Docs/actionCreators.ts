import * as types from './constants';
import {
  LoadInitiationAction,
  LoadSuccessAction,
  LoadFailureAction,
  LoadCancelAction,
  ClearErrorAction,
} from './actions';

export const loadInitiation = (): LoadInitiationAction => ({
  type: types.LOAD_INITIATION,
});

export const loadSuccess = (data: string): LoadSuccessAction => ({
  type: types.LOAD_SUCCESS,
  payload: data,
});

export const loadFailure = (error: string): LoadFailureAction => ({
  type: types.LOAD_FAILURE,
  payload: error,
});

export const loadCancel = (): LoadCancelAction => ({
  type: types.LOAD_CANCEL,
});

export const clearError = (): ClearErrorAction => ({
  type: types.CLEAR_ERROR,
});

export const actionCreators = {
  loadInitiation,
  loadSuccess,
  loadFailure,
  loadCancel,
  clearError,
};

export default actionCreators;
