import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, Linking, Share,  Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { useNavigation } from '@react-navigation/native'
import * as Font from 'expo-font';
const CustomDrawer = (props) => {
  const navigation = useNavigation()
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

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'প্রবন্ধ সংকলন ১',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };


  const handleUpdatePress = () => {
    Alert.alert(
      'Update message',
      'The app has not been updated yet. Updates will be notified to you. thank you!',
      [
        // {
        //   text: 'Cancel',
        //   style: 'cancel'
        // },
        {
          text: 'ok',
          // onPress: () => console.log('Update Pressed')
        }
      ]
    );
  };

  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#4b787426' }}>

      <View style={styles.drawer_header}>
        <Image style={styles.drawer_image} source={require('../assets/droewerImage.png')}/>
      </View>
      <DrawerItemList {...props}/>
      {
        fontLoaded &&
        <Text style={[styles.touch_hr, { fontFamily: 'kalpurush' }]}>whose the book</Text>
      }
      
      <View style={styles.drawer_element}>
        <TouchableOpacity 
          onPress={()=>navigation.navigate("BookWriter")}
          style={styles.touch_element}
        >
        <Image style={styles.touch_element_icon} source={require('../assets/icon/bookWriter.png')}/>
        <Text style={styles.touch_element_text}>Book Writer</Text>
        </TouchableOpacity>
  
  
        <TouchableOpacity 
          style={styles.touch_element}
          onPress={()=>navigation.navigate("AboutApp")}
        >
        <Image style={styles.touch_element_icon} source={require('../assets/icon/About.png')}/>
        <Text style={styles.touch_element_text}>About us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleUpdatePress}
          style={styles.touch_element}
        >
        <Image style={styles.touch_element_icon} source={require('../assets/icon/update.png')}/>
        <Text style={styles.touch_element_text}>Update</Text>
        </TouchableOpacity>

        {
        fontLoaded &&
         <Text style={[styles.touch_hr, { fontFamily: 'kalpurush' }]}>Communication</Text>
        }

        <TouchableOpacity 
          style={styles.touch_element}
          onPress={() => { 
            Linking.openURL('https://phulkuri.org.bd/') 
          }}
          >
          <Image style={styles.touch_element_icon} source={require('../assets/icon/webside.png')}/>
          <Text style={styles.touch_element_text}>Our website</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.touch_element}
          onPress={() => { 
            Linking.openURL('https://www.youtube.com/c/Phulkuri') 
          }}
          >
          <Image style={styles.touch_element_icon} source={require('../assets/icon/youtub.png')}/>
          <Text style={styles.touch_element_text}>youtube channel</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.touch_element}
          onPress={() => { 
            Linking.openURL('https://www.facebook.com/phulkuri.ashar') 
          }}
        >
          <Image style={styles.touch_element_icon} source={require('../assets/icon/facebook.png')}/>
          <Text style={styles.touch_element_text}>Facebook page</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.touch_element} 
          onPress={() => { 
            Linking.openURL('https://www.linkedin.com/company/phulkuri/') 
          }}
        >
        <Image style={styles.touch_element_icon} source={require('../assets/icon/linkedin.png')}/>
        <Text style={styles.touch_element_text}>Linked in</Text>
        </TouchableOpacity>


        <TouchableOpacity 
          style={styles.touch_element} 
          onPress={() => { 
            Linking.openURL('https://phulkuri.org.bd/%e0%a6%b2%e0%a6%be%e0%a6%87%e0%a6%ac%e0%a7%8d%e0%a6%b0%e0%a7%87%e0%a6%b0%e0%a7%80/') 
          }}
        >
        <Image style={styles.touch_element_icon} source={require('../assets/icon/library.png')}/>
        <Text style={styles.touch_element_text}>Our library</Text>
        </TouchableOpacity>

        {
        fontLoaded &&
         <Text style={[styles.touch_hr, { fontFamily: 'kalpurush' }]}>Our Membership</Text>
        }
        
        
        <TouchableOpacity 
          style={styles.touch_element} 
          onPress={() => { 
            Linking.openURL('https://phulkuri.org.bd/%e0%a6%b8%e0%a6%a6%e0%a6%b8%e0%a7%8d%e0%a6%af-%e0%a6%b9%e0%a6%93/') 
          }}
        >
        <Image style={styles.touch_element_icon} source={require('../assets/icon/member.png')}/>
        <Text style={styles.touch_element_text}>সদস্য হও</Text>
        </TouchableOpacity>

        {
        fontLoaded &&
        <Text style={[styles.touch_hr, { fontFamily: 'kalpurush' }]}>Share The app</Text>
        }
        <TouchableOpacity 
          style={styles.touch_element}
          onPress={onShare}
        >
          <Image style={styles.touch_element_icon} source={require('../assets/icon/share.png')}/>
          <Text style={styles.touch_element_text}>Share</Text>
        </TouchableOpacity>


      </View>
      <View style={{marginVertical: 50}}>

      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  drawer_header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: -60,
    width: "100%",
    height: 220
  },
  drawer_image:{
    width: "100%",
    height: "100%",
    
  },
  drawer_element:{
    width: "100%",
    marginHorizontal: 15,
  },
  touch_hr:{
    marginHorizontal: 15,
    opacity: .6,
    marginTop: 15,
    marginBottom: 6,
    fontSize: 17
  },
  touch_element:{
    display: 'flex',
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    backgroundColor: "#396863e6",
    height: 40,
    borderRadius: 8,
    marginVertical: 9

  },
  touch_element_icon:{
    width: 25,
    height: 25,
    marginHorizontal: 12
  },
  touch_element_text:{
    fontSize: 18,
    marginLeft: 15,
    color: "#fff"
  }
})
