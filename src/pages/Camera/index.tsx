import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import * as Device from 'expo-device';

import styles from './styles';

const Camera: React.FC = () => {
  const [hasPermission, setHasPermission] = useState<null | boolean>(null);
  const [type, setType] = useState(ExpoCamera.Constants.Type.back);

  useEffect(() => {
    if (!Device.isDevice) {
      (async () => {
        const { status } = await ExpoCamera.requestPermissionsAsync();
        setHasPermission(status === 'granted');
      })();
    }

    if (hasPermission === null) {
      return <View />;
    }

    if (hasPermission === false) {
      return (
        <View style={styles.permission}>
          <Text>No access to camera</Text>
        </View>
      );
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ExpoCamera style={{ flex: 1 }} type={type}>
        <View style={styles.cameraView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === ExpoCamera.Constants.Type.back
                  ? ExpoCamera.Constants.Type.front
                  : ExpoCamera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.flip}>Flip</Text>
          </TouchableOpacity>
        </View>
      </ExpoCamera>
    </View>
  );
};

export default Camera;
