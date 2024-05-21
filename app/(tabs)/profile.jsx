import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchInput from '../../components/SearchInput'
import { StatusBar } from 'expo-status-bar'
import EmptyState from '../../components/EmptyState'
import useAppwrite from '../../lib/useAppwrite'
import { getUserPosts, searchPosts } from '../../lib/appwrite'
import VideoCard from '../../components/VideoCard'
import { useLocalSearchParams } from 'expo-router'
import {useGlobalContext} from '../../context/GlobalProvider'


const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: posts } = useAppwrite(() => getUserPosts(query));
  
useEffect(() => {
  refetch()
}, [query])


  return (
    <SafeAreaView className="bg-primary border-2 border-red-500 h-full">
      <FlatList

        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) =>(
          <VideoCard video ={item} />
        )}

        ListHeaderComponent={() =>(
          <View className="my-6 px-4">

           

              

                <Text className="font-pmedium text-sm text-gray-100">

                  Search Results


                </Text>

                <Text className="text-2xl font-psemibold text-white">
                {query}
                </Text>

                <View className="mt-6 mb-8">

                <SearchInput initialQuery={query}/>


                </View>

                
              </View>

            
              
              
            

           


         
        )}

        ListEmptyComponent={() => (
          <EmptyState 
          title="No Videos Found"
          subtitle="No videos found for this search query"
          
          />
  )}

 
        />

<StatusBar  backgroundColor='#161622' style='light'/>

</SafeAreaView>




  )
}

export default Profile

const styles = StyleSheet.create({})