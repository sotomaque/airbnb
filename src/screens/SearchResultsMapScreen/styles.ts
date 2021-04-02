import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 210,
  },
  carouselContainer: {
    position: 'absolute',
    bottom: 30,
  },
});

export default styles;
