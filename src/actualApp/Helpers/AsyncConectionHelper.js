import {Image} from 'react-native'
import {saveDeviceData} from "../Helpers/AsyncStorageHelper";
import {
    coin,
 } from '../Components/Carousel2.0/CoinVariables'
 import {
    GetCoinB,
    GetPhotoB,
   
} from '../screens/Main/AnimationMain'

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

const checkstep = async (imageNewname,setisLoading,setuploadstatus,filepath,imageuri,setimgdone) =>
{  
    async function pyresq()
    {
        setisLoading(true)
        setuploadstatus('Analisando')
        const pyrequest = await fetch(`${SERVER_URL}/pytest`)
        let Sjson = await pyrequest.json()

        console.log('json', Sjson)

        let date = new Date();

        let day = date.getDay()
        let month = date.getMonth()
        let year = date.getFullYear()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
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
            filepath:filepath,
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

export const handleUploadPhoto = async (setuploadstatus,setisLoading,createFormData,photo,filepath,imageuri,setimgdone) =>
    {
        if(!coin)
        {
            alert('Selecione uma moeda!')
            GetCoinB().slideInLeft(1000)
            GetPhotoB().slideInRight(1000)
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
            
            checkstep(imageNewname,setisLoading,setuploadstatus,filepath,imageuri,setimgdone)

           // setisLoading(false)

            //console.log('response', json)    
        }
    }