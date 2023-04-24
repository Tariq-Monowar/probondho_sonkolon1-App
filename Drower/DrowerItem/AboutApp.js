import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Font from 'expo-font';

const AboutApp = () => {
  
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
          <Text style={[styles.book_Writer_Desc, { fontFamily: 'kalpurush' }]}>{`আজ যারা কুঁড়ি, আগামীতে তারাই ফুটবে ফুল হয়ে। আপন রঙে রাঙিয়ে দিবে এই পৃথিবীকে। ফুলের সৌরভে বাগানে নেমে আসবে খুশির জোয়ার। আমাদের সমাজেও আমরা সে আনন্দ ছড়িয়ে দিতে চাই। সমাজ থেকে দূর করতে চাই অজ্ঞানতা, কুসংস্কার আর অশিক্ষার অন্ধকার। হিংসা-বিদ্বেষ, লোভ, ঘৃণা নয়; আমরা চাই সত্য, ন্যায় ও ভালবাসার বিজয়। তাই এ সমাজে ফোঁটাতে চাই ফুল। জ্ঞানের উজ্জ্বল আলো আর চরিত্রের সৌরভ ছড়িয়ে সে ফুল হাসবে আমাদের সমাজে। এমনই হাজারো ফুল ফুটাবার দীপ্ত শপথেই ফুলকুঁড়ি আসরের জন্ম।\n\nফুলকুঁড়ি আসর দেশ সেবায় ব্রত সদা সুন্দরের পতাকাবাহী শিশুকিশোরদের একটি সংগঠন। জ্ঞানের সাধনায় সদা তৎপর শিশুকিশোরদের এক সুশৃঙ্খল সমাবেশ। সৎ ও যোগ্য মানুষ হিসেবে গড়ে উঠতে শিশুকিশোরদের এক সংঘবদ্ধ প্রচেষ্টা।\n\n\n`}</Text>
        </ScrollView>
      }
    </ImageBackground>
  )
}

export default AboutApp

const styles = StyleSheet.create({
  app_bg:{
    display: 'flex',
    height: "100%",
    width: "100%",
  },
  book_Writer_Desc:{
    fontSize: 23,
    lineHeight: 30,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 40,
  }

})