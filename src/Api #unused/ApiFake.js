import customData from '../FakeUsers/usersJSON.json'

var dataBase = []
var LogedAccount = null

const SERVER_URL = 'http://192.168.0.12:3000'
const SERVER_URL2 = 'http://177.65.202.66:3000'

for (var i = 0; i < customData.users.length; i++)
{
    let PreDefineduserData = {
        id: customData.users[i].id,
        name: customData.users[i].name,
        email: customData.users[i].email,
        password: customData.users[i].password,
        avatar: customData.users[i].avatar
    }
    dataBase.push(PreDefineduserData)
}

//console.log(dataBase)

const isReachable = async () =>
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
      alert('Nao foi possivel se conectar ao server')
      return false
    }
}
const getDataBase = async () =>
{
    if(isReachable())
    {
      try {
       
      } catch (error) {
        
      } finally {
       
      }    
    }
}

export default {
     
    checkToken: async () => {

        return LogedAccount
    },

    signIn: async (email,password) => {

        for(var i = 0; i < dataBase.length; i++)
        {
            if(dataBase[i].email == email && dataBase[i].password == password)
            {
                //console.log(dataBase[i].id)
                LogedAccount = dataBase[i]
                return dataBase[i]
            }
        }
        return 0
    },

    signUp: async (name,email,password) => {
        let userData = 
            {
                id: dataBase.length + 1,
                name: name,
                email: email,
                password: password,
                avatar : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
            }
        dataBase.push(userData)

        return userData
    },

    LogOff: async () => {
        LogedAccount = null
    },
}