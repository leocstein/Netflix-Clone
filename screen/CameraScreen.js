/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = (props) => {
  const [camera, setCamera] = useState();
  const [type, setType] = useState(RNCamera.Constants.Type.front);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          setCamera(ref);
        }}
        style={styles.preview}
        type={type}
        flashMode={flash}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            setFlash(
              flash === RNCamera.Constants.FlashMode.off
                ? RNCamera.Constants.FlashMode.on
                : RNCamera.Constants.FlashMode.off
            );
          }}
        >
          <Text
            style={[
              styles.capture,
              flash === RNCamera.Constants.FlashMode.on
                ? styles.flashActived
                : '',
            ]}
          >
            {' '}
            Flash{' '}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            if (camera) {
              const options = { quality: 0.5, base64: true };
              const photo = await camera.takePictureAsync(options);
              props.navigation.navigate('More', {
                image: photo.uri,
                name: props.route.params.name,
                icon: null,
              });
            }
          }}
          style={styles.capture}
        >
          <Text style={{ fontSize: 14 }}> TAKE </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType(
              type === RNCamera.Constants.Type.back
                ? RNCamera.Constants.Type.front
                : RNCamera.Constants.Type.back
            );
          }}
        >
          <Text style={styles.capture}> Flip </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  flashActived: {
    backgroundColor: 'blue',
  },
});

export default CameraScreen;
