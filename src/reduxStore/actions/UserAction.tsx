import { Action } from 'redux';
import actionTypes from '../types';

interface StoreUserListAction extends Action {
  type: string;
  payload: any;
}

interface FetchMoreUserAction extends Action {
  type: string;
}

export type UserActionTypes = StoreUserListAction | FetchMoreUserAction;

export const storeUserListAction = (data: any) => ({
  type: actionTypes.STORE_USERLIST,
  payload: data,
});

export const fetchMoreUserAction = () => ({
  type: actionTypes.FETCH_MORE_USER,
});
