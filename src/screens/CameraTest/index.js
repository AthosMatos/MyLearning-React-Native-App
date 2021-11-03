import React,{useState} from 'react'
import { View, Image, Button, Platform,PermissionsAndroid,Text,ActivityIndicator } from 'react-native'
import { launchCamera,launchImageLibrary } from 'react-native-image-picker'

const SERVER_URL = 'http://192.168.0.10:3000'
//const SERVER_URL = 'http://177.65.202.66:3000'

export default () => {
  const [photo, setPhoto] = useState(null)
  const [uploadstatus, setUploadstatus] = useState('IDLE')
  const [isLoading, setLoading] = useState(false);
  const [step,setstep] = useState(null)

  const createFormData = (photo, body = {}) => {
    const data = new FormData()
  
    data.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    })
  
    Object.keys(body).forEach((key) => {
      data.append(key, body[key])
    })
  
    return data
  }

  const handleTakePhoto = () => {
    launchCamera({ noData: true }, (response) => {
      // console.log(response);
      if (!response.didCancel) {
        console.log(response.assets[0].height)
        console.log(response.assets[0].width)
        setPhoto(response.assets[0])
      }
    })
  }
  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (!response.didCancel) {
        console.log(response.assets[0].height)
        console.log(response.assets[0].width)
        setPhoto(response.assets[0])
      }
    })
  }

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Permissao pra Camera",
          message:"App nescessita acessar sua camera",
          buttonNeutral: "Pergunte-me depois",
          buttonNegative: "Cancelar",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera permission given");
        handleTakePhoto()
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  }

  const isReachable = async () =>{
    const timeout = new Promise((resolve, reject) => {
        setTimeout(reject, 5000, 'Request timed out');
    });
    const request = fetch(SERVER_URL);
    try {
        const response = await Promise
            .race([timeout, request]);
        return true
    }
    catch (error) {
      setLoading(false)
      setUploadstatus('ENVIO CANCELADO')
      alert('Nao foi possivel se conectar ao server')
      return false
      
    }
}

const checkstep = async () =>{

  index = 0
  prevstep = 0

  fetch(`${SERVER_URL}/pytest`)

  while(index!=10)
  {
      const request = await fetch(`${SERVER_URL}/getstep`)
      const json = await request.json()
      
      if(json.step!=prevstep)
      {
        //console.log('response', json.step)
        index++
        prevstep=json.step
        setstep(prevstep)
      }
  }
  setstep("Processado!!!")
}

const handleUploadPhoto = async() => {
    setUploadstatus('ENVIANDO...')
    setLoading(true)
    if(isReachable())
    {
      try {
        const response = await fetch(`${SERVER_URL}/api/upload`, {
          method: 'POST',
          body: createFormData(photo, { userId: 'RandomUser' }),
          headers:{
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data'
          }
        })
        const json = await response.json()
        setUploadstatus('Imagem Enviada!')

        checkstep()

        //console.log('response', json)
      } catch (error) {
        setUploadstatus('Imagem NAO Enviada!')
        console.error(error)
      } finally {
        setLoading(false)
      }    
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {isLoading && <ActivityIndicator color={'#000'} /> }

      {step && <Text>{"Processando passo: " + step}</Text>}
      <Text>{uploadstatus}</Text>
      {photo && (
        <>
          <Image
            source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 }}
          />
          <Button title="Enviar para o server" onPress={handleUploadPhoto} />
        </>
      )}
      <Button title="Tirar Foto" onPress = {requestCameraPermission} />
      <Button title="Escolher da galeria" onPress = {handleChoosePhoto} />
    </View>
  )
}
