import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar, Image, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Easing,
  Extrapolate,
} from 'react-native-reanimated';

import heroImg from '../assets/hero.png';

const Login: React.FC = () => {
  const imagePosition = useSharedValue(-30);
  const titlePosition = useSharedValue(30);
  const buttonOpacity = useSharedValue(0);

  useEffect(() => {
    imagePosition.value = withTiming(
      0,
      {
        duration: 400,
      },
      () => {
        titlePosition.value = withTiming(
          0,
          {
            duration: 400,
          },
          () => {
            buttonOpacity.value = withTiming(1, {duration: 400});
          },
        );
      },
    );
  }, []);

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePosition.value}],
      opacity: interpolate(
        imagePosition.value,
        [-30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const buttonStyle = useAnimatedStyle(() => {
    return {
      opacity: buttonOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#13131A" />

      <Animated.View style={heroStyle}>
        <Image style={styles.hero} source={heroImg} />
      </Animated.View>

      <Animated.Text style={[styles.title, titleStyle]}>
        Seja bem-vindo!
      </Animated.Text>

      <Animated.View style={buttonStyle}>
        <RectButton onPress={() => {}} style={styles.button}>
          <Text style={styles.buttonText}>Criar conta gratuita</Text>
        </RectButton>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#13131A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  hero: {
    width: 288,
    height: 200,
    marginBottom: 40,
  },

  title: {
    fontSize: 32,
    color: '#FFF',
    fontWeight: 'bold',
  },

  button: {
    height: 56,
    width: 320,
    backgroundColor: '#6C63FF',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Login;
