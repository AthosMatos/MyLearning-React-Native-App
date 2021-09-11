import FakeUsers from '../FakeUsers/users'

var dataBase = []
var LogedAccount = null

for (var i = 0; i < FakeUsers.length; i++)
{
    let PreDefineduserData = {
        id: FakeUsers[i].id,
        name: FakeUsers[i].name,
        email: FakeUsers[i].email,
        password: FakeUsers[i].password,
        avatar: FakeUsers[i].avatar
    }
    dataBase.push(PreDefineduserData)
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
    }

}