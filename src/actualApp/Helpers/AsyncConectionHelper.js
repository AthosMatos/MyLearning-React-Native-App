import {Image} from 'react-native'
import {saveDeviceData} from "../Helpers/AsyncStorageHelper";
import {
    coin,
 } from '../Components/Carousel2.0/CoinVariables'

const SERVER_URL = 'http://104.251.214.172:4000'

var name

export function getname()
{
    return name
}

const isReachable  = async (setuploadstatus,setisLoading) =>
{
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
        setisLoading(false)
        setuploadstatus('ENVIO CANCELADO, server indisponivel')
        alert('Nao foi possivel se conectar ao server')
        return false
    }
}

const checkstep = async (imageNewname,setisLoading,setuploadstatus,imageuri,setimgdone) =>
{  
    async function pyresq()
    {
        setisLoading(true)
        setuploadstatus('Analisando')
        const pyrequest = await fetch(`${SERVER_URL}/pytest`)
        let Sjson = await pyrequest.json()

        console.log('json', Sjson)

        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }

        let date = new Date();

        let day = addZero(date.getDay()+2)
        let month = addZero(date.getMonth()+1)
        let year = date.getFullYear()
        let hours = addZero(date.getHours())
        let minutes = addZero(date.getMinutes())
        let seconds = addZero(date.getSeconds())
        name  = `SIMAGE_${day}_${month}_${year}__${hours}:${minutes}:${seconds}`
        
        let imageW
        let imageH

        await Image.getSize(SERVER_URL + '/getimage/' + imageNewname, (width, height) => 
        {
            imageW = width
            imageH = height
        })

        let shrimpdata = 
        {
            json:Sjson,
            Serverimage:imageNewname,
            NewName:name,
            uri:imageuri,
            imageW:imageW,
            imageH:imageH,
            day:day,
            month:month,
            year:year,
            hours:hours,
            minutes:minutes,
            seconds:seconds
        }
        
        await saveDeviceData(name,shrimpdata)

        setimgdone(true)
        setisLoading(false)
        setuploadstatus('Pronto!!')
        
    }
    await pyresq()
    
}

const createFormData = (photo, body = {}) =>
{
    var data = new FormData()

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

export const handleUploadPhoto = async (setuploadstatus,setisLoading,photo,imageuri,setimgdone) =>
{
    if(!coin)
    {
        alert('Selecione uma moeda!')
      
        return false
    }

    setuploadstatus('ENVIANDO...')
    setisLoading(true)
    
    var imageNewname
    if(await isReachable(setuploadstatus,setisLoading))
    {
        await fetch(`${SERVER_URL}/api/upload`, {
            method: 'post',
            body: createFormData(photo, { userId: 'randomuser', coin: coin }),
            headers:
            {
                'content-type': 'multipart/form-data',
                'Accept':'application/json'
            }
        })
        .then((response) => response.json())
        .then((response) => {
            console.log('response', response);
            imageNewname = response.filename
            console.log('imagename', imageNewname);
        })
        .catch((error) => {
            console.log('error', error);
            setuploadstatus('Imagem NAO Enviada!,erro de server')
            setisLoading(false)
            return
        })
        
        // const json = await response.json()
        setuploadstatus('Imagem Enviada!')
        
        checkstep(imageNewname,setisLoading,setuploadstatus,imageuri,setimgdone)

        // setisLoading(false)

        //console.log('response', json)    
    }
}