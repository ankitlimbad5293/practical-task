import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { APIHelper, Helper } from '#/utils';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMoreUserAction,
  storeUserListAction,
} from '#/reduxStore/actions/UserAction';
import { paginationData, userListData } from '#/reduxStore/selectors';
import styles from './style';
import UserImage from './UserImage';

type User = {
  node: {
    image: string[];
    name: string;
  };
};

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  const { userList }: { userList: User[] } = useSelector(paginationData);
  const mainUserList: User[] = useSelector(userListData);
  const [showLoader, setLoader] = useState(false);

  const fetchUserList = async () => {
    const resData = await APIHelper.getUserListApi(); // Fetch user listing data
    if (Helper.responseSuccess(resData)) {
      const userListData = get(resData, 'data.data.imagePostsConnection.edges');
      dispatch(storeUserListAction(userListData));
    }
  };

  // To load more data (apply pagination)
  const handleFetchMoreUser = () => {
    if (showLoader) {
      return;
    } else {
      if (userList.length !== mainUserList.length) {
        setLoader(true); // show loader while add rest of data to list of array
        setTimeout(() => {
          dispatch(fetchMoreUserAction()); // dispatch and action for add paginated data
          setLoader(false);
        }, 2000);
      }
    }
  };

  // render user item
  const renderUserItem = ({ item }: { item: any }) => {
    return (
      <View style={styles.cardViewStyle}>
        <Text style={styles.userNameTextStyle}>{item?.node?.name}</Text>
        <UserImage images={item?.node?.image} />
      </View>
    );
  };

  // render footer view to show loader
  const renderListFooter = () => {
    if (showLoader) {
      return (
        <ActivityIndicator
          size="large"
          color="#000"
          style={styles.loaderStyle}
        />
      );
    }
    return null;
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <View style={styles.mainContainer}>
      {userList?.length ? (
        <FlatList
          data={userList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderUserItem}
          onEndReachedThreshold={0.01}
          onEndReached={handleFetchMoreUser}
          ListFooterComponent={renderListFooter}
        />
      ) : null}
    </View>
  );
};

export default UserList;
