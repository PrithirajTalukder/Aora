import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import * as Animatable from 'react-native-animatable';

const zoomIn ={
  0:{
    scale: 0.9
  },
  1:{
    scale: 1,
  }
}


const zoomOut ={
  0:{
    scale: 1
  },
  1:{
    scale: 0.9,
  }
}

const TrendingItem = ({actuveItem, item}) =>{
  const [play, setPlay] = useState(play);
  return (
    <Animatable.View
    className="mr-5"
    animation={activeItem === item.$id ? zoomIn : zoomOut}
    duration={500}>

      {play ? (
        <Text className="text-white">Playing</Text>
      ): (
        <TouchableOpacity className="relative justify-center items-center"
        activeOpacity={0.7}
        onPress={() =>setPlay(true)}>
          <ImageBackground 
          source={{ uri:item.background}}
          className="w-52 h-72 rounded-[35px] my-5 overflow-hidden shadow-lg shadow-black/40"
          resizeMode=''/>

        </TouchableOpacity>
      )
      }

    </Animatable.View>
  )
}

const Trending = ({posts}) => {
  const [actuveItem, setActuveItem] = useState(posts[0]);
  return (
    <FlatList
    data={posts}
    keyExtractor={(item) => item.$id}
    renderItem={({ item }) =>(
        <TrendingItem
        activeItem={activeItem} item={item} 
        />
        
    )}

    horizontal
    
    
    />
  )
}

export default Trending