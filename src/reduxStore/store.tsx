import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

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

export interface RootState {
  user: UserState;
}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = persistCombineReducers<RootState>(persistConfig, rootReducer);

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
