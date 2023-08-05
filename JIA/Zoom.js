import React, { useState, useRef } from 'react';
import {
  View,
  Image,
  Animated,
  StyleSheet,
  PanResponder,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const ZoomableImage = ({ source }) => {
  const doubleTapRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [translateX, setTranslateX] = useState(new Animated.Value(0));
  const [translateY, setTranslateY] = useState(new Animated.Value(0));
  const [lastOffset, setLastOffset] = useState({ x: 0, y: 0 });
  const imageWidth = 200; // Replace with the actual image width
  const containerWidth = Dimensions.get('window').width; // Replace with the actual container width

  // Function to calculate the maximum allowable translation in the X direction
  const maxTranslateX = (scale) => {
    const maxOffsetX = (scale - 1) * imageWidth / 2;
    const minOffsetX = -maxOffsetX;
    return Math.min(Math.max(lastOffset.x, minOffsetX), maxOffsetX);
  };

  // Function to calculate the maximum allowable translation in the Y direction
  const maxTranslateY = (scale) => {
    const maxOffsetY = (scale - 1) * imageWidth / 2;
    const minOffsetY = -maxOffsetY;
    return Math.min(Math.max(lastOffset.y, minOffsetY), maxOffsetY);
  };

  const handleDoubleTap = () => {
    if (isZoomed) {
      Animated.parallel([
        Animated.spring(scaleValue, {
          toValue: 1,
          useNativeDriver: true,
        }),
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      const toValue = 3; // Adjust the zoom level as needed (e.g., 2, 3, 4, etc.)
      Animated.parallel([
        Animated.spring(scaleValue, {
          toValue,
          useNativeDriver: true,
        }),
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }),
        Animated.spring(translateY, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }

    setIsZoomed(!isZoomed);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => isZoomed,
    onPanResponderMove: (_, gestureState) => {
      if (isZoomed) {
        // Calculate the total accumulated translation since the pan gesture started
        const totalOffsetX = gestureState.dx + lastOffset.x;
        const totalOffsetY = gestureState.dy + lastOffset.y;

        // Calculate the maximum allowable translation in both directions
        const maxTranslateXValue = maxTranslateX(scaleValue._value);
        const maxTranslateYValue = maxTranslateY(scaleValue._value);
        const maxX = (scaleValue._value - 1) * imageWidth / 2;
        const maxY = (scaleValue._value - 1) * imageWidth / 2;

        // Limit the translation to the maximum allowable boundaries
        const boundedTranslateX = Math.min(Math.max(totalOffsetX, -maxX), maxTranslateXValue);
        const boundedTranslateY = Math.min(Math.max(totalOffsetY, -maxY), maxTranslateYValue);

        setTranslateX(boundedTranslateX);
        setTranslateY(boundedTranslateY);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (isZoomed) {
        // Save the total accumulated translation as the last offset
        const totalOffsetX = gestureState.dx + lastOffset.x;
        const totalOffsetY = gestureState.dy + lastOffset.y;
        setLastOffset({ x: totalOffsetX, y: totalOffsetY });
      }
    },
  });

  return (
    <View style={styles.container}>
    <TouchableOpacity
      ref={doubleTapRef}
      activeOpacity={1}
      onPress={() => {
        const now = new Date().getTime();
        const DOUBLE_PRESS_DELAY = 300;
        if (doubleTapRef.current && now - doubleTapRef.current.lastPressTime < DOUBLE_PRESS_DELAY) {
          handleDoubleTap();
        } else {
          doubleTapRef.current.lastPressTime = now;
        }
      }}
    >
      <Animated.Image
        source={source}
        style={[
          styles.image,
          {
            transform: [
              { scaleX: scaleValue },
              { scaleY: scaleValue },
              { translateX: translateX },
              { translateY: translateY },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      />
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <ZoomableImage  source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/react-9b3c2.appspot.com/o/ass.png?alt=media&token=f76f317e-9e69-4d39-9c78-96a746a56621' }} style={{
                width: '100%',
                height: 200,
                resizeMode: 'contain',
              }} />
    </View>
  );
};

export default App;
