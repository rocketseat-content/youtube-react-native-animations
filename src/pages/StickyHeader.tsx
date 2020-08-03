import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from 'react-native-reanimated';

// import { Container } from './styles';

const pages: React.FC = () => {
  const translationY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    translationY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        translationY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        translationY.value,
        [100, 150],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View>
      <StatusBar barStyle="light-content" />

      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.View style={avatarStyle}>
          <Image
            style={styles.avatar}
            source={{
              uri:
                'https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4',
            }}
          />
        </Animated.View>
        <Text style={styles.name}>Diego Fernandes</Text>
      </Animated.View>

      <Animated.ScrollView onScroll={scrollHandler} scrollEventThrottle={16}>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
        <Text style={styles.listItem}>Teste</Text>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: '#6C63FF',
    paddingVertical: 30,

    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#FFF',
  },

  listItem: {
    padding: 20,
    fontSize: 18,
  },
});

export default pages;
