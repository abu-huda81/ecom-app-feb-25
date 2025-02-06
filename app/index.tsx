import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'
import { Colors } from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import Google from '../assets/images/google-logo.svg'
import Animated, { FadeInRight } from 'react-native-reanimated'
import SocialAuthButtons from '@/components/SocialAuthButtons'

type Props = {}

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require('../assets/images/ecommerce-splash.jpeg')}
        style={{ flex: 1 }}
        resizeMode='cover'
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              'transparent',
              'rgba(255, 255, 255, 0.9)',
              'rgba(255, 255, 255, 1)',
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <Animated.Text
                entering={FadeInRight.delay(300).duration(300).springify()}
                style={styles.title}
              >
                KHYAL SHOP
              </Animated.Text>
              <Animated.Text
                entering={FadeInRight.delay(500).duration(300).springify()}
                style={styles.discription}
              >
                One stop shop for all your needs
              </Animated.Text>
              <SocialAuthButtons emailHref={'/signup'} />

              <Animated.Text
                entering={FadeInRight.delay(1500).duration(300)}
                style={styles.loginTxt}
              >
                Already have an account?
                <Link href={'/signup'} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginLink}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </Animated.Text>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5,
    color: Colors.primary,
    letterSpacing: 2.4,
  },
  discription: {
    fontSize: 16,
    color: Colors.PRIMARY,
    fontWeight: '500',
    marginBottom: 20,
    letterSpacing: 1.2,
    lineHeight: 30,
  },
  socialLoginWrapper: {
    alignSelf: 'stretch',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 25,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    gap: 5,
    marginBottom: 15,
  },
  btnText: {
    fontSize: 16,
    color: Colors.primary,
    marginLeft: 10,
    fontWeight: '500',
  },
  loginTxt: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '500',
    marginTop: 30,
    lineHeight: 24,
  },
  loginLink: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    textDecorationLine: 'underline',
    marginTop: -10,
    marginBottom: -3,
  },
})
