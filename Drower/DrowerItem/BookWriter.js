import { StyleSheet, Text, View, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import appData from '../../Component/db/book_Data';
 
const BookWriter = () => {
  const navigation = useNavigation()
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'kalpurush': require('../../assets/font/kalpurush.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);
  return (
    <ImageBackground 
    source={require('../../assets/background_image_desc.png')}
    style={styles.app_bg}
    >
      {
        fontLoaded &&
        <ScrollView style={styles.book_Writer}>
          {//
          appData.filter((book) => book.id !== 1 && book.id !== 19)
            .map((book) =>{
              
              const{title,writer,desciption,selector,id}=book
              return <View key={id} style={styles.chapterNames}>
                  <TouchableOpacity
                    onPress={()=>navigation.navigate("DetalseData",{
                      desciption, selector, writer, title
                    })}
                  >
                    <Text style={[styles.book_Writer_name, { fontFamily: 'kalpurush' }]}>➥ {title}</Text>
                  </TouchableOpacity>
                  {
                    writer &&
                    <Text style={[styles.book_Writer_Desc, { fontFamily: 'kalpurush' }]}> {writer}</Text>
                  }
              </View>
            })
          }
        </ScrollView>
      }
    </ImageBackground>
  )
}

export default BookWriter

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  book_Writer_name:{
    fontSize: 20,
    marginTop: 15,
    marginHorizontal: 10,
    fontWeight: "bold",
    marginBottom: 8
  },
  book_Writer_Desc:{
    fontSize: 20,
    lineHeight: 30,
    marginHorizontal: 10,
    marginBottom: 10,
    opacity: .9
  }

})//https://www.facebook.com/%E0%A6%95%E0%A6%B7%E0%A7%8D%E0%A6%9F%E0%A7%87%E0%A6%B0-%E0%A6%95%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A6%AD%E0%A6%BE%E0%A6%B8-2173761502940932/