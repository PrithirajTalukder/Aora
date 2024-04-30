import { Client } from 'react-native-appwrite';




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
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;