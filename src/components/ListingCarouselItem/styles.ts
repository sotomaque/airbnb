import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  contentContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  descriptionLabel: {
    fontSize: 15,
  },
  detailsLabel: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  pricesLabel: {
    fontSize: 16,
    marginVertical: 10,
  },
  newPriceLabel: {
    fontWeight: 'bold',
  },
});

export default styles;
