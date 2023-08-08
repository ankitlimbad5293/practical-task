import { StyleSheet } from 'react-native';
import Matrics from '#/styles/Matrics';

const styles = StyleSheet.create({
  mainContainer: { flex: 1, paddingHorizontal: 15 },
  cardViewStyle: {
    width: '98%',
    marginVertical: Matrics.ScaleValue(10),
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 0.5,
      width: 0,
    },
    borderRadius: Matrics.ScaleValue(5),
    paddingHorizontal: Matrics.ScaleValue(12),
    paddingVertical: Matrics.ScaleValue(12),
    alignSelf: 'center',
    backgroundColor: '#fff',
  },
  userNameTextStyle: {
    ...Matrics.semiBoldSixteen,
    color: '#000000',
  },
  oddImageStyle: {
    width: '98%',
    height: Matrics.ScaleValue(150),
    marginHorizontal: '1%',
  },
  evenImageStyle: {
    width: '48%',
    height: Matrics.ScaleValue(150),
    marginHorizontal: '1%',
    marginTop: '2%',
  },
  loaderStyle: {
    marginVertical: Matrics.ScaleValue(20),
  },
});

export default styles;
