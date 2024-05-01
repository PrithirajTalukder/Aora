import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';
import SignIn from '../app/(auth)/sign-in';




export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.prithiraj.aora',
    projectId: '66313ef64e621188fa53',
    databaseId: '66314a7a39226c457aa3',
    userCollectionId : '66314adb60b583483b7b',
    videoCollectionId: '66314b18f07cb4866c38',
    storageId: '66314d6fa598af602e9c'
}




// Init your react-native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

 export const createUser = async (email, password, username) =>{

    try {

        const newAccount  = await account.create(
            ID.unique(),
            email, 
            password, 
            username

        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),

            {
                accountId: newAccount.$id,
                email, 
                username,
                avatar: avatarUrl


            }

        )

        return newUser;
        
    } catch (error) {

        console.log(error);
        throw new Error(error);
        
    }


}

export async function signIn(email, password) {
    try {

        const session = await account.createEmailSession(email, password)
        return session;
        
    } catch (error) {
        throw new Error(error);
        
    }
}




