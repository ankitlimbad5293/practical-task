import { Dimensions } from 'react-native';
import fonts from '../assets/fonts';
import { scale, verticalScale } from '../helpers';

const { width, height } = Dimensions.get('window');

const screenHeight = width < height ? height : width;
const screenWidth = width < height ? width : height;

interface FontStyles {
  fontSize: number;
  fontFamily: string;
}

interface MatricsType {
  width: number;
  height: number;
  screenHeight: number;
  screenWidth: number;
  ScaleValue: (val: number) => number;
  VerticalScalValue: (val: number) => number;
  semiBoldSixteen: FontStyles;
}

// use Matrics file for dimensions scalling
// it will be adjust sizes according to devices automatically
const Matrics: MatricsType = {
  width,
  height,
  screenHeight,
  screenWidth,
  ScaleValue: (val: number) => scale(val),
  VerticalScalValue: (val: number) => verticalScale(val),

  semiBoldSixteen: {
    fontSize: scale(16),
    fontFamily: fonts.type.InterSemiBold,
  },
};

export default Matrics;
