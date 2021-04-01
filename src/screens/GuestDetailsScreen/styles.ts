import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  guestRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginVertical: 10,
  },
  guestTypeLabel: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  guestTypeDescription: {
    color: '#8d8d8d',
    fontSize: 18,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: '#d4d4d4',
    borderRadius: 15,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 20,
  },
  guestCount: {
    marginHorizontal: 15,
    fontSize: 18,
  },
  searchButton: {
    marginBottom: 30,
    backgroundColor: '#ff5a60',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  searchLabel: { fontSize: 20, fontWeight: 'bold', color: 'white' },
});

export default styles;
