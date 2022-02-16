import {Image} from 'react-native'
import {saveDeviceData} from "../Helpers/AsyncStorageHelper";
import {
    coin,
 } from '../Components/Carousel2.0/CoinVariables'
import { ToogleInAll } from '../screens/Main/CustomComponents/GeneralAnimation';

export const SERVER_URL = 'http://104.251.214.172:4000'

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

export const Reachable  = async () =>
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
        
        return false
    }
}

const checkstep = async (imageNewname,setisLoading,setuploadstatus,imageuri,setuploadDone,setphoto,setshowReset,setshowloadingButton,LayoutRef) =>
{  
    async function pyresq()
    {
        setisLoading(true)
        setuploadstatus('Analisando Imagem...')
        const pyrequest = await fetch(`${SERVER_URL}/pytest`)

        let Sjson = await pyrequest.json()
        //console.log('json', Sjson)

        if(Sjson.error==='image does not follow acquisition standards!')
        {
            alert('Não foi detectado Camarões.\nPor favor, tente Novamente') //add more info
            //if(LayoutRef.current){LayoutRef.current.animateNextTransition()}
            setuploadDone(false)
            setisLoading(false)
            setuploadstatus(undefined)
            setphoto(null)
            setshowReset(false)
            ToogleInAll()
            //if(LayoutRef.current){LayoutRef.current.animateNextTransition()}
            setshowloadingButton(false)
            return
        }

        setuploadstatus('Gerando PDF...')
        await fetch(`${SERVER_URL}/generatepdf`)

        let imageW,imageH


        function addZero(i) {
            if (i < 10) {i = "0" + i}
            return i;
          }

        setuploadstatus('Salvando no Dispositivo...')
        await Image.getSize(SERVER_URL + '/getimage/' + imageNewname, (width, height) => 
        {
            imageW = width
            imageH = height
        })

        let date = new Date();

        let day = addZero(date.getDay()-1)
        let month = addZero(date.getMonth()+1)
        let year = date.getFullYear()
        let hours = addZero(date.getHours())
        let minutes = addZero(date.getMinutes())
        let seconds = addZero(date.getSeconds())
        name  = `SIMAGE_${day}_${month}_${year}__${hours}:${minutes}:${seconds}`

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

        //if(LayoutRef.current){LayoutRef.current.animateNextTransition()}
        setuploadDone(true)
        setisLoading(false)
        setshowReset(false)
        setuploadstatus('Pronto! Clique na imagem central')
    }
    await pyresq()
    
}

const createFormData = (photo, body = {}) =>
{
    var data = new FormData()

    data.append('photo', {
        name: "POTIPHOTO_"+ photo.exif.DateTime,
        //name: "POTIPHOTO_"+ "date",
        type: 'image/jpeg',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    })
    
    Object.keys(body).forEach((key) => {
      data.append(key, body[key])
    })

    return data
}

export const handleUploadPhoto = async (setuploadstatus,setisLoading,photo,imageuri,setuploadDone,setphoto,setshowReset,setshowloadingButton,LayoutRef) =>
{
    if(!coin)
    {
        alert('Selecione uma moeda!')
      
        return false
    }

    setuploadstatus('Enviando...')
    setshowloadingButton(true)
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
            },
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
        
        checkstep(imageNewname,setisLoading,setuploadstatus,imageuri,setuploadDone,setphoto,setshowReset,setshowloadingButton,LayoutRef)

        // setisLoading(false)

        //console.log('response', json)    
    }
}