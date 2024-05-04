import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import { StatusBar } from 'expo-status-bar'
import EmptyState from '../../components/EmptyState'

const Home = () => {
  return (
    <SafeAreaView className="bg-primary border-2 border-red-500 h-full">
      <FlatList

        data={[]}
        keyExtractor={(item) => item.$id}
        renderItem={({item}) =>(
          <Text className="text-3xl text-white">{item.id}</Text>
        )}

        ListHeaderComponent={() =>(
          <View className="my-6 px-4 space-y-4">

            <View className="justify-between items-start flex-row mb-6">

              <View>

                <Text className="font-pmedium text-sm text-gray-100">

                  Welcome Back


                </Text>

                <Text className="text-2xl font-psemibold text-white">
                  Prithiraj
                </Text>
              </View>

              <View className="mt-1.5">

                <Image 
                source ={images.logoSmall}
                className="w-9 h-10"
                resizeMode='contain'
                  
                  
                  
                  
                  />


              </View>
              
              
            </View> 

            <SearchInput />

            <View className="w-full flex-1 pt-5 pb-8">

              <Text className="text-gray-100 text-lg font-pregular mb-3">
                Latest Videos
                
              </Text> 

              <Trending 
              posts = {[] ?? []}
              
              
              />

            </View>

          </View>
        )}

        ListEmptyComponent={() => (
          <EmptyState 
          title="No Videos Found"
          subtitle="Be the first one to create a video"
          
          />
  )}
        />

<StatusBar  backgroundColor='#161622' style='light'/>

</SafeAreaView>




  )
}

export default Home

const styles = StyleSheet.create({})