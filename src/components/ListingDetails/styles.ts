import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  detailsLabel: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  descriptionLabel: {
    fontSize: 18,
    lineHeight: 24,
  },
  pricesLabel: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPriceLabel: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPriceLabel: {
    fontWeight: 'bold',
  },
  totalPriceLabel: {
    color: '#5b5b5b',
    textDecorationLine: 'underline',
  },
  longDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 20,
  },
});

export default styles;
