import React from 'react';
import { FlatList, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Matrics from '#/styles/Matrics';
import styles from './style';

interface UserImageProps {
  images: string[];
}

const UserImage: React.FC<UserImageProps> = ({ images }) => {
  const renderUserImage = ({ item: imageUrl }: { item: string }) => (
    <FastImage source={{ uri: imageUrl }} style={styles.evenImageStyle} />
  );

  // show this view when number of items are ODD
  if (images.length % 2 !== 0) {
    const filtedList = images.filter((image, index) => index !== 0);
    return (
      <View
        style={{
          marginTop: Matrics.ScaleValue(12),
        }}
      >
        <FastImage source={{ uri: images[0] }} style={styles.oddImageStyle} />
        <FlatList
          numColumns={2}
          data={filtedList}
          renderItem={renderUserImage}
        />
      </View>
    );
  }

  // default view (for when number of items are EVEN)
  return (
    <View
      style={{
        marginTop: Matrics.ScaleValue(12),
      }}
    >
      <FlatList numColumns={2} data={images} renderItem={renderUserImage} />
    </View>
  );
};

export default UserImage;
