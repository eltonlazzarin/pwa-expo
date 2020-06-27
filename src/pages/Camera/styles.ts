import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  permission: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cameraView: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },

  button: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },

  flip: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
});

export default styles;
