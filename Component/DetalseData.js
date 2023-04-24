import { ScrollView, StyleSheet, Text, View, ImageBackground } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';

const DetalseData = ({route}) => {

  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFont() {
      await Font.loadAsync({
        'kalpurush': require('../assets/font/kalpurush.ttf')
      });
      setFontLoaded(true);
    }
    loadFont();
  }, []);

  return (
    <ImageBackground 
    source={require('../assets/background_image_desc.png')}
    style={styles.app_bg}
    >
    {
      fontLoaded &&
      <ScrollView>
      
          {
           route.params.writer?<Text style={[styles.chapterWriterName, { fontFamily: 'kalpurush'}]}>{route.params.writer}</Text>:null
          }
        
       
        {
          route.params.desciption.map(desciptions=>{
            const {title,desc} = desciptions;
            return (
              <View key={title}>
                {
                  title?<Text style={[styles.chapterInsidTitleText, { fontFamily: 'kalpurush'}]}>{title}</Text>:null
                }
                <Text style={[styles.chapterInsidText, { fontFamily: 'kalpurush' }]}>{desc}</Text>
              </View> 
            )
          })
        }
      </ScrollView>
    }

    </ImageBackground>
  )
}

export default DetalseData

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  chapterWriterName:{
    fontSize: 25,
    textAlign: 'center',
    marginTop: 25,
    paddingHorizontal: 10,
    marginBottom: -7

  },
  chapterInsidTitleText:{
    fontSize: 23,
    marginTop: 20,
    marginBottom: -14,
    paddingHorizontal: 10,
    fontWeight: 'bold'
  },
  chapterInsidText:{
    fontSize: 22,
    marginTop: 27,
    // lineHeight: 30,
    paddingHorizontal: 10,
    fontFamily: "solimanLifi"
  }
})