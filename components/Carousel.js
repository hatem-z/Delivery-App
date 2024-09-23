import { StyleSheet, View, Image, FlatList, Dimensions } from "react-native";
import React, { useState } from "react";

const { width } = Dimensions.get("window");

const Carousel = () => {
  const images = [
    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto-compress&cs=tinysrgb6w-808",
    "https://images.bolt.eu/store/2023/2023-06-12/2a0cb323-efe8-459f-b238-109aa2515748.jpeg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event) => {
    const scrollPosition = Math.floor(event.nativeEvent.contentOffset.x);
    setActiveIndex(Math.round(scrollPosition / width));
  };

  return (
    <View>
      <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  image: {
    width: width * 0.94,
    height: 200,
    borderRadius: 6,
    marginTop: 10,
    marginLeft: width * 0.03,
    marginRight: width * 0.03,
  },
});
