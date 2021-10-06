import React from 'react';
import { View, Image, Button, Platform } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const SERVER_URL = 'http://192.168.0.10:3000';

const createFormData = (photo, body = {}) => {
  const data = new FormData();

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
  });

  Object.keys(body).forEach((key) => {
    data.append(key, body[key]);
  });

  return data;
};

const App = () => {
  const [photo, setPhoto] = React.useState(null);

  const handleChoosePhoto = () => {
    launchCamera({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response.assets[0]);
      }
    });
  };

  const handleUploadPhoto = () => {
    fetch(`${SERVER_URL}/api/upload`, {
      method: 'POST',
      body: createFormData(photo, { userId: '123' }),
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('response', response);
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Enviar para o server" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Tirar Foto" onPress={handleChoosePhoto} />
    </View>
  );
};

export default App;