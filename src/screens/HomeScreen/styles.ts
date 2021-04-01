import { Dimensions, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  searchBar: {
    position: 'absolute',
    top: 60,
    zIndex: 3,
    width: Dimensions.get('window').width - 40,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  searchLabel: {
    marginLeft: 20,
    fontSize: 16,
  },
  backgroundImage: {
    height: 500,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 66,
    fontWeight: 'bold',
    color: 'white',
    width: '50%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
