import React, { useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { Image } from 'expo-image';
import card from '../../assets/starbucks.png';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.7;
const ITEM_SPACING = (width - ITEM_WIDTH) / 2;

const data = [
  { id: '1', title: 'Slide 1' },
  { id: '2', title: 'Slide 2' },
  { id: '3', title: 'Slide 3' },
  { id: '4', title: 'Slide 4' },
];

const Carousel = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
        bounces={false}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingHorizontal: ITEM_SPACING }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          const inputRange = [
            (index - 1) * ITEM_WIDTH,
            index * ITEM_WIDTH,
            (index + 1) * ITEM_WIDTH,
          ];

          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 1.0, 0.8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.item,
                {
                  transform: [{ scale }],
                  opacity,
                },
              ]}
            >
              {/* <Text style={styles.title}>{item.title}</Text> */}
              <Image source={card} style={{height: '100%', width: '100%', borderRadius: 10}} contentFit='contain' />
            </Animated.View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    width: ITEM_WIDTH,
    // marginHorizontal: 10,   // creating a side effect with a gap in the left while scrolling
    
    // height: 200,
    aspectRatio: '1.586/1',
    backgroundColor: '#6c5ce7',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,

    // borderWidth: 5,
    // borderColor: '#000',    // creates a gap between cards
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Carousel;
