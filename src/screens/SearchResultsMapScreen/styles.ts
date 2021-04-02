import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {},
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default styles;
