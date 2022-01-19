import { PermissionsAndroid } from "react-native"
import { launchCamera ,launchImageLibrary} from "react-native-image-picker"

const handleChoosePhoto = ({setphoto}) =>
    {
        launchImageLibrary({ noData: true }, (response) => {
            // console.log(response);
            if (!response.didCancel) {
            console.log(response.assets[0].height)
            console.log(response.assets[0].width)
            setphoto(response.assets[0])
            }
        })
    }

const handleTakePhoto = (setphoto,setshowReset) =>
{
    launchCamera({ 
        noData: true,
    }, (response) => {
        console.log(response)
        if (!response.didCancel) {

            //console.log(response.assets[0].height)
            //console.log(response.assets[0].width)
            //console.log(response.assets[0].fileName)

            //onsole.log(imageuri)
         
            setphoto(response.assets[0])
            setshowReset(true)
        }
    })
}

export const requestCameraPermission = async (setphoto,setshowReset) => 
{
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
        handleTakePhoto(setphoto,setshowReset)

        } else {
        console.log("Camera permission denied");
        }
    } catch (err) {
        console.warn(err);
    }
}
