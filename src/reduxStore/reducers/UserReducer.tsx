import { Reducer } from 'redux';
import actionTypes from '../types';

type User = {
  node: {
    image: string[];
    name: string;
  };
};

type Pagination = {
  currentPage: number;
  itemPerPage: number;
  userList: User[];
};

type UserState = {
  userList: User[];
  pagination: Pagination;
};

type UserAction =
  | {
      type: typeof actionTypes.STORE_USERLIST;
      payload: User[];
    }
  | {
      type: typeof actionTypes.FETCH_MORE_USER;
    };

const initState: UserState = {
  userList: [],
  pagination: {
    currentPage: 1,
    itemPerPage: 5,
    userList: [],
  },
};

const UserReducer: Reducer<UserState, UserAction> = (
  state = initState,
  action
) => {
  switch (action.type) {
    case actionTypes.STORE_USERLIST: {
      // store initial data to main user state and show only 5 items for intial render
      const payloadValue = action.payload;

      const filteredList = payloadValue.slice(0, state.pagination.itemPerPage);
      let tempList = { ...state.pagination };

      tempList = {
        ...tempList,
        userList: filteredList,
        currentPage: 1,
      };
      return {
        ...state,
        userList: payloadValue,
        pagination: tempList,
      };
    }
    case actionTypes.FETCH_MORE_USER: {
      let tempPaginationList = { ...state.pagination };
      const itemPerPage = state.pagination.itemPerPage;
      const sortedUserList = [...state.pagination.userList];
      const mainUserList = [...state.userList];
      let currentPage = state.pagination.currentPage + 1;
      const startIndex = (currentPage - 1) * itemPerPage;
      const endIndex = currentPage * itemPerPage;
      const filteredUserList = mainUserList.slice(startIndex, endIndex);

      tempPaginationList = {
        ...tempPaginationList,
        currentPage: state.pagination.currentPage + 1,
        userList: [...sortedUserList, ...filteredUserList],
      };

      return {
        ...state,
        pagination: tempPaginationList,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
